"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Property } from '@/lib/types/property';
import { Booking } from '@/lib/types/booking';
import { useCurrentUser } from '@/lib/auth/client';
import { 
  Building, 
  Calendar, 
  Users, 
  DollarSign, 
  PlusCircle,
  BarChart2,
  Clock,
  CheckCircle
} from 'lucide-react';

// Mock data for listings
const MOCK_LISTINGS: Property[] = [
  {
    id: 'prop_1',
    title: 'Luxury Downtown Apartment',
    description: 'Modern luxury apartment in downtown with amazing views',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    squareFeet: 1200,
    location: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001'
    },
    amenities: ['wifi', 'gym', 'pool'],
    images: ['/assets/apartments/apartment-1.jpg', '/assets/apartments/apartment-1-2.jpg'],
    mainImage: '/assets/apartments/apartment-1.jpg',
    status: 'active',
    ownerId: 'usr_2',
    pricing: {
      basePrice: 150,
      cleaningFee: 50,
      serviceFee: 30,
      weeklyDiscount: 10,
      monthlyDiscount: 20,
      currency: 'USD'
    },
    availability: [
      {
        startDate: new Date('2023-07-01'),
        endDate: new Date('2023-12-31')
      }
    ],
    instantBooking: true,
    minimumStay: 2,
    maximumStay: 30,
    averageRating: 4.8,
    reviewCount: 25,
    featured: true,
    verified: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-05-10')
  },
  {
    id: 'prop_2',
    title: 'Cozy Studio with City Views',
    description: 'A cozy studio perfect for solo travelers or couples',
    type: 'studio',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    squareFeet: 600,
    location: {
      address: '456 Park Ave',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10002'
    },
    amenities: ['wifi', 'kitchen'],
    images: ['/assets/apartments/apartment-2.jpg'],
    mainImage: '/assets/apartments/apartment-2.jpg',
    status: 'active',
    ownerId: 'usr_2',
    pricing: {
      basePrice: 95,
      cleaningFee: 35,
      serviceFee: 20,
      currency: 'USD'
    },
    availability: [
      {
        startDate: new Date('2023-06-15'),
        endDate: new Date('2023-11-30')
      }
    ],
    instantBooking: true,
    minimumStay: 2,
    maximumStay: 21,
    averageRating: 4.6,
    reviewCount: 12,
    featured: false,
    verified: true,
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2023-05-05')
  }
];

// Mock data for booking requests
const MOCK_BOOKING_REQUESTS: Booking[] = [
  {
    id: 'bk_3',
    propertyId: 'prop_1',
    propertyTitle: 'Luxury Downtown Apartment',
    propertyImage: '/assets/apartments/apartment-1.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_4',
    bookingNumber: 'BK12347',
    checkIn: new Date('2023-08-10'),
    checkOut: new Date('2023-08-15'),
    nights: 5,
    guests: 2,
    status: 'pending',
    specialRequests: 'Late check-in around 10 PM',
    priceBreakdown: {
      basePrice: 150,
      nights: 5,
      subtotal: 750,
      cleaningFee: 50,
      serviceFee: 80,
      taxes: 70,
      total: 950
    },
    payments: [
      {
        id: 'pay_3',
        amount: 950,
        currency: 'USD',
        method: 'credit_card',
        status: 'pending',
        createdAt: new Date('2023-07-25')
      }
    ],
    cancellationPolicy: 'Moderate - 50% refund up to 5 days before check-in',
    createdAt: new Date('2023-07-25'),
    updatedAt: new Date('2023-07-25')
  }
];

export default function AgentDashboard() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState<Property[]>([]);
  const [bookingRequests, setBookingRequests] = useState<Booking[]>([]);
  
  // Use client-side auth hook
  const { user, loading: authLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    // Simulate fetching listings and bookings from API
    setTimeout(() => {
      setListings(MOCK_LISTINGS);
      setBookingRequests(MOCK_BOOKING_REQUESTS);
      setLoading(false);
    }, 500);
  }, []);

  const stats = [
    {
      title: 'Total Listings',
      value: listings.length,
      icon: <Building className="h-6 w-6 text-cyan-400" />,
      color: 'bg-cyan-900/20 border-cyan-800'
    },
    {
      title: 'Active Bookings',
      value: bookingRequests.length,
      icon: <Calendar className="h-6 w-6 text-green-400" />,
      color: 'bg-green-900/20 border-green-800'
    },
    {
      title: 'Guests Hosted',
      value: 15, // Sample value
      icon: <Users className="h-6 w-6 text-purple-400" />,
      color: 'bg-purple-900/20 border-purple-800'
    },
    {
      title: 'Revenue (This Month)',
      value: '$1,850',
      icon: <DollarSign className="h-6 w-6 text-yellow-400" />,
      color: 'bg-yellow-900/20 border-yellow-800'
    }
  ];
  
  // Show loading state while checking authentication
  if (authLoading || loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
          <p className="mt-2 text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, could redirect or show message
  if (!isAuthenticated) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Authentication Required</h2>
          <p className="text-gray-400 mb-6">Please log in to access your agent dashboard.</p>
          <Link 
            href="/login" 
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  
  // If user is not an agent, show unauthorized message
  if (user?.role?.toLowerCase() !== 'agent') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-6">You don't have permission to access the agent dashboard.</p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome back, {user?.name || 'Host'}!
            </h1>
            <p className="mt-1 text-gray-400">
              Manage your properties and bookings
            </p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-3">
            <Link 
              href="/agent-dashboard/add-property"
              className="flex items-center px-4 py-2 bg-[#f3e17b] hover:bg-[#dac968] text-black font-medium rounded-md transition-colors"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Property
            </Link>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.color} border rounded-lg p-6`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="rounded-full bg-black p-3">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Listings */}
      <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Your Listings</h2>
          <Link href="/agent-dashboard/listings" className="text-sm text-[#f3e17b] hover:text-[#dac968]">
            View all
          </Link>
        </div>
        
        <div className="divide-y divide-gray-800">
          {loading ? (
            <div className="p-6 text-center">
              <div className="animate-pulse flex justify-center">
                <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
              </div>
              <p className="mt-2 text-gray-500">Loading your listings...</p>
            </div>
          ) : listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {listings.map(property => (
                <Link 
                  key={property.id} 
                  href={`/agent-dashboard/listings/${property.id}`}
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={property.mainImage} 
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white truncate">{property.title}</h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {property.location.city}, {property.location.state}
                          </p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          property.status === 'active' 
                            ? 'bg-green-900/30 text-green-400 border border-green-800' 
                            : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        }`}>
                          {property.status === 'active' ? 'Active' : 'Pending'}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="mr-2">{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
                          <span className="mr-2">•</span>
                          <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
                        </div>
                        <p className="text-lg font-bold text-[#f3e17b]">
                          ${property.pricing.basePrice}<span className="text-xs text-gray-400">/night</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              <Link
                href="/agent-dashboard/add-property"
                className="flex flex-col items-center justify-center h-full min-h-[240px] bg-gray-900 rounded-lg border border-dashed border-gray-700 hover:border-[#f3e17b] hover:bg-gray-800/50 transition-colors p-6"
              >
                <PlusCircle className="h-12 w-12 text-gray-600 mb-3" />
                <p className="text-lg font-medium text-gray-400">Add New Property</p>
                <p className="text-sm text-gray-500 mt-1 text-center">Expand your listings portfolio</p>
              </Link>
            </div>
          ) : (
            <div className="p-10 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
                <Building className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-medium text-white">No properties yet</h3>
              <p className="mt-1 text-gray-500">
                Add your first property to start hosting guests
              </p>
              <Link 
                href="/agent-dashboard/add-property"
                className="mt-4 inline-flex items-center px-4 py-2 bg-[#f3e17b] hover:bg-[#dac968] text-black font-medium rounded-md transition-colors"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Property
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Booking Requests */}
      <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Recent Booking Requests</h2>
          <Link href="/agent-dashboard/booking-requests" className="text-sm text-[#f3e17b] hover:text-[#dac968]">
            View all
          </Link>
        </div>
        
        <div className="divide-y divide-gray-800">
          {loading ? (
            <div className="p-6 text-center">
              <div className="animate-pulse flex justify-center">
                <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
              </div>
              <p className="mt-2 text-gray-500">Loading booking requests...</p>
            </div>
          ) : bookingRequests.length > 0 ? (
            bookingRequests.map(booking => (
              <div key={booking.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 w-full md:w-48 h-32 rounded-lg overflow-hidden bg-gray-800 mb-4 md:mb-0 md:mr-6">
                    <img 
                      src={booking.propertyImage} 
                      alt={booking.propertyTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {booking.propertyTitle}
                        </h3>
                        <div className="mt-1 flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-400">
                            {new Date(booking.checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - 
                            {new Date(booking.checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          {booking.nights} {booking.nights === 1 ? 'night' : 'nights'} · {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                          Pending Approval
                        </div>
                        <div className="mt-2 text-lg font-bold text-white">
                          ${booking.priceBreakdown.total}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        Request from <span className="text-white">Guest #{booking.guestId.replace('usr_', '')}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link 
                          href={`/agent-dashboard/booking-requests/${booking.id}`}
                          className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                        >
                          Details
                        </Link>
                        <button
                          className="px-3 py-1 text-sm bg-green-900/30 hover:bg-green-900/50 text-green-400 rounded-md transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          className="px-3 py-1 text-sm bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-md transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
                <Calendar className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-medium text-white">No booking requests</h3>
              <p className="mt-1 text-gray-500">
                When you receive booking requests, they will appear here
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/agent-dashboard/performance">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-800 flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Analytics</h3>
                <p className="text-sm text-gray-400">View your performance metrics</p>
              </div>
            </div>
          </div>
        </Link>
        
        <Link href="/agent-dashboard/listings">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-800 flex items-center justify-center">
                <Building className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Properties</h3>
                <p className="text-sm text-gray-400">Manage your listings</p>
              </div>
            </div>
          </div>
        </Link>
        
        <Link href="/agent-dashboard/messages">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-green-900/30 border border-green-800 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Guest Messages</h3>
                <p className="text-sm text-gray-400">Respond to inquiries</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 