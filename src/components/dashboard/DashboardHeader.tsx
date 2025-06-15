"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrentUser, logout } from '@/lib/auth/client';
import { 
  BellIcon, 
  MessageSquareIcon, 
  UserIcon,
  SettingsIcon, 
  HelpCircleIcon, 
  LogOutIcon, 
  SearchIcon,
  CalendarIcon,
  DollarSignIcon
} from 'lucide-react';

interface DashboardHeaderProps {
  title?: string;
  onSearch?: (query: string) => void;
}

export function DashboardHeader({ title = 'Dashboard', onSearch }: DashboardHeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  
  // Use client-side auth hook
  const { user, loading, isAuthenticated } = useCurrentUser();

  // Mock notifications
  const notifications = [
    {
      id: 'notif_1',
      title: 'Booking confirmed',
      message: 'Your booking at Luxury Studio has been confirmed.',
      time: '10 min ago',
      read: false,
      type: 'booking'
    },
    {
      id: 'notif_2',
      title: 'New message',
      message: 'Jane Smith sent you a message about your booking.',
      time: '2 hours ago',
      read: false,
      type: 'message'
    },
    {
      id: 'notif_3',
      title: 'Payment received',
      message: 'Your payment for Downtown Loft has been received.',
      time: '1 day ago',
      read: true,
      type: 'payment'
    }
  ];

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current && 
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
      
      if (
        notificationsRef.current && 
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    const result = await logout();
    // No need to redirect, NextAuth will handle this
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <header className="bg-black border-b border-gray-800 py-4 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0 flex items-center space-x-4">
            <div className="h-6 w-40 bg-gray-800 animate-pulse rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  // User's role for dashboard links
  const userRole = user?.role?.toLowerCase() || 'user';

  return (
    <header className="bg-black border-b border-gray-800 py-4 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        {/* Left Side - Title and Search */}
        <div className="flex-1 min-w-0 flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white truncate">
            {title}
          </h1>
          
          {onSearch && (
            <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-lg">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                  placeholder="Search..."
                />
              </div>
            </form>
          )}
        </div>
        
        {/* Right Side - Notifications and Profile */}
        {isAuthenticated && user && (
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                className="relative p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <BellIcon className="h-6 w-6" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-black"></span>
                )}
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-gray-900 border border-gray-800 z-10"
                  >
                    <div className="py-2 px-4 border-b border-gray-800">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-white">Notifications</h3>
                        <button className="text-xs text-yellow-400 hover:text-yellow-300">
                          Mark all as read
                        </button>
                      </div>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        <div className="py-2">
                          {notifications.map((notification) => (
                            <div 
                              key={notification.id}
                              className={`px-4 py-3 hover:bg-gray-800 ${!notification.read ? 'bg-gray-800/50' : ''}`}
                            >
                              <div className="flex items-start">
                                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                                  notification.type === 'booking' 
                                    ? 'bg-green-900/30 text-green-400' 
                                    : notification.type === 'message'
                                    ? 'bg-blue-900/30 text-blue-400'
                                    : 'bg-yellow-900/30 text-yellow-400'
                                }`}>
                                  {notification.type === 'booking' && (
                                    <CalendarIcon className="h-4 w-4" />
                                  )}
                                  {notification.type === 'message' && (
                                    <MessageSquareIcon className="h-4 w-4" />
                                  )}
                                  {notification.type === 'payment' && (
                                    <DollarSignIcon className="h-4 w-4" />
                                  )}
                                </div>
                                <div className="ml-3 flex-1">
                                  <p className={`text-sm font-medium ${!notification.read ? 'text-white' : 'text-gray-300'}`}>
                                    {notification.title}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="ml-2 flex-shrink-0">
                                    <span className="inline-block h-2 w-2 rounded-full bg-yellow-400"></span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-8 px-4 text-center">
                          <p className="text-sm text-gray-400">No notifications yet</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="py-2 px-4 border-t border-gray-800">
                      <Link
                        href="/notifications"
                        className="block text-center text-xs text-yellow-400 hover:text-yellow-300"
                      >
                        View all notifications
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Messages */}
            <Link href="/messages" className="p-1 rounded-full text-gray-400 hover:text-white">
              <MessageSquareIcon className="h-6 w-6" />
            </Link>
            
            {/* Profile dropdown */}
            <div className="relative" ref={profileMenuRef}>
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-yellow-400 text-black">
                      {user.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
                <span className="hidden md:block text-sm font-medium text-white">
                  {user.name || 'User'}
                </span>
              </button>
              
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 border border-gray-800 z-10"
                  >
                    <div className="py-1">
                      <Link 
                        href={`/${userRole}-dashboard/profile`}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <UserIcon className="mr-3 h-4 w-4 text-gray-400" />
                        Profile
                      </Link>
                      <Link 
                        href={`/${userRole}-dashboard/settings`}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <SettingsIcon className="mr-3 h-4 w-4 text-gray-400" />
                        Settings
                      </Link>
                      <Link 
                        href="/help"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <HelpCircleIcon className="mr-3 h-4 w-4 text-gray-400" />
                        Help & Support
                      </Link>
                      <div className="border-t border-gray-800">
                        <button
                          onClick={() => {
                            setShowProfileMenu(false);
                            handleLogout();
                          }}
                          className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-red-900/30 hover:text-red-300"
                        >
                          <LogOutIcon className="mr-3 h-4 w-4" />
                          Log out
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 