"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BecomeAHostPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/agent-signup');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="text-lg">Redirecting to agent signup page...</p>
      </div>
    </div>
  );
} 