"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Stats() {
  const containerRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimate(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={containerRef}>
        <motion.div 
          className="mx-auto max-w-2xl lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              EduLand by the Numbers
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our commitment to excellence is reflected in our achievements
            </p>
          </div>
          
          <motion.dl 
            className="mt-16 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            animate={shouldAnimate ? "show" : "hidden"}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                className="flex flex-col bg-primary-700 p-8 hover:bg-primary-800 transition-colors"
                variants={item}
              >
                <dt className="text-sm font-semibold leading-6 text-primary-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-extrabold tracking-tight text-white">
                  <CounterAnimation 
                    value={stat.value} 
                    shouldAnimate={shouldAnimate}
                    suffix={stat.suffix}
                  />
                </dd>
                <p className="mt-2 text-sm text-primary-200">{stat.description}</p>
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