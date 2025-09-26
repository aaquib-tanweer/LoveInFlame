import React from 'react';
import { HeartIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="relative z-10 px-6 py-8 text-center text-white/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center text-sm">
          <span>© 2025 Love In Flame. All rights reserved.</span>
          <HeartIcon className="w-4 h-4 mx-2 text-pink-400" />
          <span>Made with love</span>
        </div>
      </div>
    </footer>;
};
