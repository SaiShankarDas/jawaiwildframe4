import React, { useRef } from 'react';
import { FadeIn } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ASSETS } from '../data/assets';

const experiences = [
  {
    title: "Jawai Leopard Safari",
    desc: "An exclusive journey through sculpted granite hills, guided by native trackers. Witness leopards in their natural habitat, moving gracefully across the pristine wilderness.",
    price: "₹3,500/-",
    image: ASSETS.experiencesList.leopard
  },
  {
    title: "Prime Safari",
    desc: "A curated wildlife experience tailored for scenic photography. Capture golden-hour moments and immersive sightings across Jawai’s most active viewing zones.",
    price: "₹4,500/-",
    image: ASSETS.experiencesList.prime
  },
  {
    title: "Premium Safari",
    desc: "Our most elevated experience featuring extended tracking and multi-zone access. Explore remote terrains and dramatic viewpoints for exceptional wildlife encounters.",
    price: "₹5,500/-",
    image: ASSETS.experiencesList.premium
  },
  {
    title: "Birds & Crocodile Safari",
    desc: "A serene exploration of the tranquil Jawai Dam. Observe flamingos, pelicans, and marsh crocodiles amidst lush wetlands and calm waters.",
    price: "₹3,000/-",
    image: ASSETS.experiencesList.birds
  },
  {
    title: "Village & Temple Safari",
    desc: "A cultural immersion into Rabari heritage and ancient temples. Discover traditional lifestyles and spiritual narratives shaped by centuries of coexistence.",
    price: "₹4,000/-",
    image: ASSETS.experiencesList.village
  },
  {
    title: "Jungle Maad Safari",
    desc: "An evocative journey into the wild Maad forests. Navigate remote trails and rugged terrain in search of elusive predators and authentic wilderness.",
    price: "₹6,000/-",
    image: ASSETS.experiencesList.jungle
  },
  {
    title: "Wildlife Photography Safari",
    desc: "Designed for photographers, offering flexible tracking and optimal lighting. Capture striking wildlife moments against Jawai’s dramatic granite backdrops.",
    price: "₹5,000/-",
    image: ASSETS.experiencesList.photography
  }
];

export const Experiences = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-warm-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading + Intro */}
        <FadeIn className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light tracking-wide mb-6">EXPERIENCES</h2>
          <p className="font-sans text-gray-600 font-light leading-relaxed text-lg md:text-xl">
            At Jawai Wildframe, every experience is an invitation into the untamed beauty of the Jawai wilderness. From dedicated leopard tracking to serene mornings at the dam, each moment immerses you in the granite hills, ancient culture, and vibrant wildlife that define this extraordinary region.
          </p>
        </FadeIn>
      </div>

      {/* Carousel Container */}
      {/* 'items-stretch' ensures all children (cards) are the same height as the tallest one */}
      <div 
        ref={scrollContainerRef}
        className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide px-6 md:px-12"
        style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[30vw] snap-center flex flex-col h-auto group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-md relative flex-shrink-0">
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-[22rem] object-cover rounded-md hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Content Container - Flex Column to push footer down */}
            <div className="flex flex-col flex-grow pt-6">
              {/* Title */}
              <h3 className="text-2xl font-serif text-charcoal group-hover:text-desert transition-colors duration-300">
                {exp.title}
              </h3>

              {/* Description - flex-grow pushes the divider/price down */}
              <p className="text-gray-500 leading-relaxed mt-3 font-light text-sm md:text-base flex-grow">
                {exp.desc}
              </p>

              {/* Footer Section (Divider + Price) */}
              <div className="mt-6">
                <div className="bg-desert h-[1px] w-full mb-4 opacity-50"></div>
                <p className="text-forest-green font-semibold tracking-wide">
                  {exp.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for end of scroll */}
        <div className="w-6 flex-shrink-0" />
      </div>

      {/* Navigation Buttons (Visible on all devices) */}
      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={scrollLeft} 
          className="p-3 rounded-full border border-charcoal/20 hover:bg-charcoal hover:text-white transition-all duration-300 active:scale-95"
          aria-label="Scroll Left"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={scrollRight} 
          className="p-3 rounded-full border border-charcoal/20 hover:bg-charcoal hover:text-white transition-all duration-300 active:scale-95"
          aria-label="Scroll Right"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
