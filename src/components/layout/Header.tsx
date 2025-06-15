"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown, Globe, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FaHome, FaUserCircle, FaBars, FaAirbnb, FaSearch, FaUserAlt, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useCurrentUser, logout } from '@/lib/auth/client';
import { User } from '@/lib/types/user';

const navigation = [
  { 
    name: 'Apartments', 
    href: '/',
    active: true
  },
  { 
    name: 'Corporate Stays', 
    href: '/corporate',
  },
  { 
    name: 'Monthly Rentals', 
    href: '/monthly',
  },
  { 
    name: 'Instant Book', 
    href: '/instant-book',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Get authenticated user
  const { user, loading, isAuthenticated } = useCurrentUser();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle user dropdown
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  // Handle logout
  const handleLogout = async () => {
    await logout();
    setUserDropdownOpen(false);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300", 
        scrolled 
          ? "bg-black shadow-md shadow-gray-800" 
          : "bg-black"
      )}
    >
      <div className="border-b border-gray-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <motion.div 
            className="flex lg:flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
              <span className="sr-only">ShortLet</span>
              <FaAirbnb className="h-8 w-8 text-[#f3e17b]" />
              <span className="text-xl font-display font-bold text-[#f3e17b] hidden sm:block">ShortLet</span>
            </Link>
          </motion.div>
          
          {/* Desktop navigation tabs */}
          <div className="hidden lg:flex lg:gap-x-8 border-b-0">
            <div className="flex border-b-0">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium px-4 py-2 transition-colors relative group rounded-full hover:bg-gray-900",
                    pathname === item.href || item.active
                      ? "text-[#f3e17b]" 
                      : "text-gray-300"
                  )}
                >
                  {item.name}
                  
                  {/* Underline effect */}
                  {(pathname === item.href || item.active) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f3e17b] mx-4" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Search button - desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center justify-between gap-2 text-sm font-medium px-6 py-3 rounded-full border border-gray-800 hover:border-gray-700 shadow-sm hover:shadow-md transition-all text-white"
            >
              <span>City or neighborhood</span>
              <span className="h-5 w-0.5 bg-gray-700"></span>
              <span>Dates</span>
              <span className="h-5 w-0.5 bg-gray-700"></span>
              <span className="text-gray-400">Guests & amenities</span>
              <div className="bg-[#f3e17b] p-2 rounded-full text-black">
                <Search className="h-4 w-4" />
              </div>
            </button>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <Link
              href="/agent-signup"
              className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
            >
              Become a Host
            </Link>
            
            {!isAuthenticated ? (
              /* Login button when not logged in */
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium bg-[#f3e17b] text-black hover:bg-[#dac968] ml-2 transition-colors"
              >
                Log in
              </Link>
            ) : (
              /* User name when logged in */
              <Link
                href={`/${user?.role}-dashboard`}
                className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 ml-2"
              >
                Dashboard
              </Link>
            )}
            
            <button className="rounded-full p-2 hover:bg-gray-900 mx-2 text-white">
              <Globe className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center space-x-2 border border-gray-800 rounded-full p-2 hover:shadow-md transition-shadow"
                onClick={toggleUserDropdown}
              >
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  {user?.image ? (
                    <img 
                      src={user.image} 
                      alt={user.name || 'User'}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FaUserAlt className="h-4 w-4 text-gray-300" />
                  )}
                </div>
              </button>
              
              {/* Profile dropdown */}
              <AnimatePresence>
                {userDropdownOpen && (
                  <motion.div
                    className="absolute right-0 z-10 mt-3 w-60 rounded-xl bg-gray-900 shadow-lg ring-1 ring-gray-800 overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
                      {!user ? (
                        <div className="border-b border-gray-800">
                          <Link
                            href="/login"
                            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                          >
                            Log in
                          </Link>
                          <Link
                            href="/signup"
                            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                          >
                            Sign up
                          </Link>
                        </div>
                      ) : (
                        <div className="border-b border-gray-800">
                          <div className="px-4 py-3">
                            <p className="text-sm font-medium text-white">{user.name}</p>
                            <p className="text-xs text-gray-400">{user.email}</p>
                          </div>
                          <Link
                            href={`/${user.role}-dashboard`}
                            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                          >
                            Dashboard
                          </Link>
                          <Link
                            href={`/${user.role}-dashboard/profile`}
                            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                          >
                            Profile
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm font-medium text-red-400 hover:bg-gray-800"
                          >
                            Log out
                          </button>
                        </div>
                      )}
                      <div className="pt-2">
                        <Link
                          href="/agent-signup"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        >
                          Host your home
                        </Link>
                        <Link
                          href="/host-an-experience"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        >
                          Host an experience
                        </Link>
                        <Link
                          href="/help"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        >
                          Help
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile search bar */}
      <div className="flex justify-center p-3 lg:hidden border-b border-gray-800">
        <button 
          onClick={() => setShowSearch(!showSearch)}
          className="flex items-center justify-between w-full max-w-md gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-800 shadow-sm"
        >
          <div className="flex items-center">
            <Search className="h-4 w-4 mr-2 text-gray-400" />
            <div className="text-left">
              <div className="font-medium text-white">Find an apartment</div>
              <div className="text-xs text-gray-400">Any dates · Flexible amenities</div>
            </div>
          </div>
          <div className="border border-gray-700 rounded-full p-2">
            <FaBars className="h-3 w-3 text-gray-300" />
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fixed inset-0 bg-gray-900/80" aria-hidden="true" />
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">ShortLet</span>
                  <FaAirbnb className="h-8 w-8 text-[#f3e17b]" />
                  <span className="text-xl font-display font-bold text-[#f3e17b]">ShortLet</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                  <div className="space-y-2 py-6">
                    {!user ? (
                      /* Login/Signup buttons when not logged in */
                      <div className="flex flex-col space-y-3 mb-6">
                        <Link
                          href="/login"
                          className="w-full py-3 px-4 text-center font-medium bg-[#f3e17b] text-black rounded-lg hover:bg-[#dac968] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Log in
                        </Link>
                        <Link
                          href="/signup"
                          className="w-full py-3 px-4 text-center font-medium border border-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Sign up
                        </Link>
                      </div>
                    ) : (
                      /* User info when logged in */
                      <div className="flex flex-col space-y-3 mb-6">
                        <div className="flex items-center space-x-3 px-3 py-2">
                          {user.image ? (
                            <img 
                              src={user.image} 
                              alt={user.name || 'User'}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-[#f3e17b] flex items-center justify-center text-black font-bold">
                              {user.name?.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                          </div>
                        </div>
                        <Link
                          href={`/${user.role}-dashboard`}
                          className="w-full py-3 px-4 text-center font-medium bg-[#f3e17b] text-black rounded-lg hover:bg-[#dac968] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            setMobileMenuOpen(false);
                          }}
                          className="w-full py-3 px-4 text-center font-medium border border-red-900 text-red-400 rounded-lg hover:bg-red-900/30 transition-colors"
                        >
                          Log out
                        </button>
                      </div>
                    )}
                    
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-base font-medium",
                          pathname === item.href || item.active
                            ? "text-[#f3e17b]" 
                            : "text-gray-300 hover:bg-gray-900"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/agent-signup"
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Become a Host
                    </Link>
                    <Link
                      href="/host-an-experience"
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Host an Experience
                    </Link>
                    <Link
                      href="/help"
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Help Center
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 