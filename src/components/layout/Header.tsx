"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown, Globe, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FaHome, FaUserCircle, FaBars, FaAirbnb } from 'react-icons/fa';

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
  const pathname = usePathname();

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
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/become-a-host"
              className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
            >
              Become a Host
            </Link>
            
            <button className="rounded-full p-2 hover:bg-gray-900 mx-2 text-white">
              <Globe className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center space-x-2 border border-gray-800 rounded-full p-2 hover:shadow-md transition-shadow"
                onClick={() => setActiveMenu(activeMenu === 'profile' ? null : 'profile')}
              >
                <FaBars className="h-4 w-4 text-gray-300" />
                <FaUserCircle className="h-7 w-7 text-[#f3e17b]" />
              </button>
              
              {/* Profile dropdown */}
              <AnimatePresence>
                {activeMenu === 'profile' && (
                  <motion.div
                    className="absolute right-0 z-10 mt-3 w-60 rounded-xl bg-gray-900 shadow-lg ring-1 ring-gray-800 overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
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
                      <div className="pt-2">
                        <Link
                          href="/become-a-host"
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
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
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
                <div className="-my-6 divide-y divide-gray-800">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="/signup"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                    <Link
                      href="/become-a-host"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Become a Host
                    </Link>
                    <Link
                      href="/help"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Help
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