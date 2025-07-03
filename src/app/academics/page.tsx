"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Brain, Award, Globe, Rocket, Star, GraduationCap, BarChart3, Layers, Laptop2, Lightbulb, ArrowRight } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const highlights = [
  {
    title: "Comprehensive Curriculum",
    description: "From foundational skills to advanced placement courses",
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Innovative Teaching Methods",
    description: "Technology-integrated learning experiences",
    icon: Lightbulb,
    color: colors.mint[400]
  },
  {
    title: "Personalized Learning",
    description: "Small class sizes ensuring individual attention",
    icon: Users,
    color: colors.mint[600]
  },
  {
    title: "Global Perspective",
    description: "International programs and cultural exchange opportunities",
    icon: Globe,
    color: colors.mint[500]
  }
];

const stats = [
  { label: "College Acceptance Rate", value: "98%", icon: GraduationCap, color: colors.mint[500] },
  { label: "AP Success Rate", value: "85%", icon: Award, color: colors.mint[400] },
  { label: "Student-Teacher Ratio", value: "15:1", icon: Users, color: colors.mint[600] },
  { label: "Academic Programs", value: "40+", icon: Layers, color: colors.mint[500] }
];

const navCards = [
  {
    title: "Curriculum",
    description: "Explore our comprehensive, standards-based curriculum for all grade levels.",
    icon: BookOpen,
    href: "/academics/curriculum",
    color: colors.mint[500]
  },
  {
    title: "Student Life",
    description: "Discover vibrant student life, clubs, and leadership opportunities.",
    icon: Users,
    href: "/academics/student-life",
    color: colors.mint[400]
  },
  {
    title: "Departments",
    description: "Meet our expert faculty and explore specialized academic departments.",
    icon: BarChart3,
    href: "/academics/departments",
    color: colors.mint[600]
  },
  {
    title: "Technology",
    description: "See how we empower learning through innovation and digital tools.",
    icon: Laptop2,
    href: "/academics/technology",
    color: colors.mint[500]
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

export default function AcademicsPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                Excellence in Education, Innovation in Learning
              </motion.h1>
              <motion.p 
                className="text-xl leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Empowering students to achieve academic excellence and personal growth through a world-class, innovative curriculum.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="#nav-cards">
                  <button className="rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105" style={{ backgroundColor: theme.secondary, color: theme.backgroundDark }}>
                    Explore Programs
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105" style={{ backgroundColor: theme.primary, color: theme.background }}>
                    Schedule a Visit
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Academic Philosophy */}
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
                Academic Philosophy
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                At Edu Land School, we believe education extends far beyond textbooks and examinations. Our curriculum is a standards-based sequence of planned experiences where students practice and achieve proficiency in content and applied learning skills, designed to foster critical thinking, creativity, and character development.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Key Academic Highlights */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    className="group text-center p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(item.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(item.color, 0.15),
                          border: `2px solid ${theme.alpha(item.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(item.color, 0.25),
                          borderColor: item.color
                        }}
                      >
                        <IconComponent 
                          className="h-8 w-8" 
                          style={{ color: item.color }} 
                        />
                      </motion.div>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: theme.text }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Academic Excellence Statistics */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={cardVariants}
                    className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105"
                    style={{ 
                      borderColor: theme.alpha(stat.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(stat.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(stat.color, 0.2)}`
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: theme.alpha(stat.color, 0.15),
                          border: `2px solid ${theme.alpha(stat.color, 0.3)}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.alpha(stat.color, 0.25),
                          borderColor: stat.color
                        }}
                      >
                        <IconComponent 
                          className="h-7 w-7" 
                          style={{ color: stat.color }} 
                        />
                      </motion.div>
                    </div>
                    <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm font-medium" style={{ color: theme.textMuted }}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation to Subpages */}
        <section id="nav-cards" className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {navCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Link key={card.title} href={card.href} className="group">
                    <motion.div
                      variants={cardVariants}
                      className="flex flex-col items-center text-center p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                      style={{ 
                        borderColor: theme.alpha(card.color, 0.2),
                        backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                        boxShadow: `0 4px 12px ${theme.alpha(card.color, 0.1)}`
                      }}
                      whileHover={{ 
                        y: -8,
                        boxShadow: `0 20px 40px ${theme.alpha(card.color, 0.2)}`
                      }}
                    >
                      <div className="flex justify-center mb-6">
                        <motion.div 
                          className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: theme.alpha(card.color, 0.15),
                            border: `2px solid ${theme.alpha(card.color, 0.3)}`
                          }}
                          whileHover={{ 
                            backgroundColor: theme.alpha(card.color, 0.25),
                            borderColor: card.color
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: card.color }} 
                          />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{card.title}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: theme.textMuted }}>{card.description}</p>
                      <span className="inline-flex items-center text-sm font-semibold" style={{ color: card.color }}>
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 