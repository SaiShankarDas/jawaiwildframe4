import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = '', height = 'h-[500px]' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax Y movement: Moves against scroll direction
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  
  // Subtle Zoom effect: Zooms out slightly as you scroll down, creating depth
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${height} ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full absolute inset-0">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};
