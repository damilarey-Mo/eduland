export type BookingStatus = 
  'pending' | 
  'confirmed' | 
  'completed' | 
  'cancelled' |
  'refunded';

export type PaymentStatus = 
  'pending' | 
  'partial' | 
  'complete' | 
  'refunded' | 
  'failed';

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  method: 'credit_card' | 'paypal' | 'bank_transfer' | 'other';
  status: PaymentStatus;
  transactionId?: string;
  createdAt: Date;
}

export interface PriceBreakdown {
  basePrice: number;
  nights: number;
  subtotal: number;
  cleaningFee: number;
  serviceFee: number;
  discount?: {
    type: 'weekly' | 'monthly' | 'coupon' | 'special',
    amount: number,
    description?: string
  };
  taxes: number;
  total: number;
}

export interface BookingRequest {
  propertyId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  specialRequests?: string;
  purpose?: 'leisure' | 'business' | 'other';
}

export interface Booking {
  id: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  ownerId: string; // ID of property owner/agent
  guestId: string; // ID of booking user
  bookingNumber: string; // For user-friendly reference (e.g., BK123456)
  checkIn: Date;
  checkOut: Date;
  nights: number;
  guests: number;
  status: BookingStatus;
  specialRequests?: string;
  priceBreakdown: PriceBreakdown;
  payments: Payment[]; // Allow multiple payments (deposits, full payment)
  cancellationPolicy: string;
  cancellationReason?: string;
  createdAt: Date;
  updatedAt: Date;
} 