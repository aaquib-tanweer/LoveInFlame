import React, { useEffect, useState } from 'react';
import { HeroSlider } from './components/HeroSlider';
import { ComingSoonOverlay } from './components/ComingSoonOverlay';
import { Footer } from './components/Footer';
export function App() {
  return <div className="relative w-full min-h-screen bg-black">
      <HeroSlider />
      <ComingSoonOverlay />
      <Footer />
    </div>;
}