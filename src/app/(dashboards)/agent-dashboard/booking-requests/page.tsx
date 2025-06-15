"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCurrentUser } from '@/lib/auth/client';
import { Booking, BookingStatus } from '@/lib/types/booking';
import { Calendar, Search, Check, X, MessageSquare, Clock, User, Filter } from 'lucide-react';

// Mock data for booking requests
const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bk_1',
    propertyId: 'prop_1',
    propertyTitle: 'Luxury Downtown Apartment',
    propertyImage: '/assets/apartments/apartment-1.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_3',
    bookingNumber: 'BK12345',
    checkIn: new Date('2023-07-15'),
    checkOut: new Date('2023-07-20'),
    nights: 5,
    guests: 2,
    status: 'pending',
    specialRequests: 'Late check-in around 8 PM',
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
        status: 'pending',
        createdAt: new Date('2023-06-30')
      }
    ],
    cancellationPolicy: 'Moderate - 50% refund up to 5 days before check-in',
    createdAt: new Date('2023-06-30'),
    updatedAt: new Date('2023-06-30')
  },
  {
    id: 'bk_2',
    propertyId: 'prop_2',
    propertyTitle: 'Cozy Studio with City Views',
    propertyImage: '/assets/apartments/apartment-2.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_4',
    bookingNumber: 'BK12346',
    checkIn: new Date('2023-08-01'),
    checkOut: new Date('2023-08-05'),
    nights: 4,
    guests: 1,
    status: 'confirmed',
    priceBreakdown: {
      basePrice: 95,
      nights: 4,
      subtotal: 380,
      cleaningFee: 35,
      serviceFee: 40,
      taxes: 45,
      total: 500
    },
    payments: [
      {
        id: 'pay_2',
        amount: 500,
        currency: 'USD',
        method: 'paypal',
        status: 'complete',
        createdAt: new Date('2023-07-01')
      }
    ],
    cancellationPolicy: 'Flexible - Full refund 1 day prior to arrival',
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-07-02')
  },
  {
    id: 'bk_3',
    propertyId: 'prop_1',
    propertyTitle: 'Luxury Downtown Apartment',
    propertyImage: '/assets/apartments/apartment-1.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_5',
    bookingNumber: 'BK12347',
    checkIn: new Date('2023-08-10'),
    checkOut: new Date('2023-08-15'),
    nights: 5,
    guests: 3,
    status: 'pending',
    specialRequests: 'Early check-in if possible',
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
        createdAt: new Date('2023-07-05')
      }
    ],
    cancellationPolicy: 'Moderate - 50% refund up to 5 days before check-in',
    createdAt: new Date('2023-07-05'),
    updatedAt: new Date('2023-07-05')
  },
  {
    id: 'bk_4',
    propertyId: 'prop_3',
    propertyTitle: 'Modern Loft in Trendy District',
    propertyImage: '/assets/apartments/apartment-3.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_6',
    bookingNumber: 'BK12348',
    checkIn: new Date('2023-09-01'),
    checkOut: new Date('2023-09-05'),
    nights: 4,
    guests: 2,
    status: 'cancelled',
    cancellationReason: 'Guest plans changed',
    priceBreakdown: {
      basePrice: 120,
      nights: 4,
      subtotal: 480,
      cleaningFee: 40,
      serviceFee: 50,
      taxes: 55,
      total: 625
    },
    payments: [
      {
        id: 'pay_4',
        amount: 625,
        currency: 'USD',
        method: 'credit_card',
        status: 'refunded',
        createdAt: new Date('2023-07-10')
      }
    ],
    cancellationPolicy: 'Flexible - Full refund 1 day prior to arrival',
    createdAt: new Date('2023-07-10'),
    updatedAt: new Date('2023-07-15')
  },
  {
    id: 'bk_5',
    propertyId: 'prop_2',
    propertyTitle: 'Cozy Studio with City Views',
    propertyImage: '/assets/apartments/apartment-2.jpg',
    ownerId: 'usr_2',
    guestId: 'usr_7',
    bookingNumber: 'BK12349',
    checkIn: new Date('2023-09-10'),
    checkOut: new Date('2023-09-15'),
    nights: 5,
    guests: 2,
    status: 'completed',
    priceBreakdown: {
      basePrice: 95,
      nights: 5,
      subtotal: 475,
      cleaningFee: 35,
      serviceFee: 50,
      taxes: 55,
      total: 615
    },
    payments: [
      {
        id: 'pay_5',
        amount: 615,
        currency: 'USD',
        method: 'credit_card',
        status: 'complete',
        createdAt: new Date('2023-06-20')
      }
    ],
    cancellationPolicy: 'Flexible - Full refund 1 day prior to arrival',
    createdAt: new Date('2023-06-20'),
    updatedAt: new Date('2023-06-20')
  }
];

export default function BookingRequestsPage() {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [activeBookingId, setActiveBookingId] = useState<string | null>(null);
  
  // Use client-side auth hook
  const { user, loading: authLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    // Simulate fetching bookings from API
    setTimeout(() => {
      setBookings(MOCK_BOOKINGS);
      setLoading(false);
    }, 500);
  }, []);

  // Filter bookings based on search and status filters
  const filteredBookings = bookings
    .filter(booking => {
      // Status filter
      if (filterStatus !== 'all' && booking.status !== filterStatus) {
        return false;
      }
      
      // Search term
      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          booking.propertyTitle.toLowerCase().includes(searchTermLower) ||
          booking.bookingNumber.toLowerCase().includes(searchTermLower) ||
          booking.guestId.toLowerCase().includes(searchTermLower)
        );
      }
      
      return true;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Handle booking actions
  const handleApproveBooking = (id: string) => {
    // In a real app, this would make an API call to approve the booking
    setBookings(
      bookings.map(booking => 
        booking.id === id 
          ? { ...booking, status: 'confirmed' as BookingStatus, updatedAt: new Date() } 
          : booking
      )
    );
  };
  
  const handleDeclineBooking = (id: string) => {
    // In a real app, this would make an API call to decline the booking
    setBookings(
      bookings.map(booking => 
        booking.id === id 
          ? { ...booking, status: 'cancelled' as BookingStatus, updatedAt: new Date(), cancellationReason: 'Declined by host' } 
          : booking
      )
    );
  };
  
  const toggleDetails = (id: string) => {
    setActiveBookingId(activeBookingId === id ? null : id);
  };
  
  // Format date helper
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  // Status badge helper
  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'pending':
        return (
          <span className="px-2 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </span>
        );
      case 'confirmed':
        return (
          <span className="px-2 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">
            <Check className="h-3 w-3 mr-1" />
            Confirmed
          </span>
        );
      case 'completed':
        return (
          <span className="px-2 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">
            <Check className="h-3 w-3 mr-1" />
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="px-2 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-red-900/30 text-red-400 border border-red-800">
            <X className="h-3 w-3 mr-1" />
            Cancelled
          </span>
        );
      case 'refunded':
        return (
          <span className="px-2 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-purple-900/30 text-purple-400 border border-purple-800">
            <Check className="h-3 w-3 mr-1" />
            Refunded
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-gray-900/30 text-gray-400 border border-gray-800">
            {status}
          </span>
        );
    }
  };
  
  // Show loading state while checking authentication
  if (authLoading || loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
          <p className="mt-2 text-gray-400">Loading booking requests...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Authentication Required</h2>
          <p className="text-gray-400 mb-6">Please log in to view booking requests.</p>
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
          <p className="text-gray-400 mb-6">You don't have permission to view booking requests.</p>
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
      <div>
        <Link href="/agent-dashboard" className="text-sm text-yellow-400 hover:text-yellow-500">
          ← Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-white mt-2">
          Booking Requests
        </h1>
        <p className="mt-1 text-gray-400">
          Manage bookings and reservation requests for your properties
        </p>
      </div>
      
      {/* Filters and search */}
      <div className="bg-black border border-gray-800 rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by property, booking number..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex-shrink-0">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full md:w-auto px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Bookings list */}
      <div className="space-y-4">
        {filteredBookings.length > 0 ? (
          filteredBookings.map(booking => (
            <div 
              key={booking.id} 
              className="bg-black border border-gray-800 rounded-lg overflow-hidden"
            >
              <div 
                className="p-4 cursor-pointer hover:bg-gray-900/30 transition-colors"
                onClick={() => toggleDetails(booking.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                      <img 
                        src={booking.propertyImage} 
                        alt={booking.propertyTitle}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-white font-medium">{booking.propertyTitle}</h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>
                          {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{booking.nights} {booking.nights === 1 ? 'night' : 'nights'}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <User className="h-3.5 w-3.5 mr-1" />
                        <span>Guest #{booking.guestId.replace('usr_', '')} • {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                    <div className="text-lg font-bold text-[#f3e17b]">
                      ${booking.priceBreakdown.total}
                    </div>
                    <div>
                      {getStatusBadge(booking.status)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {booking.bookingNumber}
                    </div>
                  </div>
                </div>
              </div>
              
              {activeBookingId === booking.id && (
                <div className="border-t border-gray-800 p-4 bg-gray-900/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-3">Booking Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Created</span>
                          <span className="text-white">{formatDate(booking.createdAt)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Last updated</span>
                          <span className="text-white">{formatDate(booking.updatedAt)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Check-in</span>
                          <span className="text-white">{formatDate(booking.checkIn)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Check-out</span>
                          <span className="text-white">{formatDate(booking.checkOut)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Guests</span>
                          <span className="text-white">{booking.guests}</span>
                        </div>
                        {booking.specialRequests && (
                          <div className="pt-2">
                            <span className="text-gray-400 block">Special requests:</span>
                            <span className="text-white italic mt-1 block">{booking.specialRequests}</span>
                          </div>
                        )}
                        {booking.cancellationReason && (
                          <div className="pt-2">
                            <span className="text-gray-400 block">Cancellation reason:</span>
                            <span className="text-white italic mt-1 block">{booking.cancellationReason}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-3">Price Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">${booking.priceBreakdown.basePrice} x {booking.nights} nights</span>
                          <span className="text-white">${booking.priceBreakdown.subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Cleaning fee</span>
                          <span className="text-white">${booking.priceBreakdown.cleaningFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Service fee</span>
                          <span className="text-white">${booking.priceBreakdown.serviceFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Taxes</span>
                          <span className="text-white">${booking.priceBreakdown.taxes}</span>
                        </div>
                        <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between font-medium">
                          <span className="text-gray-300">Total</span>
                          <span className="text-[#f3e17b]">${booking.priceBreakdown.total}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <h4 className="text-white font-medium mb-3">Payment</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Method</span>
                            <span className="text-white capitalize">{booking.payments[0].method.replace('_', ' ')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Status</span>
                            <span className={`capitalize ${
                              booking.payments[0].status === 'complete' ? 'text-green-400' : 
                              booking.payments[0].status === 'refunded' ? 'text-purple-400' : 
                              booking.payments[0].status === 'pending' ? 'text-yellow-400' : 
                              'text-red-400'
                            }`}>
                              {booking.payments[0].status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {booking.status === 'pending' && (
                    <div className="mt-6 pt-4 border-t border-gray-700 flex flex-col md:flex-row gap-3 md:justify-end">
                      <Link
                        href={`/agent-dashboard/messages?guest=${booking.guestId}`}
                        className="flex justify-center items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message Guest
                      </Link>
                      <button
                        onClick={() => handleDeclineBooking(booking.id)}
                        className="flex justify-center items-center px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 border border-red-800 rounded-md transition-colors"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </button>
                      <button
                        onClick={() => handleApproveBooking(booking.id)}
                        className="flex justify-center items-center px-4 py-2 bg-[#f3e17b] hover:bg-[#dac968] text-black font-medium rounded-md transition-colors"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Approve Booking
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="bg-black border border-gray-800 rounded-lg p-10 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
              <Calendar className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-medium text-white">No bookings found</h3>
            <p className="mt-1 text-gray-500">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search filters' 
                : 'When you receive booking requests, they will appear here'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}