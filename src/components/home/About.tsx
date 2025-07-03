"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/utils/colors';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 -mt-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-primary-50 opacity-70 blur-3xl"></div>
        </div>
        <div className="absolute top-0 right-0">
          <svg className="h-96 w-96 text-primary-100 opacity-30" viewBox="0 0 200 200" fill="none">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <motion.div 
              className="relative aspect-square overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/school-building.jpg"
                alt="EduLand school building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            <motion.div 
              className="absolute -right-8 -bottom-8 hidden rounded-2xl border border-primary-100 bg-white p-6 shadow-xl sm:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Founded in 1999</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Over 25 years of educational excellence and community impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item} className="flex items-center">
              <div className="h-1 w-12 rounded bg-secondary-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wide text-yellow-200 -ml-12 ">About Edu Land Schools</span>
            </motion.div>
            
            <motion.h2 
              variants={item}
              className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
            >
             <span className="block" style={{ color: theme.primary }}>Inspiring Excellence</span>
             <span className="block" style={{ color: theme.secondary }}>Building Character</span>
            </motion.h2>
            
            <motion.p 
              variants={item}
              className="mt-6 text-lg leading-8 text-white"
            >
              Edu Land Schools is a premier K-12 independent school dedicated to providing a transformative educational experience. Our rigorous academic program, combined with a focus on character development, prepares students to excel in college and lead meaningful lives.
            </motion.p>
            
            <motion.ul variants={item} className="mt-8 space-y-3 text-yellow-200">
              {[
                "Student-centered approach fostering curiosity and critical thinking",
                "Dedicated faculty committed to academic excellence and mentorship",
                "State-of-the-art facilities supporting diverse learning opportunities",
                "Rich tradition of community service and global engagement"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={item}
                >
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-secondary-500">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              variants={item}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-x-2 rounded-full bg-secondary-400 px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 