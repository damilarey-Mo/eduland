import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";

// GET /api/properties/[id] - Get a specific property
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Get property with related data
    const property = await prisma.property.findUnique({
      where: {
        id: params.id,
      },
      include: {
        host: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
          },
        },
        reviews: {
          include: {
            user: {
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
        },
        availabilities: true,
      },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Calculate average rating
    const totalRating = property.reviews.reduce((sum, review) => sum + review.rating, 0);
    const avgRating = property.reviews.length > 0
      ? totalRating / property.reviews.length
      : 0;

    // Return property with calculated fields
    return NextResponse.json({
      ...property,
      avgRating,
      reviewCount: property.reviews.length,
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the property" },
      { status: 500 }
    );
  }
}

// PATCH /api/properties/[id] - Update a specific property
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

    // Get the property to check ownership
    const property = await prisma.property.findUnique({
      where: {
        id: params.id,
      },
      select: {
        hostId: true,
      },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Only allow property owner or admin to update
    if (property.hostId !== session.user.id && session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // Update the property
    const updatedProperty = await prisma.property.update({
      where: {
        id: params.id,
      },
      data: {
        // Only allow specific fields to be updated
        title: body.title,
        description: body.description,
        price: body.price,
        bedrooms: body.bedrooms,
        bathrooms: body.bathrooms,
        size: body.size,
        amenities: body.amenities,
        images: body.images,
        isAvailable: body.isAvailable,
        featured: session.user.role === "ADMIN" ? body.featured : undefined,
        verificationStatus: session.user.role === "ADMIN" ? body.verificationStatus : undefined,
      },
    });

    return NextResponse.json(updatedProperty);
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the property" },
      { status: 500 }
    );
  }
}

// DELETE /api/properties/[id] - Delete a specific property
export async function DELETE(
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

    // Get the property to check ownership
    const property = await prisma.property.findUnique({
      where: {
        id: params.id,
      },
      select: {
        hostId: true,
      },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Only allow property owner or admin to delete
    if (property.hostId !== session.user.id && session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // Delete the property (Prisma will cascade delete related records)
    await prisma.property.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      { message: "Property deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the property" },
      { status: 500 }
    );
  }
} 