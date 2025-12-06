import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Changed grid to md:grid-cols-2 to prevent logo wrapping on tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="lg:col-span-1">
            {/* Changed text-3xl to text-2xl to match Navbar size exactly */}
            <a href="#" className="font-serif text-2xl tracking-widest font-bold uppercase block mb-6 text-left">
              Jawai Wildframe
            </a>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Luxury wilderness experiences in the heart of Rajasthan's leopard country.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-desert text-left">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400 text-left">
              <li><a href="#stays" className="hover:text-white transition-colors">Our Stays</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Experiences</a></li>
              {/* Dining link removed */}
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-desert text-left">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400 text-left">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-desert text-left">Follow Us</h4>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/jawai_wildframe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Jawai Wildframe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
