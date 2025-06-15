import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";
import { z } from "zod";

// Schema for validating review creation
const reviewSchema = z.object({
  bookingId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().min(5),
});

// GET /api/reviews - Get reviews with filtering
export async function GET(request: Request) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get("propertyId");
    const userId = searchParams.get("userId");
    const take = parseInt(searchParams.get("take") || "5");
    const skip = parseInt(searchParams.get("skip") || "0");
    
    if (!propertyId && !userId) {
      return NextResponse.json(
        { error: "Either propertyId or userId is required" },
        { status: 400 }
      );
    }

    // Build where clause
    const where: any = {};
    if (propertyId) where.propertyId = propertyId;
    if (userId) where.userId = userId;
    
    // Get reviews
    const reviews = await prisma.review.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            images: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc" as const,
      },
      take,
      skip,
    });
    
    // Get total count for pagination
    const total = await prisma.review.count({ where });
    
    return NextResponse.json({
      reviews,
      total,
      page: Math.floor(skip / take) + 1,
      pageSize: take,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching reviews" },
      { status: 500 }
    );
  }
}

// POST /api/reviews - Create a new review
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
    const result = reviewSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { bookingId, rating, comment } = result.data;
    
    // Check if booking exists and belongs to the user
    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
        userId: session.user.id,
        status: "COMPLETED",
      },
      include: {
        property: {
          select: {
            id: true,
            title: true,
            hostId: true,
          },
        },
      },
    });
    
    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found or not eligible for review" },
        { status: 404 }
      );
    }
    
    // Check if review already exists for this booking
    const existingReview = await prisma.review.findUnique({
      where: {
        bookingId,
      },
    });
    
    if (existingReview) {
      return NextResponse.json(
        { error: "You have already reviewed this booking" },
        { status: 400 }
      );
    }
    
    // Create the review
    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        userId: session.user.id,
        propertyId: booking.property.id,
        bookingId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    
    // Create notification for the property host
    await prisma.notification.create({
      data: {
        userId: booking.property.hostId,
        type: "REVIEW_RECEIVED",
        message: `${session.user.name} left a ${rating}-star review for ${booking.property.title}`,
      },
    });
    
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the review" },
      { status: 500 }
    );
  }
} 