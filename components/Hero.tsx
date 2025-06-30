
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center py-16 sm:py-20 md:py-24 text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop')" }}
      aria-label="Stylish living room with modern wooden furniture"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="text-brand-amber">PionerFurniture:</span> Keindahan Alami Furnitur Kayu
        </h1>
        <p 
          className={`text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Rumah bukan hanya tempat tinggal, tapi tempat hati berlabuh. Furnitur kami membawa kehangatan dan seni dalam setiap detail.
        </p>
        <a
          href="#custom"
          className={`bg-brand-amber hover:bg-brand-amber-dark text-brand-brown-dark font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-base md:text-lg ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          Lihat Koleksi Kustom
        </a>
      </div>
    </section>
  );
};

export default Hero;