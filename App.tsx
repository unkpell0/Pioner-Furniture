import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Craftsmanship from './components/Craftsmanship';
import Heritage from './components/Heritage';
import CustomFurniture from './components/CustomFurniture';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Craftsmanship />
        <Heritage />
        <CustomFurniture />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;