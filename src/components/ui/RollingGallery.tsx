import React from 'react';
import { motion } from 'framer-motion';

interface RollingGalleryProps {
  images: { url: string; label?: string }[];
  speed?: number; // Duration in seconds for one full loop
}

export const RollingGallery: React.FC<RollingGalleryProps> = ({ images, speed = 40 }) => {
  // Duplicate images to create a seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full h-full flex items-center overflow-hidden bg-charcoal relative">
      {/* Gradient Overlays for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-charcoal to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-charcoal to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-8 pl-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: 'fit-content' }}
      >
        {duplicatedImages.map((item, index) => (
          <div
            key={index}
            className="relative w-[400px] h-[60vh] flex-shrink-0 overflow-hidden rounded-lg group grayscale hover:grayscale-0 transition-all duration-500"
          >
            <img
              src={item.url}
              alt={item.label || `Gallery Image ${index}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Optional Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
