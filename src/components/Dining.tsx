import React from 'react';
import { FadeIn } from './ui/Section';
import { ASSETS } from '../data/assets';

export const Dining = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={ASSETS.dining.bushDinner} 
          alt="Bush Dinner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center relative z-10 p-6">
        <FadeIn className="bg-warm-white/95 backdrop-blur-md p-10 md:p-20 max-w-4xl text-center shadow-2xl border border-white/20 rounded-xl">
          <span className="text-deep-red uppercase tracking-widest text-sm font-bold">Culinary Arts</span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal my-6">
            Dining Under the Stars
          </h2>
          <p className="text-gray-600 font-light text-lg md:text-xl mb-10 leading-relaxed">
            Savor the authentic flavors of Rajasthan, prepared with fresh, farm-to-table ingredients. Whether it's a breakfast in the bush or a romantic candlelight dinner by the lake.
          </p>
          <button className="px-10 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold">
            View Menu
          </button>
        </FadeIn>
      </div>
    </div>
  );
};
