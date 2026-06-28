import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Brands } from './pages/Brands';
import { Creators } from './pages/Creators';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { useSEO } from './hooks/useSEO';

// Helper component to run useSEO inside the BrowserRouter context
const SEOWrapper: React.FC = () => {
  useSEO();
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <SEOWrapper />
      <div className="min-h-screen bg-[#17171B] text-white selection:bg-[#F47A2A] selection:text-white flex flex-col font-sans">
        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Page Layout */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
