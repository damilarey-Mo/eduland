"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, CalendarDays, Users, Trophy, BookOpen } from 'lucide-react';
import { colors, theme } from '@/utils/colors';

const posts = [
  {
    id: 1,
    title: 'Annual Science Fair Showcases Student Innovation',
    href: '/news/science-fair',
    description:
      'Our annual Science Fair was a tremendous success, featuring over 50 innovative projects from students across all grade levels. Students demonstrated exceptional creativity and scientific thinking.',
    imageUrl: '/images/news/science-fair.jpg',
    date: 'Mar 16, 2025',
    time: '2 min read',
    category: 'Event',
    icon: CalendarDays,
    color: colors.mint[400],
    featured: true
  },
  {
    id: 2,
    title: 'EduLand Athletics Team Wins Regional Championship',
    href: '/news/athletics-championship',
    description:
      'Congratulations to our Athletics team for their outstanding performance and bringing home the Regional Championship trophy. The team showed exceptional sportsmanship and determination.',
    imageUrl: '/images/news/athletics.jpg',
    date: 'Apr 20, 2025',
    time: '3 min read',
    category: 'Sports',
    icon: Trophy,
    color: colors.mint[500]
  },
  {
    id: 3,
    title: 'New STEM Lab Opening This Fall',
    href: '/news/stem-lab',
    description:
      "We're excited to announce the opening of our state-of-the-art STEM lab, equipped with cutting-edge technology to enhance learning and inspire the next generation of innovators.",
    imageUrl: '/images/news/stem-lab.jpg',
    date: 'Jun 8, 2025',
    time: '4 min read',
    category: 'Announcement',
    icon: BookOpen,
    color: colors.mint[600]
  },
  {
    id: 4,
    title: 'Student Leadership Conference Success',
    href: '/news/leadership-conference',
    description:
      'Over 200 students participated in our annual Leadership Conference, developing essential skills in communication, teamwork, and community service.',
    imageUrl: '/images/news/celevration.jpg',
    date: 'May 12, 2025',
    time: '2 min read',
    category: 'Leadership',
    icon: Users,
    color: colors.mint[300]
  },
  {
    id: 5,
    title: 'International Student Exchange Program',
    href: '/news/exchange-program',
    description:
      'We launched our new International Student Exchange Program, connecting our students with peers from partner schools around the world.',
    imageUrl: '/images/students-1.jpg',
    date: 'Jul 3, 2025',
    time: '3 min read',
    category: 'Program',
    icon: Users,
    color: colors.mint[400]
  },
  {
    id: 6,
    title: 'Academic Excellence Awards Ceremony',
    href: '/news/awards-ceremony',
    description:
      'Our annual Academic Excellence Awards Ceremony celebrated outstanding student achievements across all subjects and grade levels.',
    imageUrl: '/images/students-2.jpg',
    date: 'Aug 15, 2025',
    time: '2 min read',
    category: 'Achievement',
    icon: Trophy,
    color: colors.mint[500]
  }
];

const categories = ['All', 'Event', 'Sports', 'Announcement', 'Leadership', 'Program', 'Achievement'];

export default function News() {
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

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: theme.background }}>
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 transform opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${theme.alpha(theme.secondary, 0.2)} 0%, transparent 70%)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/4 translate-y-1/4 transform opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${theme.alpha(colors.mint[400], 0.15)} 0%, transparent 70%)`
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            News & Events
          </motion.h2>
          <motion.p 
            className="text-lg leading-8 max-w-3xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Stay updated with the latest happenings, achievements, and exciting developments 
            at EduLand that shape our vibrant learning community.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.1) }}>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/50"
                style={{
                  backgroundColor: category === 'All' ? theme.secondary : 'transparent',
                  color: category === 'All' ? theme.backgroundDark : theme.textMuted
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl border-2 transition-all duration-300 transform-gpu hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              borderColor: theme.alpha(theme.secondary, 0.2),
              backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
              boxShadow: `0 10px 40px ${theme.alpha(theme.secondary, 0.1)}`
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src={posts[0].imageUrl}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm"
                    style={{ backgroundColor: theme.alpha(posts[0].color, 0.9) }}
                  >
                    {(() => {
                      const IconComponent = posts[0].icon;
                      return <IconComponent size={16} style={{ color: 'white' }} />;
                    })()}
                    <span className="text-sm font-semibold text-white">{posts[0].category}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm" style={{ color: theme.textMuted }}>
                    <Calendar size={16} />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm" style={{ color: theme.textMuted }}>
                    <Clock size={16} />
                    <span>{posts[0].time}</span>
                  </div>
                </div>

                <h3 
                  className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
                  style={{ color: theme.text }}
                >
                  {posts[0].title}
                </h3>
                
                <p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: theme.textMuted }}
                >
                  {posts[0].description}
                </p>

                <Link 
                  href={posts[0].href}
                  className="inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-300 group"
                  style={{ color: posts[0].color }}
                >
                  <span>Read full article</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {posts.slice(1).map((post, index) => {
            const IconComponent = post.icon;
            return (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                style={{ 
                  borderColor: theme.alpha(post.color, 0.2),
                  backgroundColor: theme.alpha(colors.vanilla[400], 0.02),
                  boxShadow: `0 4px 12px ${theme.alpha(post.color, 0.1)}`
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: `0 20px 40px ${theme.alpha(post.color, 0.2)}`
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div 
                      className="inline-flex items-center space-x-2 px-3 py-1 rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: theme.alpha(post.color, 0.9) }}
                    >
                      <IconComponent size={14} style={{ color: 'white' }} />
                      <span className="text-xs font-semibold text-white">{post.category}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 right-4">
                    <div 
                      className="inline-flex items-center space-x-2 px-3 py-1 rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.9) }}
                    >
                      <Calendar size={14} style={{ color: theme.backgroundDark }} />
                      <span className="text-xs font-semibold" style={{ color: theme.backgroundDark }}>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock size={14} style={{ color: theme.textMuted }} />
                    <span className="text-xs" style={{ color: theme.textMuted }}>{post.time}</span>
                  </div>

                  <h3 
                    className="text-xl font-bold mb-3 leading-tight"
                    style={{ color: theme.text }}
                  >
                    {post.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: theme.textMuted }}
                  >
                    {post.description}
                  </p>

                  <Link 
                    href={post.href}
                    className="inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-300 group"
                    style={{ color: post.color }}
                  >
                    <span>Read more</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, transparent 50%, ${post.color} 50%)`
                  }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/news"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all transform-gpu hover:scale-105"
            style={{ 
              backgroundColor: theme.secondary,
              color: theme.backgroundDark,
              boxShadow: `0 4px 12px ${theme.alpha(theme.secondary, 0.3)}`
            }}
          >
            <span>View All News & Events</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 