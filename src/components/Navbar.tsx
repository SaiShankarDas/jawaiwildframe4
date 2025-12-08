import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "Experiences", href: "/#experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Safari", href: "/#safari" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#f5f0e8] shadow-sm py-3 md:py-4">
        <div className="relative max-w-[1500px] mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* LEFT — MENU BUTTON */}
          <button
            className="flex flex-col space-y-1 z-20"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="block w-7 h-[2px] bg-charcoal"></span>
            <span className="block w-7 h-[2px] bg-charcoal"></span>
            <span className="block w-7 h-[2px] bg-charcoal"></span>
          </button>

          {/* CENTER — TITLE + SUBTEXT */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2 
              flex flex-col items-center 
              leading-tight select-none
              translate-y-[2px]
            "
          >
            {/* TITLE */}
            <h1
  onClick={() => {
    if (window.location.pathname === "/") {
      // Already on home → just scroll to hero
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Other page → go to home with #hero
      window.location.href = "/#hero";
    }
  }}
  className="
    font-serif 
    text-[20px] md:text-[28px]
    tracking-[0.30em]
    text-[#c8ad63]
    uppercase
    leading-[1.1]
    text-center
    cursor-pointer
  "
>
  JAWAI WILDFRAME
</h1>

            {/* SUBTEXT */}
            <p
              className="
                text-[7px] md:text-[9px]
                tracking-[0.32em]
                text-charcoal
                uppercase
                mt-1
                opacity-80
                text-center
              "
            >
              Live closer to nature heaven
            </p>
          </div>

          {/* RIGHT — BOOK BUTTON */}
          <a
            href="/book"
            className="
              bg-[#c9a961]
              text-charcoal
              px-3 md:px-8
              py-2.5 md:py-3
              uppercase tracking-widest
              font-medium
              z-20
              hover:bg-[#b99851]
              transition-all
              flex items-center space-x-2
            "
          >
            <span className="md:hidden text-sm">Book</span>
            <span className="hidden md:inline text-sm">Book Now</span>
            <svg
              className="w-0.5 h-3 md:w-4 md:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </nav>

      {/* MOBILE SLIDE-OUT MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-[#f5f0e8] z-[200] flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8 text-charcoal" />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-charcoal hover:text-[#c9a961]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/book"
              className="px-8 py-3 bg-[#c9a961] text-charcoal hover:bg-[#b99851] uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};