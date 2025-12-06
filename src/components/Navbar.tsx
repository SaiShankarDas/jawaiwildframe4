import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated links to absolute paths
const navLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'Experiences', href: '/#experiences' },
  { name: 'Gallery', href: '/gallery' }, // Updated to point to new page
  { name: 'Safari', href: '/#safari' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Increased z-index to z-[100] to ensure it stays above the z-50 footer section */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-warm-white shadow-md py-4 transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="/" className="font-serif text-2xl tracking-widest font-bold uppercase text-charcoal">
            Jawai Wildframe
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest uppercase text-charcoal/80 hover:text-desert transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/book"
              className="px-6 py-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 uppercase text-xs tracking-widest font-bold"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-charcoal" />
            ) : (
              <Menu className="text-charcoal" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-warm-white flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-charcoal hover:text-desert transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white uppercase tracking-widest transition-all"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
