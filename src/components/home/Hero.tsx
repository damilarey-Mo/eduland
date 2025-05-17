"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Filter, Shield, Clock, Zap } from 'lucide-react';
import { FaKey, FaWifi, FaBriefcase, FaParking, FaSwimmingPool, FaDumbbell, FaConciergeBell, FaShieldAlt, FaCalendarAlt, FaStar, FaShareAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Category filters for short-term apartments
const categories = [
  { name: 'Business Ready', icon: FaBriefcase },
  { name: 'Luxury', icon: FaConciergeBell },
  { name: 'Instant Book', icon: FaKey },
  { name: 'Flexible Dates', icon: FaCalendarAlt },
  { name: 'Verified', icon: FaShieldAlt },
  { name: 'With Parking', icon: FaParking },
  { name: 'With Pool', icon: FaSwimmingPool },
  { name: 'With Gym', icon: FaDumbbell },
  { name: 'High-speed WiFi', icon: FaWifi },
];

// Available apartment images
const apartmentImages = [
  '/images/apartments/a819df177d8748602d1b605354fc5104.jpg',
  '/images/apartments/962e946bb099b9aa69d8d41bf988a57e.jpg',
  '/images/apartments/6b9b9ae5653bc088cb709fc0c0a2b4f4.jpg',
  '/images/apartments/a2e67de7850ce1fa3b5613137754007a.jpg',
  '/images/apartments/248252fc51e500e5d0f00f04c32e30d8.jpg',
  '/images/apartments/52e1f6551d0e2c076310b1d0f910848e.jpg',
  '/images/apartments/162ffe853982f246c8b322055209429c.jpg',
  '/images/apartments/70b7875e1f4223f45dd01083009aba45.jpg',
  '/images/apartments/40b75d746de739e5398a65aa43c40aa3.jpg',
  '/images/apartments/70aeea7e6bc11ead9b3fef2dfe03ba32.jpg',
  '/images/apartments/90864b02a1db90b7590f30e5635a5c1d.jpg',
  '/images/apartments/b84ecc99474c89523b126758c6175f52.jpg',
  '/images/apartments/2bdr.jpg',
  '/images/apartments/Luxury 2BR with City View.jpg',
  '/images/apartments/Modern Studio in Downtown.jpg',
  '/images/apartments/Corporate 1BR near Convention Center.jpg',
];

// Featured apartments data
const featuredApartments = [
  {
    id: 1,
    title: 'Modern Studio in Downtown',
    location: 'Downtown, New York',
    type: 'Studio Apartment',
    dates: 'Available now',
    price: 139,
    rating: 4.92,
    image: apartmentImages[Math.floor(Math.random() * apartmentImages.length)],
    perks: ['Fully Equipped Kitchen', 'High-speed WiFi', 'Business Ready'],
    instant: true,
    verified: true,
  },
  {
    id: 2,
    title: 'Luxury 2BR with City View',
    location: 'Financial District, San Francisco',
    type: '2 Bedroom Apartment',
    dates: 'Available next week',
    price: 259,
    rating: 4.88,
    image: apartmentImages[Math.floor(Math.random() * apartmentImages.length)],
    perks: ['Gym Access', 'Concierge Service', 'Parking'],
    instant: false,
    verified: true,
  },
  {
    id: 3,
    title: 'Corporate 1BR near Convention Center',
    location: 'Downtown, Chicago',
    type: '1 Bedroom Apartment',
    dates: 'Flexible dates',
    price: 179,
    rating: 4.95,
    image: apartmentImages[Math.floor(Math.random() * apartmentImages.length)],
    perks: ['High-speed WiFi', 'Business Ready', 'Weekly Cleaning'],
    instant: true,
    verified: true,
  },
  {
    id: 4,
    title: 'Stylish Loft with Workspace',
    location: 'Arts District, Los Angeles',
    type: 'Loft Apartment',
    dates: 'Available now',
    price: 199,
    rating: 4.89,
    image: apartmentImages[Math.floor(Math.random() * apartmentImages.length)],
    perks: ['Dedicated Workspace', 'Fast WiFi', 'Smart TV'],
    instant: false,
    verified: true,
  }
];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState('Business Ready');
  const [showFilter, setShowFilter] = useState(false);
  const [randomizedApartments, setRandomizedApartments] = useState(featuredApartments);
  
  // Randomize images on component mount
  useEffect(() => {
    // Create a copy of the apartment data and assign random images
    const randomized = featuredApartments.map(apartment => ({
      ...apartment,
      image: apartmentImages[Math.floor(Math.random() * apartmentImages.length)]
    }));
    
    setRandomizedApartments(randomized);
  }, []);
  
  return (
    <div className="relative bg-black">
      {/* Category navigation */}
      <div className="border-b border-gray-800 pt-3 pb-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto pb-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`flex flex-col items-center space-y-2 min-w-[80px] ${
                  activeCategory === category.name 
                    ? 'text-[#f3e17b] border-b-2 border-[#f3e17b] pb-2' 
                    : 'text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-700 pb-2'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <category.icon className="h-6 w-6" />
                <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced filters and sort */}
      <div className="bg-black py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setShowFilter(!showFilter)}
              className="inline-flex items-center rounded-lg border border-gray-800 px-4 py-2 text-sm font-medium text-white"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
            
            <div className="flex space-x-2">
              <button className="inline-flex items-center rounded-full border border-gray-800 px-4 py-2 text-xs font-medium text-white">
                <Clock className="h-3 w-3 mr-1" />
                Monthly discounts
              </button>
              <button className="inline-flex items-center rounded-full border border-gray-800 px-4 py-2 text-xs font-medium text-white">
                <Shield className="h-3 w-3 mr-1" />
                Verified only
              </button>
              <button className="inline-flex items-center rounded-full border border-gray-800 px-4 py-2 text-xs font-medium text-white">
                <Zap className="h-3 w-3 mr-1" />
                Instant booking
              </button>
            </div>
            
            <select className="rounded-lg border border-gray-800 bg-black text-white px-3 py-2 text-sm">
              <option>Sort: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Most Recent</option>
            </select>
          </div>
          
          {/* Advanced filter panel - hidden by default */}
          {showFilter && (
            <motion.div 
              className="mt-4 p-6 border border-gray-800 rounded-xl shadow-sm bg-gray-900"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-white">Price Range</h3>
                  <div className="flex items-center">
                    <input 
                      type="number" 
                      placeholder="Min" 
                      className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white"
                    />
                    <span className="mx-2 text-gray-400">-</span>
                    <input 
                      type="number" 
                      placeholder="Max" 
                      className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-white">Stay Length</h3>
                  <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white">
                    <option>Any length</option>
                    <option>Short stay (1-6 nights)</option>
                    <option>Weekly (7-29 nights)</option>
                    <option>Monthly (30+ nights)</option>
                    <option>Long-term (3+ months)</option>
                  </select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-white">Property Type</h3>
                  <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white">
                    <option>All Types</option>
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3+ Bedrooms</option>
                    <option>Penthouse</option>
                    <option>Loft</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3 text-white">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Fully Equipped Kitchen', 'Washer/Dryer', 'Air Conditioning', 'Dedicated Workspace', 
                    'High-speed WiFi', 'Smart TV', 'Gym Access', 'Pool Access'].map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input type="checkbox" className="mr-2 h-4 w-4 text-[#f3e17b] bg-gray-800 border-gray-700" />
                      <span className="text-sm text-gray-300">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="rounded-lg bg-[#f3e17b] hover:bg-[#f3e17b]/90 px-4 py-2 text-sm font-medium text-black"
                  onClick={() => setShowFilter(false)}
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Featured apartments grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {randomizedApartments.map((apartment) => (
            <motion.div 
              key={apartment.id}
              className="group relative"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="apartment-image-container">
                <Image
                  src={apartment.image}
                  alt={apartment.title}
                  fill
                  className="apartment-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Spotlight hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex space-x-1 z-10">
                  {apartment.instant && (
                    <div className="bg-[#f3e17b] text-black text-xs px-2 py-1 rounded-full flex items-center">
                      <FaKey className="h-3 w-3 mr-1" />
                      Instant
                    </div>
                  )}
                  {apartment.verified && (
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <FaShieldAlt className="h-3 w-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>
                
                {/* Quick action buttons - revealed on hover */}
                <div className="absolute bottom-2 right-2 z-10 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button 
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaStar className="h-4 w-4 text-gray-800" />
                  </motion.button>
                  <motion.button 
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaShareAlt className="h-4 w-4 text-gray-800" />
                  </motion.button>
                </div>
              </div>
              
              <motion.div 
                className="mt-4 bg-gray-900 p-4 rounded-lg border border-gray-800"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-white line-clamp-1">
                    <Link href={`/apartments/${apartment.id}`}>
                      {apartment.title}
                    </Link>
                  </h3>
                  <div className="flex items-center">
                    <FaStar className="h-4 w-4 text-[#f3e17b] mr-1" />
                    <span className="text-sm text-white">{apartment.rating}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-400 line-clamp-1">{apartment.location}</p>
                <p className="mt-1 text-sm text-gray-400">{apartment.type}</p>
                <p className="mt-1 text-sm text-gray-400">{apartment.dates}</p>
                
                {/* Perks badges */}
                <div className="mt-2 flex flex-wrap gap-1">
                  {apartment.perks.map((perk, i) => (
                    <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                      {perk}
                    </span>
                  ))}
                </div>
                
                <div className="mt-3 flex items-end justify-between">
                  <p className="text-sm font-medium text-white">${apartment.price} <span className="text-gray-400 font-normal">night</span></p>
                  <motion.button 
                    className="text-xs bg-[#f3e17b] text-black px-3 py-1 rounded hover:bg-[#f3e17b]/90"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Show more button */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <motion.button
          className="inline-flex items-center rounded-lg bg-[#f3e17b] px-6 py-3 text-black hover:bg-[#f3e17b]/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show more apartments
        </motion.button>
      </div>

      {/* Map button - fixed at bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <motion.button
          className="inline-flex items-center rounded-full bg-[#f3e17b] px-6 py-3 text-black hover:bg-[#f3e17b]/90 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">View Map</span>
          <Search className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
} 