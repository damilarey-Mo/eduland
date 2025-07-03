"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, FileText, GraduationCap, Clock, CheckCircle2, ArrowRight, DollarSign, Trophy, Video, Users, Award, Building2, Phone, Mail, MapPin } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const steps = [
  {
    name: "Application Submission",
    description: "Complete and submit the online application form along with required documents.",
    icon: FileText,
    color: colors.mint[400],
    duration: "1-2 days"
  },
  {
    name: "Assessment",
    description: "Students will be assessed through age-appropriate tests and interviews.",
    icon: GraduationCap,
    color: colors.mint[500],
    duration: "1 week"
  },
  {
    name: "Documentation",
    description: "Submit all required documents including previous school records and certificates.",
    icon: CheckCircle2,
    color: colors.mint[600],
    duration: "3-5 days"
  },
  {
    name: "Admission Decision",
    description: "Receive admission decision and complete enrollment formalities.",
    icon: Clock,
    color: colors.mint[300],
    duration: "1-2 weeks"
  },
];

const requirements = [
  {
    item: "Completed application form",
    icon: FileText,
    color: colors.mint[400]
  },
  {
    item: "Birth certificate",
    icon: FileText,
    color: colors.mint[400]
  },
  {
    item: "Previous school records",
    icon: GraduationCap,
    color: colors.mint[500]
  },
  {
    item: "Passport-sized photographs",
    icon: Users,
    color: colors.mint[300]
  },
  {
    item: "Transfer certificate (if applicable)",
    icon: FileText,
    color: colors.mint[400]
  },
  {
    item: "Medical records",
    icon: CheckCircle2,
    color: colors.mint[600]
  },
  {
    item: "Parent/Guardian identification",
    icon: Users,
    color: colors.mint[300]
  },
  {
    item: "Proof of residence",
    icon: MapPin,
    color: colors.mint[500]
  },
];

const importantDates = [
  {
    date: "January 15, 2024",
    event: "Application period begins",
    status: "Upcoming",
    color: colors.mint[400]
  },
  {
    date: "March 31, 2024",
    event: "Application deadline",
    status: "Critical",
    color: colors.mint[600]
  },
  {
    date: "April 15-30, 2024",
    event: "Assessment period",
    status: "Active",
    color: colors.mint[500]
  },
  {
    date: "May 15, 2024",
    event: "Admission decisions announced",
    status: "Important",
    color: colors.mint[400]
  },
  {
    date: "June 1-15, 2024",
    event: "Enrollment period",
    status: "Final",
    color: colors.mint[300]
  },
];

const feeStructure = [
  {
    level: "Elementary School (K-5)",
    annualFee: "$12,000",
    additionalFees: "Activity Fee: $500, Technology Fee: $300",
    features: ["Small class sizes", "Individual attention", "Foundation building"],
    color: colors.mint[300]
  },
  {
    level: "Middle School (6-8)",
    annualFee: "$15,000",
    additionalFees: "Activity Fee: $600, Technology Fee: $400",
    features: ["Specialized subjects", "Leadership programs", "STEM focus"],
    color: colors.mint[400]
  },
  {
    level: "High School (9-12)",
    annualFee: "$18,000",
    additionalFees: "Activity Fee: $700, Technology Fee: $500",
    features: ["College preparation", "Advanced courses", "Career guidance"],
    color: colors.mint[500]
  },
];

const scholarships = [
  {
    name: "Academic Excellence Scholarship",
    description: "Full or partial tuition waiver based on academic merit",
    requirements: "Minimum 3.8 GPA, Outstanding test scores",
    coverage: "Up to 100%",
    color: colors.mint[600]
  },
  {
    name: "Merit Scholarship",
    description: "Partial tuition waiver for exceptional students",
    requirements: "Minimum 3.5 GPA, Strong extracurricular involvement",
    coverage: "Up to 50%",
    color: colors.mint[500]
  },
  {
    name: "Need-Based Financial Aid",
    description: "Financial assistance based on family circumstances",
    requirements: "Demonstrated financial need, Complete application",
    coverage: "Up to 75%",
    color: colors.mint[400]
  },
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Admissions() {
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
                  <GraduationCap className="h-4 w-4" style={{ color: theme.primary }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                  Admissions Open for 2025-26 Session
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Join Our Community of Learners
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Begin your journey at Edu Land Schools, where we nurture academic excellence, character development, and leadership skills in a supportive and innovative environment.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105"
                  style={{ 
                    backgroundColor: theme.secondary,
                    color: theme.backgroundDark,
                    boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
                  }}
                >
                  <span className="relative z-10">Start Application</span>
                  <span 
                    className="absolute inset-0 -z-10 translate-y-[105%] transition duration-300 group-hover:translate-y-0" 
                    style={{ backgroundColor: theme.secondaryDark }}
                  ></span>
                </button>
                
                <button className="group text-base font-semibold leading-6 flex items-center space-x-2 px-6 py-4 rounded-full border-2 transition-all transform-gpu hover:scale-105"
                  style={{ 
                    color: theme.text,
                    borderColor: theme.alpha(theme.secondary, 0.3),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.05)
                  }}
                >
                  <span>Schedule a Visit</span>
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
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
              Application Process
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
              Follow these simple steps to begin your journey at Edu Land Schools
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                <motion.div 
                  key={step.name}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                    style={{ 
                      borderColor: theme.alpha(step.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(step.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(step.color, 0.2)}`
                    }}
                >
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <motion.div 
                          className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: theme.alpha(step.color, 0.15),
                            border: `2px solid ${theme.alpha(step.color, 0.3)}`
                          }}
                          whileHover={{ 
                            backgroundColor: theme.alpha(step.color, 0.25),
                            borderColor: step.color
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: step.color }} 
                          />
                        </motion.div>
                      </div>

                      <div className="text-center">
                        <h3 
                          className="text-xl font-bold mb-3"
                          style={{ color: theme.text }}
                        >
                          {step.name}
                        </h3>
                        <p 
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: theme.textMuted }}
                        >
                          {step.description}
                        </p>
                        <div 
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: step.color }}
                        >
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Step number */}
                    <div 
                      className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ 
                        backgroundColor: step.color,
                        color: 'white'
                      }}
                    >
                      {index + 1}
                    </div>
                  </motion.div>
                );
              })}
                </motion.div>
          </div>
        </section>

        {/* Requirements */}
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
                Required Documents
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Prepare these documents for your application
              </motion.p>
                </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <motion.div
                    key={req.item}
                    variants={cardVariants}
                    className="group flex items-center space-x-4 p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(req.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                      boxShadow: `0 2px 8px ${theme.alpha(req.color, 0.1)}`
                    }}
                    whileHover={{ 
                      boxShadow: `0 8px 25px ${theme.alpha(req.color, 0.2)}`
                    }}
                  >
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-full flex-shrink-0"
                      style={{ backgroundColor: theme.alpha(req.color, 0.15) }}
                    >
                      <IconComponent className="h-6 w-6" style={{ color: req.color }} />
            </div>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: theme.text }}
                    >
                      {req.item}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Fee Structure */}
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
              Fee Structure
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
              Transparent and comprehensive fee structure for all grade levels
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {feeStructure.map((fee, index) => (
                <motion.div
                  key={fee.level}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                  style={{ 
                    borderColor: theme.alpha(fee.color, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                    boxShadow: `0 4px 12px ${theme.alpha(fee.color, 0.1)}`
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: `0 20px 40px ${theme.alpha(fee.color, 0.2)}`
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.alpha(fee.color, 0.15) }}
                      >
                        <DollarSign className="h-6 w-6" style={{ color: fee.color }} />
                      </div>
                      <h3 
                        className="text-xl font-bold"
                        style={{ color: theme.text }}
                      >
                        {fee.level}
                      </h3>
                    </div>
                    
                    <div 
                      className="text-3xl font-bold mb-4"
                      style={{ color: fee.color }}
                    >
                      {fee.annualFee}
                    </div>
                    
                    <p 
                      className="text-sm mb-6"
                      style={{ color: theme.textMuted }}
                    >
                      {fee.additionalFees}
                    </p>

                    <ul className="space-y-2">
                      {fee.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm"
                          style={{ color: theme.textSecondary }}
                        >
                          <div 
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: fee.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, transparent 50%, ${fee.color} 50%)`
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scholarships */}
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
              Scholarship Programs
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
              We offer various scholarship opportunities to support exceptional students
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.name}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                  style={{ 
                    borderColor: theme.alpha(scholarship.color, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                    boxShadow: `0 4px 12px ${theme.alpha(scholarship.color, 0.1)}`
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: `0 20px 40px ${theme.alpha(scholarship.color, 0.2)}`
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.alpha(scholarship.color, 0.15) }}
                      >
                        <Trophy className="h-6 w-6" style={{ color: scholarship.color }} />
                      </div>
                      <h3 
                        className="text-xl font-bold"
                        style={{ color: theme.text }}
                      >
                        {scholarship.name}
                      </h3>
                    </div>
                    
                    <div 
                      className="text-2xl font-bold mb-4"
                      style={{ color: scholarship.color }}
                    >
                      {scholarship.coverage}
                    </div>
                    
                    <p 
                      className="text-sm mb-6"
                      style={{ color: theme.textMuted }}
                    >
                      {scholarship.description}
                    </p>

                    <div>
                      <p 
                        className="text-sm font-semibold mb-2"
                        style={{ color: theme.textSecondary }}
                      >
                        Requirements:
                      </p>
                      <p 
                        className="text-sm"
                        style={{ color: theme.textMuted }}
                      >
                        {scholarship.requirements}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, transparent 50%, ${scholarship.color} 50%)`
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Important Dates */}
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
                Important Dates
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Mark these dates in your calendar
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {importantDates.map((date, index) => (
                <motion.div
                  key={date.event}
                  variants={cardVariants}
                  className="group flex items-center space-x-6 p-6 rounded-2xl border-2 transition-all transform-gpu hover:scale-[1.02] hover:shadow-xl"
                  style={{ 
                    borderColor: theme.alpha(date.color, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                    boxShadow: `0 4px 12px ${theme.alpha(date.color, 0.1)}`
                  }}
                  whileHover={{ 
                    boxShadow: `0 8px 25px ${theme.alpha(date.color, 0.2)}`
                  }}
                >
                  <div 
                    className="flex h-16 w-16 items-center justify-center rounded-full flex-shrink-0"
                    style={{ backgroundColor: theme.alpha(date.color, 0.15) }}
                  >
                    <Calendar className="h-8 w-8" style={{ color: date.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-lg font-semibold mb-1"
                      style={{ color: theme.text }}
                    >
                      {date.event}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: theme.textMuted }}
                    >
                      {date.date}
                    </p>
                  </div>
                  <div 
                    className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{ 
                      backgroundColor: theme.alpha(date.color, 0.15),
                      color: date.color
                    }}
                  >
                    {date.status}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
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
                Get in Touch
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Have questions about admissions? Our team is here to help you.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+1 (555) 123-4567",
                  color: colors.mint[400]
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "admissions@eduland.edu",
                  color: colors.mint[500]
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "123 Education Street, City, State 12345",
                  color: colors.mint[600]
                }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.title}
                    variants={cardVariants}
                    className="group text-center p-8 rounded-2xl border-2 transition-all transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(contact.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                      boxShadow: `0 4px 12px ${theme.alpha(contact.color, 0.1)}`
                    }}
                    whileHover={{ 
                      boxShadow: `0 8px 25px ${theme.alpha(contact.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <div 
                        className="flex h-16 w-16 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.alpha(contact.color, 0.15) }}
                      >
                        <IconComponent className="h-8 w-8" style={{ color: contact.color }} />
                      </div>
            </div>
                    <h3 
                      className="text-lg font-semibold mb-3"
                      style={{ color: theme.text }}
                    >
                      {contact.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: theme.textMuted }}
                    >
                      {contact.content}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="relative overflow-hidden rounded-3xl p-8 lg:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            style={{ 
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: `0 20px 40px ${theme.alpha(theme.secondary, 0.3)}`
              }}
            >
              <h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6 text-white"
              >
              Ready to Begin Your Journey?
            </h2>
              <p 
                className="text-xl leading-8 max-w-2xl mx-auto mb-8 text-white/90"
              >
              Start your application process today and take the first step towards an exceptional education.
            </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105 bg-white text-gray-900">
                  <span className="relative z-10">Start Application</span>
                  <span 
                    className="absolute inset-0 -z-10 translate-y-[105%] transition duration-300 group-hover:translate-y-0 bg-gray-100"
                  ></span>
                </button>
                <button className="group text-base font-semibold leading-6 flex items-center space-x-2 px-6 py-4 rounded-full border-2 transition-all transform-gpu hover:scale-105 text-white border-white/30 hover:bg-white/10">
                  <span>Schedule a Visit</span>
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </button>
            </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 