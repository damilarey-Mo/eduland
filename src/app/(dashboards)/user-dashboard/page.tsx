"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Booking } from '@/lib/types/booking';
import { useCurrentUser } from '@/lib/auth/client';
import { 
  CalendarIcon, 
  HomeIcon, 
  HeartIcon, 
  MessageSquareIcon,
  ArrowRightIcon,
  ClockIcon,
  CheckCircleIcon
} from 'lucide-react';

// Mock data for bookings
const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bk_1',
    propertyId: 'prop_1',
    propertyTitle: 'Luxury Downtown Apartment',
    propertyImage: '/assets/apartments/apartment-1.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_1',
    bookingNumber: 'BK12345',
    checkIn: new Date('2023-06-15'),
    checkOut: new Date('2023-06-20'),
    nights: 5,
    guests: 2,
    status: 'confirmed',
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
        id: 'pay_1',
        amount: 950,
        currency: 'USD',
        method: 'credit_card',
        status: 'complete',
        transactionId: 'tx_123456',
        createdAt: new Date('2023-05-01')
      }
    ],
    cancellationPolicy: 'Moderate - 50% refund up to 5 days before check-in',
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2023-05-01')
  },
  {
    id: 'bk_2',
    propertyId: 'prop_2',
    propertyTitle: 'Cozy Studio with City Views',
    propertyImage: '/assets/apartments/apartment-2.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_1',
    bookingNumber: 'BK12346',
    checkIn: new Date('2023-07-10'),
    checkOut: new Date('2023-07-15'),
    nights: 5,
    guests: 1,
    status: 'pending',
    priceBreakdown: {
      basePrice: 120,
      nights: 5,
      subtotal: 600,
      cleaningFee: 40,
      serviceFee: 60,
      taxes: 55,
      total: 755
    },
    payments: [
      {
        id: 'pay_2',
        amount: 755,
        currency: 'USD',
        method: 'paypal',
        status: 'pending',
        createdAt: new Date('2023-05-10')
      }
    ],
    cancellationPolicy: 'Flexible - Full refund up to 1 day before check-in',
    createdAt: new Date('2023-05-10'),
    updatedAt: new Date('2023-05-10')
  }
];

export default function UserDashboard() {
  const [loading, setLoading] = useState(true);
  const [upcomingBookings, setUpcomingBookings] = useState<Booking[]>([]);
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);
  
  // Use client-side auth hook
  const { user, loading: authLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    // Simulate fetching bookings from API
    setTimeout(() => {
      const today = new Date();
      const upcoming = MOCK_BOOKINGS.filter(b => new Date(b.checkIn) >= today);
      const past = MOCK_BOOKINGS.filter(b => new Date(b.checkIn) < today);
      
      setUpcomingBookings(upcoming);
      setPastBookings(past);
      setLoading(false);
    }, 500);
  }, []);

  // Format date to readable string
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Calculate days left until check-in
  const getDaysLeft = (checkInDate: Date) => {
    const today = new Date();
    const checkIn = new Date(checkInDate);
    const diffTime = checkIn.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const statItems = [
    {
      title: 'Total Nights',
      value: MOCK_BOOKINGS.reduce((acc, b) => acc + b.nights, 0),
      icon: <ClockIcon className="h-6 w-6 text-yellow-400" />,
      color: 'bg-yellow-900/20 border-yellow-800'
    },
    {
      title: 'Completed Stays',
      value: pastBookings.length,
      icon: <CheckCircleIcon className="h-6 w-6 text-green-400" />,
      color: 'bg-green-900/20 border-green-800'
    },
    {
      title: 'Upcoming Trips',
      value: upcomingBookings.length,
      icon: <CalendarIcon className="h-6 w-6 text-blue-400" />,
      color: 'bg-blue-900/20 border-blue-800'
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
          <p className="text-gray-400 mb-6">Please log in to access your dashboard.</p>
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

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome back, {user?.name || 'Guest'}!
            </h1>
            <p className="mt-1 text-gray-400">
              Here's what's happening with your bookings
            </p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-3">
            <Link 
              href="/apartments"
              className="flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
            >
              Browse Apartments
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statItems.map((stat, index) => (
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

      {/* Upcoming bookings */}
      <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Upcoming Trips</h2>
          <Link href="/user-dashboard/bookings" className="text-sm text-yellow-400 hover:text-yellow-300">
            View all
          </Link>
        </div>
        
        <div className="divide-y divide-gray-800">
          {loading ? (
            <div className="p-6 text-center">
              <div className="animate-pulse flex justify-center">
                <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
              </div>
              <p className="mt-2 text-gray-500">Loading your bookings...</p>
            </div>
          ) : upcomingBookings.length > 0 ? (
            upcomingBookings.map(booking => (
              <div key={booking.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 w-full md:w-48 h-32 rounded-lg overflow-hidden bg-gray-800 mb-4 md:mb-0 md:mr-6">
                    <img 
                      src={booking.propertyImage || '/assets/placeholder.jpg'} 
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
                          <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-400">
                            {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          {booking.nights} {booking.nights === 1 ? 'night' : 'nights'} · {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-900/30 text-green-400 border border-green-800' 
                            : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        }`}>
                          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </div>
                        <div className="mt-2 text-lg font-bold text-white">
                          ${booking.priceBreakdown.total}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className={`flex items-center ${
                        getDaysLeft(booking.checkIn) <= 3 
                          ? 'text-red-400' 
                          : getDaysLeft(booking.checkIn) <= 7 
                          ? 'text-yellow-400' 
                          : 'text-gray-400'
                      }`}>
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">
                          {getDaysLeft(booking.checkIn)} days left
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link 
                          href={`/user-dashboard/bookings/${booking.id}`}
                          className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                        >
                          Details
                        </Link>
                        {booking.status === 'confirmed' && (
                          <button
                            className="px-3 py-1 text-sm bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-md transition-colors"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
                <CalendarIcon className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-medium text-white">No upcoming trips</h3>
              <p className="mt-1 text-gray-500">
                When you book a stay, it will appear here
              </p>
              <Link 
                href="/apartments"
                className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
              >
                Find a place to stay
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/user-dashboard/bookings">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-800 flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">My Bookings</h3>
                <p className="text-sm text-gray-400">View and manage all your trips</p>
              </div>
            </div>
          </div>
        </Link>
        
        <Link href="/user-dashboard/favorites">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-red-900/30 border border-red-800 flex items-center justify-center">
                <HeartIcon className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Favorites</h3>
                <p className="text-sm text-gray-400">Properties you've saved</p>
              </div>
            </div>
          </div>
        </Link>
        
        <Link href="/user-dashboard/messages">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-800 flex items-center justify-center">
                <MessageSquareIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Messages</h3>
                <p className="text-sm text-gray-400">Chat with hosts and support</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 