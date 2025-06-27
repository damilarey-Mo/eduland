"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { colors, theme } from '@/utils/colors';

const testimonials = [
  {
    id: 1,
    content: "EduLand has been transformative for my child's education. The teachers are incredibly dedicated, and the curriculum is both challenging and engaging. My daughter has developed not just academically but also in confidence and character.",
    author: {
      name: 'Sarah Johnson',
      role: 'Parent of 8th Grader',
      imageUrl: '/images/testimonials/sarah.jpg',
      rating: 5
    },
    category: 'Parent'
  },
  {
    id: 2,
    content: "As a graduate of EduLand, I can confidently say that my time here prepared me exceptionally well for university. The rigorous academics, supportive teachers, and diverse extracurricular activities gave me a strong foundation for success in higher education and beyond.",
    author: {
      name: 'Michael Chen',
      role: 'Alumni, Class of 2020',
      imageUrl: '/images/testimonials/michael.jpg',
      rating: 5
    },
    category: 'Alumni'
  },
  {
    id: 3,
    content: "What sets EduLand apart is their commitment to the whole child. My son has thrived in their innovative STEM program while also developing strong leadership skills through community service projects. The school truly delivers on its promise of balanced excellence.",
    author: {
      name: 'David Rodriguez',
      role: 'Parent of 11th Grader',
      imageUrl: '/images/testimonials/david.jpg',
      rating: 5
    },
    category: 'Parent'
  },
  {
    id: 4,
    content: "Teaching at EduLand has been the most rewarding experience of my career. The administration provides excellent support, and there's a true culture of collaboration among faculty. Most importantly, our students are curious, motivated, and a joy to teach.",
    author: {
      name: 'Dr. Emily Patel',
      role: 'Science Department Chair',
      imageUrl: '/images/testimonials/emily.jpg',
      rating: 5
    },
    category: 'Faculty'
  },
  {
    id: 5,
    content: "The personalized attention and mentorship I received at EduLand shaped my academic journey. The teachers went above and beyond to ensure every student reached their potential. I'm now pursuing my dream career thanks to the foundation built here.",
    author: {
      name: 'James Wilson',
      role: 'Alumni, Class of 2021',
      imageUrl: '/images/testimonials/james.jpg',
      rating: 5
    },
    category: 'Alumni'
  }
];

const categories = ['All', 'Parent', 'Alumni', 'Faculty'];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: theme.background }}>
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/4 transform opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${theme.alpha(theme.secondary, 0.3)} 0%, transparent 70%)`
          }}
        />
        <div 
          className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/3 transform opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${theme.alpha(colors.mint[400], 0.2)} 0%, transparent 70%)`
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
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
            What Our Community Says
          </motion.h2>
          <motion.p 
            className="text-lg leading-8 max-w-3xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Discover authentic experiences from parents, students, alumni, and faculty 
            who have been part of the EduLand journey.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.1) }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(0);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'hover:bg-white/50'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? theme.secondary : 'transparent',
                  color: selectedCategory === category ? theme.backgroundDark : theme.textMuted
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${activeIndex}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div 
                  className="relative rounded-3xl p-8 lg:p-12 border-2 transition-all duration-300 transform-gpu hover:scale-[1.02] hover:shadow-2xl"
                  style={{ 
                    borderColor: theme.alpha(theme.secondary, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                    boxShadow: `0 10px 40px ${theme.alpha(theme.secondary, 0.1)}`
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: theme.alpha(theme.secondary, 0.1) }}
                    >
                      <Quote 
                        size={24} 
                        style={{ color: theme.secondary }} 
                      />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(filteredTestimonials[activeIndex].author.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        size={20}
                        className="fill-current"
                        style={{ color: theme.secondary }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <motion.blockquote 
                    className="text-xl lg:text-2xl leading-relaxed mb-8 font-medium"
                    style={{ color: theme.text }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{filteredTestimonials[activeIndex].content}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2" style={{ borderColor: theme.secondary }}>
                      <Image
                        src={filteredTestimonials[activeIndex].author.imageUrl}
                        alt={filteredTestimonials[activeIndex].author.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div 
                        className="text-lg font-semibold"
                        style={{ color: theme.text }}
                      >
                        {filteredTestimonials[activeIndex].author.name}
                      </div>
                      <div 
                        className="text-sm"
                        style={{ color: theme.textMuted }}
                      >
                        {filteredTestimonials[activeIndex].author.role}
                      </div>
                      <div 
                        className="text-xs font-medium uppercase tracking-wider mt-1"
                        style={{ color: theme.secondary }}
                      >
                        {filteredTestimonials[activeIndex].category}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="rounded-full p-3 transition-all transform-gpu hover:scale-110"
                style={{ 
                  backgroundColor: theme.alpha(theme.secondary, 0.1),
                  border: `2px solid ${theme.alpha(theme.secondary, 0.3)}`
                }}
                whileHover={{ 
                  backgroundColor: theme.alpha(theme.secondary, 0.2),
                  borderColor: theme.secondary
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} style={{ color: theme.secondary }} />
              </motion.button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="h-2 rounded-full transition-all"
                    initial={false}
                    animate={{ 
                      width: index === activeIndex ? '2rem' : '0.5rem',
                      opacity: index === activeIndex ? 1 : 0.6,
                      backgroundColor: index === activeIndex ? theme.secondary : theme.alpha(theme.secondary, 0.3),
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      opacity: 0.9 
                    }}
                    style={{ 
                      boxShadow: index === activeIndex ? `0 0 8px ${theme.secondary}` : 'none'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="rounded-full p-3 transition-all transform-gpu hover:scale-110"
                style={{ 
                  backgroundColor: theme.alpha(theme.secondary, 0.1),
                  border: `2px solid ${theme.alpha(theme.secondary, 0.3)}`
                }}
                whileHover={{ 
                  backgroundColor: theme.alpha(theme.secondary, 0.2),
                  borderColor: theme.secondary
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} style={{ color: theme.secondary }} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Parent Satisfaction", value: "98%" },
            { label: "Alumni Success Rate", value: "96%" },
            { label: "Faculty Retention", value: "94%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
              style={{ 
                borderColor: theme.alpha(theme.secondary, 0.2),
                backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.1)}`
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