"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, Users, Award, GraduationCap, Globe, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, BookOpen, Trophy, Building2 } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const coreValues = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from academic instruction to character development. Excellence is not a destination but a continuous journey of improvement and refinement.",
    icon: Star,
    color: colors.mint[600]
  },
  {
    title: "Integrity",
    description: "We build our community on trust, honesty, and moral courage. Our students learn that true success comes from doing the right thing, even when no one is watching.",
    icon: CheckCircle,
    color: colors.mint[500]
  },
  {
    title: "Innovation",
    description: "We embrace new ideas, technologies, and methodologies that enhance learning. Innovation in education means preparing students for jobs that don't yet exist and challenges we haven't yet imagined.",
    icon: Award,
    color: colors.mint[400]
  },
  {
    title: "Inclusivity",
    description: "We celebrate diversity and create an environment where every student feels valued, respected, and empowered to reach their full potential, regardless of their background or learning style.",
    icon: Users,
    color: colors.mint[300]
  },
  {
    title: "Global Citizenship",
    description: "We prepare students to think beyond borders, understand different cultures, and contribute positively to the global community while remaining rooted in their own heritage.",
    icon: Globe,
    color: colors.mint[500]
  }
];

const quickStats = [
  { label: "Years of Excellence", value: "26", icon: Calendar },
  { label: "Students", value: "2,500+", icon: Users },
  { label: "Faculty", value: "180+", icon: GraduationCap },
  { label: "University Acceptance", value: "98%", icon: Award }
];

const academicPillars = [
  {
    title: "Personalized Learning",
    description: "We recognize that students learn differently and at different paces. Our small class sizes (maximum 20 students) ensure individual attention and customized learning plans.",
    icon: Users,
    color: colors.mint[400]
  },
  {
    title: "Critical Thinking",
    description: "We don't just teach students what to think; we teach them how to think. Our curriculum emphasizes analysis, evaluation, and creative problem-solving across all subjects.",
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Global Perspective",
    description: "Our international curriculum, exchange programs, and diverse community prepare students to succeed in any part of the world while appreciating their own cultural heritage.",
    icon: Globe,
    color: colors.mint[600]
  },
  {
    title: "Character Development",
    description: "Academic achievement without character is incomplete. We integrate values education into every aspect of school life, developing students who are not just smart, but wise and ethical.",
    icon: Star,
    color: colors.mint[300]
  },
  {
    title: "Future-Ready Skills",
    description: "We prepare students for the demands of the 21st century through technology integration, collaborative learning, and emphasis on skills like communication, creativity, and adaptability.",
    icon: Award,
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutPage() {
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
                  <Award className="h-4 w-4" style={{ color: theme.primary }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                  26 Years of Educational Excellence
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6"
                style={{ color: theme.text }}
              >
                About EduLand International Schools
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 max-w-4xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Founded in 1998, EduLand International Schools began as a pioneering educational institution with a bold vision: to create a world-class learning environment that prepares students not just for academic success, but for meaningful global citizenship.
              </motion.p>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {quickStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                      style={{ 
                        borderColor: theme.alpha(theme.secondary, 0.2),
                        backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                        boxShadow: `0 2px 8px ${theme.alpha(theme.secondary, 0.1)}`
                      }}
                    >
                      <div className="flex justify-center mb-3">
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: theme.alpha(theme.secondary, 0.15) }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: theme.secondary }} />
                        </div>
                      </div>
                      <div 
                        className="text-2xl font-bold mb-1"
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
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Heritage & Vision */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6"
                  style={{ color: theme.text }}
                >
                  Our Heritage & Vision
                </motion.h2>
                <motion.p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: theme.textMuted }}
                >
                  Over two and a half decades, we have grown from a single campus serving 45 students to a comprehensive educational ecosystem nurturing over 2,500 young minds from creche through college preparation.
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: theme.textMuted }}
                >
                  Our story is one of unwavering commitment to educational excellence, innovation, and the development of future leaders who will shape tomorrow's world. What started as a dream to bridge international educational standards with local cultural values has evolved into Nigeria's premier international school system.
                </motion.p>
                <motion.div 
                  className="inline-flex items-center space-x-2 text-sm font-semibold"
                  style={{ color: theme.secondary }}
                >
                  <span>Established 1998</span>
                  <Clock size={16} />
                </motion.div>
              </div>
              <div className="relative">
                <div 
                  className="aspect-video rounded-2xl overflow-hidden border-2"
                  style={{ 
                    borderColor: theme.alpha(theme.secondary, 0.2),
                    boxShadow: `0 10px 40px ${theme.alpha(theme.secondary, 0.1)}`
                  }}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/school-building.jpg')`,
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-2xl font-bold">Historical Timeline</div>
                    <div className="text-sm opacity-90">From 1998 to 2024</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Mission */}
              <motion.div 
                className="p-8 rounded-2xl border-2 transition-all transform-gpu hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  borderColor: theme.alpha(colors.mint[500], 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                  boxShadow: `0 4px 12px ${theme.alpha(colors.mint[500], 0.1)}`
                }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.alpha(colors.mint[500], 0.15) }}
                  >
                    <Star className="h-6 w-6" style={{ color: colors.mint[500] }} />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: theme.text }}
                  >
                    Our Mission
                  </h3>
                </div>
                <blockquote 
                  className="text-lg italic mb-4"
                  style={{ color: colors.mint[500] }}
                >
                  "To nurture intellectually curious, morally upright, and globally competent leaders who contribute positively to their communities and the world."
                </blockquote>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  We achieve this by providing a holistic education that combines rigorous academic standards with character development, critical thinking, and cultural awareness.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div 
                className="p-8 rounded-2xl border-2 transition-all transform-gpu hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  borderColor: theme.alpha(colors.mint[600], 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                  boxShadow: `0 4px 12px ${theme.alpha(colors.mint[600], 0.1)}`
                }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.alpha(colors.mint[600], 0.15) }}
                  >
                    <Globe className="h-6 w-6" style={{ color: colors.mint[600] }} />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: theme.text }}
                  >
                    Our Vision
                  </h3>
                </div>
                <blockquote 
                  className="text-lg italic mb-4"
                  style={{ color: colors.mint[600] }}
                >
                  "To be Africa's leading international school system, setting the standard for educational excellence and producing graduates who become transformational leaders in their chosen fields."
                </blockquote>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  We envision a future where EduLand graduates are recognized globally for their academic prowess, ethical leadership, and positive impact on society.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
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
                Core Values
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                The foundation of our educational philosophy and community culture
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                    style={{ 
                      borderColor: theme.alpha(value.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(value.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(value.color, 0.2)}`
                    }}
                  >
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <motion.div 
                          className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: theme.alpha(value.color, 0.15),
                            border: `2px solid ${theme.alpha(value.color, 0.3)}`
                          }}
                          whileHover={{ 
                            backgroundColor: theme.alpha(value.color, 0.25),
                            borderColor: value.color
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: value.color }} 
                          />
                        </motion.div>
                      </div>

                      <div className="text-center">
                        <h3 
                          className="text-xl font-bold mb-4"
                          style={{ color: theme.text }}
                        >
                          {value.title}
                        </h3>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: theme.textMuted }}
                        >
                          {value.description}
                        </p>
        </div>
      </div>
      
                    {/* Decorative corner accent */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, transparent 50%, ${value.color} 50%)`
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Academic Philosophy */}
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
                Academic Philosophy
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto mb-8"
                style={{ color: theme.textMuted }}
              >
                Our educational approach is built on the principle that every child is unique and capable of excellence. We combine the best of international curricula with innovative teaching methodologies to create learning experiences that are both challenging and nurturing.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {academicPillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                    style={{ 
                      borderColor: theme.alpha(pillar.color, 0.2),
                      backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                      boxShadow: `0 4px 12px ${theme.alpha(pillar.color, 0.1)}`
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${theme.alpha(pillar.color, 0.2)}`
                    }}
                  >
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <motion.div 
                          className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: theme.alpha(pillar.color, 0.15),
                            border: `2px solid ${theme.alpha(pillar.color, 0.3)}`
                          }}
                          whileHover={{ 
                            backgroundColor: theme.alpha(pillar.color, 0.25),
                            borderColor: pillar.color
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: pillar.color }} 
                          />
                        </motion.div>
                      </div>

                      <div className="text-center">
                        <h3 
                          className="text-xl font-bold mb-4"
                          style={{ color: theme.text }}
                        >
                          {pillar.title}
                        </h3>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: theme.textMuted }}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, transparent 50%, ${pillar.color} 50%)`
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose EduLand */}
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
                Why Choose EduLand?
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Choosing EduLand International Schools means choosing excellence, innovation, and a future of unlimited possibilities
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                "Proven Academic Excellence",
                "World-Class Faculty",
                "Global Recognition",
                "Holistic Development",
                "Individual Attention",
                "Cultural Diversity",
                "Modern Facilities",
                "Strong Alumni Network"
              ].map((reason, index) => (
                <motion.div
                  key={reason}
                  variants={cardVariants}
                  className="group flex items-center space-x-4 p-6 rounded-xl border-2 transition-all transform-gpu hover:scale-105"
                  style={{ 
                    borderColor: theme.alpha(theme.secondary, 0.2),
                    backgroundColor: theme.alpha(colors.vanilla[400], 0.03),
                    boxShadow: `0 2px 8px ${theme.alpha(theme.secondary, 0.1)}`
                  }}
                  whileHover={{ 
                    boxShadow: `0 8px 25px ${theme.alpha(theme.secondary, 0.2)}`
                  }}
                >
                  <div 
                    className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                    style={{ backgroundColor: theme.alpha(theme.secondary, 0.15) }}
                  >
                    <CheckCircle className="h-5 w-5" style={{ color: theme.secondary }} />
                  </div>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: theme.text }}
                  >
                    {reason}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
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
                Take the Next Step
              </motion.h2>
              <motion.p 
                className="text-lg leading-8 max-w-3xl mx-auto"
                style={{ color: theme.textMuted }}
              >
                Ready to join the EduLand community? Get in touch with us today.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+234-1-XXX-XXXX",
                  color: colors.mint[400]
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "info@eduland.edu.ng",
                  color: colors.mint[500]
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Victoria Island, Lagos, Nigeria",
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

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform-gpu hover:scale-105"
                style={{ 
                  backgroundColor: theme.secondary,
                  color: theme.backgroundDark,
                  boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
                }}
              >
                <span className="relative z-10">Schedule a Campus Tour</span>
                <span 
                  className="absolute inset-0 -z-10 translate-y-[105%] transition duration-300 group-hover:translate-y-0" 
                  style={{ backgroundColor: theme.secondaryDark }}
                ></span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 