
import React from 'react';
import { BalanceIcon } from './icons/BalanceIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { MuseumIcon } from './icons/MuseumIcon';

const HeritagePoint: React.FC<{ icon: React.ReactNode; text: string; subtext?: string; }> = ({ icon, text, subtext }) => (
    <div 
        className="flex items-start p-3.5 bg-white shadow-md hover:shadow-lg transition-all duration-200 ease-out rounded-lg hover:scale-105 transform"
    >
        <div className="flex-shrink-0 text-brand-green mt-1">{icon}</div>
        <div className="ml-3">
            <p className="text-base font-semibold text-brand-brown">{text}</p>
            {subtext && <p className="text-sm text-gray-600 leading-snug">{subtext}</p>}
        </div>
    </div>
);

const Heritage: React.FC = () => {
  const imageUrl = "https://iili.io/Jb5yAjt.jpg";
  const altText = "A beautifully detailed carved wooden door, representing cultural heritage";

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-brand-brown-dark mb-6"
        >
          Warisan Seni Nusantara dalam Setiap Ukiran
        </h2>
        <p 
          className="text-base md:text-lg text-center text-brand-text mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Setiap guratan kayu menyimpan cerita dan identitas budaya, sebuah warisan yang kami jaga dan lestarikan dalam setiap produk PionerFurniture.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
          <div className="lg:w-1/2 max-w-md lg:max-w-lg">
            <img
              src={imageUrl}
              alt={altText}
              className="rounded-xl shadow-xl w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="lg:w-1/2 max-w-md lg:max-w-lg space-y-5">
            <HeritagePoint 
                icon={<BalanceIcon className="h-7 w-7"/>}
                text="Simbol Keseimbangan Alam"
                subtext="Ukiran yang merefleksikan harmoni antara manusia dan alam."
            />
             <HeritagePoint 
                icon={<MapPinIcon className="h-7 w-7"/>}
                text="Identitas Daerah & Gaya Khas"
                subtext="Gaya ukiran khas Jepara, Toraja, Bali yang mencerminkan kekayaan budaya lokal."
            />
            <HeritagePoint 
                icon={<MuseumIcon className="h-7 w-7"/>}
                text="Warisan Tak Benda"
                subtext="Keahlian turun-temurun yang dijaga sebagai bagian dari warisan budaya bangsa."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
