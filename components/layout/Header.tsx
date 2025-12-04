'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Village', path: '/', icon: '🏛️' },
    { name: 'Big Tech', path: '/bigtech', icon: '🏰' },
    { name: 'NIRD', path: '/nird', icon: '⚡' },
    { name: 'Actions', path: '/actions', icon: '⚒️' },
    { name: 'Communauté', path: '/community', icon: '🤝' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white flex items-center gap-2"
            >
              <span className="text-3xl">🛡️</span>
              <span className="hidden md:inline">NIRD</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    pathname === item.path
                      ? 'bg-white text-blue-900 font-bold'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                    pathname === item.path
                      ? 'bg-white text-blue-900 font-bold'
                      : 'text-white bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
