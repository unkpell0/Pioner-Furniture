
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown-dark text-gray-300 py-6 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PionerFurniture. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-400">
          Crafting heritage, building dreams.
        </p>
      </div>
    </footer>
  );
};

export default Footer;