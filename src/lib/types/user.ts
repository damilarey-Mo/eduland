export type UserRole = 'user' | 'agent' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string;
  phone?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface UserProfile extends User {
  bio?: string;
  address?: string;
  city?: string;
  country?: string;
  bookings?: string[];  // IDs of bookings
  favoriteListings?: string[];  // IDs of favorited properties
}

export interface AgentProfile extends User {
  bio?: string;
  company?: string;
  listings?: string[]; // IDs of properties listed
  rating?: number;
  reviewCount?: number;
  verified: boolean;
  agentSince: Date;
}

export interface AdminProfile extends User {
  accessLevel: number; // 1-5 where 5 is highest
  department?: string;
  lastActive?: Date;
} 