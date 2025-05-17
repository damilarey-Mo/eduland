'use client';

import React, { useState, useEffect } from 'react';
import BookingStepper from '@/components/ui/BookingStepper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Star, MapPin } from 'lucide-react';
import Link from 'next/link';

interface ApartmentDetails {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const apartmentId = searchParams.get('apartment');
  const [apartmentDetails, setApartmentDetails] = useState<ApartmentDetails | null>(null);
  
  useEffect(() => {
    // Retrieve apartment details from localStorage
    if (typeof window !== 'undefined') {
      const storedDetails = localStorage.getItem('bookingApartment');
      if (storedDetails) {
        setApartmentDetails(JSON.parse(storedDetails));
      }
    }
  }, []);
  
  const handleStepChange = (step: number) => {
    console.log(`Step changed to: ${step}`);
  };

  const handleComplete = () => {
    console.log('Booking process completed');
    // Here you would typically submit the booking to your backend
    // and then redirect to a confirmation page
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-[#f3e17b] sm:text-4xl">
            Book Your Apartment
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Complete the following steps to secure your short-term apartment rental. Your booking is protected by our secure payment system.
          </p>
        </motion.div>

        {apartmentDetails && (
          <motion.div 
            className="mt-8 p-6 border border-gray-800 rounded-xl bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={apartmentDetails.image}
                    alt={apartmentDetails.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <Link 
                  href={`/apartments/${apartmentDetails.id}`}
                  className="text-xl font-bold text-white hover:text-[#f3e17b] transition-colors"
                >
                  {apartmentDetails.title}
                </Link>
                <div className="flex items-center mt-2 text-gray-300">
                  <MapPin className="h-4 w-4 mr-1 text-[#f3e17b]" />
                  <span>{apartmentDetails.location}</span>
                </div>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-[#f3e17b] mr-1" />
                  <span className="text-white">4.92</span>
                  <span className="text-gray-400 ml-1">(48 reviews)</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-white">${apartmentDetails.price}</span>
                    <span className="text-gray-400"> / night</span>
                  </div>
                  <div className="text-right text-gray-400">
                    <p>Estimated total:</p>
                    <p className="text-white font-semibold">${apartmentDetails.price * 7 + 85 + 120}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-8">
          <BookingStepper 
            onStepChange={handleStepChange}
            onComplete={handleComplete}
          />
        </div>
        
        {/* Booking Policy Information */}
        <motion.div 
          className="mt-8 p-6 border border-gray-800 rounded-xl bg-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-medium text-white mb-4">Booking Policies</h3>
          <div className="space-y-4 text-gray-300 text-sm">
            <p>
              <span className="font-semibold text-[#f3e17b]">Cancellation Policy:</span> Free cancellation for 48 hours. After that, cancel before check-in and get a 50% refund, minus the service fee.
            </p>
            <p>
              <span className="font-semibold text-[#f3e17b]">Payment Terms:</span> We'll charge a portion now and the rest will be automatically charged on the date shown on the booking confirmation.
            </p>
            <p>
              <span className="font-semibold text-[#f3e17b]">House Rules:</span> No parties or events. No smoking. No pets unless specified in the listing.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 