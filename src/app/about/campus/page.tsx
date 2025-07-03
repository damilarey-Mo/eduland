"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, MapPin, Users, Heart, Shield, Wifi, BookOpen, Microscope, Palette, Dumbbell, Waves, TreePine, Sun, Droplets, Recycle, ArrowRight } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const campusStats = [
  { label: "Campus Area", value: "25 acres", icon: MapPin, color: colors.mint[400] },
  { label: "Academic Buildings", value: "8 blocks", icon: Building2, color: colors.mint[500] },
  { label: "Classrooms", value: "120+", icon: BookOpen, color: colors.mint[600] },
  { label: "Students", value: "2,500+", icon: Users, color: colors.mint[400] }
];

const mainFacilities = [
  {
    title: "Academic Buildings",
    description: "8 purpose-built blocks with 120+ modern classrooms",
    icon: Building2,
    color: colors.mint[500],
    features: ["Smart classrooms with interactive displays", "Specialized subject laboratories", "Modern library with digital resources", "Technology integration throughout"]
  },
  {
    title: "Science Laboratories",
    description: "15 fully equipped laboratories for all sciences",
    icon: Microscope,
    color: colors.mint[600],
    features: ["Physics, Chemistry, Biology labs", "Advanced equipment and safety systems", "Research-grade instruments", "Student project spaces"]
  },
  {
    title: "Computer & Technology",
    description: "6 computer labs and digital learning centers",
    icon: Wifi,
    color: colors.mint[400],
    features: ["1:1 device program", "Coding and robotics labs", "3D printing center", "Virtual reality learning spaces"]
  },
  {
    title: "Libraries",
    description: "3 comprehensive libraries serving all age groups",
    icon: BookOpen,
    color: colors.mint[500],
    features: ["Extensive print and digital collections", "Study spaces and reading areas", "Research support services", "Multilingual resources"]
  }
];

const recreationalFacilities = [
  {
    title: "Sports Complex",
    description: "Olympic-size swimming pool and sports facilities",
    icon: Waves,
    color: colors.mint[400],
    features: ["Olympic-size swimming pool", "2 sports halls", "Tennis courts", "Athletics track"]
  },
  {
    title: "Arts & Creative",
    description: "Dedicated spaces for artistic expression",
    icon: Palette,
    color: colors.mint[500],
    features: ["Art studios and galleries", "Music rooms and practice spaces", "Drama theater", "Creative workshops"]
  },
  {
    title: "Physical Education",
    description: "Comprehensive sports and fitness facilities",
    icon: Dumbbell,
    color: colors.mint[600],
    features: ["Gymnasium and fitness center", "Outdoor sports fields", "Indoor courts", "Fitness training areas"]
  }
];

const residentialFacilities = [
  {
    title: "Boarding Houses",
    description: "4 modern boarding houses accommodating 400+ students",
    icon: Building2,
    color: colors.mint[500],
    features: ["Comfortable dormitories", "24/7 supervision", "Study areas and common rooms", "Modern amenities"]
  },
  {
    title: "Dining Facilities",
    description: "Multiple dining options with healthy meal plans",
    icon: Heart,
    color: colors.mint[400],
    features: ["Main cafeteria", "Special dietary accommodations", "Nutritionist-designed menus", "International cuisine options"]
  }
];

const sustainabilityInitiatives = [
  {
    title: "Green Energy",
    description: "60% of campus power from solar panels",
    icon: Sun,
    color: colors.mint[400],
    features: ["Solar panel installations", "Energy-efficient systems", "Smart lighting controls", "Renewable energy focus"]
  },
  {
    title: "Water Conservation",
    description: "Rainwater harvesting and recycling systems",
    icon: Droplets,
    color: colors.mint[500],
    features: ["Rainwater collection", "Water recycling systems", "Efficient irrigation", "Conservation education"]
  },
  {
    title: "Waste Management",
    description: "Comprehensive recycling and composting programs",
    icon: Recycle,
    color: colors.mint[600],
    features: ["Recycling stations", "Composting facilities", "Waste reduction programs", "Environmental education"]
  },
  {
    title: "Green Spaces",
    description: "40% of campus dedicated to gardens and recreation",
    icon: TreePine,
    color: colors.mint[400],
    features: ["Landscaped gardens", "Recreational areas", "Environmental projects", "Biodiversity conservation"]
  }
];

const campusFeatures = [
  {
    title: "Campus-Wide WiFi",
    description: "High-speed internet access in all areas",
    icon: Wifi,
    color: colors.mint[400]
  },
  {
    title: "Security Systems",
    description: "24/7 campus security and monitoring",
    icon: Shield,
    color: colors.mint[500]
  },
  {
    title: "Medical Center",
    description: "On-campus health services and emergency care",
    icon: Heart,
    color: colors.mint[600]
  },
  {
    title: "Transportation",
    description: "School bus services and parking facilities",
    icon: MapPin,
    color: colors.mint[400]
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

export default function AboutCampusPage() {
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
                  <Building2 className="h-4 w-4" style={{ color: theme.primary }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                  State-of-the-Art Campus
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Our Campus & Facilities
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 max-w-4xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                A 25-acre campus designed for excellence, innovation, and sustainability, providing students with world-class learning environments and modern facilities.
              </motion.p>

              {/* Campus Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {campusStats.map((stat) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                      style={{ 
                        borderColor: theme.alpha(stat.color, 0.2),
                        backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                        boxShadow: `0 2px 8px ${theme.alpha(stat.color, 0.1)}`
                      }}
                    >
                      <div className="flex justify-center mb-3">
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: theme.alpha(stat.color, 0.15) }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: stat.color }} />
                        </div>
                      </div>
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: theme.textMuted }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Facilities */}
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
                Academic Facilities
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Purpose-built facilities designed to support innovative learning and academic excellence
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {mainFacilities.map((facility) => {
                const IconComponent = facility.icon;
                return (
                  <motion.div
                    key={facility.title}
                    variants={cardVariants}
                    className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(facility.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(facility.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(facility.color, 0.2)}`
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: theme.alpha(facility.color, 0.15),
                            border: `2px solid ${theme.alpha(facility.color, 0.3)}`
                          }}
                          whileHover={{ 
                            backgroundColor: theme.alpha(facility.color, 0.25),
                            borderColor: facility.color
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: facility.color }} 
                          />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-xl font-bold mb-3"
                          style={{ color: theme.text }}
                        >
                          {facility.title}
                        </h3>
                        <p 
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: theme.textMuted }}
                        >
                          {facility.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {facility.features.map((feature, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center space-x-2 text-xs"
                              style={{ color: theme.textMuted }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: facility.color }}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Recreational Facilities */}
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
                Recreational & Sports Facilities
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Comprehensive facilities for physical development, artistic expression, and recreational activities
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {recreationalFacilities.map((facility) => {
                const IconComponent = facility.icon;
                return (
                  <motion.div
                    key={facility.title}
                    variants={cardVariants}
                    className="group text-center p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(facility.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(facility.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(facility.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(facility.color, 0.15),
                          border: `2px solid ${theme.alpha(facility.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(facility.color, 0.25),
                          borderColor: facility.color
                        }}
                      >
                        <IconComponent 
                          className="h-8 w-8" 
                          style={{ color: facility.color }} 
                        />
                      </motion.div>
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: theme.text }}
                    >
                      {facility.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: theme.textMuted }}
                    >
                      {facility.description}
                    </p>
                    
                    <ul className="space-y-2 text-left">
                      {facility.features.map((feature, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center space-x-2 text-xs"
                          style={{ color: theme.textMuted }}
                        >
                          <div 
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: facility.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Residential Facilities */}
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
                Residential & Support Facilities
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Comfortable and supportive living environments for our boarding students
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {residentialFacilities.map((facility) => {
                const IconComponent = facility.icon;
                return (
                  <motion.div
                    key={facility.title}
                    variants={cardVariants}
                    className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(facility.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(facility.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(facility.color, 0.2)}`
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: theme.alpha(facility.color, 0.15),
                            border: `2px solid ${theme.alpha(facility.color, 0.3)}`
                          }}
                          whileHover={{ 
                            backgroundColor: theme.alpha(facility.color, 0.25),
                            borderColor: facility.color
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: facility.color }} 
                          />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-xl font-bold mb-3"
                          style={{ color: theme.text }}
                        >
                          {facility.title}
                        </h3>
                        <p 
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: theme.textMuted }}
                        >
                          {facility.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {facility.features.map((feature, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center space-x-2 text-xs"
                              style={{ color: theme.textMuted }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: facility.color }}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Sustainability Initiatives */}
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
                Sustainability & Green Initiatives
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Our commitment to environmental responsibility and sustainable practices
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {sustainabilityInitiatives.map((initiative) => {
                const IconComponent = initiative.icon;
                return (
                  <motion.div
                    key={initiative.title}
                    variants={cardVariants}
                    className="group text-center p-6 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(initiative.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(initiative.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(initiative.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(initiative.color, 0.15),
                          border: `2px solid ${theme.alpha(initiative.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(initiative.color, 0.25),
                          borderColor: initiative.color
                        }}
                      >
                        <IconComponent 
                          className="h-6 w-6" 
                          style={{ color: initiative.color }} 
                        />
                      </motion.div>
                    </div>
                    
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: theme.text }}
                    >
                      {initiative.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: theme.textMuted }}
                    >
                      {initiative.description}
                    </p>
                    
                    <ul className="space-y-1 text-left">
                      {initiative.features.slice(0, 2).map((feature, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center space-x-2 text-xs"
                          style={{ color: theme.textMuted }}
                        >
                          <div 
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: initiative.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Campus Features */}
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
                Campus Features & Services
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Additional amenities and services that enhance the learning experience
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {campusFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={cardVariants}
                    className="group flex items-center space-x-4 p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(feature.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                      boxShadow: `0 2px 8px ${theme.alpha(feature.color, 0.1)}`
                    }}
                    whileHover={{ 
                      boxShadow: `0 8px 25px ${theme.alpha(feature.color, 0.2)}`
                    }}
                  >
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                      style={{ backgroundColor: theme.alpha(feature.color, 0.15) }}
                    >
                      <IconComponent className="h-5 w-5" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h3 
                        className="text-sm font-medium mb-1"
                        style={{ color: theme.text }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-xs"
                        style={{ color: theme.textMuted }}
                      >
                        {feature.description}
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
                Experience Our Campus
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Schedule a campus tour to see our world-class facilities and experience the Edu Land difference firsthand
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
                  <span>Schedule a Campus Tour</span>
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