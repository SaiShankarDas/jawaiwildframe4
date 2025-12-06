import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  return (
    <section id={id} className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6 md:px-12 lg:px-20'}>
        {children}
      </div>
    </section>
  );
};

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // Increased distance for more dramatic entry
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} // Triggers slightly later
      transition={{ 
        duration: 1.2, // Slower duration
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic-bezier for "luxury" ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
