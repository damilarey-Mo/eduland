"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { colors, theme } from '@/utils/colors';

export default function CTA() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Background dots animation
  const dots = Array.from({ length: 20 }).map((_, i) => {
    const size = 4 + (i % 3) * 2; // Fixed sizes based on index
    const left = 20 + (i * 5) % 80; // Fixed positions based on index
    const top = 10 + (i * 7) % 90;
    const color = i % 2 === 0 ? colors.vanilla[300] : colors.mint[300];
    
    return (
      <motion.div
        key={i}
        className="absolute rounded-full opacity-10 -z-10"
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          top: `${top}%`,
          backgroundColor: color,
        }}
        animate={{
          x: [0, (i % 2 === 0 ? 1 : -1) * 10],
          y: [0, (i % 3 === 0 ? 1 : -1) * 10],
        }}
        transition={{
          duration: 3 + (i % 2),
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    );
  });

  return (
    <section className="relative overflow-hidden py-16 sm:py-24" style={{ backgroundColor: theme.backgroundLight }}>
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: `linear-gradient(135deg, ${theme.alpha(theme.primaryLight, 0.05)}, ${theme.alpha(theme.secondaryLight, 0.05)})` }}
      ></div>
      
      {/* Animated background particles */}
      {dots}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight sm:text-4xl font-display"
            style={{ color: theme.text }}
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-8"
            style={{ color: theme.textMuted }}
          >
            Take the first step toward a transformative educational experience. Enroll now or contact us to learn more about our programs and admissions process.
          </motion.p>
          <motion.div 
            variants={item} 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/admissions"
              className="relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                backgroundColor: theme.secondary,
                color: theme.backgroundDark 
              }}
            >
              Enroll Now
            </Link>
            <Link
              href="/contact"
              className="relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                backgroundColor: theme.primary,
                color: theme.backgroundDark 
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 