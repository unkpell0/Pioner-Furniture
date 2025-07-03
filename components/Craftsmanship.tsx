

import React from 'react';
import { SwirlIcon } from './icons/SwirlIcon';
import { GeometricIcon } from './icons/GeometricIcon';
import { DetailLeafIcon } from './icons/DetailLeafIcon';

const CraftsmanshipPoint: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div 
        className="bg-amber-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:scale-105 transform"
    >
        <div className="flex items-center mb-1.5">
            {icon}
            <h4 className="ml-2.5 text-base font-semibold text-brand-brown">{title}</h4>
        </div>
        <p className="text-sm text-brand-text leading-snug">{description}</p>
    </div>
);


const Craftsmanship: React.FC = () => {
  const imageUrl = "https://iili.io/Jb5yDXf.jpg";
  const altText = "Close-up of a craftsman's hands skillfully carving intricate details into a piece of wood.";

  return (
    <section id="craftsmanship" className="py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 
              className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-5 leading-tight"
            >
              Seni Ukir Kayu Tradisional Jepara
            </h2>
            <p 
              className="text-base md:text-lg text-brand-text mb-8 leading-relaxed"
            >
              Setiap ukiran adalah maha karya yang lahir dari tangan-tangan terampil pengrajin Jepara, membawa detail dan keindahan yang tak lekang oleh waktu.
            </p>
            <div className="space-y-3.5 mb-6">
                <CraftsmanshipPoint 
                    icon={<SwirlIcon className="h-7 w-7 text-amber-600"/>}
                    title="Pola Spiral Ornamental"
                    description="Motif meliuk yang dinamis dan elegan, menambah sentuhan artistik."
                />
                <CraftsmanshipPoint 
                    icon={<GeometricIcon className="h-7 w-7 text-green-700"/>}
                    title="Desain Geometris Tradisional"
                    description="Pola geometris yang sarat makna filosofis dan budaya lokal."
                />
                <CraftsmanshipPoint 
                    icon={<DetailLeafIcon className="h-7 w-7 text-orange-600"/>}
                    title="Motif Daun Ukiran Detail"
                    description="Inspirasi alam yang diukir dengan presisi tinggi, menghidupkan kayu."
                />
            </div>
            <p 
              className="text-lg font-medium text-brand-brown-dark italic"
            >
              "Detail kecil dari kayu, menciptakan kenyamanan yang besar."
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <img
              src={imageUrl}
              alt={altText}
              loading="lazy"
              decoding="async"
              className="rounded-xl shadow-xl w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;