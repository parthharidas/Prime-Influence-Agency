import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#17171B] border-t border-[#2D2D35] pt-20 pb-12 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#2D2D35]">
          {/* Col 1: Brand info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="md" />
            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Prime Influence is a premier corporate influencer marketing agency connecting global brands with verified, top-performing creators.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#1E1E24] hover:bg-[#F47A2A] hover:text-white border border-[#2D2D35] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#1E1E24] hover:bg-[#F47A2A] hover:text-white border border-[#2D2D35] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-[#1E1E24] hover:bg-[#F47A2A] hover:text-white border border-[#2D2D35] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#1E1E24] hover:bg-[#F47A2A] hover:text-white border border-[#2D2D35] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Brands</a></li>
              <li><a href="#creators" className="hover:text-white transition-colors">Creators</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Col 3: Services & Division */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href={GOOGLE_FORMS.brand} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer text-left block">Brand Matchmaking</a></li>
              <li><a href={GOOGLE_FORMS.creator} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer text-left block">Creator Management</a></li>
              <li><a href={GOOGLE_FORMS.brand} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer text-left block">Campaign Execution</a></li>
              <li><a href={GOOGLE_FORMS.brand} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer text-left block">ROI & Attribution</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-[#E4E4E7]">
                <Mail className="w-4 h-4 text-[#F47A2A]" />
                <a href="mailto:work@primeinfluence.in" className="hover:text-[#F47A2A] transition-colors font-mono text-xs">
                  work@primeinfluence.in
                </a>
              </div>
              <p className="text-xs text-[#71717A] leading-relaxed">
                HQ: Financial District, Corporate Towers, Mumbai & Singapore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div>
            © 2026 Prime Influence. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Prime Influence adheres to GDPR & SOC-2 compliance."); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: Verified VIP partnership agreements apply."); }} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" onClick={(e) => { e.preventDefault(); alert("Cookie Preferences: Strictly minimal analytical cookies enabled."); }} className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
