import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth/auth";
import { z } from "zod";

// Schema for validating property creation
const propertySchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().optional(),
  country: z.string().min(2, { message: "Country must be at least 2 characters" }),
  zipCode: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  bedrooms: z.number().int().positive({ message: "Bedrooms must be a positive integer" }),
  bathrooms: z.number().int().positive({ message: "Bathrooms must be a positive integer" }),
  size: z.number().positive().optional(),
  propertyType: z.enum(["APARTMENT", "HOUSE", "CONDO", "VILLA", "CABIN", "LOFT", "STUDIO"]),
  amenities: z.array(z.string()),
  images: z.array(z.string()),
});

// GET /api/properties - Get all properties with filtering
export async function GET(request: Request) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const take = parseInt(searchParams.get("take") || "10");
    const skip = parseInt(searchParams.get("skip") || "0");
    const city = searchParams.get("city");
    const propertyType = searchParams.get("propertyType");
    const minPrice = searchParams.get("minPrice") ? parseFloat(searchParams.get("minPrice")!) : undefined;
    const maxPrice = searchParams.get("maxPrice") ? parseFloat(searchParams.get("maxPrice")!) : undefined;
    const bedrooms = searchParams.get("bedrooms") ? parseInt(searchParams.get("bedrooms")!) : undefined;
    const bathrooms = searchParams.get("bathrooms") ? parseInt(searchParams.get("bathrooms")!) : undefined;
    const hostId = searchParams.get("hostId");
    const featured = searchParams.get("featured") === "true";
    
    // Build where clause for filtering
    const where: any = {
      isAvailable: true,
    };
    
    if (city) where.city = { contains: city, mode: 'insensitive' as const };
    if (propertyType) where.propertyType = propertyType;
    if (hostId) where.hostId = hostId;
    if (featured) where.featured = true;
    
    // Price range
    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }
    
    // Bedrooms and bathrooms
    if (bedrooms !== undefined) where.bedrooms = { gte: bedrooms };
    if (bathrooms !== undefined) where.bathrooms = { gte: bathrooms };
    
    // Get properties
    const properties = await prisma.property.findMany({
      where,
      take,
      skip,
      orderBy: {
        createdAt: "desc" as const,
      },
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
    });
    
    // Calculate average rating for each property
    const propertiesWithAvgRating = properties.map(property => {
      const totalRatings = property.reviews.reduce((sum, review) => sum + review.rating, 0);
      const avgRating = property.reviews.length > 0 
        ? totalRatings / property.reviews.length 
        : 0;
      
      return {
        ...property,
        avgRating,
        reviewCount: property.reviews.length,
        reviews: undefined, // Remove reviews array
      };
    });
    
    // Get total count for pagination
    const total = await prisma.property.count({ where });
    
    return NextResponse.json({
      properties: propertiesWithAvgRating,
      total,
      page: Math.floor(skip / take) + 1,
      pageSize: take,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching properties" },
      { status: 500 }
    );
  }
}

// POST /api/properties - Create a new property
export async function POST(request: Request) {
  try {
    const session = await getSession();
    
    // Check if user is authenticated and is an agent or admin
    if (!session?.user || (session.user.role !== "AGENT" && session.user.role !== "ADMIN")) {
      return NextResponse.json(
        { error: "Unauthorized. Only agents and admins can create properties" },
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // Validate input
    const result = propertySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.format() },
        { status: 400 }
      );
    }
    
    // Create property
    const property = await prisma.property.create({
      data: {
        ...result.data,
        hostId: session.user.id,
        // Set default values
        isAvailable: true,
        verificationStatus: "PENDING",
      },
    });
    
    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the property" },
      { status: 500 }
    );
  }
} 