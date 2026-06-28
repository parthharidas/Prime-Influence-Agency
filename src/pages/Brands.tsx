import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, TrendingUp, Cpu, CheckCircle } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';

export const Brands: React.FC = () => {
  const benefits = [
    {
      icon: Cpu,
      title: "Audience Vetting Engine",
      description: "Our strict diagnostics filter out bot accounts and fake engagement. You only pay for real, active impressions with high-intent purchasing power."
    },
    {
      icon: Shield,
      title: "Legal & Escrow Compliance",
      description: "Complete security for your brand assets and marketing budgets. We handle all contract templates, usage rights, and automated safe-payout escrow agreements."
    },
    {
      icon: TrendingUp,
      title: "ROI-Focused Attribution",
      description: "Move past vanity metrics. Track click-through rates, custom coupon redemptions, and exact conversion data to map every dollar spent directly to sales."
    },
    {
      icon: Sparkles,
      title: "Vetted VIP Creator Network",
      description: "Get direct match-made shortlists of trusted, high-performance creators in Tech, Lifestyle, SaaS, Business, and Finance niches in under 48 hours."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#17171B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            For Advertisers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-6 mb-6 tracking-tight">
            Deploy Capital with <span className="text-[#F47A2A]">Predictable ROI</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Eliminate guesswork. Connect with vetted, premium creators to launch highly optimized, brand-safe campaigns with full attribution tracking.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={GOOGLE_FORMS.brand}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-base rounded-full shadow-xl shadow-[#F47A2A]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Your Brand Brief
            </a>
          </div>
        </div>

        {/* Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#1E1E24] border border-[#2D2D35] hover:border-[#F47A2A]/40 rounded-3xl p-8 sm:p-10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F47A2A]/10 border border-[#F47A2A]/20 flex items-center justify-center text-[#F47A2A] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#F47A2A] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Vetting Standards Section */}
        <div className="rounded-[40px] bg-[#1E1E24] border border-[#2D2D35] p-8 sm:p-12 md:p-16 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47A2A]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A]">
                Our Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3 mb-6">
                Guaranteed Brand Safety & Integrity
              </h2>
              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-6">
                Every creator on our roster undergoes comprehensive audience and content audits before introduction. We verify that their voice aligns with your corporate standards.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Strict filtering for bots, fake followers, and engagement hubs.",
                  "Compliance audits to meet FTC, ASCI, and international advertising regulations.",
                  "Secure escrow payments: creators are paid only upon satisfactory delivery.",
                  "Dynamic analytics tracking links for end-to-end campaign performance."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#E4E4E7]">
                    <CheckCircle className="w-5 h-5 text-[#F47A2A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#17171B] border border-[#2D2D35] rounded-3xl p-8 space-y-6">
              <h4 className="font-display font-bold text-white text-lg">
                Attribution Dashboard Metrics
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Cost Per Mille (CPM)", value: "$12.40 Avg" },
                  { label: "Engagement Rate (ER)", value: "4.8% Verified" },
                  { label: "Audience Quality Score", value: "92/100 Minimum" },
                  { label: "Sponsor Return Rate", value: "84% Quarter-over-Quarter" }
                ].map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center border-b border-[#2D2D35]/50 pb-3">
                    <span className="text-sm text-[#A1A1AA]">{metric.label}</span>
                    <span className="font-mono text-sm font-semibold text-white bg-[#1E1E24] px-3 py-1 rounded-md border border-[#2D2D35]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center py-12 border-t border-[#2D2D35]">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Ready to scale your next campaign?
          </h3>
          <p className="text-[#A1A1AA] max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Share your requirements with our dedicated campaign managers. We'll curate a customized, high-converting talent list.
          </p>
          <a
            href={GOOGLE_FORMS.brand}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-base rounded-full shadow-lg transition-all duration-300"
          >
            Launch Your Brand Brief
          </a>
        </div>
      </div>
    </div>
  );
};
