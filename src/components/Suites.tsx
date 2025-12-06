import React from 'react';
import { FadeIn } from './ui/Section';
import { ASSETS } from '../data/assets';
import { ArrowRight } from 'lucide-react';

const suites = [
  {
    title: "Luxury Stone Cottage",
    desc: "Hewn from local stone, offering cool respite and absolute privacy with private verandas.",
    image: ASSETS.suites.stoneCottage,
  },
  {
    title: "Signature Tented Suite",
    desc: "Experience the romance of the safari era with canvas walls and panoramic views.",
    image: ASSETS.suites.tentedSuite,
  }
];

export const Suites = () => {
  return (
    // Changed justify-center to justify-start
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-start">
      <div className="text-left mb-12 lg:mb-20">
        <FadeIn>
          <span className="text-desert uppercase tracking-widest text-sm font-bold">Accommodations</span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-4">Sanctuaries of Comfort</h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {suites.map((suite, index) => (
          <FadeIn key={index} delay={index * 0.2} className="group cursor-pointer">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg mb-6">
              <img 
                src={suite.image} 
                alt={suite.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:text-desert transition-colors">
                {suite.title}
              </h3>
              <p className="text-gray-600 font-light text-lg">
                {suite.desc}
              </p>
              <div className="flex items-center text-xs uppercase tracking-widest font-bold text-charcoal group-hover:translate-x-2 transition-transform">
                View Details <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
