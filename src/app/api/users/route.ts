import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";

// GET /api/users - Get all users (admin only)
export async function GET(request: Request) {
  try {
    const session = await getSession();
    
    // Check if user is authenticated and is admin
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const take = parseInt(searchParams.get("take") || "10");
    const skip = parseInt(searchParams.get("skip") || "0");
    const role = searchParams.get("role");
    
    // Build the query
    const query: any = {
      take,
      skip,
      orderBy: {
        createdAt: "desc" as const,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        emailVerified: true,
        // Don't include password
      },
    };
    
    // Add role filter if specified
    if (role) {
      query.where = {
        role,
      };
    }
    
    // Get users from database
    const users = await prisma.user.findMany(query);
    
    // Get total count for pagination
    const total = await prisma.user.count({
      where: role ? { role } : undefined,
    });
    
    return NextResponse.json({
      users,
      total,
      page: Math.floor(skip / take) + 1,
      pageSize: take,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching users" },
      { status: 500 }
    );
  }
} 