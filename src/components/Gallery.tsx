import React from 'react';
import { ASSETS } from '../data/assets';
import { RollingGallery } from './ui/RollingGallery';

export const Gallery = () => {
  return (
    <div className="h-full flex flex-col w-full relative bg-charcoal">
      {/* Header Section */}
      <div className="container mx-auto px-6 flex-shrink-0 pt-12 pb-8 relative z-30">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <span className="text-desert uppercase tracking-widest text-sm font-bold">Visual Journey</span>
            <h2 className="font-serif text-4xl md:text-7xl mt-4 text-white">Through the Lens</h2>
          </div>
          {/* Updated Link to /gallery */}
          <a href="/gallery" className="hidden md:block text-sm uppercase tracking-widest border-b border-white/30 pb-1 text-white hover:text-desert hover:border-desert transition-colors mb-2">
            View All Photos
          </a>
        </div>
      </div>

      {/* Rolling Gallery Container */}
      <div className="flex-1 w-full relative z-20 min-h-0 flex items-center pb-12">
        <RollingGallery 
          images={ASSETS.gallery}
          speed={50} // Adjust speed as needed
        />
      </div>
    </div>
  );
};
