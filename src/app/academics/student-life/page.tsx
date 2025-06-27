"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, Star, Globe, Heart, BookOpen, Music, Dumbbell, Lightbulb, ArrowRight, Building2, Calendar, Layers } from "lucide-react";
import { colors, theme } from "@/utils/colors";

const clubs = [
  {
    title: "Academic Clubs",
    items: [
      "National Honor Society",
      "Math Olympiad Team",
      "Science Fair Club",
      "Debate and Speech Club",
      "Model United Nations",
      "Academic Decathlon"
    ],
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Arts and Culture",
    items: [
      "Drama Club and Theater Productions",
      "Music Ensembles (Band, Choir, Orchestra)",
      "Art Club and Gallery Exhibitions",
      "Creative Writing Society",
      "Photography Club",
      "Cultural Heritage Clubs"
    ],
    icon: Music,
    color: colors.mint[400]
  },
  {
    title: "Sports and Athletics",
    items: [
      "Varsity Sports Programs",
      "Junior Varsity Teams",
      "Intramural Sports",
      "Fitness and Wellness Programs",
      "Outdoor Adventure Club",
      "Sports Medicine and Training"
    ],
    icon: Dumbbell,
    color: colors.mint[600]
  },
  {
    title: "Community Service",
    items: [
      "Community Service Club",
      "Environmental Action Group",
      "Peer Tutoring Program",
      "Local Charity Partnerships",
      "Global Outreach Initiatives"
    ],
    icon: Heart,
    color: colors.mint[500]
  }
];

const leadership = [
  {
    title: "Student Government",
    items: [
      "Student Council",
      "Class Representatives",
      "Leadership Training Programs",
      "Student Voice Committees"
    ],
    icon: Award,
    color: colors.mint[400]
  },
  {
    title: "Leadership Development",
    items: [
      "Peer Mentorship Programs",
      "Leadership Workshops",
      "Student Ambassador Program",
      "Conference and Competition Participation"
    ],
    icon: Star,
    color: colors.mint[600]
  }
];

const facilities = [
  {
    title: "Learning Spaces",
    items: [
      "Modern Classrooms with Smart Boards",
      "Science and Computer Laboratories",
      "Library and Media Center",
      "Study Halls and Quiet Zones"
    ],
    icon: Layers,
    color: colors.mint[500]
  },
  {
    title: "Recreation and Wellness",
    items: [
      "Gymnasium and Fitness Center",
      "Swimming Pool",
      "Outdoor Sports Fields",
      "Playground and Recreation Areas",
      "Health and Wellness Center"
    ],
    icon: Dumbbell,
    color: colors.mint[400]
  },
  {
    title: "Dining and Social",
    items: [
      "Cafeteria with Nutritious Meal Options",
      "Student Lounge Areas",
      "Outdoor Gathering Spaces",
      "Vending and Snack Areas"
    ],
    icon: Building2,
    color: colors.mint[600]
  }
];

const support = [
  {
    title: "Academic Support",
    items: [
      "Tutoring and Study Groups",
      "Academic Counseling",
      "College and Career Guidance",
      "Special Needs Support"
    ],
    icon: BookOpen,
    color: colors.mint[500]
  },
  {
    title: "Personal Support",
    items: [
      "School Counselors and Psychologists",
      "Peer Support Programs",
      "Crisis Intervention Services",
      "Family Liaison Services"
    ],
    icon: Heart,
    color: colors.mint[400]
  }
];

const events = [
  {
    title: "Annual Events",
    items: [
      "Welcome Week and Orientation",
      "Homecoming Celebration",
      "Cultural Festival",
      "Science and Arts Fair",
      "Sports Day and Athletics Meet",
      "Graduation Ceremony"
    ],
    icon: Calendar,
    color: colors.mint[500]
  },
  {
    title: "Seasonal Activities",
    items: [
      "Fall Harvest Festival",
      "Winter Holiday Celebrations",
      "Spring Arts Showcase",
      "Summer Programs and Camps"
    ],
    icon: Star,
    color: colors.mint[600]
  }
];

const navLinks = [
  { title: "Curriculum", href: "/academics/curriculum" },
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

export default function StudentLifePage() {
  return (
    <Layout>
      <div style={{ backgroundColor: theme.background }}>
        {/* Header */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display mb-6" style={{ color: theme.text }}>
                Vibrant Community, Endless Opportunities
              </motion.h1>
              <motion.p className="text-xl leading-8 max-w-3xl mx-auto mb-8" style={{ color: theme.textMuted }}>
                Where learning extends beyond the classroom
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display mb-6" style={{ color: theme.text }}>
                Overview
              </motion.h2>
              <motion.p className="text-lg leading-8 max-w-3xl mx-auto" style={{ color: theme.textMuted }}>
                Student life at Eduland School is designed to foster personal growth, leadership development, and lifelong friendships. We promote and strengthen student involvement and engagement through leadership development opportunities across numerous activities and programs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Clubs and Organizations */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {clubs.map((club, index) => {
                const IconComponent = club.icon;
                return (
                  <motion.div key={club.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(club.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(club.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(club.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(club.color, 0.15), border: `2px solid ${theme.alpha(club.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(club.color, 0.25), borderColor: club.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: club.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{club.title}</h3>
                    <ul className="space-y-1 text-left">
                      {club.items.map((item, idx) => (
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

        {/* Student Leadership */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {leadership.map((lead, index) => {
                const IconComponent = lead.icon;
                return (
                  <motion.div key={lead.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(lead.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(lead.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(lead.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(lead.color, 0.15), border: `2px solid ${theme.alpha(lead.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(lead.color, 0.25), borderColor: lead.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: lead.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{lead.title}</h3>
                    <ul className="space-y-1 text-left">
                      {lead.items.map((item, idx) => (
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

        {/* Campus Facilities */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <motion.div key={facility.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(facility.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(facility.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(facility.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(facility.color, 0.15), border: `2px solid ${theme.alpha(facility.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(facility.color, 0.25), borderColor: facility.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: facility.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{facility.title}</h3>
                    <ul className="space-y-1 text-left">
                      {facility.items.map((item, idx) => (
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

        {/* Student Support Services */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.02) }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {support.map((sup, index) => {
                const IconComponent = sup.icon;
                return (
                  <motion.div key={sup.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(sup.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(sup.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(sup.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(sup.color, 0.15), border: `2px solid ${theme.alpha(sup.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(sup.color, 0.25), borderColor: sup.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: sup.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{sup.title}</h3>
                    <ul className="space-y-1 text-left">
                      {sup.items.map((item, idx) => (
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

        {/* Events and Traditions */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {events.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <motion.div key={event.title} variants={cardVariants} className="group p-8 rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105" style={{ borderColor: theme.alpha(event.color, 0.2), backgroundColor: theme.alpha(colors.vanilla[400], 0.02), boxShadow: `0 4px 12px ${theme.alpha(event.color, 0.1)}` }} whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.alpha(event.color, 0.2)}` }}>
                    <div className="flex justify-center mb-6">
                      <motion.div className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: theme.alpha(event.color, 0.15), border: `2px solid ${theme.alpha(event.color, 0.3)}` }} whileHover={{ backgroundColor: theme.alpha(event.color, 0.25), borderColor: event.color }}>
                        <IconComponent className="h-8 w-8" style={{ color: event.color }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>{event.title}</h3>
                    <ul className="space-y-1 text-left">
                      {event.items.map((item, idx) => (
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