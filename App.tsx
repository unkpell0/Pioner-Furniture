
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Craftsmanship from './components/Craftsmanship';
import Heritage from './components/Heritage';
import CustomFurniture from './components/CustomFurniture';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased relative">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Benefits />
        <CustomFurniture />
        <Heritage />
        <Craftsmanship />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;