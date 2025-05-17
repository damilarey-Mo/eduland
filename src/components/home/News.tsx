"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function News() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-md bg-primary-50 px-2.5 py-0.5 text-sm font-medium text-primary-700">
            Latest Updates
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            News & Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay updated with what's happening at EduLand
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              className="group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={post.href} className="absolute inset-0 z-10" aria-label={post.title}>
                <span className="sr-only">{post.title}</span>
              </Link>
              
              <div>
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-x-2">
                    <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                      {post.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold leading-7 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0 flex justify-end">
                <span className="relative z-0 inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-800">
                  Read more 
                  <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/news"
            className="inline-flex items-center rounded-full bg-primary-50 px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm hover:bg-primary-100 transition-colors"
          >
            View all news and events
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: 'Annual Science Fair Showcases Student Innovation',
    href: '/news/science-fair',
    description:
      'Our annual Science Fair was a tremendous success, featuring over 50 innovative projects from students across all grade levels.',
    imageUrl: '/images/news/science-fair.jpg',
    date: 'Mar 16, 2023',
    category: 'Event',
  },
  {
    id: 2,
    title: 'EduLand Athletics Team Wins Regional Championship',
    href: '/news/athletics-championship',
    description:
      'Congratulations to our Athletics team for their outstanding performance and bringing home the Regional Championship trophy.',
    imageUrl: '/images/news/athletics.jpg',
    date: 'Apr 20, 2023',
    category: 'Sports',
  },
  {
    id: 3,
    title: 'New STEM Lab Opening This Fall',
    href: '/news/stem-lab',
    description:
      "We're excited to announce the opening of our state-of-the-art STEM lab, equipped with cutting-edge technology to enhance learning.",
    imageUrl: '/images/news/stem-lab.jpg',
    date: 'Jun 8, 2023',
    category: 'Announcement',
  },
]; 