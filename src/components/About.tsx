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

      {/* Right Side: Large Icon instead of photos */}
      <div className="lg:w-1/2 flex justify-center items-center relative h-[40vh] lg:h-[auto] w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <img
            src={ASSETS.about.leopardIcon}
            alt="Leopard of Jawai"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] object-contain opacity-80 hover:opacity-100 transition-opacity duration-700 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
