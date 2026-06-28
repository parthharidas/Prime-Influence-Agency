import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, DollarSign, HeartHandshake, ShieldCheck, Star } from 'lucide-react';
import { GOOGLE_FORMS } from '../config/forms';
import { Testimonials } from '../components/Testimonials';

export const Creators: React.FC = () => {
  const perks = [
    {
      icon: DollarSign,
      title: "Zero Agency Fees",
      description: "Unlike standard talent agencies, we don't take a cut of your earnings. You receive 100% of your negotiated, contracted sponsorships. Our agency fees are funded directly by the brand budgets."
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Escrow Payments",
      description: "Say goodbye to late payouts or chasing invoices. All campaign budgets are locked in secure escrow before you even begin filming, and released within 3 days of content sign-off."
    },
    {
      icon: HeartHandshake,
      title: "Creative Integrity Focus",
      description: "We work with top-tier brands that understand the value of authenticity. We advocate for your creative voice so you can build campaigns that truly connect with your audience."
    },
    {
      icon: Sparkles,
      title: "Dedicated Talent Managers",
      description: "Our agency team handles the legal contract drafting, communication overhead, brief coordination, and compliance requirements, allowing you to focus purely on creating content."
    }
  ];

  return (
    <div className="pt-32 bg-[#17171B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            For Creators
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-6 mb-6 tracking-tight">
            Monetize with <span className="text-[#F47A2A]">Zero Commissions</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Join our exclusive network of elite digital creators. Land premium, high-ticket brand partnerships with secure, automated payouts and full creative control.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={GOOGLE_FORMS.creator}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-base rounded-full shadow-xl shadow-[#F47A2A]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Apply to VIP Creator Network
            </a>
          </div>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#1E1E24] border border-[#2D2D35] hover:border-[#F47A2A]/40 rounded-3xl p-8 sm:p-10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F47A2A]/10 border border-[#F47A2A]/20 flex items-center justify-center text-[#F47A2A] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#F47A2A] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                  {perk.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Selection Criteria / Onboarding Checklist */}
        <div className="rounded-[40px] bg-[#1E1E24] border border-[#2D2D35] p-8 sm:p-12 md:p-16 relative overflow-hidden mb-24">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F47A2A]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A]">
                Onboarding Requirements
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3 mb-6">
                Are You a Fit for Prime Influence?
              </h2>
              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-6">
                We pride ourselves on our highly curated elite network. If you match our standard selection criteria, we invite you to apply.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Minimum of 10,000 active, verified followers on key channels.",
                  "Demonstrated high quality of aesthetic design, lighting, and audio.",
                  "Strong focus on Tech, Lifestyle, Startups, Business, SaaS, or Finance.",
                  "High engagement metrics with real, qualitative conversations.",
                  "Professional, timely, and responsive communication."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#E4E4E7]">
                    <Star className="w-5 h-5 text-[#F47A2A] fill-[#F47A2A]/20 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#17171B] border border-[#2D2D35] rounded-3xl p-8 text-center">
              <h4 className="font-display font-bold text-white text-xl mb-4">
                Submit Your Onboarding Request
              </h4>
              <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                Take the next step in monetizing your hard-won digital assets. Apply below to get listed on our talent roster and receive brand opportunities directly.
              </p>
              <a
                href={GOOGLE_FORMS.creator}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#F47A2A] hover:bg-[#E06A1C] text-white font-medium text-sm rounded-full shadow-lg transition-all inline-block"
              >
                Launch Creator Application Form
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embed Testimonials Component for visual beauty and trust */}
      <Testimonials />
    </div>
  );
};
