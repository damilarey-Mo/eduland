import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = headers().get("stripe-signature") as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error: any) {
      console.error(`Webhook signature verification failed: ${error.message}`);
      return NextResponse.json(
        { error: `Webhook signature verification failed` },
        { status: 400 }
      );
    }

    // Handle specific Stripe events
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Extract booking ID from metadata
        const bookingId = session.metadata?.bookingId;
        
        if (!bookingId) {
          console.error("No booking ID in session metadata");
          return NextResponse.json(
            { error: "No booking ID in session metadata" },
            { status: 400 }
          );
        }
        
        // Update booking payment status
        await prisma.booking.update({
          where: {
            id: bookingId,
          },
          data: {
            status: "CONFIRMED",
            paymentStatus: "PAID",
          },
        });
        
        // Update payment transaction
        await prisma.paymentTransaction.updateMany({
          where: {
            stripeSessionId: session.id,
          },
          data: {
            status: "PAID",
          },
        });
        
        // Get property host ID for notification
        const booking = await prisma.booking.findUnique({
          where: {
            id: bookingId,
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
                name: true,
              },
            },
          },
        });
        
        if (booking) {
          // Notify the property host
          await prisma.notification.create({
            data: {
              userId: booking.property.hostId,
              type: "PAYMENT_RECEIVED",
              message: `${booking.user.name} has paid for their booking of ${booking.property.title}`,
            },
          });
          
          // Notify the user
          await prisma.notification.create({
            data: {
              userId: booking.userId,
              type: "BOOKING_CONFIRMED",
              message: `Your booking for ${booking.property.title} has been confirmed!`,
            },
          });
        }
        
        break;
      }
      
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        // Find booking with this payment intent
        const booking = await prisma.booking.findFirst({
          where: {
            paymentIntent: paymentIntent.id,
          },
        });
        
        if (booking) {
          // Update booking payment status
          await prisma.booking.update({
            where: {
              id: booking.id,
            },
            data: {
              paymentStatus: "FAILED",
            },
          });
          
          // Update payment transaction
          await prisma.paymentTransaction.updateMany({
            where: {
              paymentIntentId: paymentIntent.id,
            },
            data: {
              status: "FAILED",
            },
          });
        }
        
        break;
      }
      
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        const paymentIntentId = charge.payment_intent as string;
        
        // Find booking with this payment intent
        const booking = await prisma.booking.findFirst({
          where: {
            paymentIntent: paymentIntentId,
          },
        });
        
        if (booking) {
          // Update booking payment status
          await prisma.booking.update({
            where: {
              id: booking.id,
            },
            data: {
              status: "CANCELLED",
              paymentStatus: "REFUNDED",
            },
          });
          
          // Update payment transaction
          await prisma.paymentTransaction.updateMany({
            where: {
              paymentIntentId,
            },
            data: {
              status: "REFUNDED",
            },
          });
        }
        
        break;
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the webhook" },
      { status: 500 }
    );
  }
} 