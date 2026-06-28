import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Creators', href: '#creators' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#17171B]/80 backdrop-blur-xl border-b border-[#2D2D35]/80 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="focus:outline-none transition-transform hover:opacity-90">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 bg-[#1E1E24]/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#2D2D35]/60 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Top Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={GOOGLE_FORMS.brand}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#1E1E24] hover:bg-[#2D2D35] border border-[#2D2D35] transition-all duration-200 inline-flex items-center justify-center"
          >
            Brands
          </a>
          <a
            href={GOOGLE_FORMS.creator}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#F47A2A] hover:bg-[#E06A1C] shadow-lg shadow-[#F47A2A]/20 transition-all duration-200 inline-flex items-center justify-center"
          >
            Creators
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#A1A1AA] hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E1E24] border-b border-[#2D2D35] px-6 py-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 pb-4 border-b border-[#2D2D35]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#A1A1AA] hover:text-[#F47A2A] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={GOOGLE_FORMS.brand}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-sm font-medium text-white bg-[#17171B] border border-[#2D2D35] text-center block"
            >
              For Brands
            </a>
            <a
              href={GOOGLE_FORMS.creator}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-sm font-medium text-white bg-[#F47A2A] shadow-md shadow-[#F47A2A]/20 text-center block"
            >
              For Creators
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
