"use client";

import { motion } from 'framer-motion';
import { Baby, GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';
import { colors, theme } from '@/utils/colors';

const educationLevels = [
  {
    title: "Early Childhood",
    subtitle: "Ages 3-5 years",
    tagline: "First Steps to Lifelong Learning",
    features: ["Play-based learning", "Montessori approach", "Social development"],
    icon: Baby,
    color: colors.mint[300]
  },
  {
    title: "Elementary School",
    subtitle: "Grades K-5 (Ages 5-11)",
    tagline: "Building Strong Foundations",
    features: ["Common Core curriculum", "STEM focus", "Reading & Math"],
    icon: BookOpen,
    color: colors.mint[400]
  },
  {
    title: "Middle School",
    subtitle: "Grades 6-8 (Ages 11-14)",
    tagline: "Developing Critical Thinkers",
    features: ["Core subjects", "Elective courses", "Leadership programs"],
    icon: GraduationCap,
    color: colors.mint[500]
  },
  {
    title: "High School",
    subtitle: "Grades 9-12 (Ages 14-18)",
    tagline: "University & Career Ready",
    features: ["College prep courses", "AP/IB programs", "Career counseling"],
    icon: Users,
    color: colors.mint[600]
  }
];

export default function EducationLevels() {
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



  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-20 -mt-10 lg:py-24" style={{ backgroundColor: theme.background }}>
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
            Education Levels Overview
          </motion.h2>
          <motion.p 
            className="text-lg leading-8 max-w-3xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Our comprehensive educational journey from early childhood to university preparation, 
            designed to nurture every stage of your child&apos;s development.
          </motion.p>
        </motion.div>

        {/* Education Levels Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {educationLevels.map((level) => {
            const IconComponent = level.icon;
            return (
              <motion.div
                key={level.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                style={{ 
                  borderColor: theme.alpha(level.color, 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                  boxShadow: `0 4px 12px ${theme.alpha(level.color, 0.1)}`
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: `0 20px 40px ${theme.alpha(level.color, 0.2)}`
                }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.alpha(level.color, 0.05)} 0%, ${theme.alpha(colors.vanilla[400], 0.02)} 100%)`
                  }}
                />

                <div className="relative p-6 lg:p-8">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: theme.alpha(level.color, 0.15),
                        border: `2px solid ${theme.alpha(level.color, 0.3)}`
                      }}
                      whileHover={{ 
                        backgroundColor: theme.alpha(level.color, 0.25),
                        borderColor: level.color
                      }}
                    >
                      <IconComponent 
                        className="h-8 w-8" 
                        style={{ color: level.color }} 
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: theme.text }}
                    >
                      {level.title}
                    </h3>
                    <p 
                      className="text-sm font-medium mb-3"
                      style={{ color: theme.primary }}
                    >
                      {level.subtitle}
                    </p>
                    <p 
                      className="text-lg font-semibold mb-4"
                      style={{ color: level.color }}
                    >
                      {level.tagline}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {level.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-sm flex items-center justify-center space-x-2"
                          style={{ color: theme.textMuted }}
                        >
                          <div 
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: level.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <motion.button
                      className="inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-300 group-hover:scale-105"
                      style={{ color: level.color }}
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn more</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, transparent 50%, ${level.color} 50%)`
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
            <span>Explore All Programs</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 