import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const PhotographySafari = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-screen w-full">
      {/* Left Side: Content Block */}
      <div className="w-full lg:w-1/2 bg-forest-green flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto lg:mx-0"
        >
          {/* Category Label */}
          <span className="block text-xs md:text-sm uppercase tracking-[0.2em] text-ivory/80 mb-6 font-bold">
            Photography Safaris
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-ivory mb-8">
            Mastering the Wild Through the Lens
          </h2>

          {/* Minimal Icon */}
          <div className="mb-8">
            <Camera className="text-ivory/80 w-8 h-8" strokeWidth={1.5} />
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-desert/50 mb-8"></div>

          {/* Description */}
          <p className="font-sans text-soft-gray font-light text-base md:text-lg leading-loose text-justify lg:text-left">
            Step into Jawai’s wilderness with a safari designed exclusively for wildlife photographers. Led by seasoned native trackers, this experience positions you at perfect moments—soft sunrise light, dramatic granite silhouettes, and active wildlife corridors.
            <br /><br />
            Each frame offers a rare chance to capture leopards, birds, and wild landscapes in their most cinematic form, creating imagery that reflects the raw beauty of Jawai’s untamed ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Right Side: Full Height Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[50vh] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={ASSETS.photographySafari.main}
            alt="Wildlife Photography Safari"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </section>
  );
};
