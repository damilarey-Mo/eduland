"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link href="/">
      <motion.div 
        className="flex items-center space-x-2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-primary-500/50">
          <motion.span 
            className="text-white font-display font-bold text-lg"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            E
          </motion.span>
        </div>
        <motion.span 
          className="text-xl font-display font-bold text-gray-900 dark:text-white"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          EduLand
        </motion.span>
      </motion.div>
    </Link>
  );
} 