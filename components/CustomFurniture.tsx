
import React, { useState, useEffect } from 'react';
import { PencilSquareIcon } from './icons/PencilSquareIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';
import { UsersIcon } from './icons/UsersIcon';
import { SofaIcon } from './icons/SofaIcon';
import { TableIcon } from './icons/TableIcon';
import { WardrobeIcon } from './icons/WardrobeIcon';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, isVisible }) => (
  <div 
    className={`flex items-start transition-all duration-200 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
  >
    <div className="flex-shrink-0 text-brand-amber mt-1 transition-transform duration-200 group-hover:scale-110">{icon}</div>
    <div className="ml-3.5">
      <h4 className="text-base font-semibold text-brand-brown">{title}</h4>
      <p className="text-brand-text text-sm leading-snug">{description}</p>
    </div>
  </div>
);

const CustomFurniture: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(timer);
  }, []);
  
  const images = [
    { alt: "Elegant custom wooden chair" },
    { alt: "Ornate carved cabinet" },
    { alt: "Modern minimalist desk" },
    { alt: "Classic wooden dining table" },
  ];

  const categories = [
    { icon: <SofaIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Sofa, Meja, Kursi" },
    { icon: <WardrobeIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Lemari, Kabinet" },
    { icon: <TableIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Desain Kustom", fullSpan: true },
  ];

  return (
    <section id="custom" className="py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 
            className={`text-2xl md:text-3xl font-bold text-brand-brown-dark mb-3 transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Wujudkan Furnitur Impian Anda!
          </h2>
          <p 
            className={`text-base text-brand-text max-w-2xl mx-auto leading-relaxed transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Custom Furniture Eksklusif dari Jepara. Desain yang Anda bayangkan, kami wujudkan dalam kualitas terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {images.map((img, index) => (
                <div
                  key={index}
                  role="img"
                  aria-label={img.alt}
                  className={`flex items-center justify-center bg-gray-300 text-gray-600 rounded-lg shadow-lg w-full object-cover aspect-[4/3] p-2 text-center text-sm transition-all duration-200 ease-out transform hover:scale-105 hover:shadow-xl ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  {img.alt}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                {categories.map((cat, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center p-2.5 bg-white rounded-lg shadow-md transition-all duration-200 ease-out transform hover:scale-110 hover:shadow-lg ${cat.fullSpan ? 'col-span-2 sm:col-span-1' : ''} ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    >
                        {cat.icon}
                        <span className="text-xs text-brand-text">{cat.label}</span>
                    </div>
                ))}
            </div>
          </div>

          <div className="space-y-6 md:space-y-7">
            <FeatureItem
              icon={<PencilSquareIcon className="h-8 w-8" />}
              title="Desain Sesuai Keinginan"
              description="Bebas menentukan bentuk, ukuran, dan detail sesuai imajinasi Anda."
              isVisible={isMounted}
            />
            <FeatureItem
              icon={<CheckBadgeIcon className="h-8 w-8" />}
              title="Kualitas Kayu Pilihan"
              description="Pilihan kayu jati, mahoni, atau jenis lain sesuai pesanan untuk hasil terbaik."
              isVisible={isMounted}
            />
            <FeatureItem
              icon={<UsersIcon className="h-8 w-8" />}
              title="Pengrajin Jepara Berpengalaman"
              description="Keahlian seni ukir turun-temurun memastikan setiap detail dikerjakan dengan sempurna."
              isVisible={isMounted}
            />
            <div 
                className={`mt-8 md:mt-10 text-center lg:text-left transition-all duration-200 ease-out transform ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <a
                href="mailto:info@pionerfurniture.com?subject=Inquiry%20Custom%20Furniture"
                className="bg-brand-brown hover:bg-brand-brown-dark text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-base md:text-lg"
              >
                Hubungi Kami Untuk Info Lebih Lanjut!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFurniture;