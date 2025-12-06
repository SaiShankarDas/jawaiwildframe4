import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './common/WhatsAppIcon';

export const FloatingWhatsApp = () => {
  // Updated WhatsApp number
  const phoneNumber = "919325569661"; 
  const message = encodeURIComponent("Hello! I'm interested in booking a safari with Jawai Wildframe.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      
      {/* Pulse effect for attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
    </motion.a>
  );
};
