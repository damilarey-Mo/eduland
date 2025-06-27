"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Award, Brain, Globe, Lightbulb, Layers, Star, Heart, Dumbbell, Laptop2, ArrowRight } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const coreDepartments = [
  {
    title: "English Language Arts",
    mission: "Developing critical thinking, communication, and literary appreciation",
    faculty: "8 certified teachers",
    programs: "AP Literature, Creative Writing, Journalism",
    features: ["Writing Center", "Literary Magazine", "Speech and Debate"],
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Mathematics",
    mission: "Building problem-solving skills and mathematical reasoning",
    faculty: "7 teachers with advanced degrees",
    programs: "Pre-Algebra through AP Calculus BC",
    features: ["Math Lab", "Tutoring Center", "Competition Teams"],
    icon: Brain,
    color: colors.mint[400]
  },
  {
    title: "Science Department",
    mission: "Fostering scientific inquiry and evidence-based thinking",
    faculty: "9 science specialists",
    programs: "Biology, Chemistry, Physics, Environmental Science",
    features: ["Research Labs", "Science Fair", "STEM Competitions"],
    icon: Lightbulb,
    color: colors.mint[600]
  },
  {
    title: "Social Studies",
    mission: "Developing global citizenship and historical understanding",
    faculty: "6 social studies educators",
    programs: "World History, AP Government, Psychology, Economics",
    features: ["Model UN", "Mock Trial", "Current Events Forum"],
    icon: Globe,
    color: colors.mint[500]
  },
  {
    title: "World Languages",
    mission: "Promoting multilingual communication and cultural awareness",
    faculty: "5 language specialists",
    programs: "Spanish, French, Mandarin, Latin",
    features: ["Language Lab", "Cultural Exchange", "Immersion Programs"],
    icon: Users,
    color: colors.mint[400]
  }
];

const specializedDepartments = [
  {
    title: "Fine Arts",
    mission: "Nurturing creativity and artistic expression",
    faculty: "6 arts professionals",
    programs: "Visual Arts, Performing Arts",
    features: ["Art Studios", "Performance Hall", "Music Practice Rooms"],
    icon: Star,
    color: colors.mint[500]
  },
  {
    title: "Physical Education and Health",
    mission: "Promoting physical fitness and healthy lifestyles",
    faculty: "4 certified PE and Health teachers",
    programs: "Physical Education, Health Education, Sports Medicine",
    features: ["Gymnasium", "Fitness Center", "Outdoor Fields"],
    icon: Dumbbell,
    color: colors.mint[400]
  },
  {
    title: "Technology and Engineering",
    mission: "Preparing students for the digital future",
    faculty: "4 technology specialists",
    programs: "Computer Science, Engineering Design, Robotics",
    features: ["Computer Labs", "Maker Space", "Engineering Workshop"],
    icon: Laptop2,
    color: colors.mint[600]
  },
  {
    title: "Special Education",
    mission: "Supporting students with diverse learning needs",
    faculty: "5 special education professionals",
    programs: "Learning Support, Speech Therapy, Occupational Therapy",
    features: ["IEP Services", "Learning Support", "Therapy Programs"],
    icon: Heart,
    color: colors.mint[500]
  }
];

const resources = [
  {
    title: "Professional Development",
    items: [
      "Continuous teacher training programs",
      "Subject-specific workshops",
      "Educational conference attendance",
      "Peer collaboration initiatives"
    ],
    icon: Award,
    color: colors.mint[400]
  },
  {
    title: "Curriculum Development",
    items: [
      "Regular program evaluation",
      "Standards alignment reviews",
      "Innovative teaching method integration",
      "Student feedback incorporation"
    ],
    icon: Layers,
    color: colors.mint[600]
  },
  {
    title: "Assessment and Evaluation",
    items: [
      "Department-specific assessment tools",
      "Student progress monitoring",
      "Achievement gap analysis",
      "Improvement plan development"
    ],
    icon: Star,
    color: colors.mint[500]
  }
];

const navLinks = [
  { title: "Curriculum", href: "/academics/curriculum" },
  { title: "Student Life", href: "/academics/student-life" },
  { title: "Technology", href: "/academics/technology" }
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

export default function DepartmentsPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Header */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6" style={{ color: theme.text }}>
                Expert Faculty, Specialized Excellence
              </motion.h1>
              <motion.p className="text-xl leading-8 max-w-3xl mx-auto mb-8" style={{ color: theme.textMuted }}>
                Dedicated departments fostering academic achievement
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Department Overview */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6" style={{ color: theme.text }}>
                Department Overview
              </motion.h2>
              <motion.p className="text-lg leading-8 max-w-3xl mx-auto" style={{ color: theme.textMuted }}>
                Our curriculum encourages students to pursue their interests and passions at advanced levels, preparing them for the challenges and opportunities that await. Each department is staffed with highly qualified educators committed to student success.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Core Academic Departments */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {coreDepartments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <motion.div key={dept.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(dept.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(dept.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(dept.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(dept.color, 0.15), border: `2px solid ${theme.alpha(dept.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(dept.color, 0.25), borderColor: dept.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: dept.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.text }}>{dept.title}</h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: dept.color }}>{dept.mission}</p>
                    <p className="text-xs mb-1" style={{ color: theme.textMuted }}><b>Faculty:</b> {dept.faculty}</p>
                    <p className="text-xs mb-1" style={{ color: theme.textMuted }}><b>Programs:</b> {dept.programs}</p>
                    <ul className="space-y-1 text-left">
                      {dept.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs" style={{ color: theme.textMuted }}>
                          <span>•</span>
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

        {/* Specialized Departments */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {specializedDepartments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <motion.div key={dept.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(dept.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(dept.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(dept.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(dept.color, 0.15), border: `2px solid ${theme.alpha(dept.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(dept.color, 0.25), borderColor: dept.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: dept.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.text }}>{dept.title}</h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: dept.color }}>{dept.mission}</p>
                    <p className="text-xs mb-1" style={{ color: theme.textMuted }}><b>Faculty:</b> {dept.faculty}</p>
                    <p className="text-xs mb-1" style={{ color: theme.textMuted }}><b>Programs:</b> {dept.programs}</p>
                    <ul className="space-y-1 text-left">
                      {dept.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs" style={{ color: theme.textMuted }}>
                          <span>•</span>
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

        {/* Department Resources */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {resources.map((res, index) => {
                const IconComponent = res.icon;
                return (
                  <motion.div key={res.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(res.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(res.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(res.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(res.color, 0.15), border: `2px solid ${theme.alpha(res.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(res.color, 0.25), borderColor: res.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: res.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{res.title}</h3>
                    <ul className="space-y-1 text-left">
                      {res.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs" style={{ color: theme.textMuted }}>
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Cross-links to other subpages */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.title} href={link.href} className="group">
                  <div className="rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105" style={{ backgroundColor: theme.secondary, color: theme.backgroundDark }}>
                    {link.title} <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 