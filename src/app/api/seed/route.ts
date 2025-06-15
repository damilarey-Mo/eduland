import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Create a test user
    const hashedPassword = await hashPassword("password123");
    
    await prisma.user.create({
      data: {
        name: "Test User",
        email: "test@example.com",
        password: hashedPassword,
        role: "USER",
      },
    });
    
    await prisma.user.create({
      data: {
        name: "Test Agent",
        email: "agent@example.com",
        password: hashedPassword,
        role: "AGENT",
      },
    });
    
    await prisma.user.create({
      data: {
        name: "Admin User",
        email: "admin@example.com",
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    
    return NextResponse.json({ 
      message: "Database seeded successfully with test users!" 
    });
  } catch (error) {
    console.error("Error seeding database:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
} 