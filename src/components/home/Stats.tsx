"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { theme } from '@/utils/colors';

export default function Stats() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="py-24 sm:py-32" ref={statsRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:max-w-none"
          variants={container}
          initial="hidden"
          animate={shouldAnimate ? "show" : "hidden"}
        >
          <div className="-mt-15 text-center">
            <motion.p 
              variants={item} 
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: theme.text }}
            >
              Proven Excellence in Education
            </motion.p>
            <motion.p 
              variants={item} 
              className="mt-6 text-lg leading-8 max-w-xl mx-auto"
              style={{ color: theme.textMuted }}
            >
              Our commitment to excellence is reflected in our outcomes. Here's how EduLand makes a difference in the lives of our students.
            </motion.p>
          </div>

          <motion.dl 
            variants={item}
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                variants={item}
                className="flex flex-col p-8"
                style={{ backgroundColor: theme.backgroundLight }}
              >
                <dt className="text-sm font-semibold leading-6" style={{ color: theme.textMuted }}>{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight" style={{ color: theme.primary }}>
                  <CounterAnimation 
                    value={stat.value} 
                    shouldAnimate={shouldAnimate}
                    suffix={stat.suffix}
                  />
                </dd>
                <p className="mt-2 text-sm" style={{ color: theme.textMuted }}>{stat.description}</p>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </div>
  );
}

function CounterAnimation({ value, shouldAnimate, suffix = '' }: { 
  value: string; 
  shouldAnimate: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
  useEffect(() => {
    if (!shouldAnimate) return;
    
    let start = 0;
    const increment = numericValue / 40;
    const duration = 1500;
    const startTime = performance.now();
    
    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      
      const currentCount = Math.floor(easeProgress * numericValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(numericValue);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [numericValue, shouldAnimate]);
  
  return (
    <span>
      {count}{suffix}
    </span>
  );
}

const stats = [
  {
    id: 1,
    name: 'Years of Excellence',
    value: '25',
    suffix: '+',
    description: 'Providing quality education since 1999',
  },
  {
    id: 2,
    name: 'Qualified Teachers',
    value: '120',
    suffix: '+',
    description: 'Dedicated educators with advanced degrees',
  },
  {
    id: 3,
    name: 'Students',
    value: '1500',
    suffix: '+',
    description: 'From kindergarten through high school',
  },
  {
    id: 4,
    name: 'College Acceptance',
    value: '98',
    suffix: '%',
    description: 'Of our graduates attend top universities',
  },
]; 