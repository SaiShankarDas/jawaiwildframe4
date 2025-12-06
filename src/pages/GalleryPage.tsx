import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, GALLERY_IMAGES, Category } from '../data/galleryData';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/ui/Section';
import { ASSETS } from '../data/assets';

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filteredImages, setFilteredImages] = useState(GALLERY_IMAGES);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(GALLERY_IMAGES);
    } else {
      setFilteredImages(GALLERY_IMAGES.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  // Fallback image if the asset is missing (since folders might be empty initially)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = ASSETS.placeholders.imageNotFound;
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-desert selection:text-white flex flex-col">
      
      {/* Spacer for Fixed Navbar */}
      <div className="h-24 md:h-32"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20 flex-grow">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <span className="text-desert uppercase tracking-widest text-sm font-bold block mb-4">
              Visual Archive
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6">
              Moments in the Wild
            </h1>
            <p className="font-light text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A curated collection of leopards, landscapes, and life in Jawai.
            </p>
          </FadeIn>
        </div>

        {/* Filter Tabs */}
        <FadeIn delay={0.2} className="mb-12 md:mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full text-xs md:text-sm uppercase tracking-wider font-bold transition-all duration-300 border border-forest-green/20
                  ${activeCategory === category 
                    ? 'bg-forest-green text-ivory shadow-lg scale-105' 
                    : 'bg-transparent text-forest-green hover:bg-forest-green/10 hover:scale-105'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-desert text-xs uppercase tracking-widest font-bold block mb-1">
                      {image.category}
                    </span>
                    <h3 className="text-white font-serif text-xl">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-light">
            No images found in this category.
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="bg-charcoal text-white border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
};
