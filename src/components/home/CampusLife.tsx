"use client";

import { motion } from 'framer-motion';
import { Building2, Users, Trophy, Music, ArrowRight } from 'lucide-react';
import { colors, theme } from '@/utils/colors';

const campusHighlights = [
  {
    id: 1,
    title: "Modern Facilities",
    subtitle: "State-of-the-Art Infrastructure",
    description: "Cutting-edge laboratories, smart classrooms, and world-class sports facilities that provide the perfect environment for learning and growth.",
    features: ["Smart Classrooms", "Science Labs", "Sports Complex", "Library"],
    icon: Building2,
    color: colors.mint[400],
    image: "/images/school-building.jpg"
  },
  {
    id: 2,
    title: "Student Activities",
    subtitle: "Clubs & Organizations",
    description: "Over 50 student-led clubs and organizations covering academics, arts, technology, and community service.",
    features: ["Academic Clubs", "Arts & Culture", "Tech Innovation", "Community Service"],
    icon: Users,
    color: colors.mint[500],
    image: "/images/students-1.jpg"
  },
  {
    id: 3,
    title: "Sports Achievements",
    subtitle: "Excellence in Athletics",
    description: "Championship-winning teams across multiple sports with state and national level recognition.",
    features: ["State Champions", "National Titles", "Individual Records", "Team Spirit"],
    icon: Trophy,
    color: colors.mint[600],
    image: "/images/athletics.jpg"
  },
  {
    id: 4,
    title: "Cultural Events",
    subtitle: "Celebrations & Performances",
    description: "Annual cultural festivals, music concerts, drama performances, and international celebrations.",
    features: ["Cultural Festivals", "Music Concerts", "Drama Performances", "International Day"],
    icon: Music,
    color: colors.mint[300],
    image: "/images/celevration.jpg"
  }
];

export default function CampusLife() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
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
            Campus Life Highlights
          </motion.h2>
          <motion.p 
            className="text-lg leading-8 max-w-3xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Experience the vibrant campus life at Edu Land with modern facilities, diverse student activities, 
            outstanding sports achievements, and rich cultural events that shape well-rounded individuals.
          </motion.p>
        </motion.div>

        {/* Campus Highlights Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {campusHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={highlight.id}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                style={{ 
                  borderColor: theme.alpha(highlight.color, 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                  boxShadow: `0 4px 12px ${theme.alpha(highlight.color, 0.1)}`
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: `0 20px 40px ${theme.alpha(highlight.color, 0.2)}`
                }}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${highlight.image})`,
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: theme.alpha(highlight.color, 0.9),
                        border: `2px solid ${highlight.color}`
                      }}
                    >
                      <IconComponent 
                        className="h-6 w-6" 
                        style={{ color: 'white' }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: theme.text }}
                    >
                      {highlight.title}
                    </h3>
                    <p 
                      className="text-sm font-semibold mb-3"
                      style={{ color: highlight.color }}
                    >
                      {highlight.subtitle}
                    </p>
                    <p 
                      className="text-base leading-relaxed mb-6"
                      style={{ color: theme.textMuted }}
                    >
                      {highlight.description}
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {highlight.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                        style={{ color: theme.textSecondary }}
                      >
                        <div 
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: highlight.color }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    className="inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-300 group-hover:scale-105"
                    style={{ color: highlight.color }}
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore more</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, transparent 50%, ${highlight.color} 50%)`
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all transform-gpu hover:scale-105"
            style={{ 
              backgroundColor: theme.secondary,
              color: theme.backgroundDark,
              boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
            }}
            whileHover={{ 
              boxShadow: `0 8px 25px ${theme.alpha(theme.secondary, 0.4)}`
            }}
          >
            <span>Experience Campus Life</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 