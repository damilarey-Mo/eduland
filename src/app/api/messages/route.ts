import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";
import { z } from "zod";

// Schema for validating message creation
const messageSchema = z.object({
  content: z.string().min(1, { message: "Message cannot be empty" }),
  hostId: z.string(),
});

// GET /api/messages - Get messages for the current user
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
    const hostId = searchParams.get("hostId");
    const take = parseInt(searchParams.get("take") || "50");
    const skip = parseInt(searchParams.get("skip") || "0");
    
    // Build where clause
    let where: any = {};
    
    if (hostId) {
      // Get conversation with a specific host
      where = {
        OR: [
          {
            // Messages sent by user to this host
            senderId: session.user.id,
            hostId,
          },
          {
            // Messages sent by this host to user
            senderId: hostId,
            hostId: session.user.id,
          },
        ],
      };
    } else {
      // Get all conversations for the user
      where = {
        OR: [
          {
            // Messages sent by user
            senderId: session.user.id,
          },
          {
            // Messages sent to user
            hostId: session.user.id,
          },
        ],
      };
    }
    
    // Get messages
    const messages = await prisma.message.findMany({
      where,
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        host: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc" as const,
      },
      take,
      skip,
    });
    
    // Mark messages as read if they were sent to the current user
    if (messages.length > 0) {
      await prisma.message.updateMany({
        where: {
          hostId: session.user.id,
          read: false,
        },
        data: {
          read: true,
        },
      });
    }
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching messages" },
      { status: 500 }
    );
  }
}

// POST /api/messages - Send a new message
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
    const result = messageSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { content, hostId } = result.data;
    
    // Check if recipient exists
    const recipient = await prisma.user.findUnique({
      where: {
        id: hostId,
      },
    });
    
    if (!recipient) {
      return NextResponse.json(
        { error: "Recipient not found" },
        { status: 404 }
      );
    }
    
    // Create the message
    const message = await prisma.message.create({
      data: {
        content,
        senderId: session.user.id,
        hostId,
        read: false,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        host: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
    
    // Create notification for the recipient
    await prisma.notification.create({
      data: {
        userId: hostId,
        type: "SYSTEM_MESSAGE",
        message: `New message from ${session.user.name}`,
      },
    });
    
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "An error occurred while sending the message" },
      { status: 500 }
    );
  }
} 