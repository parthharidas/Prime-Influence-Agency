import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#17171B] text-white selection:bg-[#F47A2A] selection:text-white flex flex-col font-sans">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Trusted By Monochrome Logos */}
        <TrustedBy />

        {/* What We Do - 3 Premium Cards */}
        <Services />

        {/* Animated Stats while scrolling */}
        <Stats />

        {/* 4-Step How It Works Timeline */}
        <HowItWorks />

        {/* Testimonials */}
        <Testimonials />

        {/* Accordion FAQ */}
        <FAQ />

        {/* Ready to Build Powerful Partnerships CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
