import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../data/assets';

const leftImages = [
  { src: ASSETS.experiences.leopardSafari, alt: "Leopard Sighting" },
  { src: ASSETS.experiences.villageWalk, alt: "Village Life" },
  { src: ASSETS.experiences.hillSunrise, alt: "Granite Hills" },
];

const rightImages = [
  { src: ASSETS.experiences.luxuryStay, alt: "Luxury Tents" },
  { src: ASSETS.experiences.bushDinner, alt: "Dining in the Wild" },
  { src: ASSETS.experiences.birdWatching, alt: "Migratory Birds" },
];

export const DualCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // ANIMATION LOGIC (Desktop):
  const yLeft = useTransform(scrollYProgress, [0, 1], ["100vh", "-350vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["145vh", "-305vh"]);

  // Combine images for the mobile carousel
  const allImages = [...leftImages, ...rightImages];

  return (
    <>
      {/* =========================================
          MOBILE / TABLET VIEW (Horizontal Carousel)
          ========================================= */}
      <div className="lg:hidden bg-warm-white py-20">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
            Rajasthan's most authentic and immersive <br /> wildlife  experience.
          </h2>
          <p className="font-sans text-gray-600 font-light leading-relaxed text-sm md:text-base">
            Shaped by Jawai’s timeless granite landscapes, Jawai Wildframe reveals a world where leopards roam freely, birds fill the skies, and rural communities coexist peacefully with the wild. Each journey blends authentic encounters with a deep sense of place and culture.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 w-full scrollbar-hide">
          {allImages.map((img, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[85vw] md:w-[50vw] snap-center"
            >
              <div className="overflow-hidden rounded-sm">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover aspect-[3/4]" 
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-charcoal/60 text-center">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Scroll-Locked Animation)
          ========================================= */}
      <section 
        ref={targetRef} 
        className="hidden lg:block h-[450vh] relative bg-warm-white"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* CENTRAL TEXT BLOCK (Fixed) */}
          <div className="relative z-0 text-center max-w-xl px-6">
            <h2 className="font-serif text-[3.5rem] text-charcoal mb-8 leading-[1.15]">
              Rajasthan's most authentic and immersive <br /> wildlife  experience.
            </h2>
            <p className="font-sans text-lg text-gray-600 font-light leading-loose mx-auto">
              Shaped by Jawai’s timeless granite landscapes, Jawai Wildframe reveals a world where leopards roam freely, birds fill the skies, and rural communities coexist peacefully with the wild. Each journey blends authentic encounters with a deep sense of place and culture.
            </p>
          </div>

          {/* LEFT IMAGE STACK */}
          <motion.div 
            style={{ y: yLeft }}
            className="absolute left-[5%] top-0 w-[25vw] flex flex-col gap-[60vh] z-10 pointer-events-none"
          >
            {leftImages.map((img, idx) => (
              <div 
                key={`left-${idx}`} 
                className="w-full aspect-[3/3.036] overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE STACK */}
          <motion.div 
            style={{ y: yRight }}
            className="absolute right-[5%] top-0 w-[25vw] flex flex-col gap-[60vh] z-10 pointer-events-none"
          >
            {rightImages.map((img, idx) => (
              <div 
                key={`right-${idx}`} 
                className="w-full aspect-[3/3.036] overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};
