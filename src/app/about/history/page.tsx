"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, Users, Award, Building2, Globe, Star, GraduationCap, Trophy, ArrowRight, Clock, MapPin, BookOpen, Lightbulb, Heart } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const timelineEvents = [
  {
    year: "1998",
    title: "Foundation",
    description: "Edu Land Schools founded with 45 students in a single campus",
    icon: Building2,
    color: colors.mint[300],
    achievements: ["First campus established", "45 founding students", "Cambridge curriculum adoption"]
  },
  {
    year: "2003",
    title: "First Expansion",
    description: "School grows to 200 students and receives Cambridge International School status",
    icon: Award,
    color: colors.mint[400],
    achievements: ["Cambridge accreditation", "200 students enrolled", "First science lab opened"]
  },
  {
    year: "2008",
    title: "Academic Excellence",
    description: "Achieves 100% IGCSE pass rate and opens boarding facilities",
    icon: Star,
    color: colors.mint[500],
    achievements: ["100% IGCSE success", "Boarding houses opened", "Sports complex completed"]
  },
  {
    year: "2013",
    title: "International Recognition",
    description: "Becomes IB World School and reaches 1,000 students",
    icon: Globe,
    color: colors.mint[600],
    achievements: ["IB World School status", "1,000 students enrolled", "International partnerships"]
  },
  {
    year: "2018",
    title: "Innovation Hub",
    description: "Opens STEM center and achieves 95% university acceptance rate",
    icon: Lightbulb,
    color: colors.mint[500],
    achievements: ["STEM center opened", "95% university acceptance", "Robotics program launched"]
  },
  {
    year: "2024",
    title: "Premier Status",
    description: "Over 2,500 students, 98% university acceptance, and global recognition",
    icon: Trophy,
    color: colors.mint[600],
    achievements: ["2,500+ students", "98% university acceptance", "50+ international awards"]
  }
];

const keyMilestones = [
  {
    title: "Student Growth",
    value: "2,500+",
    description: "From 45 to over 2,500 students",
    icon: Users,
    color: colors.mint[400]
  },
  {
    title: "Years of Excellence",
    value: "26",
    description: "Over two decades of educational leadership",
    icon: Calendar,
    color: colors.mint[500]
  },
  {
    title: "University Acceptance",
    value: "98%",
    description: "Graduates accepted to top universities",
    icon: GraduationCap,
    color: colors.mint[600]
  },
  {
    title: "International Awards",
    value: "50+",
    description: "Recognition for excellence",
    icon: Trophy,
    color: colors.mint[400]
  }
];

const founderStory = {
  name: "Dr. Margaret Adebayo",
  role: "Founder & Executive Chairman",
  image: "/images/testimonials/sarah.jpg", // Using existing image as placeholder
  story: "A Cambridge University alumna with a PhD in Educational Psychology, Dr. Adebayo previously served as Academic Director at prestigious international schools in London and Singapore before returning to Nigeria to establish Edu Land Schools.",
  achievements: [
    "PhD Educational Psychology (Cambridge)",
    "MEd Curriculum Development (Oxford)",
    "BSc Psychology (University of Lagos)",
    "30+ years educational leadership"
  ]
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutHistoryPage() {
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
                  <Clock className="h-4 w-4" style={{ color: theme.primary }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                  26 Years of Excellence
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Our Heritage & Journey
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 max-w-4xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                From a pioneering vision in 1998 to Nigeria's premier international school system, discover the remarkable journey that shaped Edu Land's legacy of educational excellence.
              </motion.p>

              {/* Key Milestones */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {keyMilestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div
                      key={milestone.title}
                      className="text-center p-4 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                      style={{ 
                        borderColor: theme.alpha(milestone.color, 0.2),
                        backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                        boxShadow: `0 2px 8px ${theme.alpha(milestone.color, 0.1)}`
                      }}
                    >
                      <div className="flex justify-center mb-3">
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: theme.alpha(milestone.color, 0.15) }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: milestone.color }} />
                        </div>
                      </div>
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: milestone.color }}
                      >
                        {milestone.value}
                      </div>
                      <div 
                        className="text-sm font-medium mb-1"
                        style={{ color: theme.text }}
                      >
                        {milestone.title}
                      </div>
                      <div 
                        className="text-xs"
                        style={{ color: theme.textMuted }}
                      >
                        {milestone.description}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our Journey Through Time
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                A timeline of key milestones that shaped Edu Land's evolution into a world-class educational institution
              </motion.p>
            </motion.div>

            <motion.div 
              className="relative"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
                style={{ backgroundColor: theme.alpha(theme.secondary, 0.2) }}
              />

              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={event.year}
                    variants={cardVariants}
                    className={`relative flex items-center mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-full border-4"
                        style={{ 
                          backgroundColor: theme.background,
                          borderColor: event.color,
                          boxShadow: `0 4px 12px ${theme.alpha(event.color, 0.3)}`
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <IconComponent className="h-6 w-6" style={{ color: event.color }} />
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                      <motion.div 
                        className="p-6 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                        style={{ 
                          borderColor: theme.alpha(event.color, 0.2),
                          backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                          boxShadow: `0 4px 12px ${theme.alpha(event.color, 0.1)}`
                        }}
                        whileHover={{ 
                          y: -8,
                          boxShadow: `0 20px 40px ${theme.alpha(event.color, 0.2)}`
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div 
                            className="text-2xl font-bold"
                            style={{ color: event.color }}
                          >
                            {event.year}
                          </div>
                          <div 
                            className="flex h-8 w-8 items-center justify-center rounded-full"
                            style={{ backgroundColor: theme.alpha(event.color, 0.15) }}
                          >
                            <IconComponent className="h-4 w-4" style={{ color: event.color }} />
                          </div>
                        </div>
                        
                        <h3 
                          className="text-xl font-bold mb-3"
                          style={{ color: theme.text }}
                        >
                          {event.title}
                        </h3>
                        
                        <p 
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: theme.textMuted }}
                        >
                          {event.description}
                        </p>

                        <ul className="space-y-1">
                          {event.achievements.map((achievement, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center space-x-2 text-xs"
                              style={{ color: theme.textMuted }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: event.color }}
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Founder Story */}
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
                The Visionary Behind Edu Land Schools
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Meet the founder whose vision and leadership transformed education in Nigeria
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div 
                  className="aspect-square rounded-2xl overflow-hidden border-2"
                  style={{ 
                    borderColor: theme.alpha(colors.mint[500], 0.2),
                    boxShadow: `0 10px 40px ${theme.alpha(colors.mint[500], 0.1)}`
                  }}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${founderStory.image}')`,
                      filter: 'brightness(0.9)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xl font-bold">{founderStory.name}</div>
                    <div className="text-sm opacity-90">{founderStory.role}</div>
                  </div>
                </div>
              </div>

              <div>
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: theme.text }}
                >
                  Dr. Margaret Adebayo
                </motion.h3>
                
                <motion.p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: theme.textMuted }}
                >
                  {founderStory.story}
                </motion.p>

                <motion.div className="space-y-3">
                  {founderStory.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div 
                        className="flex h-6 w-6 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.alpha(colors.mint[500], 0.15) }}
                      >
                        <BookOpen className="h-3 w-3" style={{ color: colors.mint[500] }} />
                      </div>
                      <span 
                        className="text-sm font-medium"
                        style={{ color: theme.text }}
                      >
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legacy Section */}
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
                Our Legacy & Impact
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                The lasting impact of Edu Land's commitment to educational excellence and innovation
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Educational Innovation",
                  description: "Pioneering new approaches to international education in Africa",
                  icon: Lightbulb,
                  color: colors.mint[400]
                },
                {
                  title: "Global Recognition",
                  description: "Setting standards for excellence in international education",
                  icon: Globe,
                  color: colors.mint[500]
                },
                {
                  title: "Community Impact",
                  description: "Transforming lives through quality education and leadership",
                  icon: Heart,
                  color: colors.mint[600]
                }
              ].map((legacy, index) => {
                const IconComponent = legacy.icon;
                return (
                  <motion.div
                    key={legacy.title}
                    variants={cardVariants}
                    className="group text-center p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(legacy.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(legacy.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(legacy.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(legacy.color, 0.15),
                          border: `2px solid ${theme.alpha(legacy.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(legacy.color, 0.25),
                          borderColor: legacy.color
                        }}
                      >
                        <IconComponent 
                          className="h-8 w-8" 
                          style={{ color: legacy.color }} 
                        />
                      </motion.div>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: theme.text }}
                    >
                      {legacy.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {legacy.description}
                    </p>
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
                Be Part of Our Continuing Story
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Join the next chapter of EduLand's journey as we continue to shape the future of education
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
                  <span>Explore Our Campus</span>
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