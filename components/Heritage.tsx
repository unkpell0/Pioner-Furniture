
import React, { useState, useEffect } from 'react';
import { BalanceIcon } from './icons/BalanceIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { MuseumIcon } from './icons/MuseumIcon';

const HeritagePoint: React.FC<{ icon: React.ReactNode; text: string; subtext?: string; isVisible: boolean; }> = ({ icon, text, subtext, isVisible }) => (
    <div 
        className={`flex items-start p-3.5 bg-white shadow-md hover:shadow-lg transition-all duration-200 ease-out rounded-lg hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
        <div className="flex-shrink-0 text-brand-green mt-1">{icon}</div>
        <div className="ml-3">
            <p className="text-base font-semibold text-brand-brown">{text}</p>
            {subtext && <p className="text-sm text-gray-600 leading-snug">{subtext}</p>}
        </div>
    </div>
);

const Heritage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const altText = "Intricate traditional wooden panel representing heritage";

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 
          className={`text-2xl md:text-3xl font-bold text-center text-brand-brown-dark mb-4 transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Warisan Seni Nusantara dalam Setiap Ukiran
        </h2>
        <p 
          className={`text-base text-center text-brand-text mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Setiap guratan kayu menyimpan cerita dan identitas budaya, sebuah warisan yang kami jaga dan lestarikan dalam setiap produk PionerFurniture.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
          <div className="lg:w-1/2 max-w-md lg:max-w-lg">
            <div
              role="img"
              aria-label={altText}
              className={`flex items-center justify-center bg-gray-300 text-gray-600 rounded-xl shadow-xl w-full p-4 text-center aspect-square transition-all duration-200 ease-out transform ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
                {altText}
            </div>
          </div>
          <div className="lg:w-1/2 max-w-md lg:max-w-lg space-y-5">
            <HeritagePoint 
                icon={<BalanceIcon className="h-7 w-7"/>}
                text="Simbol Keseimbangan Alam"
                subtext="Ukiran yang merefleksikan harmoni antara manusia dan alam."
                isVisible={isMounted}
            />
             <HeritagePoint 
                icon={<MapPinIcon className="h-7 w-7"/>}
                text="Identitas Daerah & Gaya Khas"
                subtext="Gaya ukiran khas Jepara, Toraja, Bali yang mencerminkan kekayaan budaya lokal."
                isVisible={isMounted}
            />
            <HeritagePoint 
                icon={<MuseumIcon className="h-7 w-7"/>}
                text="Warisan Tak Benda"
                subtext="Keahlian turun-temurun yang dijaga sebagai bagian dari warisan budaya bangsa."
                isVisible={isMounted}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;