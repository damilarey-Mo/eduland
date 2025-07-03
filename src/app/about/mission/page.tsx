"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Star, Globe, Users, Award, CheckCircle, BookOpen, Target, Heart, Lightbulb, Shield, ArrowRight } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const missionElements = [
  {
    title: "Intellectual Curiosity",
    description: "Fostering a lifelong love of learning and critical thinking skills",
    icon: Lightbulb,
    color: colors.mint[400]
  },
  {
    title: "Moral Uprightness",
    description: "Building character through values-based education and ethical leadership",
    icon: Shield,
    color: colors.mint[500]
  },
  {
    title: "Global Competence",
    description: "Preparing students to thrive in an interconnected world",
    icon: Globe,
    color: colors.mint[600]
  },
  {
    title: "Community Impact",
    description: "Empowering students to contribute positively to society",
    icon: Heart,
    color: colors.mint[300]
  }
];

const visionGoals = [
  {
    title: "Academic Excellence",
    description: "Setting the highest standards for educational achievement",
    icon: Award,
    color: colors.mint[500]
  },
  {
    title: "Transformational Leadership",
    description: "Developing leaders who create positive change",
    icon: Target,
    color: colors.mint[600]
  },
  {
    title: "Global Recognition",
    description: "Becoming Africa's premier international school system",
    icon: Star,
    color: colors.mint[400]
  }
];

const educationalApproach = [
  {
    title: "Holistic Development",
    description: "Nurturing the whole child - mind, body, and spirit",
    icon: Users,
    color: colors.mint[400]
  },
  {
    title: "Rigorous Standards",
    description: "Maintaining excellence in academic instruction",
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Character Formation",
    description: "Integrating values education into every aspect",
    icon: CheckCircle,
    color: colors.mint[600]
  },
  {
    title: "Cultural Awareness",
    description: "Celebrating diversity and global perspectives",
    icon: Globe,
    color: colors.mint[300]
  }
];

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

export default function AboutMissionPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
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
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border mb-8"
                style={{ 
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.15),
                  borderColor: theme.alpha(theme.secondary, 0.3),
                  boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.2)}`
                }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full" 
                  style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.3) }}>
                  <Target className="h-4 w-4" style={{ color: theme.primary }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                  Our Purpose & Direction
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Mission & Vision
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 max-w-4xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                The guiding principles that shape our educational philosophy and drive our commitment to excellence
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                Our Mission
              </motion.h2>
              <motion.div 
                className="max-w-4xl mx-auto p-8 rounded-3xl border-2"
                style={{ 
                  borderColor: theme.alpha(colors.mint[500], 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                  boxShadow: `0 10px 40px ${theme.alpha(colors.mint[500], 0.1)}`
                }}
              >
                <blockquote 
                  className="text-2xl lg:text-3xl italic font-medium mb-6 leading-relaxed"
                  style={{ color: colors.mint[500] }}
                >
                  "To nurture intellectually curious, morally upright, and globally competent leaders who contribute positively to their communities and the world."
                </blockquote>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  We achieve this by providing a holistic education that combines rigorous academic standards with character development, critical thinking, and cultural awareness. Our students don't just learn facts; they develop the skills, values, and mindset needed to thrive in an interconnected world.
                </p>
              </motion.div>
            </motion.div>

            {/* Mission Elements */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {missionElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <motion.div
                    key={element.title}
                    variants={cardVariants}
                    className="group text-center p-6 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(element.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(element.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(element.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(element.color, 0.15),
                          border: `2px solid ${theme.alpha(element.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(element.color, 0.25),
                          borderColor: element.color
                        }}
                      >
                        <IconComponent 
                          className="h-6 w-6" 
                          style={{ color: element.color }} 
                        />
                      </motion.div>
                    </div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: theme.text }}
                    >
                      {element.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {element.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                Our Vision
              </motion.h2>
              <motion.div 
                className="max-w-4xl mx-auto p-8 rounded-3xl border-2"
                style={{ 
                  borderColor: theme.alpha(colors.mint[600], 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                  boxShadow: `0 10px 40px ${theme.alpha(colors.mint[600], 0.1)}`
                }}
              >
                <blockquote 
                  className="text-2xl lg:text-3xl italic font-medium mb-6 leading-relaxed"
                  style={{ color: colors.mint[600] }}
                >
                  "To be Africa's leading international school system, setting the standard for educational excellence and producing graduates who become transformational leaders in their chosen fields."
                </blockquote>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  We envision a future where Edu Land graduates are recognized globally for their academic prowess, ethical leadership, and positive impact on society. Our vision drives every decision we make, from curriculum design to faculty recruitment to facility development.
                </p>
              </motion.div>
            </motion.div>

            {/* Vision Goals */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {visionGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <motion.div
                    key={goal.title}
                    variants={cardVariants}
                    className="group text-center p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(goal.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(goal.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(goal.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(goal.color, 0.15),
                          border: `2px solid ${theme.alpha(goal.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(goal.color, 0.25),
                          borderColor: goal.color
                        }}
                      >
                        <IconComponent 
                          className="h-8 w-8" 
                          style={{ color: goal.color }} 
                        />
                      </motion.div>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: theme.text }}
                    >
                      {goal.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {goal.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Educational Approach */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                Our Educational Approach
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                How we bring our mission and vision to life through comprehensive, values-driven education
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {educationalApproach.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <motion.div
                    key={approach.title}
                    variants={cardVariants}
                    className="group flex items-start space-x-6 p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(approach.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(approach.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(approach.color, 0.2)}`
                    }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(approach.color, 0.15),
                          border: `2px solid ${theme.alpha(approach.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(approach.color, 0.25),
                          borderColor: approach.color
                        }}
                      >
                        <IconComponent 
                          className="h-8 w-8" 
                          style={{ color: approach.color }} 
                        />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold mb-3"
                        style={{ color: theme.text }}
                      >
                        {approach.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: theme.textMuted }}
                      >
                        {approach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Join Our Mission
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Be part of our journey to shape the next generation of global leaders and innovators
              </motion.p>
              <motion.button 
                className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105"
                style={{ 
                  backgroundColor: theme.secondary,
                  color: theme.backgroundDark,
                  boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Learn More About Our Programs</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span 
                  className="absolute inset-0 -z-10 translate-y-[105%] transition duration-300 group-hover:translate-y-0" 
                  style={{ backgroundColor: theme.secondaryDark }}
                ></span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 