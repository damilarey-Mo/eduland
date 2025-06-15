"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, DollarSign, Shield, Clock, Users, Award, Star, Home } from 'lucide-react';

export default function HostingBenefitsPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hosting-hero.jpg" 
            alt="Host property" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="relative py-32 sm:py-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Unlock Your Property's Potential
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join thousands of successful hosts who earn extra income by sharing their spaces with travelers from around the world.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/agent-signup"
                className="rounded-xl bg-[#f3e17b] px-6 py-3.5 text-center font-semibold text-black shadow-lg hover:bg-[#dac968] transition-colors"
              >
                Become a Host
              </Link>
              <a
                href="#benefits"
                className="rounded-xl bg-white/10 px-6 py-3.5 text-center font-semibold text-white shadow-lg hover:bg-white/20 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="bg-black py-12 border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            <div className="p-6 text-center border-r border-gray-800">
              <p className="text-3xl sm:text-4xl font-bold text-[#f3e17b]">1M+</p>
              <p className="mt-2 text-sm sm:text-base text-gray-300">Active Hosts Worldwide</p>
            </div>
            <div className="p-6 text-center border-r border-gray-800">
              <p className="text-3xl sm:text-4xl font-bold text-[#f3e17b]">$15k</p>
              <p className="mt-2 text-sm sm:text-base text-gray-300">Average Annual Income</p>
            </div>
            <div className="p-6 text-center border-r border-gray-800">
              <p className="text-3xl sm:text-4xl font-bold text-[#f3e17b]">48hr</p>
              <p className="mt-2 text-sm sm:text-base text-gray-300">Fast Payment Processing</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#f3e17b]">24/7</p>
              <p className="mt-2 text-sm sm:text-base text-gray-300">Host Support Available</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits section */}
      <div id="benefits" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#f3e17b]">HOST BENEFITS</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Host with ShortLet?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We make hosting simple, safe, and rewarding. Here's how you benefit when you partner with us.
            </p>
          </div>
          
          <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-[#f3e17b]/10 p-3">
                <DollarSign className="h-6 w-6 text-[#f3e17b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Maximize Your Earnings</h3>
              <p className="mt-2 text-base text-gray-400">
                Our smart pricing tools help you set competitive rates that adjust to seasonal demand, local events, and market trends to maximize your income.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-[#f3e17b]/10 p-3">
                <Shield className="h-6 w-6 text-[#f3e17b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Secure Protection</h3>
              <p className="mt-2 text-base text-gray-400">
                Rest easy with our $1M host liability insurance and property damage protection. We thoroughly verify all guests to ensure your property stays safe.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-[#f3e17b]/10 p-3">
                <Users className="h-6 w-6 text-[#f3e17b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Quality Guests</h3>
              <p className="mt-2 text-base text-gray-400">
                Our platform attracts business travelers and reliable guests who respect your property. We use verified reviews and comprehensive screening.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-[#f3e17b]/10 p-3">
                <Clock className="h-6 w-6 text-[#f3e17b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Time-Saving Tools</h3>
              <p className="mt-2 text-base text-gray-400">
                Our streamlined dashboard and automated messaging system make managing bookings effortless, saving you time and reducing administrative work.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-[#f3e17b]/10 p-3">
                <Award className="h-6 w-6 text-[#f3e17b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Professional Support</h3>
              <p className="mt-2 text-base text-gray-400">
                Receive dedicated support from our hosting experts, access to professional photographers, and guidance on optimizing your listing.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-[#f3e17b]/10 p-3">
                <Star className="h-6 w-6 text-[#f3e17b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Flexibility & Control</h3>
              <p className="mt-2 text-base text-gray-400">
                You maintain full control over your calendar, house rules, and pricing. Block dates when needed and host on your terms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#f3e17b]">GETTING STARTED</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How Hosting Works
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start earning in just a few simple steps
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative pb-12 md:pb-0">
                {/* Line connector (hidden on mobile) */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-700 -translate-x-8 translate-y-2"></div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f3e17b] flex items-center justify-center text-black font-bold">1</div>
                    <h3 className="ml-4 text-xl font-medium text-white">Create Your Listing</h3>
                  </div>
                  <div className="mt-4 ml-14">
                    <p className="text-base text-gray-400">
                      Sign up as a host and create your property listing with details, photos, and amenities. Our team can help optimize it.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pb-12 md:pb-0">
                {/* Line connector (hidden on mobile) */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-700 -translate-x-8 translate-y-2"></div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f3e17b] flex items-center justify-center text-black font-bold">2</div>
                    <h3 className="ml-4 text-xl font-medium text-white">Welcome Guests</h3>
                  </div>
                  <div className="mt-4 ml-14">
                    <p className="text-base text-gray-400">
                      Review and approve booking requests or enable instant booking. Manage your calendar and communicare seamlessly with guests.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f3e17b] flex items-center justify-center text-black font-bold">3</div>
                    <h3 className="ml-4 text-xl font-medium text-white">Get Paid</h3>
                  </div>
                  <div className="mt-4 ml-14">
                    <p className="text-base text-gray-400">
                      Receive secure payments directly to your account within 48 hours of guest check-in. Track your earnings in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#f3e17b]">QUESTIONS & ANSWERS</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-800">
            <div className="py-6">
              <h3 className="text-lg font-medium text-white">What are the requirements to become a host?</h3>
              <p className="mt-3 text-gray-400">
                You'll need to own or have permission to rent out the property, provide accurate information about the space, amenities, and have high-quality photos of your property.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-white">How much does it cost to list my property?</h3>
              <p className="mt-3 text-gray-400">
                Listing your property is completely free. We only charge a small service fee when you receive bookings, typically 3% of the booking subtotal.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-white">How do I set my pricing?</h3>
              <p className="mt-3 text-gray-400">
                You have full control over your pricing. Our tools provide recommendations based on location, seasonality, and local events to help you maximize revenue.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-white">How are guests vetted?</h3>
              <p className="mt-3 text-gray-400">
                All guests must verify their identity, phone number, and email. We also maintain a review system and allow hosts to set their own requirements for bookings.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-white">What kind of support do hosts receive?</h3>
              <p className="mt-3 text-gray-400">
                Hosts have access to 24/7 support, educational resources, photography services, and a dedicated account manager to help optimize their listings and resolve any issues.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start earning?
              <br />
              Become a host today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join our community of successful hosts and turn your property into a source of income. Get started in minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/agent-signup"
                className="rounded-md bg-[#f3e17b] px-8 py-3.5 text-center font-semibold text-black shadow-lg hover:bg-[#dac968] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Sign Up Now
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Support <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 