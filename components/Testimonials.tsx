
import React, { useRef, useCallback } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { QuoteIcon } from './icons/QuoteIcon';

const testimonialsData = [
  {
    quote: "Sangat puas dengan hasilnya! Kualitas kayu dan ukirannya benar-benar luar biasa. Rumah saya jadi terasa lebih hangat dan berkelas.",
    name: "Budi Santoso",
    location: "Jakarta",
    avatar: "https://i.pravatar.cc/150?u=budi"
  },
  {
    quote: "Proses desain kustom sangat mudah dan menyenangkan. Tim PionerFurniture sangat membantu mewujudkan meja makan impian keluarga kami.",
    name: "Anita Wijaya",
    location: "Surabaya",
    avatar: "https://i.pravatar.cc/150?u=anita"
  },
  {
    quote: "Furnitur yang saya terima melebihi ekspektasi. Detailnya sangat rapi dan kokoh. Recommended! Pelayanannya juga ramah dan profesional.",
    name: "David Lee",
    location: "Medan",
    avatar: "https://i.pravatar.cc/150?u=david-lee"
  },
  {
    quote: "Kombinasi desain modern dengan sentuhan ukiran tradisionalnya pas banget. Membuat ruang keluarga kami unik dan penuh karakter.",
    name: "Rina Hartono",
    location: "Bandung",
    avatar: "https://i.pravatar.cc/150?u=rina"
  }
];

const Testimonials: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback((direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstItem = container.children[0] as HTMLElement;
            if (firstItem) {
                const itemWidth = firstItem.offsetWidth;
                const style = window.getComputedStyle(container);
                const gap = parseInt(style.gap) || 24; // Default to 24px for gap-6
                const scrollAmount = itemWidth + gap;

                container.scrollBy({
                    left: direction === 'right' ? scrollAmount : -scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    }, []);

    return (
        <section className="py-12 sm:py-16 bg-brand-cream overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 id="testimonials" className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-4">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="text-base md:text-lg text-brand-text max-w-3xl mx-auto leading-relaxed">
                        Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah beberapa testimoni dari mereka yang telah memercayakan keindahan rumahnya kepada kami.
                    </p>
                </div>
                
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 py-4 no-scrollbar"
                        role="list"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
                                role="listitem"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                                    <div>
                                        <QuoteIcon className="h-8 w-8 text-brand-amber mb-4" />
                                        <p className="text-brand-text italic leading-relaxed">"{testimonial.quote}"</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center">
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={`Avatar of ${testimonial.name}`}
                                            className="h-12 w-12 rounded-full object-cover" 
                                            loading="lazy"
                                        />
                                        <div className="ml-4">
                                            <p className="font-semibold text-brand-brown-dark">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => handleScroll('left')}
                        className="hidden sm:flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/60 sm:bg-white/80 hover:bg-white text-brand-brown-dark rounded-full p-2 sm:p-2.5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    
                    <button
                        onClick={() => handleScroll('right')}
                        className="hidden sm:flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/60 sm:bg-white/80 hover:bg-white text-brand-brown-dark rounded-full p-2 sm:p-2.5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        aria-label="Next testimonial"
                    >
                        <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
