"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Property } from '@/lib/types/property';
import { Booking } from '@/lib/types/booking';
import { useCurrentUser } from '@/lib/auth/client';
import { 
  Users, 
  Building, 
  Calendar, 
  DollarSign, 
  AlertCircle,
  BarChart2,
  Settings,
  Shield
} from 'lucide-react';

// Mock user stats
const userStats = {
  total: 120,
  active: 95,
  newThisMonth: 15,
};

// Mock property stats
const propertyStats = {
  total: 58,
  active: 45,
  pending: 8,
  featured: 12,
};

// Mock booking stats
const bookingStats = {
  total: 210,
  completed: 180,
  active: 25,
  cancelled: 5,
  revenueThisMonth: 15250,
};

// Mock recent user signups
const recentUsers = [
  {
    id: 'usr_10',
    name: 'Emma Thompson',
    email: 'emma@example.com',
    role: 'user',
    createdAt: new Date('2023-07-10'),
    image: '/assets/avatars/user-2.jpg'
  },
  {
    id: 'usr_11',
    name: 'Michael Chen',
    email: 'michael@example.com',
    role: 'user',
    createdAt: new Date('2023-07-08'),
    image: null
  },
  {
    id: 'usr_12',
    name: 'Sophia Rodriguez',
    email: 'sophia@example.com',
    role: 'agent',
    createdAt: new Date('2023-07-05'),
    image: '/assets/avatars/agent-2.jpg'
  }
];

// Mock system alerts
const systemAlerts = [
  {
    id: 'alert_1',
    type: 'warning',
    message: 'Server load is at 85% capacity',
    timestamp: new Date('2023-07-15T10:30:00')
  },
  {
    id: 'alert_2',
    type: 'info',
    message: 'System update scheduled for tomorrow at 2 AM',
    timestamp: new Date('2023-07-14T16:45:00')
  }
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  
  // Use client-side auth hook
  const { user, loading: authLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const stats = [
    {
      title: 'Total Users',
      value: userStats.total,
      icon: <Users className="h-6 w-6 text-blue-400" />,
      color: 'bg-blue-900/20 border-blue-800'
    },
    {
      title: 'Properties',
      value: propertyStats.total,
      icon: <Building className="h-6 w-6 text-purple-400" />,
      color: 'bg-purple-900/20 border-purple-800'
    },
    {
      title: 'Bookings',
      value: bookingStats.total,
      icon: <Calendar className="h-6 w-6 text-green-400" />,
      color: 'bg-green-900/20 border-green-800'
    },
    {
      title: 'Revenue (Month)',
      value: `$${bookingStats.revenueThisMonth.toLocaleString()}`,
      icon: <DollarSign className="h-6 w-6 text-yellow-400" />,
      color: 'bg-yellow-900/20 border-yellow-800'
    }
  ];

  // Show loading state while checking authentication
  if (authLoading || loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
          <p className="mt-2 text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, could redirect or show message
  if (!isAuthenticated) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Authentication Required</h2>
          <p className="text-gray-400 mb-6">Please log in to access the admin dashboard.</p>
          <Link 
            href="/login" 
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  
  // If user is not an admin, show unauthorized message
  if (user?.role?.toLowerCase() !== 'admin') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-black border border-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-6">You don't have permission to access the admin dashboard.</p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome back, {user?.name || 'Admin'}!
            </h1>
            <p className="mt-1 text-gray-400">
              Here's what's happening with ShortLet today
            </p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-3">
            <Link 
              href="/admin-dashboard/system"
              className="flex items-center px-4 py-2 bg-[#f3e17b] hover:bg-[#dac968] text-black font-medium rounded-md transition-colors"
            >
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.color} border rounded-lg p-6`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="rounded-full bg-black p-3">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Users and Property Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent user signups */}
        <div className="lg:col-span-2 bg-black border border-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent User Signups</h2>
            <Link href="/admin-dashboard/users" className="text-sm text-[#f3e17b] hover:text-[#dac968]">
              View all users
            </Link>
          </div>
          
          <div className="divide-y divide-gray-800">
            {loading ? (
              <div className="p-6 text-center">
                <div className="animate-pulse flex justify-center">
                  <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                </div>
                <p className="mt-2 text-gray-500">Loading users...</p>
              </div>
            ) : recentUsers.length > 0 ? (
              recentUsers.map(user => (
                <div key={user.id} className="p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-gray-800">
                      {user.image ? (
                        <img 
                          src={user.image} 
                          alt={user.name} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-[#f3e17b] text-black font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-white">{user.name}</h3>
                          <p className="text-xs text-gray-400">{user.email}</p>
                        </div>
                        <div className="px-2 py-1 rounded-full text-xs font-medium capitalize bg-gray-800 text-white">
                          {user.role}
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Joined {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <Link
                      href={`/admin-dashboard/users/${user.id}`}
                      className="ml-2 p-2 text-gray-400 hover:text-white rounded-md hover:bg-gray-800"
                    >
                      <span className="sr-only">View details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">No recent signups</p>
              </div>
            )}
          </div>
        </div>
        
        {/* System alerts */}
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">System Alerts</h2>
          </div>
          
          <div className="divide-y divide-gray-800">
            {loading ? (
              <div className="p-6 text-center">
                <div className="animate-pulse flex justify-center">
                  <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                </div>
                <p className="mt-2 text-gray-500">Loading alerts...</p>
              </div>
            ) : systemAlerts.length > 0 ? (
              systemAlerts.map(alert => (
                <div key={alert.id} className="p-4">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 p-2 rounded-full ${
                      alert.type === 'warning' 
                        ? 'bg-yellow-900/30 text-yellow-400' 
                        : alert.type === 'error'
                        ? 'bg-red-900/30 text-red-400'
                        : 'bg-blue-900/30 text-blue-400'
                    }`}>
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white">{alert.message}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {new Date(alert.timestamp).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">No system alerts</p>
              </div>
            )}
          </div>
          
          <div className="px-6 py-4 bg-gray-900">
            <Link
              href="/admin-dashboard/system"
              className="block w-full py-2 px-3 text-center text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              System Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Property and Booking Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Property Stats */}
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Property Stats</h2>
            <Link href="/admin-dashboard/properties" className="text-sm text-[#f3e17b] hover:text-[#dac968]">
              Manage Properties
            </Link>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Active Properties</p>
                <p className="text-2xl font-bold text-white mt-2">{propertyStats.active}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((propertyStats.active / propertyStats.total) * 100).toFixed(0)}% of total
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Pending Review</p>
                <p className="text-2xl font-bold text-white mt-2">{propertyStats.pending}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((propertyStats.pending / propertyStats.total) * 100).toFixed(0)}% of total
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Featured Properties</p>
                <p className="text-2xl font-bold text-white mt-2">{propertyStats.featured}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((propertyStats.featured / propertyStats.total) * 100).toFixed(0)}% of total
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Avg. Rating</p>
                <p className="text-2xl font-bold text-white mt-2">4.7</p>
                <p className="text-xs text-gray-500 mt-1">
                  ★★★★★ (358 reviews)
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <Link
                href="/admin-dashboard/properties"
                className="block w-full py-2 px-3 text-center text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                View All Properties
              </Link>
            </div>
          </div>
        </div>
        
        {/* Booking Stats */}
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Booking Stats</h2>
            <Link href="/admin-dashboard/bookings" className="text-sm text-[#f3e17b] hover:text-[#dac968]">
              View All Bookings
            </Link>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Active Bookings</p>
                <p className="text-2xl font-bold text-white mt-2">{bookingStats.active}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((bookingStats.active / bookingStats.total) * 100).toFixed(0)}% of total
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-2xl font-bold text-white mt-2">{bookingStats.completed}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((bookingStats.completed / bookingStats.total) * 100).toFixed(0)}% of total
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Cancelled</p>
                <p className="text-2xl font-bold text-white mt-2">{bookingStats.cancelled}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((bookingStats.cancelled / bookingStats.total) * 100).toFixed(0)}% of total
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400">Avg. Booking Value</p>
                <p className="text-2xl font-bold text-white mt-2">$850</p>
                <p className="text-xs text-gray-500 mt-1">
                  4.2 nights on average
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <Link
                href="/admin-dashboard/bookings"
                className="block w-full py-2 px-3 text-center text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                View All Bookings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/admin-dashboard/analytics">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-800 flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Analytics</h3>
                <p className="text-sm text-gray-400">Platform performance metrics</p>
              </div>
            </div>
          </div>
        </Link>
        
        <Link href="/admin-dashboard/users">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-800 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">User Management</h3>
                <p className="text-sm text-gray-400">Manage users and agents</p>
              </div>
            </div>
          </div>
        </Link>
        
        <Link href="/admin-dashboard/system">
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-green-900/30 border border-green-800 flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">System Settings</h3>
                <p className="text-sm text-gray-400">Configure platform settings</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 