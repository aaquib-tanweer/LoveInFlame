import React from 'react';
import { motion } from 'framer-motion';
import { FlameIcon, HeartIcon, InstagramIcon } from 'lucide-react';
export const ComingSoonOverlay = () => {
  return <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen text-white">
      {/* Instagram Link - Upper Portion */}
      <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1,
        duration: 0.8
      }} className="absolute top-8 right-8">
        <a 
          href="https://instagram.com/love.in.flame" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
        >
          <InstagramIcon className="w-6 h-6 text-white" />
          <span className="text-white font-medium">@love.in.flame</span>
        </a>
      </motion.div>
      
      <div className="max-w-3xl px-6 py-12 mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-4 flex items-center justify-center">
          <HeartIcon className="w-8 h-8 mr-2 text-pink-400" />
          <FlameIcon className="w-8 h-8 text-amber-400" />
        </motion.div>
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }} className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Love In Flame
        </motion.h1>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }} className="mb-8">
          <span className="inline-block px-6 py-3 text-xl font-medium bg-white/10 backdrop-blur-sm rounded-full">
            Coming Soon
          </span>
        </motion.div>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8,
        duration: 0.8
      }} className="max-w-lg mx-auto text-lg text-white/90">
          Handcrafted artisan candles and wax melts designed to bring warmth,
          beauty, and fragrance to your space. Each piece is created with love
          and passion.
        </motion.p>
      </div>
    </div>;
};