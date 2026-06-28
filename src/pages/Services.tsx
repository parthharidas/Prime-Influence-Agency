import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Building2, SlidersHorizontal, ArrowUpRight, Zap, Play, Shield } from 'lucide-react';
import { Services as ServicesComponent } from '../components/Services';
import { GOOGLE_FORMS } from '../config/forms';

export const Services: React.FC = () => {
  const deepDiveServices = [
    {
      icon: Building2,
      title: "Direct Verified Matchmaking",
      description: "Our core curation service. We bypass artificial algorithms to manually review engagement, audience quality, and aesthetic alignment to build custom, high-converting creator rosters."
    },
    {
      icon: Play,
      title: "End-to-End Campaign Management",
      description: "From initial brief refinement and content review to timeline compliance and final publishing. Our dedicated project managers handle all coordination overhead."
    },
    {
      icon: SlidersHorizontal,
      title: "Advanced Performance Attribution",
      description: "Real-time analytics dashboards tracking cost-per-click, absolute conversions, brand sentiment, and geographic distribution so you can measure absolute campaign success."
    },
    {
      icon: Shield,
      title: "Corporate Legal & Compliance",
      description: "Fully compliant contracts governing creative usage rights, long-term asset syndication, and FTC / ASCI guidelines to protect enterprise safety."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#17171B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-6 mb-6 tracking-tight">
            High-Impact <span className="text-[#F47A2A]">Sponsorship Solutions</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Whether you are an enterprise advertiser launching your next flagship campaign or a creator scaling your platform, we deliver premium full-service infrastructure.
          </p>
        </div>

        {/* Detailed services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {deepDiveServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#1E1E24]/60 backdrop-blur-md border border-[#2D2D35] hover:border-[#F47A2A]/30 rounded-3xl p-8 hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#17171B] border border-[#2D2D35] text-[#F47A2A] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Embed original comparison Service section for premium structure */}
      <div className="border-t border-[#2D2D35] pt-12">
        <ServicesComponent />
      </div>

      {/* Campaign consulting CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <div className="bg-[#1E1E24] border border-[#2D2D35] p-8 sm:p-12 rounded-[32px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F47A2A]/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-display font-bold text-white mb-3">
            Looking for a Tailored Enterprise Partnership?
          </h3>
          <p className="text-sm text-[#A1A1AA] mb-8 max-w-xl mx-auto leading-relaxed">
            Connect directly with our agency consulting leads. We provide end-to-end bespoke plans, private influencer contracts, and localized activation campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GOOGLE_FORMS.brand}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-sm rounded-full transition-all inline-flex items-center gap-2"
            >
              Consult Our Agency
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:work@primeinfluence.in"
              className="text-[#A1A1AA] hover:text-white transition-colors text-sm font-mono"
            >
              work@primeinfluence.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
