"use client";

import { BookOpen, Users, Star, Trophy, School, Beaker } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Quality Education',
    description:
      'Our curriculum is designed to meet the highest academic standards while fostering critical thinking and creativity.',
    icon: BookOpen,
  },
  {
    name: 'Expert Faculty',
    description:
      'Our teachers are highly qualified professionals who are passionate about education and dedicated to student success.',
    icon: Users,
  },
  {
    name: 'Small Class Sizes',
    description:
      'We maintain small teacher-to-student ratios to ensure personalized attention and support for each student.',
    icon: School,
  },
  {
    name: 'Advanced Facilities',
    description:
      'Our campus features state-of-the-art classrooms, laboratories, libraries, and sports facilities.',
    icon: Beaker,
  },
  {
    name: 'Extracurricular Activities',
    description:
      'We offer a wide range of clubs, sports, and activities to foster holistic development and explore diverse interests.',
    icon: Star,
  },
  {
    name: 'Recognition & Achievements',
    description:
      'Our students consistently achieve excellent results in academics, sports, and creative pursuits.',
    icon: Trophy,
  },
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
      

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <p className="-mt-15 text-3xl font-bold tracking-tight text-black sm:text-4xl">Everything you need</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive approach to education provides students with the resources, support, and opportunities they need to excel.
          </p>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-15 lg:max-w-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative" variants={item}>
                <dt className="inline font-semibold text-gray-800">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-400">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="ml-16">{feature.name}</span>
                </dt>
                <dd className="mt-2 ml-16 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 