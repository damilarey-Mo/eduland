'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, MapPin, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BookingConfirmation {
  bookingId: string;
  apartmentId: string;
  apartmentTitle: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  amount: number;
  image: string;
}

export default function ConfirmationPage() {
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  
  useEffect(() => {
    // In a real app, this would come from your API after booking is completed
    // For now, we'll simulate a booking confirmation
    const mockConfirmation: BookingConfirmation = {
      bookingId: 'BK' + Math.floor(100000 + Math.random() * 900000),
      apartmentId: '2',
      apartmentTitle: 'Luxury 2BR Apartment with City View',
      location: 'Financial District, San Francisco',
      checkIn: 'June 15, 2024',
      checkOut: 'June 22, 2024',
      guests: 2,
      amount: 1747,
      image: '/images/apartments/a819df177d8748602d1b605354fc5104.jpg'
    };
    
    setConfirmation(mockConfirmation);
  }, []);
  
  if (!confirmation) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-gray-400">Loading confirmation...</div>
      </div>
    );
  }
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <motion.div 
            className="w-24 h-24 bg-[#f3e17b]/10 rounded-full mx-auto flex items-center justify-center mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <Check className="h-10 w-10 text-[#f3e17b]" />
          </motion.div>
          
          <motion.h1
            className="text-3xl font-bold tracking-tight text-[#f3e17b] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Booking Confirmed!
          </motion.h1>
          <motion.p
            className="mt-4 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your booking has been successfully processed. We've sent a confirmation to your email.
          </motion.p>
        </div>
        
        <motion.div
          className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Booking Details</h2>
              <div className="bg-gray-800 px-4 py-2 rounded-full">
                <span className="text-[#f3e17b] font-medium">#{confirmation.bookingId}</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={confirmation.image}
                    alt={confirmation.apartmentTitle}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <Link 
                  href={`/apartments/${confirmation.apartmentId}`}
                  className="text-xl font-bold text-white hover:text-[#f3e17b] transition-colors"
                >
                  {confirmation.apartmentTitle}
                </Link>
                
                <div className="flex items-center mt-2 text-gray-300">
                  <MapPin className="h-4 w-4 mr-1 text-[#f3e17b]" />
                  <span>{confirmation.location}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-[#f3e17b] mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-400 text-sm">Check-in</p>
                      <p className="text-white">{confirmation.checkIn}</p>
                      <p className="text-gray-400 text-xs">3:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-[#f3e17b] mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-400 text-sm">Check-out</p>
                      <p className="text-white">{confirmation.checkOut}</p>
                      <p className="text-gray-400 text-xs">11:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-[#f3e17b] mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-400 text-sm">Guests</p>
                      <p className="text-white">{confirmation.guests} {confirmation.guests === 1 ? 'guest' : 'guests'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#f3e17b] mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white">7 nights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 p-6">
            <h3 className="text-lg font-medium text-white mb-4">Payment Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Total paid</span>
                <span className="text-white font-medium">${confirmation.amount / 2}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Remaining balance (due Jun 1, 2024)</span>
                <span className="text-white font-medium">${confirmation.amount / 2}</span>
              </div>
              <div className="pt-2 mt-2 border-t border-gray-800 flex justify-between">
                <span className="text-white font-medium">Total amount</span>
                <span className="text-[#f3e17b] font-medium">${confirmation.amount}</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              href={`/apartments/${confirmation.apartmentId}`}
              className="inline-flex items-center text-[#f3e17b] hover:underline"
            >
              View Apartment Details
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-x-4"
          >
            <button 
              className="px-4 py-2 border border-[#f3e17b] text-[#f3e17b] rounded-lg hover:bg-[#f3e17b]/10 transition-colors"
            >
              Download Receipt
            </button>
            <Link
              href="/"
              className="px-4 py-2 bg-[#f3e17b] text-black rounded-lg hover:bg-[#f3e17b]/90 transition-colors inline-block"
            >
              Back to Listings
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 