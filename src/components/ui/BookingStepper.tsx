'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, CreditCard, User, Home, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BookingStepperProps {
  onStepChange?: (step: number) => void;
  onComplete?: () => void;
}

const steps = [
  {
    id: 1,
    title: 'Select Dates',
    description: 'Choose your check-in and check-out dates',
    icon: Calendar,
  },
  {
    id: 2,
    title: 'Guest Details',
    description: 'Add information about guests',
    icon: User,
  },
  {
    id: 3,
    title: 'Confirm Details',
    description: 'Review your booking information',
    icon: Home,
  },
  {
    id: 4,
    title: 'Payment',
    description: 'Secure payment for your stay',
    icon: CreditCard,
  },
];

export default function BookingStepper({ 
  onStepChange,
  onComplete
}: BookingStepperProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const router = useRouter();
  
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
      onStepChange?.(currentStep + 1);
    } else {
      // Handle completion
      setCompletedSteps([...completedSteps, currentStep]);
      
      // Call the onComplete callback if provided
      onComplete?.();
      
      // Redirect to confirmation page
      router.push('/confirmation');
    }
  };
  
  const handleStepClick = (stepId: number) => {
    // Only allow clicking on completed steps or the next available step
    if (completedSteps.includes(stepId) || stepId === currentStep) {
      setCurrentStep(stepId);
      onStepChange?.(stepId);
    }
  };
  
  return (
    <div className="py-8">
      {/* Desktop Stepper */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Progress bar background */}
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 transform rounded-full bg-gray-800" />
          
          {/* Active progress bar */}
          <motion.div 
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 transform rounded-full bg-[#f3e17b]" 
            initial={{ width: '0%' }}
            animate={{ 
              width: `${((completedSteps.length) / (steps.length - 1)) * 100}%` 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = currentStep === step.id;
              const isPast = completedSteps.includes(step.id);
              
              return (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center"
                  onClick={() => handleStepClick(step.id)}
                >
                  <motion.div
                    className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full ${
                      isCompleted 
                        ? 'bg-[#f3e17b]' 
                        : isActive 
                          ? 'bg-gray-900 border-2 border-[#f3e17b]' 
                          : 'bg-gray-900 border border-gray-700'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isCompleted ? (
                      <Check className="h-6 w-6 text-black" />
                    ) : (
                      <step.icon className={`h-6 w-6 ${isActive ? 'text-[#f3e17b]' : 'text-gray-400'}`} />
                    )}
                  </motion.div>
                  <div className="mt-2 flex flex-col items-center text-center">
                    <span className={`text-sm font-medium ${isActive || isPast ? 'text-white' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                    <span className="mt-1 hidden text-xs text-gray-400 md:block">
                      {step.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Mobile Stepper */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-white">
              {steps[currentStep - 1].title}
            </h3>
            <p className="text-sm text-gray-400">
              {steps[currentStep - 1].description}
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <span className="font-medium text-white">{currentStep}</span>
            <span className="mx-1">/</span>
            <span>{steps.length}</span>
          </div>
        </div>
        <div className="mt-4 h-1 w-full rounded-full bg-gray-800">
          <motion.div 
            className="h-1 rounded-full bg-[#f3e17b]" 
            initial={{ width: '0%' }}
            animate={{ 
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      
      {/* Content Area (placeholder for actual content) */}
      <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e17b]/10">
                {React.createElement(steps[currentStep - 1].icon, {
                  className: "h-6 w-6 text-[#f3e17b]"
                })}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-sm text-gray-400">
                  {currentStep === 1 && "Select the dates for your apartment stay"}
                  {currentStep === 2 && "Tell us who's staying at the apartment"}
                  {currentStep === 3 && "Review all details of your booking"}
                  {currentStep === 4 && "Add your payment information securely"}
                </p>
              </div>
            </div>
            
            {/* Example content for each step */}
            <div className="mt-6">
              {currentStep === 1 && (
                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Check-in Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-400">Earliest check-in: 3:00 PM</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Check-out Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-400">Latest check-out: 11:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-white mb-2">Length of Stay</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['1-6 nights', '7-29 nights', '30-89 nights', '90+ nights'].map((option, index) => (
                        <div key={index} className="relative">
                          <input 
                            type="radio" 
                            name="stay-length" 
                            id={`stay-length-${index}`} 
                            className="peer absolute h-0 w-0 opacity-0" 
                          />
                          <label 
                            htmlFor={`stay-length-${index}`} 
                            className="flex justify-center items-center p-2 border border-gray-700 rounded-md bg-gray-800 text-center text-sm text-gray-300 cursor-pointer peer-checked:border-[#f3e17b] peer-checked:text-[#f3e17b] peer-checked:bg-[#f3e17b]/10 hover:bg-gray-700"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="h-4 w-4 bg-[#f3e17b]/20 rounded-full mr-2"></div>
                      <p className="text-xs text-gray-400">Longer stays receive higher discounts</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-800 rounded-md">
                    <h4 className="text-sm font-medium text-white">Price Summary</h4>
                    <div className="mt-2 flex justify-between">
                      <span className="text-gray-300">$259 x 7 nights</span>
                      <span className="text-white">$1,813</span>
                    </div>
                    <div className="mt-1 flex justify-between">
                      <span className="text-gray-300">Weekly discount (-15%)</span>
                      <span className="text-[#f3e17b]">-$271</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-700 flex justify-between font-medium">
                      <span className="text-white">Subtotal</span>
                      <span className="text-white">$1,542</span>
                    </div>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Number of Guests</label>
                      <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none">
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>4 guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-white mb-2">Special Requests</label>
                    <textarea 
                      className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                      rows={3}
                      placeholder="Any special requirements or requests?"
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-700 text-[#f3e17b] focus:ring-[#f3e17b] h-4 w-4 bg-gray-800" />
                      <span className="ml-2 text-sm text-gray-300">I'm traveling for business</span>
                    </label>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Booking Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Check-in</p>
                        <p className="text-white">June 15, 2024 (3:00 PM)</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Check-out</p>
                        <p className="text-white">June 22, 2024 (11:00 AM)</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Guests</p>
                        <p className="text-white">2 guests</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Stay Length</p>
                        <p className="text-white">7 nights</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6 border-t border-gray-800 pt-4">
                    <h4 className="text-white font-medium mb-2">Guest Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Name</p>
                        <p className="text-white">John Doe</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white">john.doe@example.com</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Phone</p>
                        <p className="text-white">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Purpose</p>
                        <p className="text-white">Business Travel</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-md p-4">
                    <h4 className="text-white font-medium mb-2">Price Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">$259 x 7 nights</span>
                        <span className="text-white">$1,813</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Weekly discount</span>
                        <span className="text-[#f3e17b]">-$271</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Cleaning fee</span>
                        <span className="text-white">$85</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Service fee</span>
                        <span className="text-white">$120</span>
                      </div>
                      <div className="pt-2 border-t border-gray-700 flex justify-between font-medium">
                        <span className="text-white">Total</span>
                        <span className="text-white">$1,747</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {currentStep === 4 && (
                <div className="rounded-md border border-gray-800 bg-gray-900 p-4">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Card Information</label>
                      <div className="rounded-md border border-gray-700 bg-gray-800 p-3 flex items-center">
                        <div className="bg-gray-700 w-10 h-6 rounded mr-2"></div>
                        <input 
                          type="text" 
                          className="w-full bg-transparent px-2 py-1 text-sm text-white focus:outline-none"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <input 
                          type="text" 
                          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                          placeholder="MM/YY"
                        />
                        <input 
                          type="text" 
                          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Billing Address</label>
                      <input 
                        type="text" 
                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none mb-2"
                        placeholder="Street address"
                      />
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input 
                          type="text" 
                          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                          placeholder="City"
                        />
                        <input 
                          type="text" 
                          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                          placeholder="Postal code"
                        />
                      </div>
                      <input 
                        type="text" 
                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#f3e17b] focus:ring-1 focus:ring-[#f3e17b] focus:outline-none"
                        placeholder="Country"
                      />
                    </div>
                    
                    <div className="bg-gray-800 rounded-md p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">Payment Amount</span>
                        <span className="text-white font-medium">$873.50</span>
                      </div>
                      <p className="text-xs text-gray-400">50% deposit due now. Remaining balance will be charged automatically on May 15, 2024.</p>
                      
                      <div className="mt-4 flex items-center">
                        <div className="h-4 w-4 bg-[#f3e17b]/20 rounded-full mr-2"></div>
                        <p className="text-xs text-gray-400">Your payment information is encrypted and secure</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-700 text-[#f3e17b] focus:ring-[#f3e17b] h-4 w-4 bg-gray-800" />
                        <span className="ml-2 text-sm text-gray-300">I agree to the <a href="#" className="text-[#f3e17b] underline">Terms and Conditions</a> and <a href="#" className="text-[#f3e17b] underline">Privacy Policy</a></span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        {currentStep > 1 && (
          <button 
            className="rounded-lg border border-gray-700 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            onClick={() => {
              setCurrentStep(currentStep - 1);
              onStepChange?.(currentStep - 1);
            }}
          >
            Back
          </button>
        )}
        <motion.button 
          className="inline-flex items-center rounded-lg bg-[#f3e17b] px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-[#f3e17b]/90"
          onClick={handleNextStep}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentStep < steps.length ? 'Continue' : 'Complete Booking'} 
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
} 