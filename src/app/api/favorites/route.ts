import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";

// GET /api/favorites - Get all favorites for the current user
export async function GET(request: Request) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const favorites = await prisma.favorite.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        property: {
          include: {
            host: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            reviews: {
              select: {
                rating: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc" as const,
      },
    });

    // Calculate average rating for each property
    const favoritesWithRating = favorites.map(favorite => {
      const property = favorite.property;
      const totalRating = property.reviews.reduce((sum: number, review: any) => sum + review.rating, 0);
      const avgRating = property.reviews.length > 0
        ? totalRating / property.reviews.length
        : 0;
      
      return {
        ...favorite,
        property: {
          ...property,
          avgRating,
          reviewCount: property.reviews.length,
          reviews: undefined, // Remove reviews array
        },
      };
    });

    return NextResponse.json(favoritesWithRating);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching favorites" },
      { status: 500 }
    );
  }
}

// POST /api/favorites - Add a property to favorites
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
    
    if (!body.propertyId) {
      return NextResponse.json(
        { error: "Property ID is required" },
        { status: 400 }
      );
    }

    // Check if property exists
    const property = await prisma.property.findUnique({
      where: {
        id: body.propertyId,
      },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Check if already in favorites
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: session.user.id,
        propertyId: body.propertyId,
      },
    });

    if (existingFavorite) {
      return NextResponse.json(
        { error: "Property already in favorites" },
        { status: 400 }
      );
    }

    // Add to favorites
    const favorite = await prisma.favorite.create({
      data: {
        userId: session.user.id,
        propertyId: body.propertyId,
      },
      include: {
        property: true,
      },
    });

    return NextResponse.json(favorite, { status: 201 });
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return NextResponse.json(
      { error: "An error occurred while adding to favorites" },
      { status: 500 }
    );
  }
}

// DELETE /api/favorites - Remove a property from favorites
export async function DELETE(request: Request) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get("propertyId");
    
    if (!propertyId) {
      return NextResponse.json(
        { error: "Property ID is required" },
        { status: 400 }
      );
    }

    // Check if in favorites
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId: session.user.id,
        propertyId,
      },
    });

    if (!favorite) {
      return NextResponse.json(
        { error: "Property not found in favorites" },
        { status: 404 }
      );
    }

    // Remove from favorites
    await prisma.favorite.delete({
      where: {
        id: favorite.id,
      },
    });

    return NextResponse.json(
      { message: "Property removed from favorites" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return NextResponse.json(
      { error: "An error occurred while removing from favorites" },
      { status: 500 }
    );
  }
} 