import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Craftsmanship from './components/Craftsmanship';
import Heritage from './components/Heritage';
import CustomFurniture from './components/CustomFurniture';
import Footer from './components/Footer';
import { LeafDecorationTopLeft, LeafDecorationBottomRight } from './components/decorations/LeafDecorations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased relative overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="benefits" className="relative overflow-hidden"> {/* Removed padding and background */}
          <LeafDecorationTopLeft className="hidden md:block w-28 h-28 opacity-15" />
          <Benefits />
          <LeafDecorationBottomRight className="hidden md:block w-28 h-28 opacity-15" />
        </div>
        <Craftsmanship /> {/* Craftsmanship already has overflow-hidden on its section */}
        <div id="heritage" className="relative overflow-hidden">  {/* Removed padding and background */}
            <LeafDecorationTopLeft className="hidden md:block w-32 h-32 opacity-10 transform -translate-x-8 -translate-y-8" />
            <Heritage /> {/* Heritage already has overflow-hidden on its section */}
            <LeafDecorationBottomRight className="hidden md:block w-32 h-32 opacity-10 transform translate-x-8 translate-y-8" />
        </div>
        <CustomFurniture /> {/* CustomFurniture already has overflow-hidden on its section */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
