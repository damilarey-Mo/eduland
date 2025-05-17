"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800">
      {/* Background particle effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white/10 blur-sm"
              style={{
                width: Math.random() * 80 + 20,
                height: Math.random() * 80 + 20,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -50 - 50],
                opacity: [0.1, 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to join our community?
            <br />
            Start your application today.
          </motion.h2>
          <motion.p 
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We invite you to explore our admissions process and discover how EduLand can provide an exceptional educational experience for your child.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/admissions"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary-700 shadow-lg hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 