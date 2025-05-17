"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Check, Calculator } from 'lucide-react';

export default function FlexibleLeaseCalculator() {
  const [stayLength, setStayLength] = useState<number>(7);
  const [basePrice, setBasePrice] = useState<number>(149);
  const [apartmentType, setApartmentType] = useState<string>("studio");
  
  // Discount rates based on stay length
  const discountRates = {
    daily: 0,
    weekly: 0.15, // 15% discount
    monthly: 0.35, // 35% discount
    quarterly: 0.50, // 50% discount
  };
  
  // Base prices by apartment type
  const basePrices = {
    studio: 149,
    "1br": 199,
    "2br": 269,
    "3br": 349,
    penthouse: 499,
  };
  
  // Calculate discounted price
  const calculateDiscountedPrice = () => {
    let discountRate = 0;
    
    if (stayLength >= 90) {
      discountRate = discountRates.quarterly;
    } else if (stayLength >= 30) {
      discountRate = discountRates.monthly;
    } else if (stayLength >= 7) {
      discountRate = discountRates.weekly;
    }
    
    const discountedPrice = basePrice * (1 - discountRate);
    return {
      originalTotal: basePrice * stayLength,
      discountedTotal: discountedPrice * stayLength,
      dailyRate: discountedPrice,
      discount: discountRate * 100,
      savings: basePrice * stayLength - discountedPrice * stayLength,
    };
  };
  
  // Update base price when apartment type changes
  useEffect(() => {
    setBasePrice(basePrices[apartmentType as keyof typeof basePrices]);
  }, [apartmentType]);
  
  const calculation = calculateDiscountedPrice();
  
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-6 bg-white border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Calculator className="h-5 w-5 mr-2 text-primary-600" />
          Flexible Lease Calculator
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          See how much you can save with longer stay durations
        </p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <label htmlFor="apartmentType" className="block text-sm font-medium text-gray-700 mb-1">
            Apartment Type
          </label>
          <select
            id="apartmentType"
            value={apartmentType}
            onChange={(e) => setApartmentType(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          >
            <option value="studio">Studio Apartment</option>
            <option value="1br">1 Bedroom Apartment</option>
            <option value="2br">2 Bedroom Apartment</option>
            <option value="3br">3 Bedroom Apartment</option>
            <option value="penthouse">Luxury Penthouse</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Length of Stay (Days)
          </label>
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => setStayLength(7)}
              className={`flex-1 text-xs py-2 ${stayLength === 7 ? 'bg-primary-100 text-primary-800 font-medium' : 'bg-gray-100 text-gray-700'} rounded-l-md`}
            >
              7 Days
            </button>
            <button
              onClick={() => setStayLength(30)}
              className={`flex-1 text-xs py-2 ${stayLength === 30 ? 'bg-primary-100 text-primary-800 font-medium' : 'bg-gray-100 text-gray-700'}`}
            >
              30 Days
            </button>
            <button
              onClick={() => setStayLength(90)}
              className={`flex-1 text-xs py-2 ${stayLength === 90 ? 'bg-primary-100 text-primary-800 font-medium' : 'bg-gray-100 text-gray-700'}`}
            >
              90 Days
            </button>
            <button
              onClick={() => setStayLength(180)}
              className={`flex-1 text-xs py-2 ${stayLength === 180 ? 'bg-primary-100 text-primary-800 font-medium' : 'bg-gray-100 text-gray-700'} rounded-r-md`}
            >
              180 Days
            </button>
          </div>
          <input
            type="range"
            min="1"
            max="365"
            value={stayLength}
            onChange={(e) => setStayLength(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1 day</span>
            <span>1 year</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">Standard daily rate:</span>
            <span className="font-medium">${basePrice}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">Your daily rate:</span>
            <span className="font-medium text-primary-700">${calculation.dailyRate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">Stay duration:</span>
            <span className="font-medium">{stayLength} days</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">Applied discount:</span>
            <span className="font-medium text-primary-700">{calculation.discount}%</span>
          </div>
          <div className="border-t border-gray-200 my-2 pt-2"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Original total:</span>
            <span className="text-sm text-gray-500 line-through">${calculation.originalTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Your total:</span>
            <span className="font-bold text-lg text-primary-700">${calculation.discountedTotal.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary-100 rounded-full p-1">
              <DollarSign className="h-5 w-5 text-primary-700" />
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-primary-800">
                Your estimated savings: ${calculation.savings.toFixed(2)}
              </h4>
              <p className="mt-1 text-xs text-primary-700">
                Based on {stayLength} days stay in a {apartmentType === "1br" ? "1 bedroom" : 
                  apartmentType === "2br" ? "2 bedroom" : 
                  apartmentType === "3br" ? "3 bedroom" : 
                  apartmentType === "penthouse" ? "luxury penthouse" : "studio"} apartment
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white border-t border-gray-200">
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-primary-600" />
            </div>
            <p className="ml-3 text-sm text-gray-600">
              All utilities included (electricity, water, gas, internet)
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-primary-600" />
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Flexible lease terms with no long-term commitment
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-primary-600" />
            </div>
            <p className="ml-3 text-sm text-gray-600">
              No security deposit required for stays under 30 days
            </p>
          </li>
        </ul>
        
        <motion.button
          className="mt-6 w-full flex items-center justify-center px-8 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book with these rates
        </motion.button>
      </div>
    </div>
  );
} 