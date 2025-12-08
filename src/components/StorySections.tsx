import React from 'react';
import { CardSection } from './ui/CardSection';
import { FadeIn } from './ui/Section';
import { ASSETS } from '../data/assets';
import { Mountain, Compass, Car, Tent } from 'lucide-react';

interface StoryData {
  title: string;
  text: React.ReactNode;
  image: string;
  imageAlt: string;
  id: string;
  label: string;
}

const stories: StoryData[] = [
  {
    title: "The Land of Leopards & Living Heritage",
    label: "Wilderness",
    image: ASSETS.storySections.leopards,
    imageAlt: "Leopard in wildlife",
    text: (
      <p>
        Jawai is shaped by ancient granite hills, open valleys, lakes, and a rare harmony between humans and wildlife. Leopards rest in rocky caves above villages, wolves and hyenas move through rugged passes, sloth bears roam the forest edges, and over a hundred bird species gather near the Jawai Dam. It is one of India’s most extraordinary natural ecosystems.
      </p>
    ),
    id: "leopards"
  },
  {
    title: "Guided by Native Naturalists",
    label: "Expertise",
    image: ASSETS.storySections.naturalists,
    imageAlt: "Native Naturalist",
    text: (
      <p>
        Led by Balveer Singh Mewar, a true son of Jawai raised in Jeewda village, our safaris are shaped by instinct, lived experience, and deep familiarity with the land. Balveer knows every trail, leopard territory, and hidden passage — offering authentic, conservation-rooted wildlife tracking rather than scripted tours.
      </p>
    ),
    id: "naturalists"
  },
  {
    title: "Signature Jawai Safaris",
    label: "Adventure",
    image: ASSETS.storySections.safaris,
    imageAlt: "Jeep Safari",
    text: (
      <>
        <p>
          From dedicated Leopard Tracking Safaris to multi-zone Premium Safaris at sunrise and sunset, every journey is crafted to reveal Jawai’s wildest moments. Birds & Crocodile Safaris take you across the calm waters of the Jawai Dam — home to flamingos, pelicans, raptors, and marsh crocodiles.
        </p>
        <p className="mt-4">
          Village & Temple Safaris and Maad Jungle Safaris offer deeper immersion into Jawai’s cultural and ecological heritage.
        </p>
      </>
    ),
    id: "safaris"
  },
  {
    title: "Stay, Dine & Camp in the Wild Heart of Jawai",
    label: "Hospitality",
    image: ASSETS.storySections.stay,
    imageAlt: "Camping in the wild",
    text: (
      <p>
        Enjoy peaceful evenings under starry skies, hilltop camping near the Jawai Dam, breakfast overlooking calm waters filled with birdlife, and warm Rajasthani hospitality. Every setup is safe, comfortable, and closely connected to nature — offering raw wilderness without compromising on care.
      </p>
    ),
    id: "stay"
  }
];

// Helper to get icon based on ID for Mobile View
const getIcon = (id: string) => {
  switch(id) {
    case 'leopards': return <Mountain size={16} className="text-desert" />;
    case 'naturalists': return <Compass size={16} className="text-desert" />;
    case 'safaris': return <Car size={16} className="text-desert" />;
    case 'stay': return <Tent size={16} className="text-desert" />;
    default: return <Mountain size={16} className="text-desert" />;
  }
};

export const StorySections = () => {
  return (
    <>
      {/* =========================================
          MOBILE VIEW (Vertical Block Layout - Sujān Style)
          ========================================= */}
      <div className="md:hidden flex flex-col bg-warm-white pb-20">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col">
            
            {/* Full Width Image */}
            <div className="w-full h-[50vh] relative">
               <img 
                 src={story.image} 
                 alt={story.imageAlt} 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Content Block */}
            <div className="px-6 py-12 bg-warm-white">
              <FadeIn>
                {/* Category Label */}
                <div className="flex items-center gap-3 mb-5">
                  {getIcon(story.id)}
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8c7b62] font-bold">
                    {story.label}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-[2rem] leading-[1.15] text-[#2c2c2c] mb-6 font-medium">
                  {story.title}
                </h2>

                {/* Paragraph */}
                <div className="font-sans text-gray-600 text-base leading-relaxed mb-10 font-light">
                  {story.text}
                </div>
              </FadeIn>
            </div>
            
          </div>
        ))}
      </div>

      {/* =========================================
          DESKTOP VIEW (Stacking Cards)
          ========================================= */}
      <div className="hidden md:block">
        {stories.map((story, index) => {
          // Determine Theme based on index
          // 1 & 3 (Index 0 & 2) -> White
          // 2 & 4 (Index 1 & 3) -> Green
          const isGreen = index % 2 !== 0;

          return (
            <CardSection 
              key={index} 
              index={index} 
              id={story.id}
              noPadding={true}
              className="bg-charcoal" // Base background
            >
              <section className="relative h-full w-full flex items-center justify-center">
                <img 
                  src={story.image} 
                  alt={story.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                
                <div className="relative z-10 flex items-center justify-center px-6 w-full">
                  <div className={`max-w-3xl w-full rounded-2xl shadow-2xl p-8 md:p-14 ${isGreen ? 'bg-forest-green' : 'bg-white'}`}>
                    
                    {/* Label */}
                    <p className={`text-xs uppercase tracking-wide mb-4 font-bold ${isGreen ? 'text-ivory/70' : 'text-gray-500'}`}>
                      {story.label}
                    </p>

                    {/* Title */}
                    <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight ${isGreen ? 'text-ivory' : 'text-charcoal'}`}>
                      {story.title}
                    </h2>

                    {/* Description */}
                    <div className={`leading-relaxed text-base md:text-lg ${isGreen ? 'text-ivory/80' : 'text-gray-600'}`}>
                      {story.text}
                    </div>
                  </div>
                </div>
              </section>
            </CardSection>
          );
        })}
      </div>
    </>
  );
};
