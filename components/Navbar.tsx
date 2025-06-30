import React, { useState, useEffect } from 'react';
import { WoodIcon } from './icons/WoodIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#craftsmanship', label: 'Craftsmanship' },
    { href: '#heritage', label: 'Heritage' },
    { href: '#custom', label: 'Custom' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="home" 
      className={`bg-brand-brown-dark sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center text-white text-lg sm:text-xl md:text-2xl font-semibold hover:text-brand-amber transition-colors duration-200">
            <WoodIcon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-brand-amber" />
            PionerFurniture
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-md transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
              <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-gray-300 hover:bg-brand-brown hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={handleLinkClick}
              >
                  {link.label}
              </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
