import React from 'react';
import { FadeIn } from './ui/Section';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="space-y-8">
          <div>
            <span className="text-desert uppercase tracking-widest text-sm font-bold">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-4">Plan Your Journey</h2>
          </div>
          <p className="text-gray-600 font-light text-xl leading-relaxed">
            Our team of travel specialists is here to help you curate your perfect wilderness escape.
          </p>
          
          <div className="space-y-8 pt-8">
            <div className="flex items-start space-x-6">
              <MapPin className="text-deep-red mt-1" size={24} />
              <div>
                <h4 className="uppercase tracking-wider font-bold text-sm text-charcoal">Location</h4>
                <p className="text-gray-600 font-light text-lg">Jawai Bandh, Pali District, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Phone className="text-deep-red" size={24} />
              <div>
                <h4 className="uppercase tracking-wider font-bold text-sm text-charcoal">Phone</h4>
                <p className="text-gray-600 font-light text-lg">+91 93255 69661</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Mail className="text-deep-red" size={24} />
              <div>
                <h4 className="uppercase tracking-wider font-bold text-sm text-charcoal">Email</h4>
                <p className="text-gray-600 font-light text-lg">reservations@jawaiwildframe.com</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="bg-white p-8 md:p-12 shadow-2xl rounded-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-desert transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-desert transition-colors bg-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-desert transition-colors bg-transparent" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea rows={3} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-desert transition-colors bg-transparent resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-charcoal text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-desert transition-colors duration-300">
              Send Inquiry
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
};
