import React from 'react';
import { motion } from 'motion/react';
import { Mail, Building2, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#17171B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mt-6 mb-4 tracking-tight">
            Partner with <span className="text-[#F47A2A]">Prime Influence</span>
          </h1>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            Ready to streamline your campaign or join our VIP creator network? Select your path below to begin onboarding.
          </p>
        </div>

        {/* Dynamic Dual Path Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E24] border border-[#2D2D35] hover:border-[#F47A2A]/50 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F47A2A]/10 border border-[#F47A2A]/20 flex items-center justify-center text-[#F47A2A] mb-8 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#F47A2A] uppercase tracking-widest">
                Brands & Advertisers
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 mb-4">
                Launch a Brief
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Submit your target demographics, budget constraints, timeline, and goals. Our agency consultants will deliver curated creator shortlists within 48 hours.
              </p>
            </div>

            <div>
              <ul className="space-y-3.5 text-xs text-[#E4E4E7] mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F47A2A] rounded-full" />
                  <span>Curation Time: Under 48 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F47A2A] rounded-full" />
                  <span>Complimentary first campaign audit</span>
                </li>
              </ul>

              <a
                href={GOOGLE_FORMS.brand}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-sm rounded-full text-center block shadow-lg shadow-[#F47A2A]/20 transition-all duration-200"
              >
                Submit Brand Brief Form
              </a>
            </div>
          </motion.div>

          {/* Creator Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E24] border border-[#2D2D35] hover:border-[#F47A2A]/50 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F47A2A]/10 border border-[#F47A2A]/20 flex items-center justify-center text-[#F47A2A] mb-8 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#F47A2A] uppercase tracking-widest">
                Digital Influencers
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 mb-4">
                Join Our VIP Network
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Are you a content creator in tech, startups, business, saas, or lifestyle with a highly engaged following? Get direct access to corporate sponsor budgets.
              </p>
            </div>

            <div>
              <ul className="space-y-3.5 text-xs text-[#E4E4E7] mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F47A2A] rounded-full" />
                  <span>Agency Fee: 0% Commission</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F47A2A] rounded-full" />
                  <span>Guaranteed electronic escrow payouts</span>
                </li>
              </ul>

              <a
                href={GOOGLE_FORMS.creator}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#17171B] hover:bg-[#2D2D35] border border-[#2D2D35] hover:border-[#F47A2A] text-white font-medium text-sm rounded-full text-center block transition-all duration-200"
              >
                Apply as a Creator
              </a>
            </div>
          </motion.div>
        </div>

        {/* General Inquiry / Mail card */}
        <div className="max-w-3xl mx-auto bg-[#1E1E24]/60 backdrop-blur-md border border-[#2D2D35] p-8 sm:p-12 rounded-[32px] text-center">
          <div className="w-12 h-12 rounded-full bg-[#F47A2A]/10 border border-[#F47A2A]/20 flex items-center justify-center text-[#F47A2A] mx-auto mb-6">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
            General & Enterprise Inquiries
          </h3>
          <p className="text-sm text-[#A1A1AA] max-w-md mx-auto mb-6 leading-relaxed">
            Have private partnerships, press questions, or customized requests? Send a direct message to our agency partnership desk.
          </p>
          <a
            href="mailto:work@primeinfluence.in"
            className="inline-flex items-center gap-2 font-mono text-[#F47A2A] hover:text-[#E06A1C] font-semibold text-lg hover:underline transition-all"
          >
            work@primeinfluence.in
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="text-[11px] text-[#71717A] mt-4 font-mono">
            AVERAGE RESPONSE TIME: UNDER 2 HOURS
          </div>
        </div>
      </div>
    </div>
  );
};
