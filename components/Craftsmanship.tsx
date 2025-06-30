
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
            <h4 className="ml-2.5 text-md font-semibold text-brand-brown">{title}</h4>
        </div>
        <p className="text-sm text-brand-text leading-snug">{description}</p>
    </div>
);


const Craftsmanship: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="craftsmanship" className="py-12 md:py-16 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 
              className={`text-2xl md:text-3xl font-bold text-brand-brown-dark mb-4 leading-tight transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              Seni Ukir Kayu Tradisional Jepara
            </h2>
            <p 
              className={`text-base text-brand-text mb-6 leading-relaxed transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
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
          <div className="lg:w-1/2">
            <img
              src="https://ai.ceo.microsoft.com/content/images/2024/07/26/3941459d-5a8b-4b24-9b88-10a5180f2d79.jpg"
              alt="Detail Ukiran Kayu Tradisional Jepara yang Intricate"
              className={`rounded-xl shadow-xl w-full h-auto object-cover transition-all duration-200 ease-out transform ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;