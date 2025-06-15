import { ReactNode } from 'react';
import { Metadata } from 'next';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

export const metadata: Metadata = {
  title: 'User Dashboard | ShortLet',
  description: 'Manage your bookings, favorites, and profile settings',
};

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function UserDashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <DashboardSidebar />
      
      <div className="flex-1 min-w-0 flex flex-col md:ml-64">
        <DashboardHeader title="User Dashboard" />
        
        <main className="flex-1 overflow-y-auto bg-gray-950 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 