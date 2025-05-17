"use client";

import Link from 'next/link';
import { FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay } from 'react-icons/fa';

const navigation = {
  apartments: [
    { name: 'All Apartments', href: '/apartments' },
    { name: 'Corporate Stays', href: '/corporate' },
    { name: 'Monthly Rentals', href: '/monthly' },
    { name: 'Luxury Units', href: '/luxury' },
    { name: 'Business Ready', href: '/business' },
  ],
  services: [
    { name: 'Cleaning Services', href: '/services/cleaning' },
    { name: 'Flexible Booking', href: '/services/flexible-booking' },
    { name: 'Corporate Programs', href: '/services/corporate' },
    { name: 'Airport Pickup', href: '/services/airport-pickup' },
    { name: 'Grocery Delivery', href: '/services/grocery-delivery' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Safety Policies', href: '/safety' },
    { name: 'Cancellation Options', href: '/cancellation' },
    { name: 'Neighborhood Guidelines', href: '/guidelines' },
    { name: 'Trust & Safety', href: '/trust' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="ShortLet Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-[#f3e17b]">ShortLet</span>
            </div>
            <p className="text-gray-300 text-base leading-6">
              Find the perfect short-term apartment rental for your business travel or extended stay needs. Fully furnished with all amenities included.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#f3e17b] hover:opacity-75">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#f3e17b] hover:opacity-75">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#f3e17b] hover:opacity-75">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#f3e17b] hover:opacity-75">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[#f3e17b] tracking-wider uppercase">
                  Explore
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.apartments.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-[#f3e17b] tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[#f3e17b] tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-[#f3e17b] tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-white text-center">
              Stay updated with new listings and exclusive offers
            </h3>
            <p className="mt-2 text-gray-300 text-center mb-4">
              Be the first to know about new apartments, special promotions, and travel tips.
            </p>
            <form className="mt-4 sm:flex">
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-[#f3e17b] focus:outline-none rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-[#f3e17b] border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-black hover:bg-[#f3e17b]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f3e17b]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Copyright and payment methods */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} ShortLet. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaCcVisa className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaCcMastercard className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaCcPaypal className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaApplePay className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 