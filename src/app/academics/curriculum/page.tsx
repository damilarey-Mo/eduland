"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Award, Brain, Globe, Lightbulb, Layers, Star, ArrowRight } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const levels = [
  {
    title: "Early Years (K-2)",
    subtitle: "Foundation for Lifelong Learning",
    features: [
      "Literacy and Numeracy Development",
      "Creative Arts and Expression",
      "Social and Emotional Learning",
      "STEAM Introduction",
      "Character Education"
    ],
    color: colors.mint[400],
    icon: Users
  },
  {
    title: "Elementary (Grades 3-5)",
    subtitle: "Building Core Competencies",
    features: [
      "Advanced Reading and Writing",
      "Mathematical Problem Solving",
      "Scientific Inquiry",
      "Social Studies and Cultural Awareness",
      "Foreign Language Introduction",
      "Physical Education and Wellness"
    ],
    color: colors.mint[500],
    icon: BookOpen
  },
  {
    title: "Middle School (Grades 6-8)",
    subtitle: "Expanding Horizons",
    features: [
      "Pre-Algebra and Algebra I",
      "Advanced Sciences (Biology, Chemistry, Physics)",
      "Literature and Creative Writing",
      "World History and Geography",
      "Second Language Proficiency",
      "Arts and Technology Integration"
    ],
    color: colors.mint[600],
    icon: Brain
  },
  {
    title: "High School (Grades 9-12)",
    subtitle: "Preparing for the Future",
    features: [
      "Advanced Placement Courses",
      "International Baccalaureate Program",
      "Career Pathways Programs",
      "College Preparation Courses",
      "Research and Independent Study",
      "Internship and Work-Study Programs"
    ],
    color: colors.mint[400],
    icon: Award
  }
];

const specialPrograms = [
  {
    title: "Advanced Placement (AP) Courses",
    description: "We offer 18 AP courses across multiple disciplines:",
    features: [
      "Mathematics: Calculus AB/BC, Statistics",
      "Sciences: Biology, Chemistry, Physics, Environmental Science",
      "Languages: Spanish, French, Mandarin",
      "Humanities: English Literature, World History, Psychology",
      "Arts: Studio Art, Music Theory"
    ],
    color: colors.mint[500],
    icon: Star
  },
  {
    title: "International Baccalaureate (IB)",
    description: "Full IB Diploma Program for grades 11-12:",
    features: [
      "Theory of Knowledge (TOK)",
      "Extended Essay",
      "Creativity, Activity, Service (CAS)",
      "Six subject groups with Higher and Standard Level options"
    ],
    color: colors.mint[600],
    icon: Globe
  },
  {
    title: "STEAM Education",
    description: "Science, Technology, Engineering, Arts, and Mathematics integration:",
    features: [
      "Project-based learning",
      "Maker spaces and innovation labs",
      "Robotics and coding programs",
      "Design thinking methodology"
    ],
    color: colors.mint[400],
    icon: Lightbulb
  }
];

const assessment = [
  "Continuous Assessment Methods",
  "Portfolio Development",
  "Standardized Test Preparation",
  "Progress Monitoring and Feedback",
  "Parent-Teacher Conferences"
];

const standards = [
  "Aligned with National Education Standards",
  "State Learning Objectives Compliance",
  "International Best Practices Integration",
  "Regular Curriculum Review and Updates"
];

const navLinks = [
  { title: "Student Life", href: "/academics/student-life" },
  { title: "Departments", href: "/academics/departments" },
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

export default function CurriculumPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Header */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6" style={{ color: theme.text }}>
                Comprehensive Curriculum for Complete Development
              </motion.h1>
              <motion.p className="text-xl leading-8 max-w-3xl mx-auto mb-8" style={{ color: theme.textMuted }}>
                Preparing students for success in an ever-evolving world
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6" style={{ color: theme.text }}>
                Curriculum Overview
              </motion.h2>
              <motion.p className="text-lg leading-8 max-w-3xl mx-auto" style={{ color: theme.textMuted }}>
                Our curriculum serves as the central guide for all educators, ensuring that every student has access to rigorous academic experiences. We offer a well-rounded education that balances academic excellence with character development and practical skills.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Academic Programs by Level */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {levels.map((level, index) => {
                const IconComponent = level.icon;
                return (
                  <motion.div key={level.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(level.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(level.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(level.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(level.color, 0.15), border: `2px solid ${theme.alpha(level.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(level.color, 0.25), borderColor: level.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: level.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.text }}>{level.title}</h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: level.color }}>{level.subtitle}</p>
                    <ul className="space-y-1 text-left">
                      {level.features.map((feature, idx) => (
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

        {/* Special Programs */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6" style={{ color: theme.text }}>
                Special Programs
              </motion.h2>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {specialPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div key={program.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(program.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(program.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(program.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(program.color, 0.15), border: `2px solid ${theme.alpha(program.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(program.color, 0.25), borderColor: program.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: program.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.text }}>{program.title}</h3>
                    <p className="text-sm mb-2" style={{ color: theme.textMuted }}>{program.description}</p>
                    <ul className="space-y-1 text-left">
                      {program.features.map((feature, idx) => (
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

        {/* Assessment and Evaluation */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={cardVariants} className="p-8 rounded-2xl border-2" style={{ borderColor: theme.alpha(colors.mint[500], 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>Assessment & Evaluation</h3>
                <ul className="space-y-2">
                  {assessment.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm" style={{ color: theme.textMuted }}>
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={cardVariants} className="p-8 rounded-2xl border-2" style={{ borderColor: theme.alpha(colors.mint[600], 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>Curriculum Standards</h3>
                <ul className="space-y-2">
                  {standards.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm" style={{ color: theme.textMuted }}>
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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