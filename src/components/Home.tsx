import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { WildernessSafaris } from './WildernessSafaris';
import { DualCarousel } from './DualCarousel';
import { StorySections } from './StorySections';
import { Experiences } from './Experiences';
import { PhotographySafari } from './PhotographySafari';
import { GuestInformation } from './GuestInformation';
import { Reviews } from './Reviews';
import { Footer } from './Footer';
import { Gallery } from './Gallery';

export const Home = () => {
  return (
    <>
      {/* Normal Scroll Sections */}
      <div className="relative z-0 bg-charcoal">
        <Hero />
      </div>

      <div id="about" className="relative z-0 bg-warm-white min-h-screen flex items-center py-20">
        <About />
      </div>

      {/* Wilderness Safaris Section */}
      <div id="safari" className="relative z-0 w-full">
        <WildernessSafaris />
      </div>

      {/* Dual Carousel Section */}
      <div className="relative z-0 w-full">
        <DualCarousel />
      </div>

      {/* Alternating Storytelling Sections */}
      <div id="stories" className="relative z-0 w-full">
        <StorySections />
      </div>

      {/* Experiences Section */}
      <div id="experiences" className="relative z-0 w-full">
        <Experiences />
      </div>

      {/* Photography Safari Section */}
      <div className="relative z-0 w-full">
        <PhotographySafari />
      </div>

      {/* Guest Information Section */}
      <div className="relative z-0 w-full bg-warm-white">
        <GuestInformation />
      </div>

      {/* Final Normal Scroll Section */}
      <div className="relative z-50 bg-warm-white shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
        <div id="reviews" className="bg-white py-20">
          <Reviews />
        </div>

        {/* Visual Journey / Gallery Section */}
        <div id="gallery" className="h-screen w-full">
          <Gallery />
        </div>

        <div className="bg-charcoal text-white">
          <Footer />
        </div>
      </div>
    </>
  );
};
