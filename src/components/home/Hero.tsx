"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { colors, theme } from '@/utils/colors';

const carouselImages = [
  {
    src: '/images/hero-students.jpg',
    alt: 'Students in a modern classroom environment',
    caption: 'Modern Learning Environments'
  },
  {
    src: '/images/school-building.jpg',
    alt: 'EduLand campus building',
    caption: 'State-of-the-Art Facilities'
  },
  {
    src: '/images/students-1.jpg',
    alt: 'Students collaborating on a project',
    caption: 'Collaborative Learning'
  },
  {
    src: '/images/students-2.jpg',
    alt: 'Students engaged in outdoor activities',
    caption: 'Well-Rounded Education'
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  // Navigate carousel
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

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

  const featureItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: theme.background }}>
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/4 transform opacity-10"
          aria-hidden="true"
          viewBox="0 0 200 200"
        >
          
         
        </svg>
        <div 
          className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/3 rounded-full opacity-10 blur-3xl"
          style={{ 
            background: `linear-gradient(to right, ${colors.mint[200]}, ${theme.secondary})` 
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Top Center Enrollment Banner */}
        <motion.div 
          className="flex justify-center pt-8 pb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border"
            style={{ 
              backgroundColor: theme.alpha(colors.vanilla[400], 0.15),
              borderColor: theme.alpha(theme.secondary, 0.3),
              boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.2)}`
            }}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full" 
              style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.3) }}>
              <GraduationCap className="h-4 w-4" style={{ color: theme.primary }} />
            </span>
            <span className="text-sm font-semibold" style={{ color: theme.primary }}>
              Enrollment Open for 2025-26 Session
            </span>
          </div>
        </motion.div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12 px-6 lg:px-8">
          <motion.div 
            className="w-full lg:w-1/2 py-8 lg:py-16"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1 
              variants={item}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display"
              style={{ color: theme.text }}
            >
              <span className="block" >Nurturing Tomorrow's </span>
              <span className="block"style={{ color: theme.primary }}>Global Leaders</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="mt-6 text-lg leading-8 max-w-lg"
              style={{ color: theme.textMuted }}
            >
              EduLand provides a transformative learning experience that nurtures academic excellence, character development, and leadership skills in a supportive community.
            </motion.p>
          </motion.div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Image Carousel */}
            <div 
              className="relative h-80 overflow-hidden sm:h-[400px] md:h-[500px] lg:h-[520px] w-full max-w-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
              }}
            >
              {/* Animated mint green border */}
              <motion.div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ 
                  borderRadius: '12px',
                  border: `3px solid ${theme.secondary}`,
                  borderImageSlice: 1,
                }}
                animate={{ 
                  boxShadow: [
                    `0 0 0 rgba(219, 230, 62, 0.81)`,
                    `0 0 15px rgba(62, 230, 163, 0.4)`,
                    `0 0 0 rgba(62, 230, 163, 0)`
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    fill
                    priority={currentImageIndex === 0}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ opacity: 0.95 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25262c]/50 to-transparent"></div>
                  
                  {/* Caption */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full px-6 py-4 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-white text-lg font-medium drop-shadow-md">
                      {carouselImages[currentImageIndex].caption}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel controls */}
              <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                <button 
                  onClick={goToPrevious}
                  className="rounded-full p-2 bg-black/20 text-white hover:bg-black/40 hover:scale-110 transition-all transform-gpu backdrop-blur-sm"
                  style={{ border: `2px solid ${theme.secondary}` }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={goToNext}
                  className="rounded-full p-2 bg-black/20 text-white hover:bg-black/40 hover:scale-110 transition-all transform-gpu backdrop-blur-sm"
                  style={{ border: `2px solid ${theme.secondary}` }}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-3 z-20">
                {carouselImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all`}
                    initial={false}
                    animate={{ 
                      width: index === currentImageIndex ? '2rem' : '0.5rem',
                      opacity: index === currentImageIndex ? 1 : 0.6,
                      backgroundColor: index === currentImageIndex ? theme.secondary : theme.primary,
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      opacity: 0.9 
                    }}
                    style={{ 
                      boxShadow: index === currentImageIndex ? `0 0 8px ${theme.secondary}` : 'none'
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards - Centered Below Main Content */}
        <motion.div 
          className="px-6 lg:px-8 pt-15 pb-16 lg:pb-15"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.dl 
            variants={item}
            className="mx-auto max-w-4xl grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div 
              variants={featureItem} 
              className="text-center p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105 hover:shadow-lg"
              style={{ 
                borderColor: theme.alpha(theme.secondary, 0.2),
                backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                boxShadow: `0 2px 8px ${theme.alpha(theme.secondary, 0.1)}`
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" 
                  style={{ backgroundColor: theme.alpha(theme.secondary, 0.15) }}>
                  <GraduationCap className="h-6 w-6" style={{ color: theme.secondary }} />
                </div>
              </div>
              <dt className="text-lg font-semibold leading-7 mb-3" style={{ color: theme.textSecondary }}>
                Academic Excellence
              </dt>
              <dd className="text-sm leading-6" style={{ color: theme.textMuted }}>
                98% college acceptance rate with students attending top universities worldwide.
              </dd>
            </motion.div>
            
            <motion.div 
              variants={featureItem} 
              className="text-center p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105 hover:shadow-lg"
              style={{ 
                borderColor: theme.alpha(theme.secondary, 0.2),
                backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                boxShadow: `0 2px 8px ${theme.alpha(theme.secondary, 0.1)}`
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" 
                  style={{ backgroundColor: theme.alpha(theme.secondary, 0.15) }}>
                  <BookOpen className="h-6 w-6" style={{ color: theme.secondary }} />
                </div>
              </div>
              <dt className="text-lg font-semibold leading-7 mb-3" style={{ color: theme.textSecondary }}>
                Holistic Development
              </dt>
              <dd className="text-sm leading-6" style={{ color: theme.textMuted }}>
                Comprehensive programs that develop academic, social, and emotional skills.
              </dd>
            </motion.div>
            
            <motion.div 
              variants={featureItem} 
              className="text-center p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105 hover:shadow-lg"
              style={{ 
                borderColor: theme.alpha(theme.secondary, 0.2),
                backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                boxShadow: `0 2px 8px ${theme.alpha(theme.secondary, 0.1)}`
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" 
                  style={{ backgroundColor: theme.alpha(theme.secondary, 0.15) }}>
                  <Users className="h-6 w-6" style={{ color: theme.secondary }} />
                </div>
              </div>
              <dt className="text-lg font-semibold leading-7 mb-3" style={{ color: theme.textSecondary }}>
                Supportive Community
              </dt>
              <dd className="text-sm leading-6" style={{ color: theme.textMuted }}>
                8:1 student-teacher ratio ensuring personalized attention and support.
              </dd>
            </motion.div>
          </motion.dl>
        </motion.div>

        {/* Bottom Center CTA Buttons */}
        <motion.div 
          className="flex justify-center pb-16 lg:pb-15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-x-6">
            <Link 
              href="/admissions"
              className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105"
              style={{ 
                backgroundColor: theme.secondary,
                color: theme.backgroundDark,
                boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
              }}
            >
              <span className="relative z-10">Enroll Now</span>
              <span 
                className="absolute inset-0 -z-10 translate-y-[105%] transition duration-300 group-hover:translate-y-0" 
                style={{ backgroundColor: theme.secondaryDark }}
              ></span>
            </Link>
            
            <Link 
              href="/about"
              className="group text-base font-semibold leading-6 flex items-center space-x-2 px-6 py-4 rounded-full border-2 transition-all transform-gpu hover:scale-105"
              style={{ 
                color: theme.text,
                borderColor: theme.alpha(theme.secondary, 0.3),
                backgroundColor: theme.alpha(colors.vanilla[400], 0.05)
              }}
            >
              <span>Learn more</span>
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 