import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const images = ["/IMG_1988.jpg", "/IMG_1989.jpg", "/IMG_1993.jpg", "/IMG_2003.jpg", "/IMG_1996.jpg"];
export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="fixed inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 1
      }} className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-cover bg-center" style={{
          backgroundImage: `url(${images[currentIndex]})`,
          filter: 'brightness(0.6)'
        }} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};