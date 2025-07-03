
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const slides = [
  {
    url: 'https://iili.io/FY1ua1t.jpg',
    ariaLabel: 'Detailed close-up of intricate traditional Jepara wood carving on a furniture piece',
  },
  {
    url: 'https://iili.io/FY1IRyv.jpg',
    ariaLabel: 'A collection of beautifully crafted Jepara wooden furniture in a home setting',
  }
];


const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 50); 
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const slideTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(slideTimer);
  }, [activeSlide, nextSlide]);

  const handleDragStart = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a, button')) {
      return;
    }
    // Don't prevent default for mouse events to allow clicking links/buttons
    if ('touches' in e) {
        e.preventDefault();
    }

    if (slides.length <= 1) return;
    setIsDragging(true);
    setDragEnd(null);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragEnd(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (dragStart !== null && dragEnd !== null) {
      const distance = dragStart - dragEnd;
      if (distance > minSwipeDistance) {
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        prevSlide();
      }
    }

    setDragStart(null);
    setDragEnd(null);
  };

  return (
    <section 
      className={`relative h-screen lg:h-[85vh] text-white overflow-hidden select-none cursor-grab ${isDragging ? 'cursor-grabbing' : 'active:cursor-grabbing'}`}
      aria-label="Hero section with a slideshow of Jepara wood carvings"
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.url})` }}
            aria-label={slide.ariaLabel}
            aria-hidden={activeSlide !== index}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="text-brand-amber">PionerFurniture:</span> Keindahan Alami Furnitur Kayu
        </h1>
        <p 
          className={`text-base sm:text-lg md:text-xl mb-8 max-w-2xl lg:max-w-3xl mx-auto transition-all duration-700 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Rumah bukan hanya tempat tinggal, tapi tempat hati berlabuh. Furnitur kami membawa kehangatan dan seni dalam setiap detail.
        </p>
        <a
          href="#custom"
          className={`inline-block bg-brand-amber hover:bg-brand-amber-dark text-brand-brown-dark font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-700 transform hover:scale-105 text-base md:text-lg delay-300 pointer-events-auto ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          Lihat Koleksi Kustom
        </a>
      </div>
      
      {/* Slideshow Controls */}
      {slides.length > 1 && (
        <>
            <button
                onClick={prevSlide}
                className="flex items-center justify-center absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 md:p-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                aria-label="Previous slide"
            >
                <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            
            <button
                onClick={nextSlide}
                className="flex items-center justify-center absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 md:p-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                aria-label="Next slide"
            >
                <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-white scale-110' : 'bg-gray-400/70 hover:bg-white/80'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
      )}
    </section>
  );
};

export default Hero;