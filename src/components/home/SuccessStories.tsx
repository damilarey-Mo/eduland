"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, GraduationCap, Trophy, Star } from 'lucide-react';
import { colors, theme } from '@/utils/colors';

const successStories = [
  {
    id: 1,
    type: "University Acceptance",
    title: "Harvard University",
    subtitle: "Class of 2024",
    description: "Sarah Johnson accepted to Harvard University with full scholarship for Computer Science",
    icon: GraduationCap,
    color: colors.mint[400],
    image: "/images/students-1.jpg"
  },
  {
    id: 2,
    type: "Alumni Achievement",
    title: "Tech Entrepreneur",
    subtitle: "Class of 2020",
    description: "Michael Chen founded successful AI startup, raised $5M in funding",
    icon: Star,
    color: colors.mint[500],
    image: "/images/student in lab.jpg"
  },
  {
    id: 3,
    type: "Award Recognition",
    title: "National Science Award",
    subtitle: "2024 Winner",
    description: "Emily Rodriguez won prestigious National Science Competition for innovative research",
    icon: Award,
    color: colors.mint[600],
    image: "/images/science-fair.jpg"
  },
  {
    id: 4,
    type: "Competition Victory",
    title: "International Math Olympiad",
    subtitle: "Gold Medalist",
    description: "David Kim secured gold medal at International Mathematics Olympiad",
    icon: Trophy,
    color: colors.mint[300],
    image: "/images/students-2.jpg"
  },
  {
    id: 5,
    type: "University Acceptance",
    title: "Stanford University",
    subtitle: "Class of 2024",
    description: "James Wilson accepted to Stanford University for Engineering",
    icon: GraduationCap,
    color: colors.mint[400],
    image: "/images/hero-students.jpg"
  },
  {
    id: 6,
    type: "Alumni Achievement",
    title: "Medical Research",
    subtitle: "Class of 2019",
    description: "Lisa Park published breakthrough research in medical journal",
    icon: Star,
    color: colors.mint[500],
    image: "/images/student at science fair.jpg"
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: theme.background }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
            style={{ color: theme.text }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="text-lg leading-8 max-w-3xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Celebrating our students' achievements in university acceptances, alumni success, 
            awards, and competition victories that showcase the excellence of EduLand education.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            style={{ 
              boxShadow: `0 20px 40px ${theme.alpha(theme.secondary, 0.15)}`
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 h-full w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative h-full w-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${successStories[currentIndex].image})`,
                      filter: 'brightness(0.7)'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center">
                    <div className="max-w-2xl px-8 lg:px-12">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-3 mb-4"
                      >
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: theme.alpha(successStories[currentIndex].color, 0.2) }}
                        >
                          {(() => {
                            const IconComponent = successStories[currentIndex].icon;
                            return <IconComponent 
                              className="h-6 w-6" 
                              style={{ color: successStories[currentIndex].color }} 
                            />;
                          })()}
                        </div>
                        <span 
                          className="text-sm font-semibold uppercase tracking-wider"
                          style={{ color: successStories[currentIndex].color }}
                        >
                          {successStories[currentIndex].type}
                        </span>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-3xl lg:text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {successStories[currentIndex].title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-white/80 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {successStories[currentIndex].subtitle}
                      </motion.p>
                      
                      <motion.p 
                        className="text-white/90 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {successStories[currentIndex].description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
              <button 
                onClick={goToPrevious}
                className="rounded-full p-3 bg-black/30 text-white hover:bg-black/50 hover:scale-110 transition-all transform-gpu backdrop-blur-sm"
                style={{ border: `2px solid ${theme.secondary}` }}
                aria-label="Previous story"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={goToNext}
                className="rounded-full p-3 bg-black/30 text-white hover:bg-black/50 hover:scale-110 transition-all transform-gpu backdrop-blur-sm"
                style={{ border: `2px solid ${theme.secondary}` }}
                aria-label="Next story"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
              {successStories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="h-2 rounded-full transition-all"
                  initial={false}
                  animate={{ 
                    width: index === currentIndex ? '2rem' : '0.5rem',
                    opacity: index === currentIndex ? 1 : 0.6,
                    backgroundColor: index === currentIndex ? theme.secondary : 'white',
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    opacity: 0.9 
                  }}
                  style={{ 
                    boxShadow: index === currentIndex ? `0 0 8px ${theme.secondary}` : 'none'
                  }}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Top University Acceptances", value: "98%" },
            { label: "Alumni Success Rate", value: "95%" },
            { label: "Awards & Recognitions", value: "150+" },
            { label: "Competition Victories", value: "200+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
              style={{ 
                borderColor: theme.alpha(theme.secondary, 0.2),
                backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                boxShadow: `0 2px 8px ${theme.alpha(theme.secondary, 0.1)}`
              }}
              whileHover={{ 
                boxShadow: `0 8px 25px ${theme.alpha(theme.secondary, 0.2)}`
              }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: theme.secondary }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: theme.textMuted }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 