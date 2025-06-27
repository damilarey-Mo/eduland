"use client";

import Link from 'next/link';
import { theme } from '@/utils/colors';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect 
          width="40" 
          height="40" 
          rx="8"
          style={{ fill: theme.backgroundDark }}
        />
        <path
          d="M28 13.5L20 9L12 13.5M28 13.5L20 18M28 13.5V26.5L20 31M20 18L12 13.5M20 18V31M12 13.5V26.5L20 31"
          stroke={theme.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle 
          cx="20" 
          cy="14" 
          r="3" 
          style={{ fill: theme.primary }}
        />
      </svg>
      <span className="text-xl font-bold font-display" style={{ color: theme.secondary }}>
        EduLand
      </span>
    </Link>
  );
} 