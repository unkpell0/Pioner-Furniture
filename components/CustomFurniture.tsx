

import React from 'react';
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
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 text-brand-amber mt-1">{icon}</div>
    <div className="ml-3.5">
      <h4 className="text-base font-semibold text-brand-brown">{title}</h4>
      <p className="text-brand-text text-sm md:text-base leading-snug">{description}</p>
    </div>
  </div>
);

const CustomFurniture: React.FC = () => {
  const images = [
    { src: "https://iili.io/Jb54TAb.jpg", alt: "Elegant custom wooden wingback chair" },
    { src: "https://iili.io/Jb5y77S.jpg", alt: "Stylish wooden sideboard in a modern living room" },
    { src: "https://iili.io/Jb5yZBp.jpg", alt: "Comfortable custom sofa in a well-lit room" },
    { src: "https://iili.io/Jb5yEol.jpg", alt: "Solid wood dining table set for custom orders" },
  ];

  const categories = [
    { icon: <SofaIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Sofa, Meja, Kursi" },
    { icon: <WardrobeIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Lemari, Kabinet" },
    { icon: <TableIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Desain Kustom", fullSpan: true },
  ];

  return (
    <section id="custom" className="py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-4"
          >
            Wujudkan Furnitur Impian Anda!
          </h2>
          <p 
            className="text-base md:text-lg text-brand-text max-w-2xl mx-auto leading-relaxed"
          >
            Custom Furniture Eksklusif dari Jepara. Desain yang Anda bayangkan, kami wujudkan dalam kualitas terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="rounded-lg shadow-lg w-full h-full object-cover aspect-[4/3] transition-all duration-200 ease-out transform hover:scale-105 hover:shadow-xl"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                {categories.map((cat, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center p-2.5 bg-white rounded-lg shadow-md transition-all duration-200 ease-out transform hover:scale-110 hover:shadow-lg ${cat.fullSpan ? 'col-span-2 sm:col-span-1' : ''}`}
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
            />
            <FeatureItem
              icon={<CheckBadgeIcon className="h-8 w-8" />}
              title="Kualitas Kayu Pilihan"
              description="Pilihan kayu jati, mahoni, atau jenis lain sesuai pesanan untuk hasil terbaik."
            />
            <FeatureItem
              icon={<UsersIcon className="h-8 w-8" />}
              title="Pengrajin Jepara Berpengalaman"
              description="Keahlian seni ukir turun-temurun memastikan setiap detail dikerjakan dengan sempurna."
            />
            <div 
                className="mt-8 md:mt-10 text-center lg:text-left"
            >
              <a
                href="mailto:info@pionerfurniture.com?subject=Inquiry%20Custom%20Furniture"
                className="inline-block bg-brand-brown hover:bg-brand-brown-dark text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
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