
import React, { useState, useEffect } from 'react';
import { SwirlIcon } from './icons/SwirlIcon';
import { GeometricIcon } from './icons/GeometricIcon';
import { DetailLeafIcon } from './icons/DetailLeafIcon';

const CraftsmanshipPoint: React.FC<{ icon: React.ReactNode; title: string; description: string; isVisible: boolean; }> = ({ icon, title, description, isVisible }) => (
    <div 
        className={`bg-amber-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
        <div className="flex items-center mb-1.5">
            {icon}
            <h4 className="ml-2.5 text-base font-semibold text-brand-brown">{title}</h4>
        </div>
        <p className="text-sm text-brand-text leading-snug">{description}</p>
    </div>
);


const Craftsmanship: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const altText = "Close-up of a craftsman's hands carving wood";

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="craftsmanship" className="py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 
              className={`text-3xl md:text-4xl font-bold text-brand-brown-dark mb-5 leading-tight transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              Seni Ukir Kayu Tradisional Jepara
            </h2>
            <p 
              className={`text-base md:text-lg text-brand-text mb-8 leading-relaxed transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              Setiap ukiran adalah maha karya yang lahir dari tangan-tangan terampil pengrajin Jepara, membawa detail dan keindahan yang tak lekang oleh waktu.
            </p>
            <div className="space-y-3.5 mb-6">
                <CraftsmanshipPoint 
                    icon={<SwirlIcon className="h-7 w-7 text-amber-600"/>}
                    title="Pola Spiral Ornamental"
                    description="Motif meliuk yang dinamis dan elegan, menambah sentuhan artistik."
                    isVisible={isMounted}
                />
                <CraftsmanshipPoint 
                    icon={<GeometricIcon className="h-7 w-7 text-green-700"/>}
                    title="Desain Geometris Tradisional"
                    description="Pola geometris yang sarat makna filosofis dan budaya lokal."
                    isVisible={isMounted}
                />
                <CraftsmanshipPoint 
                    icon={<DetailLeafIcon className="h-7 w-7 text-orange-600"/>}
                    title="Motif Daun Ukiran Detail"
                    description="Inspirasi alam yang diukir dengan presisi tinggi, menghidupkan kayu."
                    isVisible={isMounted}
                />
            </div>
            <p 
              className={`text-lg font-medium text-brand-brown-dark italic transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              "Detail kecil dari kayu, menciptakan kenyamanan yang besar."
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div
              role="img"
              aria-label={altText}
              className={`flex items-center justify-center bg-gray-300 text-gray-600 rounded-xl shadow-xl w-full p-4 text-center aspect-[4/3] transition-all duration-200 ease-out transform ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
                {altText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
