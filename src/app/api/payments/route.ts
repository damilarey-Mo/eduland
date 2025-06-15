import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// POST /api/payments - Create a payment session for a booking
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
    
    if (!body.bookingId) {
      return NextResponse.json(
        { error: "Booking ID is required" },
        { status: 400 }
      );
    }
    
    // Get booking details
    const booking = await prisma.booking.findUnique({
      where: {
        id: body.bookingId,
        userId: session.user.id,
      },
      include: {
        property: {
          select: {
            title: true,
            address: true,
            city: true,
            images: true,
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
    
    if (booking.paymentStatus === "PAID") {
      return NextResponse.json(
        { error: "Booking has already been paid" },
        { status: 400 }
      );
    }
    
    // Calculate amount in cents
    const amountInCents = Math.round(booking.totalPrice * 100);
    
    // Create a Stripe Checkout session
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Booking for ${booking.property.title}`,
              description: `${new Date(booking.startDate).toLocaleDateString()} to ${new Date(booking.endDate).toLocaleDateString()}`,
              images: booking.property.images.length > 0 ? [booking.property.images[0]] : [],
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/bookings/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/bookings/cancel?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        bookingId: booking.id,
        userId: session.user.id,
      },
    });
    
    // Update booking with payment intent info
    await prisma.booking.update({
      where: {
        id: booking.id,
      },
      data: {
        paymentIntent: stripeSession.payment_intent as string,
      },
    });
    
    // Create payment transaction record
    await prisma.paymentTransaction.create({
      data: {
        amount: booking.totalPrice,
        status: "PENDING",
        stripeSessionId: stripeSession.id,
        paymentIntentId: stripeSession.payment_intent as string,
      },
    });
    
    return NextResponse.json({ sessionUrl: stripeSession.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the payment session" },
      { status: 500 }
    );
  }
}

// GET /api/payments - Get payment history for the current user
export async function GET(request: Request) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const take = parseInt(searchParams.get("take") || "10");
    const skip = parseInt(searchParams.get("skip") || "0");
    
    // Get user's bookings with payments
    const bookings = await prisma.booking.findMany({
      where: {
        userId: session.user.id,
        paymentIntent: {
          not: null,
        },
      },
      include: {
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
    const total = await prisma.booking.count({
      where: {
        userId: session.user.id,
        paymentIntent: {
          not: null,
        },
      },
    });
    
    return NextResponse.json({
      payments: bookings,
      total,
      page: Math.floor(skip / take) + 1,
      pageSize: take,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.error("Error fetching payment history:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching payment history" },
      { status: 500 }
    );
  }
} 