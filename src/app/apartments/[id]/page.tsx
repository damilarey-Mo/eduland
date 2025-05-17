'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, Users, Star, Award, Shield, Zap, MapPin } from 'lucide-react';
import { FaWifi, FaTv, FaParking, FaSwimmingPool, FaUtensils, FaSnowflake, FaSmokingBan, FaPaw } from 'react-icons/fa';
import ImageGallery from '@/components/ui/ImageGallery';
import { useRouter } from 'next/navigation';

// Mock data for apartment details
const apartmentImages = [
  '/images/apartments/a819df177d8748602d1b605354fc5104.jpg',
  '/images/apartments/962e946bb099b9aa69d8d41bf988a57e.jpg',
  '/images/apartments/6b9b9ae5653bc088cb709fc0c0a2b4f4.jpg',
  '/images/apartments/a2e67de7850ce1fa3b5613137754007a.jpg',
  '/images/apartments/248252fc51e500e5d0f00f04c32e30d8.jpg',
  '/images/apartments/52e1f6551d0e2c076310b1d0f910848e.jpg',
];

const amenities = [
  { name: 'High-speed WiFi', icon: FaWifi },
  { name: 'Smart TV', icon: FaTv },
  { name: 'Free Parking', icon: FaParking },
  { name: 'Pool Access', icon: FaSwimmingPool },
  { name: 'Fully Equipped Kitchen', icon: FaUtensils },
  { name: 'Air Conditioning', icon: FaSnowflake },
  { name: 'Non-smoking', icon: FaSmokingBan },
  { name: 'Pet Friendly', icon: FaPaw },
];

export default function ApartmentDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  const handleBookNow = () => {
    // Store apartment details in localStorage for the booking process
    const apartmentDetails = {
      id: params.id,
      title: "Luxury 2BR Apartment with City View",
      location: "Financial District, San Francisco",
      price: 259,
      image: apartmentImages[0]
    };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookingApartment', JSON.stringify(apartmentDetails));
    }
    
    // Navigate to booking page
    router.push(`/book?apartment=${params.id}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center text-[#f3e17b] hover:underline mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to apartments
      </Link>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div>
            <motion.h1 
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Luxury 2BR Apartment with City View
            </motion.h1>
            
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-[#f3e17b]" />
                Financial District, San Francisco
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-[#f3e17b]" />
                4.92 · 48 reviews
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1 text-[#f3e17b]" />
                Superhost
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-[#f3e17b]" />
                Verified
              </div>
            </div>
          </div>
          
          {/* Image gallery */}
          <div className="mt-6">
            <ImageGallery images={apartmentImages} title="Luxury 2BR Apartment" />
          </div>
          
          {/* Description and details */}
          <div className="mt-8">
            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-white">About this apartment</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Enjoy this stunning 2-bedroom apartment in the heart of San Francisco's Financial District. With floor-to-ceiling windows offering breathtaking city views, this modern apartment combines luxury and comfort for your extended stay.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The apartment features a fully equipped kitchen, spacious living area, and two comfortable bedrooms. Perfect for business travelers, couples, or small families looking for a premium short-term rental experience.
              </p>
            </div>
            
            {/* Apartment features */}
            <div className="mt-8 border-t border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-white">Apartment features</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-center space-x-2 rounded-md border border-gray-800 bg-gray-900 p-3">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#f3e17b]/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#f3e17b]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">4 guests</p>
                    <p className="text-xs text-gray-400">Maximum occupancy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-800 bg-gray-900 p-3">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#f3e17b]/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-[#f3e17b]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Instant Book</p>
                    <p className="text-xs text-gray-400">Secure instantly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-800 bg-gray-900 p-3">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#f3e17b]/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-[#f3e17b]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Flexible dates</p>
                    <p className="text-xs text-gray-400">30+ day availability</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mt-8 border-t border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-white">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center">
                    {React.createElement(amenity.icon, { className: "h-5 w-5 mr-2 text-[#f3e17b]" })}
                    <span className="text-sm text-gray-300">{amenity.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <motion.button
                  className="text-[#f3e17b] text-sm hover:underline"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Show all 25 amenities
                </motion.button>
              </div>
            </div>
            
            {/* Location */}
            <div className="mt-8 border-t border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-white">Location</h2>
              <div className="mt-4 aspect-video w-full rounded-lg bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400">Map would be displayed here</p>
              </div>
              <p className="mt-4 text-gray-300">
                Located in the heart of San Francisco's Financial District, this apartment offers easy access to public transportation, restaurants, and major attractions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sidebar - Booking widget */}
        <div className="lg:col-span-1">
          <motion.div 
            className="sticky top-24 rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold text-white">$259</span>
                <span className="text-gray-400"> / night</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-[#f3e17b] mr-1" />
                <span className="text-white">4.92</span>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg border border-gray-800 overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-800">
                      <p className="text-xs text-gray-400">CHECK-IN</p>
                      <p className="text-sm font-medium text-white mt-1">Select date</p>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-400">CHECKOUT</p>
                      <p className="text-sm font-medium text-white mt-1">Select date</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 p-4">
                    <p className="text-xs text-gray-400">GUESTS</p>
                    <p className="text-sm font-medium text-white mt-1">2 guests</p>
                  </div>
                </div>
                
                <motion.button
                  className="w-full rounded-lg bg-[#f3e17b] py-3 font-medium text-black"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookNow}
                >
                  Book Now
                </motion.button>
                
                <button className="w-full rounded-lg border border-[#f3e17b] bg-transparent py-3 font-medium text-[#f3e17b]">
                  Contact Host
                </button>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <p className="text-white">$259 x 7 nights</p>
                  <p className="text-white">$1,813</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white">Cleaning fee</p>
                  <p className="text-white">$85</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white">Service fee</p>
                  <p className="text-white">$120</p>
                </div>
                <div className="border-t border-gray-800 pt-4 flex justify-between">
                  <p className="font-bold text-white">Total</p>
                  <p className="font-bold text-white">$2,018</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 