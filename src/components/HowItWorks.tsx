import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

interface HowItWorksProps {
  onOpenModal?: (type: 'brand' | 'creator') => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const [activeTab, setActiveTab] = useState<'brand' | 'creator'>('brand');

  const timeline = {
    brand: [
      {
        step: '01',
        title: 'Submit Campaign',
        description: 'Specify your target audience demographics, campaign goals, budget allocation, and key creative deliverables.',
      },
      {
        step: '02',
        title: 'Match Creators',
        description: 'Our AI matchmaker pairs your brand with vetted creators possessing authentic engagement and brand safety scores.',
      },
      {
        step: '03',
        title: 'Campaign Launch',
        description: 'Seamless execution with structured briefs, automated contractual agreements, and content approval workflows.',
      },
      {
        step: '04',
        title: 'Performance Report',
        description: 'Track real-time ROI, click-through conversions, audience sentiment, and granular attribution analytics.',
      },
    ],
    creator: [
      {
        step: '01',
        title: 'Register',
        description: 'Submit your portfolio and social handles for expedited verification by our talent acquisition division.',
      },
      {
        step: '02',
        title: 'Get Approved',
        description: 'Gain immediate VIP access to exclusive private brand campaigns matching your niche and creative aesthetic.',
      },
      {
        step: '03',
        title: 'Receive Opportunities',
        description: 'Review customized proposals with clear terms, transparent payout schedules, and dedicated talent managers.',
      },
      {
        step: '04',
        title: 'Get Paid',
        description: 'Enjoy fast, guaranteed automated electronic transfers upon milestone completion without chasing invoices.',
      },
    ],
  };

  return (
    <section id="brands" className="py-28 bg-[#17171B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-6 mb-4 tracking-tight">
            A Seamless 4-Step Partnership Flow
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg">
            Whether you are deploying capital or monetizing influence, our timeline eliminates friction.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-[#1E1E24] p-1.5 rounded-full border border-[#2D2D35] mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab('brand')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'brand'
                  ? 'bg-[#F47A2A] text-white shadow-lg shadow-[#F47A2A]/30'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              For Brands
            </button>
            <button
              onClick={() => setActiveTab('creator')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'creator'
                  ? 'bg-[#F47A2A] text-white shadow-lg shadow-[#F47A2A]/30'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              For Creators
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {timeline[activeTab].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative bg-[#1E1E24] border border-[#2D2D35] hover:border-[#F47A2A]/40 rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300"
            >
              {/* Top step number */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-extrabold text-[#2D2D35] group-hover:text-[#F47A2A] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#17171B] border border-[#2D2D35] flex items-center justify-center text-[#F47A2A]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#F47A2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress indicator bottom line */}
              <div className="mt-8 pt-4 border-t border-[#2D2D35]/60 flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>PHASE {item.step}</span>
                {idx < 3 && <span className="text-[#F47A2A] hidden lg:inline">Next →</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action button below */}
        <div className="mt-16 text-center">
          <a
            href={activeTab === 'brand' ? GOOGLE_FORMS.brand : GOOGLE_FORMS.creator}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E1E24] hover:bg-[#2D2D35] border border-[#2D2D35] hover:border-[#F47A2A] rounded-full text-white text-sm font-medium transition-all duration-200 cursor-pointer shadow-xl"
          >
            <span>{activeTab === 'brand' ? 'Launch Your First Brand Campaign' : 'Apply to Creator VIP Network'}</span>
            <ArrowRight className="w-4 h-4 text-[#F47A2A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
