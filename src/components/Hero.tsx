import React from 'react';
import { motion } from 'motion/react';
import { NetworkNodesIllustration } from './NetworkNodesIllustration';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F47A2A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left z-10"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E24] border border-[#2D2D35] mb-8 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#F47A2A]" />
              <span className="text-xs font-mono tracking-wider text-[#E4E4E7] uppercase">
                Enterprise Creator Economy
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
              Connecting Brands with the{' '}
              <span className="text-[#F47A2A] inline-block relative">
                Right Creators.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-10 max-w-xl font-normal">
              Prime Influence helps brands launch high-performing influencer campaigns while helping creators build long-term partnerships with leading brands.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={GOOGLE_FORMS.brand}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-base rounded-full shadow-xl shadow-[#F47A2A]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-sm bg-white rotate-45 transition-transform group-hover:rotate-90" />
                Find Creators
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={GOOGLE_FORMS.creator}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#1E1E24] hover:bg-[#2D2D35] text-white font-medium text-base rounded-full border border-[#2D2D35] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                Join as Creator
              </a>
            </div>

            {/* Micro feature note */}
            <div className="mt-10 pt-8 border-t border-[#2D2D35]/80 flex items-center gap-6 text-xs text-[#A1A1AA] font-mono">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#F47A2A]" />
                <span>Zero agency overhead</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F47A2A]" />
                <span>Verified audience reach</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <NetworkNodesIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
