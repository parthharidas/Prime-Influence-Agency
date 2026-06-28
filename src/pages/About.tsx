import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, BookOpen, Check } from 'lucide-react';
import { FAQ as FAQComponent } from '../components/FAQ';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To build the most secure, high-ROI bridge between enterprise brand objectives and creative digital creators, fostering campaigns driven by transparency, compliance, and mutual growth."
    },
    {
      icon: Users,
      title: "Our Network Vision",
      description: "We are establishing a highly curated, bot-free, brand-safe ecosystem where digital creators receive full compensation and brands acquire real-time attributable customer interest."
    },
    {
      icon: BookOpen,
      title: "Our Core Standards",
      description: "We verify engagement, enforce rigorous compliance, secure payments via upfront escrow deposits, and analyze campaign attribution to guarantee mutual safety."
    }
  ];

  return (
    <div className="pt-32 bg-[#17171B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A] bg-[#F47A2A]/10 px-3.5 py-1.5 rounded-full border border-[#F47A2A]/20">
            Our Mission & Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-6 mb-6 tracking-tight">
            Redefining <span className="text-[#F47A2A]">Influencer Marketing</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Prime Influence is a premium influencer marketing agency. We eliminate the friction, bots, and legal ambiguity from creator partnerships so brands and talent can scale in unison.
          </p>
        </div>

        {/* Mission Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#1E1E24] border border-[#2D2D35] p-8 rounded-3xl"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F47A2A]/10 border border-[#F47A2A]/20 flex items-center justify-center text-[#F47A2A] mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Value Prop banner block */}
        <div className="rounded-[40px] bg-[#1E1E24] border border-[#2D2D35] p-8 sm:p-12 md:p-16 relative overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A]">
                The Prime Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3 mb-6 leading-tight">
                Our Non-Negotiable Standards of Quality
              </h2>
              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-6">
                Most platforms automate matchmaking based on follower metrics. At Prime Influence, we understand that true influence is built on alignment, dialogue, and authenticity.
              </p>

              <div className="space-y-4">
                {[
                  "We manually inspect each profile's historical comments and engagement patterns.",
                  "We enforce upfront budget deposits in escrow to protect our creative roster.",
                  "We hold FTC-compliant contractual safety as our highest operational mandate.",
                  "We believe that creators deserve 100% of their sponsorship value."
                ].map((std) => (
                  <div key={std} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#F47A2A]/10 border border-[#F47A2A]/30 flex items-center justify-center text-[#F47A2A] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#E4E4E7]">{std}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#17171B]/80 border border-[#2D2D35] p-8 rounded-3xl space-y-6">
              <h4 className="font-display font-bold text-white text-lg">
                Operational Demographics
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#F47A2A]">
                    500+
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">
                    Verified Creators
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#F47A2A]">
                    98%
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">
                    Campaign Safety Rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#F47A2A]">
                    $2M+
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">
                    Sponsor Budget Executed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#F47A2A]">
                    100%
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">
                    On-Time Payouts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embed original FAQ section below */}
      <FAQComponent />
    </div>
  );
};
