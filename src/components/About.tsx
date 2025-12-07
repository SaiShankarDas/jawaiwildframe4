import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/assets';

export const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
      {/* Text Content */}
      <div className="lg:w-1/2 relative pt-12 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left flex flex-col gap-8"
        >
          {/* Headline - Large Serif */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.15]">
            A pioneering Jawai wildlife experience, set in the land of leopards, culture & ancient granite hills.
          </h2>

          {/* Sub-headline - Medium Sans-serif */}
          <h3 className="font-sans text-lg md:text-xl text-charcoal/90 font-medium tracking-wide leading-relaxed">
            Discover the raw beauty of Jawai, where wildlife, rural heritage, and nature coexist in extraordinary harmony.
          </h3>

          {/* Body Text - Light Color, Smaller */}
          <div className="relative">
            <p className="text-gray-500 font-light text-base md:text-lg leading-loose max-w-xl mx-auto lg:mx-0 text-justify lg:text-left">
              Jawai Wildframe curates immersive safaris through one of India’s most enchanting wildernesses — a landscape where leopards roam the granite hills, migratory birds fill the skies, and local communities live in rare harmony with wildlife. Guided by expert naturalist Balveer Singh Mewar, every experience blends authenticity, conservation, and deep storytelling.
            </p>
          </div>
        </motion.div>
      </div>

     {/* Right Side: Logo + Text (Clean, No Containers) */}
<div className="lg:w-1/2 flex flex-col justify-center items-center text-center py-10">

  {/* Logo */}
  <img
    src="/images/logo.jpg"
    alt="Jawai Wildframe Logo"
    className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
  />

  {/* Brand Name */}
  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 tracking-wide">
    jawai wildframe
  </h1>

  {/* Tagline */}
  <p className="font-playfair text-lg md:text-xl mt-3 text-gray-700">
    Safari | Adventure | Hiking | Camping
  </p>

</div>
    </div>
  );
};
