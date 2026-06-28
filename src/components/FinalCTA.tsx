import React from 'react';
import { motion } from 'motion/react';
import { Building2, Sparkles, ArrowRight } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#17171B] relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto relative rounded-[40px] bg-[#1E1E24] border border-[#2D2D35] p-10 sm:p-16 md:p-24 text-center overflow-hidden shadow-2xl">
        {/* Ambient Corner Glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#F47A2A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#F47A2A]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#17171B] px-4 py-1.5 rounded-full border border-[#2D2D35] inline-block mb-8">
              Take the Next Step
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
              Ready to Build Powerful Creator Partnerships?
            </h2>

            <p className="text-[#A1A1AA] text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Join hundreds of leading corporate brands and top-tier creators already monetizing attention with Prime Influence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GOOGLE_FORMS.brand}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-base rounded-full shadow-2xl shadow-[#F47A2A]/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>Register as Brand</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={GOOGLE_FORMS.creator}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#17171B] hover:bg-[#2D2D35] text-white font-medium text-base rounded-full border border-[#2D2D35] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#F47A2A]" />
                <span>Join as Creator</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
