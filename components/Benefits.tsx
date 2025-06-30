import React, { useState, useEffect } from 'react';
import { SparkleIcon } from './icons/SparkleIcon';
import { LeafIcon } from './icons/LeafIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

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
    <section className="py-16 sm:py-20 md:py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 
          className={`text-2xl md:text-3xl font-bold text-center text-brand-brown-dark mb-10 transition-all duration-200 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Mengapa Memilih PionerFurniture?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:-translate-y-1 hover:scale-105 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
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
    </section>
  );
};

export default Benefits;
