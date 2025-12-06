import React from 'react';
import { FadeIn } from './ui/Section';
import { Quote } from 'lucide-react';

export const Reviews = () => {
  return (
    <div className="container mx-auto px-6 h-full flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <Quote size={64} className="text-desert mx-auto mb-12 opacity-50" />
          <h3 className="font-serif text-3xl md:text-5xl text-charcoal leading-relaxed italic mb-12">
            "An experience that transcends the ordinary. The connection with nature, the impeccable hospitality, and the sheer beauty of Jawai left us speechless. Truly a wild paradise."
          </h3>
          <div className="flex flex-col items-center">
            <span className="uppercase tracking-widest font-bold text-base text-charcoal">Balveer Singh Mewar</span>
            <span className="text-gray-500 text-sm mt-2 uppercase tracking-wider">Founder of Jawai Wildframe</span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
