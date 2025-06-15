import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";

// GET /api/bookings/[id] - Get a specific booking
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get booking with related data
    const booking = await prisma.booking.findUnique({
      where: {
        id: params.id,
      },
      include: {
        property: {
          include: {
            host: {
              select: {
                id: true,
                name: true,
                email: true,
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

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // Check if user has permission to view this booking
    const isAdmin = session.user.role === "ADMIN";
    const isHost = booking.property.hostId === session.user.id;
    const isBooker = booking.userId === session.user.id;

    if (!isAdmin && !isHost && !isBooker) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the booking" },
      { status: 500 }
    );
  }
}

// PATCH /api/bookings/[id] - Update a booking's status
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Get the booking to check permissions
    const booking = await prisma.booking.findUnique({
      where: {
        id: params.id,
      },
      include: {
        property: {
          select: {
            hostId: true,
            title: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // Check permissions based on action
    const isAdmin = session.user.role === "ADMIN";
    const isHost = booking.property.hostId === session.user.id;
    const isBooker = booking.userId === session.user.id;
    
    if (body.status === "CONFIRMED" || body.status === "REJECTED") {
      // Only host or admin can confirm/reject bookings
      if (!isAdmin && !isHost) {
        return NextResponse.json(
          { error: "Only the property host or admin can confirm or reject bookings" },
          { status: 403 }
        );
      }
    } else if (body.status === "CANCELLED") {
      // Only booker, host, or admin can cancel
      if (!isAdmin && !isHost && !isBooker) {
        return NextResponse.json(
          { error: "You don't have permission to cancel this booking" },
          { status: 403 }
        );
      }
    } else if (body.paymentStatus) {
      // Only admin can change payment status directly
      if (!isAdmin) {
        return NextResponse.json(
          { error: "Only admin can change payment status" },
          { status: 403 }
        );
      }
    }

    // Update the booking
    const updatedBooking = await prisma.booking.update({
      where: {
        id: params.id,
      },
      data: {
        status: body.status,
        paymentStatus: body.paymentStatus,
      },
    });

    // Create notification based on status change
    if (body.status) {
      let notificationType;
      let userId;
      let message = "";

      if (body.status === "CONFIRMED") {
        notificationType = "BOOKING_CONFIRMED";
        userId = booking.userId; // Notify the user
        message = `Your booking for ${booking.property.title} has been confirmed!`;
      } else if (body.status === "CANCELLED") {
        notificationType = "BOOKING_CANCELLED";
        // If host or admin cancelled, notify the user
        if (isHost || isAdmin) {
          userId = booking.userId;
          message = `Your booking for ${booking.property.title} has been cancelled.`;
        } else {
          // If user cancelled, notify the host
          userId = booking.property.hostId;
          message = `${booking.user.name} has cancelled their booking for ${booking.property.title}.`;
        }
      }

      if (notificationType && userId && message) {
        await prisma.notification.create({
          data: {
            userId,
            type: notificationType,
            message,
          },
        });
      }
    }

    return NextResponse.json(updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the booking" },
      { status: 500 }
    );
  }
}

// DELETE /api/bookings/[id] - Delete a booking (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    
    // Only admin can permanently delete bookings
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Only admin can delete bookings permanently" },
        { status: 403 }
      );
    }

    // Delete the booking
    await prisma.booking.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      { message: "Booking deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the booking" },
      { status: 500 }
    );
  }
} 