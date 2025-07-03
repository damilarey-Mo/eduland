"use client";

import Link from 'next/link';
import Image from 'next/image';


export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/eduland.png"
        alt="Edu Land Logo"
        width={120}
        height={60}
        className="mr-2"
        priority
      />
    </Link>
  );
} 