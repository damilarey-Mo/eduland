export type PropertyStatus = 'active' | 'pending' | 'inactive' | 'reserved';
export type PropertyType = 'apartment' | 'condo' | 'house' | 'villa' | 'studio' | 'penthouse' | 'loft';

export interface Location {
  address: string;
  city: string;
  state?: string;
  country: string;
  zipCode?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  category: 'basic' | 'safety' | 'luxury' | 'accessibility';
}

export interface PriceDetails {
  basePrice: number;  // per night
  cleaningFee: number;
  serviceFee: number;
  weeklyDiscount?: number; // percentage
  monthlyDiscount?: number; // percentage
  securityDeposit?: number;
  currency: string;  // USD, EUR, etc.
}

export interface AvailabilityPeriod {
  startDate: Date;
  endDate: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  squareFeet?: number;
  location: Location;
  amenities: string[]; // IDs of amenities
  images: string[];
  mainImage: string;
  status: PropertyStatus;
  ownerId: string; // User ID of property owner/agent
  pricing: PriceDetails;
  availability: AvailabilityPeriod[];
  instantBooking: boolean;
  minimumStay: number; // minimum nights
  maximumStay?: number; // maximum nights
  houseRules?: string[];
  averageRating?: number;
  reviewCount?: number;
  featured?: boolean;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
} 