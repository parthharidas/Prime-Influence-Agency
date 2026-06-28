import React from 'react';
import { motion } from 'motion/react';
import { Building2, Sparkles, SlidersHorizontal, ArrowRight, CheckCircle } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const Services: React.FC = () => {
  const cards = [
    {
      title: 'For Brands',
      subtitle: 'Precision Matchmaking & ROI Engine',
      description: 'Scale your user acquisition and brand awareness with verified top-tier creators tailored to your corporate standards.',
      features: [
        'Find creators',
        'Campaign Management',
        'Reporting',
        'ROI Tracking',
        'End-to-End Campaigns'
      ],
      ctaText: 'Start Campaign',
      ctaLink: GOOGLE_FORMS.brand,
      icon: Building2,
      accent: 'border-[#2D2D35] hover:border-[#F47A2A]/50 bg-[#1E1E24]',
      badgeText: 'Advertiser Suite',
      isPopular: false
    },
    {
      title: 'For Creators',
      subtitle: 'VIP Monetization & Brand Representation',
      description: 'Partner with world-class technology, startup, and luxury brands without compromising your creative freedom.',
      features: [
        'Paid Collaborations',
        'Brand Deals',
        'Long-Term Partnerships',
        'Portfolio Growth',
        'Secure Payments'
      ],
      ctaText: 'Become Creator',
      ctaLink: GOOGLE_FORMS.creator,
      icon: Sparkles,
      accent: 'border-[#F47A2A] bg-[#1E1E24] shadow-2xl shadow-[#F47A2A]/10',
      badgeText: 'VIP Network',
      isPopular: true
    },
    {
      title: 'Managed Campaigns',
      subtitle: 'White-Glove Agency Execution',
      description: 'Hand off strategy, legal compliance, negotiation, and analytics to our dedicated corporate partnership managers.',
      features: [
        'Strategy',
        'Negotiation',
        'Content Planning',
        'Performance Analytics'
      ],
      ctaText: 'Consult Agency',
      ctaLink: GOOGLE_FORMS.brand,
      icon: SlidersHorizontal,
      accent: 'border-[#2D2D35] hover:border-[#F47A2A]/50 bg-[#1E1E24]',
      badgeText: 'Enterprise Division',
      isPopular: false
    }
  ];

  return (
    <section id="services" className="py-28 bg-[#17171B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-6 mb-4 tracking-tight">
            Designed for the Modern Creator Economy
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-normal">
            We bridge the gap between corporate brands and influential creators with seamless workflow automation and expensive craft.
          </p>
        </div>

        {/* 3 Premium Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${card.accent}`}
              >
                {card.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F47A2A] text-white text-[11px] font-mono font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#17171B] border border-[#2D2D35] flex items-center justify-center text-[#F47A2A]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                      {card.badgeText}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F47A2A] mb-4 uppercase tracking-wider">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                    {card.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#2D2D35]">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-[#E4E4E7]">
                        <CheckCircle className="w-4 h-4 text-[#F47A2A] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 mt-8">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      card.isPopular
                        ? 'bg-[#F47A2A] hover:bg-[#E06A1C] text-white shadow-lg shadow-[#F47A2A]/20'
                        : 'bg-[#17171B] hover:bg-[#2D2D35] text-white border border-[#2D2D35]'
                    }`}
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
