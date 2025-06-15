"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { UserRole } from '@/lib/types/user';
import { useCurrentUser, logout } from '@/lib/auth/client';
import { 
  HomeIcon, UserIcon, CalendarIcon, HeartIcon, LogOutIcon,
  MessageSquareIcon, SettingsIcon, HelpCircleIcon, BuildingIcon,
  BarChart2Icon, UsersIcon, ShieldIcon, ClipboardIcon, BellIcon,
  PlusSquareIcon, RefreshCwIcon, AwardIcon, MapPinIcon
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Use client-side auth hook
  const { user, loading, isAuthenticated } = useCurrentUser();

  // If loading or not authenticated, return skeleton or null
  if (loading) {
    return <div className="fixed inset-y-0 left-0 w-64 bg-black animate-pulse"></div>;
  }
  
  if (!isAuthenticated || !user) {
    // Could redirect to login page if needed
    return null;
  }

  // Define navigation items based on roles
  const navItems: NavItem[] = [
    // Common items for all users
    {
      name: 'Dashboard',
      path: `/${user.role}-dashboard`,
      icon: <HomeIcon className="h-5 w-5" />,
      roles: ['user', 'agent', 'admin'],
    },
    {
      name: 'Profile',
      path: `/${user.role}-dashboard/profile`,
      icon: <UserIcon className="h-5 w-5" />,
      roles: ['user', 'agent', 'admin'],
    },
    {
      name: 'Settings',
      path: `/${user.role}-dashboard/settings`,
      icon: <SettingsIcon className="h-5 w-5" />,
      roles: ['user', 'agent', 'admin'],
    },
    
    // User specific
    {
      name: 'My Bookings',
      path: '/user-dashboard/bookings',
      icon: <CalendarIcon className="h-5 w-5" />,
      roles: ['user'],
    },
    {
      name: 'Favorites',
      path: '/user-dashboard/favorites',
      icon: <HeartIcon className="h-5 w-5" />,
      roles: ['user'],
    },
    {
      name: 'Messages',
      path: '/user-dashboard/messages',
      icon: <MessageSquareIcon className="h-5 w-5" />,
      roles: ['user', 'agent'],
    },
    
    // Agent specific
    {
      name: 'My Listings',
      path: '/agent-dashboard/listings',
      icon: <BuildingIcon className="h-5 w-5" />,
      roles: ['agent'],
    },
    {
      name: 'Booking Requests',
      path: '/agent-dashboard/booking-requests',
      icon: <ClipboardIcon className="h-5 w-5" />,
      roles: ['agent'],
    },
    {
      name: 'Add Property',
      path: '/agent-dashboard/add-property',
      icon: <PlusSquareIcon className="h-5 w-5" />,
      roles: ['agent'],
    },
    {
      name: 'Performance',
      path: '/agent-dashboard/performance',
      icon: <BarChart2Icon className="h-5 w-5" />,
      roles: ['agent'],
    },
    
    // Admin specific
    {
      name: 'User Management',
      path: '/admin-dashboard/users',
      icon: <UsersIcon className="h-5 w-5" />,
      roles: ['admin'],
    },
    {
      name: 'Property Management',
      path: '/admin-dashboard/properties',
      icon: <BuildingIcon className="h-5 w-5" />,
      roles: ['admin'],
    },
    {
      name: 'Bookings Overview',
      path: '/admin-dashboard/bookings',
      icon: <CalendarIcon className="h-5 w-5" />,
      roles: ['admin'],
    },
    {
      name: 'Analytics',
      path: '/admin-dashboard/analytics',
      icon: <BarChart2Icon className="h-5 w-5" />,
      roles: ['admin'],
    },
    {
      name: 'System Settings',
      path: '/admin-dashboard/system',
      icon: <ShieldIcon className="h-5 w-5" />,
      roles: ['admin'],
    },
  ];

  // Filter items by user role
  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(user.role?.toLowerCase() as UserRole)
  );

  // Handle logout
  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {/* Mobile menu backdrop */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-md bg-gray-900 border border-gray-800 text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isMobileOpen ? 0 : -280 }}
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-black border-r border-gray-800 overflow-y-auto md:translate-x-0 md:static md:h-screen`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and user section */}
          <div className="px-6 pt-6 pb-4 flex-shrink-0 border-b border-gray-800">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-yellow-400">ShortLet</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || 'User'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-yellow-400 text-black">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">
                  {user.name}
                </div>
                <div className="text-xs text-gray-400 capitalize">
                  {user.role}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation items */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {filteredNavItems.map((item) => {
              const isActive = pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <div className={`mr-3 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {item.icon}
                  </div>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Footer */}
          <div className="px-2 py-4 border-t border-gray-800">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-red-400 hover:text-white hover:bg-red-900/30 rounded-md transition-colors"
            >
              <LogOutIcon className="h-5 w-5 mr-2" />
              Log out
            </button>
            
            <div className="mt-4 flex items-center space-x-2 px-3">
              <Link
                href="/help"
                className="flex items-center justify-center flex-1 p-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              >
                <HelpCircleIcon className="h-4 w-4 mr-1" />
                Help
              </Link>
              
              <Link
                href="/support"
                className="flex items-center justify-center flex-1 p-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              >
                <MessageSquareIcon className="h-4 w-4 mr-1" />
                Support
              </Link>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
} 