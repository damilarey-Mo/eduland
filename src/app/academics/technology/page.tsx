"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { Laptop2, Wifi, BookOpen, Lightbulb, Layers, Award, Users, Star, ArrowRight, Server, Shield, Globe, BarChart3, Brain } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const infrastructure = [
  {
    title: "Network and Connectivity",
    features: [
      "High-speed fiber internet throughout campus",
      "Robust wireless network covering all areas",
      "Redundant systems ensuring 99.9% uptime",
      "Secure network with content filtering"
    ],
    icon: Wifi,
    color: colors.mint[400]
  },
  {
    title: "Device Integration",
    features: [
      "1:1 device program for grades 6-12",
      "Shared devices for K-5 students",
      "BYOD (Bring Your Own Device) policy",
      "Device management and security protocols"
    ],
    icon: Laptop2,
    color: colors.mint[500]
  }
];

const learningTech = [
  {
    title: "Smart Classrooms",
    features: [
      "Interactive whiteboards in every classroom",
      "Document cameras and projectors",
      "Audio enhancement systems",
      "Wireless presentation capabilities"
    ],
    icon: BookOpen,
    color: colors.mint[400]
  },
  {
    title: "Digital Learning Platforms",
    features: [
      "Learning Management System (LMS)",
      "Online assignment submission",
      "Digital textbooks and resources",
      "Virtual classroom capabilities"
    ],
    icon: Layers,
    color: colors.mint[600]
  }
];

const labs = [
  {
    title: "Computer Science Lab",
    features: [
      "30 high-performance computers",
      "Programming software and development tools",
      "Server and networking equipment",
      "Cybersecurity training tools"
    ],
    icon: Server,
    color: colors.mint[500]
  },
  {
    title: "STEAM Innovation Lab",
    features: [
      "3D printers and laser cutters",
      "Arduino and Raspberry Pi kits",
      "Robotics building platforms",
      "CAD software and design tools"
    ],
    icon: Lightbulb,
    color: colors.mint[400]
  },
  {
    title: "Media Production Studio",
    features: [
      "Professional video equipment",
      "Audio recording capabilities",
      "Video editing workstations",
      "Live streaming technology"
    ],
    icon: Star,
    color: colors.mint[600]
  }
];

const programs = [
  {
    title: "Digital Literacy Curriculum",
    features: [
      "Keyboarding and basic computer skills",
      "Internet safety and digital citizenship",
      "Research and information evaluation",
      "Online collaboration tools"
    ],
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Coding and Programming",
    features: [
      "Introduction to Programming (K-5)",
      "Scratch and visual programming",
      "Python and JavaScript courses",
      "Advanced Computer Science (AP)"
    ],
    icon: Brain,
    color: colors.mint[400]
  },
  {
    title: "Multimedia and Design",
    features: [
      "Digital art and graphic design",
      "Video production and editing",
      "Web design and development",
      "3D modeling and animation"
    ],
    icon: Layers,
    color: colors.mint[600]
  }
];

const support = [
  {
    title: "Help Desk and Technical Support",
    features: [
      "On-site IT support staff",
      "Student technology assistants",
      "Equipment maintenance and repair",
      "Software installation and updates"
    ],
    icon: Award,
    color: colors.mint[500]
  },
  {
    title: "Digital Safety and Security",
    features: [
      "Cybersecurity education programs",
      "Internet safety workshops for students and parents",
      "Data privacy protection measures",
      "Regular security audits and updates"
    ],
    icon: Shield,
    color: colors.mint[600]
  }
];

const innovation = [
  {
    title: "Emerging Technologies",
    features: [
      "Virtual and Augmented Reality applications",
      "Artificial Intelligence in education",
      "Machine learning and data science introduction",
      "Internet of Things (IoT) projects"
    ],
    icon: Lightbulb,
    color: colors.mint[400]
  },
  {
    title: "Technology Integration Training",
    features: [
      "Teacher professional development",
      "Best practices workshops",
      "Peer mentoring programs",
      "Educational technology conferences"
    ],
    icon: Users,
    color: colors.mint[500]
  }
];

const assessment = [
  {
    title: "Online Assessment Platforms",
    features: [
      "Formative assessment tools",
      "Digital portfolios",
      "Standardized test preparation",
      "Progress tracking systems"
    ],
    icon: BarChart3,
    color: colors.mint[400]
  },
  {
    title: "Analytics and Data",
    features: [
      "Learning analytics dashboards",
      "Student performance insights",
      "Attendance and engagement tracking",
      "Predictive modeling for intervention"
    ],
    icon: BarChart3,
    color: colors.mint[600]
  }
];

const policies = [
  {
    title: "Acceptable Use Policy",
    features: [
      "Guidelines for technology use",
      "Digital citizenship expectations",
      "Consequences for misuse",
      "Regular policy updates"
    ],
    icon: Globe,
    color: colors.mint[500]
  },
  {
    title: "Device Management",
    features: [
      "Registration and tracking procedures",
      "Damage and loss protocols",
      "Insurance and protection plans",
      "End-of-year procedures"
    ],
    icon: Laptop2,
    color: colors.mint[400]
  }
];

const future = [
  {
    title: "Upcoming Initiatives",
    features: [
      "Campus-wide technology upgrade",
      "Expanded maker space facilities",
      "Enhanced virtual learning capabilities",
      "Advanced cybersecurity programs"
    ],
    icon: Lightbulb,
    color: colors.mint[500]
  },
  {
    title: "Partnership and Collaboration",
    features: [
      "Technology industry partnerships",
      "University research collaborations",
      "Community technology initiatives",
      "Alumni technology mentorship"
    ],
    icon: Users,
    color: colors.mint[600]
  }
];

const navLinks = [
  { title: "Curriculum", href: "/academics/curriculum" },
  { title: "Student Life", href: "/academics/student-life" },
  { title: "Departments", href: "/academics/departments" }
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

export default function TechnologyPage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Header */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6" style={{ color: theme.text }}>
                Empowering Learning Through Innovation
              </motion.h1>
              <motion.p className="text-xl leading-8 max-w-3xl mx-auto mb-8" style={{ color: theme.textMuted }}>
                Preparing students for a digital future
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Technology Vision */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6" style={{ color: theme.text }}>
                Technology Vision
              </motion.h2>
              <motion.p className="text-lg leading-8 max-w-3xl mx-auto" style={{ color: theme.textMuted }}>
                Technology is at the center of our lives in most environments, and the classroom is no exception. At Edu Land, we integrate cutting-edge technology to enhance learning experiences and prepare students for an increasingly digital world.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Technology Infrastructure */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {infrastructure.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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

        {/* Learning Technologies */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {learningTech.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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

        {/* Specialized Technology Labs */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {labs.map((lab, index) => {
                const IconComponent = lab.icon;
                return (
                  <motion.div key={lab.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(lab.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(lab.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(lab.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(lab.color, 0.15), border: `2px solid ${theme.alpha(lab.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(lab.color, 0.25), borderColor: lab.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: lab.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{lab.title}</h3>
                    <ul className="space-y-1 text-left">
                      {lab.features.map((feature, idx) => (
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

        {/* Educational Technology Programs */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {programs.map((prog, index) => {
                const IconComponent = prog.icon;
                return (
                  <motion.div key={prog.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(prog.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(prog.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(prog.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(prog.color, 0.15), border: `2px solid ${theme.alpha(prog.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(prog.color, 0.25), borderColor: prog.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: prog.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{prog.title}</h3>
                    <ul className="space-y-1 text-left">
                      {prog.features.map((feature, idx) => (
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

        {/* Technology Support Services */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {support.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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

        {/* Innovation Initiatives */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {innovation.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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

        {/* Assessment and Digital Tools */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {assessment.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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

        {/* Technology Policies */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {policies.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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

        {/* Future Technology Plans */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {future.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(item.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(item.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(item.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(item.color, 0.15), border: `2px solid ${theme.alpha(item.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(item.color, 0.25), borderColor: item.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{item.title}</h3>
                    <ul className="space-y-1 text-left">
                      {item.features.map((feature, idx) => (
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