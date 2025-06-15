import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";
import { z } from "zod";

// Schema for validating booking creation
const bookingSchema = z.object({
  propertyId: z.string(),
  startDate: z.string().transform(val => new Date(val)),
  endDate: z.string().transform(val => new Date(val)),
  notes: z.string().optional(),
});

// Helper to check for date conflicts
const checkDateConflicts = async (propertyId: string, startDate: Date, endDate: Date, excludeBookingId?: string) => {
  // Define where clause to check for date conflicts
  const where = {
    propertyId,
    status: { not: "CANCELLED" }, // Exclude cancelled bookings
    OR: [
      // Booking starts during an existing booking
      {
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      // Booking ends during an existing booking
      {
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      // Booking contains an existing booking
      {
        startDate: { gte: startDate },
        endDate: { lte: endDate },
      },
    ],
  };

  // If updating an existing booking, exclude it from the conflict check
  if (excludeBookingId) {
    where.id = { not: excludeBookingId };
  }

  const conflictingBookings = await prisma.booking.findMany({
    where: where as any,
  });

  return conflictingBookings.length > 0;
};

// GET /api/bookings - List bookings with filtering
export async function GET(request: Request) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const take = parseInt(searchParams.get("take") || "10");
    const skip = parseInt(searchParams.get("skip") || "0");
    const propertyId = searchParams.get("propertyId");
    const status = searchParams.get("status");
    const userId = searchParams.get("userId");
    
    // Build where clause
    const where: any = {};
    
    // Admin can see all bookings, users can only see their own, agents see their property bookings
    if (session.user.role === "ADMIN") {
      if (userId) where.userId = userId;
      if (propertyId) where.propertyId = propertyId;
    } else if (session.user.role === "AGENT") {
      // Agents can see bookings for properties they own
      where.property = {
        hostId: session.user.id,
      };
      if (propertyId) where.propertyId = propertyId;
    } else {
      // Regular users can only see their own bookings
      where.userId = session.user.id;
    }
    
    if (status) where.status = status;
    
    // Get bookings
    const bookings = await prisma.booking.findMany({
      where,
      take,
      skip,
      orderBy: {
        createdAt: "desc" as const,
      },
      include: {
        property: {
          select: {
            id: true,
            title: true,
            address: true,
            city: true,
            images: true,
            host: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
    
    // Get total count for pagination
    const total = await prisma.booking.count({ where });
    
    return NextResponse.json({
      bookings,
      total,
      page: Math.floor(skip / take) + 1,
      pageSize: take,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching bookings" },
      { status: 500 }
    );
  }
}

// POST /api/bookings - Create a new booking
export async function POST(request: Request) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Validate input
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { propertyId, startDate, endDate, notes } = result.data;
    
    // Check if dates are valid
    if (startDate >= endDate) {
      return NextResponse.json(
        { error: "End date must be after start date" },
        { status: 400 }
      );
    }
    
    // Check if property exists and is available
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
        isAvailable: true,
      },
    });
    
    if (!property) {
      return NextResponse.json(
        { error: "Property not found or not available for booking" },
        { status: 404 }
      );
    }
    
    // Check if user is not trying to book their own property
    if (property.hostId === session.user.id) {
      return NextResponse.json(
        { error: "You cannot book your own property" },
        { status: 400 }
      );
    }
    
    // Check for date conflicts with existing bookings
    const hasConflicts = await checkDateConflicts(propertyId, startDate, endDate);
    if (hasConflicts) {
      return NextResponse.json(
        { error: "The selected dates are not available" },
        { status: 400 }
      );
    }
    
    // Calculate number of days
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Calculate total price
    const totalPrice = property.price * days;
    
    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        propertyId,
        userId: session.user.id,
        startDate,
        endDate,
        totalPrice,
        notes,
        status: "PENDING",
        paymentStatus: "PENDING",
      },
      include: {
        property: {
          select: {
            title: true,
            address: true,
            city: true,
            host: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    
    // Create notification for the host
    await prisma.notification.create({
      data: {
        userId: property.hostId,
        type: "BOOKING_REQUEST",
        message: `New booking request for ${property.title} from ${session.user.name}`,
      },
    });
    
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the booking" },
      { status: 500 }
    );
  }
} 