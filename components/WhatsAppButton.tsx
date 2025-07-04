import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/6281234567890" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-cream focus:ring-green-500 transition-all duration-300 ease-in-out"
    >
      <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;