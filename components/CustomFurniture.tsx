
import React, { useRef, useCallback } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const portfolioItems = [
    {
        url: 'https://iili.io/Fc7k3BI.jpg',
        title: 'Laci',
        location: 'Tangerang Selatan',
        ariaLabel: 'Proyek laci di Tangerang Selatan'
    },
    {
        url: 'https://iili.io/Fc7kCkG.jpg',
        title: 'Ruang Belajar',
        location: 'Semarang - Jawa Tengah',
        ariaLabel: 'Proyek ruang belajar di Semarang, Jawa Tengah'
    },
    {
        url: 'https://iili.io/Fc7kxI4.jpg',
        title: 'Meja dan Kursi',
        location: 'Medan',
        ariaLabel: 'Proyek meja dan kursi di Medan'
    },
    {
        url: 'https://iili.io/F0MGiS2.jpg',
        title: 'Ruang Santai',
        location: 'Surabaya',
        ariaLabel: 'Proyek ruang santai di Surabaya'
    }
];

const CustomFurniture: React.FC = () => {
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
        <section className="py-12 sm:py-16 bg-brand-brown-dark overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 id="custom" className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Portofolio Proyek Kustom Kami
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Lihat bagaimana kami mengubah visi klien menjadi kenyataan. Setiap proyek adalah cerminan dari keahlian, kualitas, dan sentuhan personal.
                    </p>
                </div>
                
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 py-4 no-scrollbar"
                        role="list"
                    >
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
                                role="listitem"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-xl h-full transition-transform duration-300 ease-in-out hover:scale-105">
                                    <img
                                        src={item.url}
                                        alt={item.ariaLabel}
                                        className="w-full h-64 sm:h-72 object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                        <h4 className="font-bold text-lg drop-shadow-md">{item.title}</h4>
                                        <p className="text-sm text-gray-200 drop-shadow">{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => handleScroll('left')}
                        className="hidden sm:flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/60 sm:bg-white/80 hover:bg-white text-brand-brown-dark rounded-full p-2 sm:p-2.5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        aria-label="Previous project"
                    >
                        <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    
                    <button
                        onClick={() => handleScroll('right')}
                        className="hidden sm:flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/60 sm:bg-white/80 hover:bg-white text-brand-brown-dark rounded-full p-2 sm:p-2.5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        aria-label="Next project"
                    >
                        <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomFurniture;
