"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaStar, FaBriefcase, FaBuilding, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';

const reviews = [
  {
    id: 1,
    content: "As a consultant who travels weekly, finding ShortLet has been a game-changer. Their apartments are always impeccably clean, the Wi-Fi is reliable for video calls, and the dedicated workspaces mean I don't have to work from the bed like in hotels.",
    author: {
      name: 'Sarah Johnson',
      position: 'Management Consultant',
      company: 'Boston Consulting Group',
      imageUrl: '/images/testimonials/sarah.jpg',
      rating: 5,
      date: 'January 2024',
    },
    stay: {
      duration: '3 months',
      property: 'Corporate Studio in Financial District',
      location: 'New York',
    }
  },
  {
    id: 2,
    content: "My company relocated me to San Francisco for a 6-month project, and ShortLet made the transition seamless. The furnished apartment had everything I needed, and the flexible lease terms meant I didn't have to worry about breaking a year-long contract.",
    author: {
      name: 'Michael Chen',
      position: 'Software Engineer',
      company: 'Tech Innovations Inc.',
      imageUrl: '/images/testimonials/michael.jpg',
      rating: 5,
      date: 'December 2023',
    },
    stay: {
      duration: '6 months',
      property: 'Modern 1BR Near Tech Campus',
      location: 'San Francisco',
    }
  },
  {
    id: 3,
    content: "As a project manager overseeing multiple sites, I need comfortable accommodations when traveling. ShortLet's corporate program has been excellent for our team. The consistent quality across cities and streamlined billing make expense reporting so much easier.",
    author: {
      name: 'David Rodriguez',
      position: 'Senior Project Manager',
      company: 'Global Construction Partners',
      imageUrl: '/images/testimonials/david.jpg',
      rating: 5,
      date: 'November 2023',
    },
    stay: {
      duration: 'Recurring monthly stays',
      property: 'Various Corporate Apartments',
      location: 'Multiple Cities',
    }
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewRef = useRef<HTMLDivElement>(null);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-[#f3e17b]" : "text-gray-600"} 
        size={16}
      />
    ));
  };

  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#f3e17b] sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Discover why business travelers and extended-stay guests choose ShortLet for their accommodation needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.author.name} className="flex flex-col justify-between bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-sm ring-1 ring-gray-800">
              <div className="flex items-center mb-4">
                {renderStars(review.author.rating)}
              </div>
              <blockquote className="text-gray-300">
                <p>"{review.content}"</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <img src={review.author.imageUrl} alt="" className="h-12 w-12 rounded-full bg-gray-800" />
                <div>
                  <div className="font-semibold text-white">{review.author.name}</div>
                  <div className="text-sm leading-6 text-gray-400">{review.author.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 