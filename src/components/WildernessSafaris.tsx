import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/assets';

export const WildernessSafaris = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Left Side: Full Height Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={ASSETS.experiences.leopardSafari} 
            alt="Jawai Leopard Safari" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Optional subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Right Side: Content Block */}
      <div className="w-full lg:w-1/2 bg-forest-green flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          {/* Category Label */}
          <span className="block text-xs md:text-sm uppercase tracking-[0.2em] text-ivory/80 mb-6 font-bold">
            Jawai Wilderness Safaris
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-ivory mb-8">
            Up-close encounters with Jawai’s iconic wildlife.
          </h2>

          {/* Paragraph */}
          <div className="w-16 h-[1px] bg-desert/50 mb-8"></div>
          
          <p className="font-sans text-soft-gray font-light text-base md:text-lg leading-loose text-justify lg:text-left">
            Explore the wild heart of Jawai with safaris guided by expert naturalist Balveer Singh Mewar, a true son of the land. Witness leopards living freely among ancient granite hills, along with hyenas, jackals, nilgai, jungle cats, sloth bears, crocodiles, and over 100 species of resident and migratory birds.
            <br /><br />
            Every drive reveals Jawai’s rare harmony between wildlife, rural communities, and untouched landscapes — an experience both authentic and deeply meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
