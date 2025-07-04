
import React from 'react';
import { SwirlIcon } from './icons/SwirlIcon';
import { GeometricIcon } from './icons/GeometricIcon';
import { DetailLeafIcon } from './icons/DetailLeafIcon';

const CraftsmanshipPoint: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div 
        className="bg-amber-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:scale-105 transform text-left"
    >
        <div className="flex items-center mb-1.5">
            {icon}
            <h4 className="ml-2.5 text-base font-semibold text-brand-brown">{title}</h4>
        </div>
        <p className="text-sm text-brand-text leading-snug">{description}</p>
    </div>
);


const Craftsmanship: React.FC = () => {
  const imageUrl = "https://iili.io/Fc7kF1t.jpg";

  return (
    <section id="craftsmanship" className="py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="w-full text-center md:text-left">
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
            <div className="space-y-3.5 mb-6 max-w-lg mx-auto md:mx-0">
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
              className="mt-8 text-lg font-medium text-brand-brown-dark italic"
            >
              "Detail kecil dari kayu, menciptakan kenyamanan yang besar."
            </p>
          </div>
          
          <div className="w-full">
            <img 
              src={imageUrl} 
              alt="Beautifully crafted wooden desk and shelving unit in a modern room" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[16/9] max-h-[300px] sm:max-h-[400px] md:max-h-[500px] transform hover:scale-105 transition-transform duration-300" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;