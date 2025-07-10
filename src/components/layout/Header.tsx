"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { colors, theme } from '@/utils/colors';

interface SubmenuItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Our History', href: '/about/history' },
      { name: 'Mission & Values', href: '/about/mission' },
      { name: 'Faculty & Staff', href: '/about/faculty' },
      { name: 'Campus', href: '/about/campus' },
    ],
  },
  {
    name: 'Academics',
    href: '/academics',
    submenu: [
      { name: 'Curriculum', href: '/academics/curriculum' },
      { name: 'Departments', href: '/academics/departments' },
      { name: 'Student Life', href: '/academics/student-life' },
      { name: 'Technology', href: '/academics/technology' },
    ],
  },
  { name: 'Admissions', href: '/admissions' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY > 10;
      if (scrollPosition !== isScrolled) {
        setIsScrolled(scrollPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Check if current path matches navigation item or its submenu
  const isActivePath = (item: NavigationItem) => {
    if (pathname === item.href) return true;
    if (item.submenu) {
      return item.submenu.some(subItem => pathname === subItem.href);
    }
    return false;
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300", 
      isScrolled 
        ? "bg-yellow-200 shadow-md" 
        : "bg-white/95 backdrop-blur-md"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop Navigation - Redesigned like testimonial filter */}
        <div className="hidden lg:flex lg:gap-x-2">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: theme.alpha(colors.vanilla[400], 0.1) }}>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                    isActivePath(item)
                      ? 'text-white shadow-lg'
                      : 'hover:bg-white/50'
                  )}
                  style={{
                    backgroundColor: isActivePath(item) ? theme.secondary : 'transparent',
                    color: isActivePath(item) ? theme.backgroundDark : theme.textMuted
                  }}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {/* Dropdown menu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeMenu === item.name && (
                      <motion.div
                        className="absolute left-1/2 z-10 mt-2 flex w-48 -translate-x-1/2 px-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div 
                          className="w-full rounded-xl shadow-lg ring-1 ring-gray-900/5 overflow-hidden"
                          style={{ 
                            backgroundColor: theme.background,
                            border: `1px solid ${theme.alpha(theme.secondary, 0.2)}`
                          }}
                        >
                          <div className="p-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                  pathname === subItem.href
                                    ? 'text-white'
                                    : 'hover:bg-white/10'
                                )}
                                style={{
                                  backgroundColor: pathname === subItem.href ? theme.secondary : 'transparent',
                                  color: pathname === subItem.href ? theme.backgroundDark : theme.textMuted
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/login" 
            className="relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 inline-flex items-center group hover:scale-105"
            style={{ 
              backgroundColor: theme.secondary,
              color: theme.backgroundDark
            }}
          >
            <motion.span 
              className="absolute inset-0 rounded-full z-0"
              style={{ backgroundColor: theme.alpha(theme.secondary, 0.8) }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <span className="relative z-10">Enroll Now</span>
          </Link>
        </div>
      </nav>

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
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-yellow-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Logo />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name} className="space-y-1">
                        <Link
                          href={item.href}
                          className={cn(
                            "-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all duration-300",
                            isActivePath(item)
                              ? 'text-white shadow-lg'
                              : 'text-gray-800 hover:bg-gray-50'
                          )}
                          style={{
                            backgroundColor: isActivePath(item) ? theme.secondary : 'transparent',
                            color: isActivePath(item) ? theme.backgroundDark : undefined
                          }}
                          onClick={() => !item.submenu && setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          {item.submenu && (
                            <ChevronDown 
                              className={cn(
                                "h-5 w-5 flex-none transition-transform duration-200",
                                activeMenu === item.name ? "rotate-180" : ""
                              )}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveMenu(activeMenu === item.name ? null : item.name);
                              }}
                            />
                          )}
                        </Link>
                        
                        {/* Mobile submenu */}
                        {item.submenu && (
                          <AnimatePresence>
                            {activeMenu === item.name && (
                              <motion.div
                                className="mt-1 ml-4 space-y-1"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={cn(
                                      "block rounded-md py-2 pl-4 pr-3 text-sm font-medium transition-all duration-300",
                                      pathname === subItem.href
                                        ? 'text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    )}
                                    style={{
                                      backgroundColor: pathname === subItem.href ? theme.secondary : 'transparent',
                                      color: pathname === subItem.href ? theme.backgroundDark : undefined
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="block rounded-full px-3 py-2.5 text-base font-semibold leading-7 text-center transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: theme.secondary,
                        color: theme.backgroundDark
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Enroll Now
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