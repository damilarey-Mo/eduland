"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaCalendarCheck, FaMoneyBillWave, FaBriefcase, FaMapMarkerAlt, FaCheckCircle, FaHome, FaClock, FaWifi, FaMap } from 'react-icons/fa';

const features = [
  {
    name: 'Verified Business Stays',
    description: 'Every apartment is personally inspected to meet our business-ready standards.',
    icon: FaShieldAlt,
  },
  {
    name: 'Fully Equipped Apartments',
    description: 'From high-speed WiFi to fully-stocked kitchens, everything you need is included.',
    icon: FaHome,
  },
  {
    name: 'Business Travel Optimized',
    description: 'Dedicated workspaces, meeting room access, and corporate booking options.',
    icon: FaBriefcase,
  },
  {
    name: 'Flexible Lease Terms',
    description: 'Stay for a few nights or several months with flexible booking options.',
    icon: FaClock,
  },
  {
    name: 'Premium Connectivity',
    description: 'Enterprise-grade WiFi and smart home features in every apartment.',
    icon: FaWifi,
  },
  {
    name: 'Prime Locations',
    description: 'Centrally located apartments in major business districts worldwide.',
    icon: FaMap,
  },
];

export default function Features() {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#f3e17b] sm:text-4xl">
            Everything You Need for Business Travel
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our apartment rentals are specifically designed for the needs of business travelers and extended stays, with all the comforts of home and the amenities of a premium hotel.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col bg-gray-900 p-6 rounded-xl border border-gray-800"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-6 w-6 flex-none text-[#f3e17b]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-[#f3e17b] px-6 py-3 text-base font-semibold text-black shadow-md hover:bg-[#f3e17b]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3e17b]"
          >
            View All Apartments
          </motion.button>
        </div>
      </div>
    </div>
  );
} 