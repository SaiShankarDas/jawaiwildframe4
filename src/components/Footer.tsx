import React from "react";
import { Instagram, Mail, Phone } from "lucide-react";
import WhatsAppIcon from './common/WhatsAppIcon';

export const Footer = () => {
  return (
    <footer className="bg-[#3A312C] text-[#E8E1DA] pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12">

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* ========= LEFT: LOGO + BRAND TEXT + SOCIAL ========= */}
          <div>
            {/* Logo (reduced size) */}
            <img 
              src="/images/logo.jpg" 
              alt="Jawai Wildframe Logo" 
              className="w-32 md:w-40 object-contain mb-6"
            />

            {/* Brand Title */}
            <h1 className="font-serif text-3xl tracking-wide uppercase">
              Jawai Wildframe
            </h1>

            {/* Subtext */}
            <p className="text-[#B9B1A8] mt-2">
              Safari • Adventure • Wilderness • Stays
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6">
              <a 
                href="https://www.instagram.com/jawai_wildframe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B9B1A8] hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href="https://wa.me/918824662933?text=Hello%20Jawai%20Wildframe%2C%20I'd%20like%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B9B1A8] hover:text-white transition-all hover:scale-110"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>

              <a
                href="mailto:jawaiwildframe@gmail.com"
                className="text-[#B9B1A8] hover:text-white transition-all hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>

              <a
                href="tel:+918824662933"
                className="text-[#B9B1A8] hover:text-white transition-all hover:scale-110"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* ========= MIDDLE: CONTACT DETAILS ========= */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            <div className="text-[#B9B1A8] space-y-4">

              <div>
                <p className="font-semibold text-[#E8E1DA]">Reservations:</p>
                <p>jawaiwildframe@gmail.com</p>
                <p>+91 88246 62933</p>
              </div>

              <div>
                <p className="font-semibold text-[#E8E1DA]">Address:</p>
                <p>
                  Jawai Wildframe Safari,<br />
                  Bijapur Road, Jeewada,<br />
                  Rajasthan 306126, India
                </p>
              </div>

            </div>
          </div>

          {/* ========= RIGHT: BOOK NOW ========= */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Book Your Experience</h3>

            <p className="text-[#B9B1A8] leading-relaxed mb-6">
              Plan your curated wilderness experience with us. Get assistance with
              booking safaris, stays, and personalized itineraries.
            </p>

            {/* BOOK NOW BUTTON → Redirect to /book */}
            <a 
              href="/book"
              className="inline-block bg-[#C9A34E] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#b59042] transition-all"
            >
              BOOK NOW
            </a>
          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT ================= */}
        <div className="text-center text-[#B9B1A8] text-xs uppercase tracking-wider mt-20">
          © {new Date().getFullYear()} Jawai Wildframe. All rights reserved.
        </div>

      </div>
    </footer>
  );
};