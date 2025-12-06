import React from 'react';
import { FadeIn } from './ui/Section';

export const Conservation = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-start">
      <div className="max-w-4xl space-y-8">
        <FadeIn>
          <span className="text-deep-red uppercase tracking-widest text-sm font-bold">Our Philosophy</span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-4 leading-tight">
            Guardians of the Granite Hills
          </h2>
          <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed">
            At Jawai Wildframe, conservation is the foundation of our existence. We believe in a model of tourism that gives back more than it takes.
          </p>
          <div className="pt-8">
            <button className="text-charcoal uppercase tracking-widest text-sm font-bold border-b-2 border-charcoal pb-2 hover:text-deep-red hover:border-deep-red transition-colors">
              Learn About Our Initiatives
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
