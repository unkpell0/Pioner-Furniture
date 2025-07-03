import React, { useState, useEffect } from 'react';
import { SparkleIcon } from './icons/SparkleIcon';
import { LeafIcon } from './icons/LeafIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { LeafDecorationTopLeft, LeafDecorationBottomRight } from './decorations/LeafDecorations';

const benefitsData = [
  {
    icon: <SparkleIcon className="h-10 w-10 text-brand-amber mb-3 group-hover:text-amber-500 transition-colors duration-200" />,
    title: "Tampilan Estetik yang Elegan",
    description: "Desain yang memukau, menambah keindahan dan kemewahan pada setiap ruangan.",
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-green-600 mb-3 group-hover:text-green-500 transition-colors duration-200" />,
    title: "Kualitas Kayu Terbaik & Tahan Lama",
    description: "Menggunakan kayu pilihan yang diproses secara teliti untuk daya tahan maksimal.",
  },
  {
    icon: <LeafIcon className="h-10 w-10 text-brand-green mb-3 group-hover:text-brand-green-light transition-colors duration-200" />,
    title: "Ramah Lingkungan & Berkelanjutan",
    description: "Komitmen kami pada praktik berkelanjutan untuk menjaga kelestarian alam.",
  },
];

const Benefits: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="benefits" className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-brand-cream">
      <LeafDecorationTopLeft className="absolute top-0 left-0 hidden md:block w-28 h-28 opacity-15 text-green-200" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-brand-brown-dark mb-12 transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Mengapa Memilih PionerFurniture?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${isMounted ? index * 100 : 0}ms` }}
            >
              <div className="flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-brown-dark mb-2">{benefit.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <LeafDecorationBottomRight className="absolute bottom-0 right-0 hidden md:block w-28 h-28 opacity-15 text-green-200" />
    </section>
  );
};

export default Benefits;