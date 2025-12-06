import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-desert/30 last:border-b-0">
      <button 
        onClick={onClick} 
        className="w-full flex justify-between items-center py-10 md:py-12 text-left group focus:outline-none"
      >
        <span className="font-sans text-lg md:text-xl font-bold text-charcoal tracking-widest uppercase group-hover:text-desert transition-colors duration-300">
          {title}
        </span>
        <span className="text-charcoal/60 group-hover:text-desert transition-colors duration-300 ml-6">
          {isOpen ? (
            <Minus size={20} strokeWidth={1.5} />
          ) : (
            <Plus size={20} strokeWidth={1.5} />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-12 md:pb-16 pr-0 md:pr-24 font-sans text-gray-600 font-light leading-loose text-base md:text-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const GuestInformation = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All closed by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-warm-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-10">
            Guest Information
          </h2>
          {/* Thin horizontal divider beneath section heading */}
          <div className="w-full h-[1px] bg-desert/30"></div>
        </div>

        {/* Accordion Container */}
        <div className="w-full">
          
          {/* 1. Maps and Directions */}
          <AccordionItem 
            title="Maps and Directions" 
            isOpen={openIndex === 0} 
            onClick={() => handleToggle(0)}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-charcoal uppercase tracking-wider text-xs mb-4">How to reach us</h4>
                <p>
                  Even though Jawai is set amidst untouched wilderness, Jawai Wildframe is well connected by both road and air. Our closest cities are Jodhpur (165 km) and Udaipur (160 km).
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-desert">•</span>
                  <span>From Jodhpur: Approx. 2 hours 30 minutes by road</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-desert">•</span>
                  <span>From Udaipur: Approx. 2 hours 30 minutes by road</span>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-start">
                    <span className="mr-3 text-desert">•</span>
                    <span>Flights:</span>
                  </div>
                  <ul className="pl-6 mt-2 space-y-2 text-gray-500">
                    <li>– Daily flights from Delhi ⇄ Jodhpur / Udaipur</li>
                    <li>– Daily flights from Jaipur ⇄ Udaipur</li>
                  </ul>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-desert">•</span>
                  <span>By train: Falna Railway Station is the closest railhead, approx. 30 minutes from camp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-desert">•</span>
                  <span>Private transfers: Available upon request</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-desert">•</span>
                  <span>Charters: Private charter flights can land at Sirohi airstrip (approx. 1 hr 10 min drive)</span>
                </li>
              </ul>

              <p className="pt-4">
                For any assistance with transfers or travel planning, our team is happy to help.
              </p>
            </div>
          </AccordionItem>

          {/* 2. Need to Know */}
          <AccordionItem 
            title="Need to Know" 
            isOpen={openIndex === 1} 
            onClick={() => handleToggle(1)}
          >
            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-charcoal uppercase tracking-wider text-xs mb-4">HEALTH & TRAVEL GUIDELINES</h4>
                <p>
                  We recommend checking the latest travel advisories, vaccine guidelines, and health recommendations before your journey.
                  <br />
                  Jawai is considered a low-risk region, but please consult your physician for basic preventive medication if required.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-charcoal uppercase tracking-wider text-xs mb-4">VISAS</h4>
                <p>
                  All international travelers must obtain a valid Indian visa prior to arrival.
                  <br />
                  Please contact your travel agent or our reservations team if you need support.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* 3. What to Pack */}
          <AccordionItem 
            title="What to Pack" 
            isOpen={openIndex === 2} 
            onClick={() => handleToggle(2)}
          >
            <div className="space-y-6">
              <p>
                For a comfortable safari experience, we suggest packing neutral-toned clothing such as beige, olive, khaki, or brown. These shades blend with the environment and help during wildlife viewing.
              </p>

              <div>
                <h4 className="font-bold text-charcoal uppercase tracking-wider text-xs mb-4 mt-2">Suggested items:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Lightweight trousers or shorts</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Cotton long-sleeve shirts</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Walking or hiking shoes</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Sun hat or cap</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Sunglasses, sunscreen, lip balm</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Light jacket for mornings/evenings</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Swimwear (optional)</li>
                  <li className="flex items-start"><span className="mr-3 text-desert">•</span>Personal medicines & insect repellent</li>
                </ul>
              </div>

              <p className="pt-4 italic text-gray-500">
                During winter (Nov–Feb), mornings can be cold—carry warm layers, thermals, scarves, and wool socks.
              </p>
            </div>
          </AccordionItem>

          {/* 4. Weather */}
          <AccordionItem 
            title="Weather" 
            isOpen={openIndex === 3} 
            onClick={() => handleToggle(3)}
          >
            <div className="space-y-6">
              <p>
                Jawai’s climate varies across the year, creating unique seasonal experiences.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <span className="font-bold text-charcoal text-sm uppercase tracking-wide">September–October</span>
                  <span>Warm days, cooler evenings. Temperatures 25–35°C.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <span className="font-bold text-charcoal text-sm uppercase tracking-wide">November–February</span>
                  <span>Crisp mornings, sunny days. Temperatures 4–30°C.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <span className="font-bold text-charcoal text-sm uppercase tracking-wide">March–May</span>
                  <span>Warm to hot days, mild mornings. Temperatures 12–45°C.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <span className="font-bold text-charcoal text-sm uppercase tracking-wide">June–September</span>
                  <span>Early monsoon showers with lush green landscapes. Temperatures 25–35+°C.</span>
                </div>
              </div>

              <p className="pt-4">
                Each season brings its own charm—from winter mist to monsoon greenery and vibrant summer skies.
              </p>
            </div>
          </AccordionItem>

        </div>
      </div>
    </section>
  );
};
