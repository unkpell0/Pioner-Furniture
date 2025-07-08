

import React from 'react';
import { BalanceIcon } from './icons/BalanceIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { MuseumIcon } from './icons/MuseumIcon';
import { LeafDecorationTopLeft, LeafDecorationBottomRight } from './decorations/LeafDecorations';

const HeritagePoint: React.FC<{ icon: React.ReactNode; text: string; subtext?: string; }> = ({ icon, text, subtext }) => (
    <div 
        className="flex items-start p-3.5 bg-white shadow-md hover:shadow-lg transition-all duration-200 ease-out rounded-lg hover:scale-105 transform text-left"
    >
        <div className="flex-shrink-0 text-brand-green mt-1">{icon}</div>
        <div className="ml-3">
            <p className="text-base font-semibold text-brand-brown">{text}</p>
            {subtext && <p className="text-sm text-gray-600 leading-snug">{subtext}</p>}
        </div>
    </div>
);

const Heritage: React.FC = () => {
    const imageUrl = "https://iili.io/Fc7kKrX.jpg";
    
  return (
    <section className="py-12 sm:py-16 bg-amber-50 overflow-hidden relative">
      <LeafDecorationTopLeft className="hidden md:block absolute top-0 left-0 w-32 h-32 opacity-10 text-green-200 transform -translate-x-8 -translate-y-8" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div className="w-full text-center md:text-left md:order-2">
                <h2 
                id="heritage"
                className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-5"
                >
                Warisan Seni Nusantara dalam Setiap Ukiran
                </h2>
                <p 
                className="text-base md:text-lg text-brand-text mb-8 leading-relaxed"
                >
                Setiap guratan kayu menyimpan cerita dan identitas budaya, sebuah warisan yang kami jaga dan lestarikan dalam setiap produk PionerFurniture.
                </p>
                <div className="space-y-5 max-w-lg mx-auto md:mx-0">
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
            <div className="w-full md:order-1">
                <img 
                    src={imageUrl} 
                    alt="Elegant living room with custom wooden furniture" 
                    className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[350px] md:max-h-[550px] transform hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
      </div>
      <LeafDecorationBottomRight className="hidden md:block absolute bottom-0 right-0 w-32 h-32 opacity-10 text-green-200 transform translate-x-8 translate-y-8" />
    </section>
  );
};

export default Heritage;
