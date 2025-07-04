
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PencilSquareIcon } from './icons/PencilSquareIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';
import { UsersIcon } from './icons/UsersIcon';
import { SofaIcon } from './icons/SofaIcon';
import { TableIcon } from './icons/TableIcon';
import { WardrobeIcon } from './icons/WardrobeIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';


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

const slides = [
    { url: 'https://iili.io/Fc7k3BI.jpg', ariaLabel: 'Example of custom craft work' },
    { url: 'https://iili.io/Fc7kCkG.jpg', ariaLabel: 'Showcasing a custom piece' },
    { url: 'https://iili.io/Fc7kxI4.jpg', ariaLabel: 'Detailed custom design' },
    { url: 'https://iili.io/Fc7kIQ2.jpg', ariaLabel: 'Personalized furniture project' },
    { url: 'https://iili.io/Fc7kF1t.jpg', ariaLabel: 'Beautifully crafted wooden desk and shelving' },
];

const CustomFurniture: React.FC = () => {
    const categories = [
        { icon: <SofaIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Sofa, Meja, Kursi" },
        { icon: <WardrobeIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Lemari, Kabinet" },
        { icon: <TableIcon className="h-7 w-7 text-brand-brown mb-1"/>, label: "Desain Kustom", fullSpan: true },
    ];
    
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const slideTimer = setInterval(nextSlide, 5000);
        return () => clearInterval(slideTimer);
    }, [nextSlide]);

    useEffect(() => {
        if (!sliderRef.current) return;

        const calculateTransform = () => {
            if (!sliderRef.current || !trackRef.current) return;

            const slider = sliderRef.current;
            const track = trackRef.current;
            const slideElements = Array.from(track.children) as HTMLElement[];
            const activeSlideElement = slideElements[activeSlide];

            if (!activeSlideElement) return;

            const sliderWidth = slider.offsetWidth;
            const slideWidth = activeSlideElement.offsetWidth;
            const slideOffsetLeft = activeSlideElement.offsetLeft;

            const targetOffset = (sliderWidth / 2) - (slideOffsetLeft + slideWidth / 2);
            
            track.style.transform = `translateX(${targetOffset}px)`;
        };

        calculateTransform();

        const resizeObserver = new ResizeObserver(calculateTransform);
        resizeObserver.observe(sliderRef.current);

        return () => {
            resizeObserver.disconnect();
        };

    }, [activeSlide, slides.length]);


  return (
    <section id="custom" className="py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-brown-dark mb-4"
          >
            Wujudkan Furnitur Impian Anda!
          </h2>
          <p 
            className="text-sm sm:text-base md:text-lg text-brand-text max-w-2xl mx-auto leading-relaxed"
          >
            Custom Furniture Eksklusif dari Jepara. Desain yang Anda bayangkan, kami wujudkan dalam kualitas terbaik.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 md:gap-12">

          {/* Image Carousel */}
          <div className="relative w-full max-w-5xl group px-10 md:px-12">
            <div ref={sliderRef} className="overflow-hidden cursor-grab active:cursor-grabbing -mx-10 md:-mx-12">
                <div ref={trackRef} className="flex items-center transition-transform duration-500 ease-in-out">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full sm:w-5/6 md:w-2/3 lg:w-1/2 p-2.5 transition-all duration-300 ease-in-out transform ${
                                activeSlide === index ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                            }`}
                             onClick={() => activeSlide !== index && setActiveSlide(index)}
                        >
                            <img
                                src={slide.url}
                                alt={slide.ariaLabel}
                                className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-2xl shadow-xl pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
            </div>

             {/* Slideshow Controls */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="flex items-center justify-center absolute top-1/2 left-1 md:left-2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 md:p-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="flex items-center justify-center absolute top-1/2 right-1 md:right-2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 md:p-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        aria-label="Next image"
                    >
                        <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                </>
            )}
          </div>
          
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                {categories.map((cat, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center justify-center p-2.5 bg-white rounded-lg shadow-md transition-all duration-200 ease-out transform hover:scale-110 hover:shadow-lg ${cat.fullSpan ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                        {cat.icon}
                        <span className="text-xs text-brand-text mt-1">{cat.label}</span>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full max-w-3xl bg-amber-50 p-6 sm:p-8 rounded-xl shadow-lg">
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
            </div>
            <div 
                className="mt-8 md:mt-10 text-center"
            >
              <a
                href="mailto:info@pionerfurniture.com?subject=Inquiry%20Custom%20Furniture"
                className="bg-brand-brown hover:bg-brand-brown-dark text-white font-semibold py-3 px-6 md:py-3 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-base md:text-lg"
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