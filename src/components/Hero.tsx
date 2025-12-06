import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Background moves slower than scroll (Parallax)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Text fades out and moves up faster
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    // Sticky top-0 to create the overlap effect
    <section ref={ref} id="hero" className="sticky top-0 h-screen w-full overflow-hidden bg-charcoal -z-10">
      {/* Parallax Background Video */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]" 
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={ASSETS.hero.cover}
          className="w-full h-full object-cover"
        >
          <source src={ASSETS.hero.video} type="video/mp4" />
          {/* Fallback image if video fails */}
          <img 
            src={ASSETS.hero.cover} 
            alt="Jawai Landscape" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <h2 className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light text-desert">
            Rajasthan, India
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 leading-tight tracking-tight">
            Jawai Wildframe
          </h1>
          <p className="font-light text-lg md:text-2xl max-w-2xl mx-auto mb-12 text-white/90 font-serif italic">
            Luxury stays & wilderness experiences in the Land of Leopards.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/book" className="px-10 py-4 border border-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-charcoal transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              Book Your Stay
            </a>
            <a href="#safari" className="px-10 py-4 border border-white hover:bg-white hover:text-charcoal transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              Plan Leopard Safari
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity: textOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} className="opacity-70" />
      </motion.div>
    </section>
  );
};
