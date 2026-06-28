import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Building2, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brands' | 'creators'>('brands');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = {
    brands: [
      {
        q: "How does Prime Influence verify creator audience authenticity?",
        a: "We utilize proprietary AI diagnostic tools that analyze follower engagement rates, comment quality, audience demographic alignment, and historical attribution data to filter out artificial bots and inflated metrics."
      },
      {
        q: "What is the typical timeframe to launch a campaign?",
        a: "Once your brief is submitted, our matchmaking engine delivers verified talent shortlists within 48 hours. Most campaigns go live within 7 to 10 business days."
      },
      {
        q: "Do you handle legal contracts and creator payments?",
        a: "Yes. Our End-to-End Managed Campaign division handles all legal agreements, compliance disclosures (FTC/ASCI), usage rights negotiations, and automated escrow payouts."
      },
      {
        q: "What minimum budget is recommended for brand campaigns?",
        a: "Our campaign packages typically start at $10,000 for targeted niche activations and scale to $100,000+ for enterprise multi-channel brand awareness campaigns."
      }
    ],
    creators: [
      {
        q: "Is there any fee to join the Prime Influence Creator Network?",
        a: "Zero fees. Prime Influence is completely free for creators. We earn agency commissions directly from corporate brand budgets, ensuring you receive 100% of your contracted rate."
      },
      {
        q: "What are the minimum requirements to get approved?",
        a: "We generally look for creators with at least 10,000 highly engaged followers in tech, startup, luxury, business, or lifestyle niches with demonstrated content quality."
      },
      {
        q: "How and when do I get paid for brand deals?",
        a: "Payments are secured in escrow before campaign kickoff and transferred electronically directly to your bank account within 3 to 5 business days of final deliverable sign-off."
      },
      {
        q: "Can I maintain creative control over my sponsored content?",
        a: "Absolutely. We advocate for authentic creator voice. Brands provide core talking points and mandatory disclosures, but you craft the narrative that resonates with your community."
      }
    ]
  };

  return (
    <section id="about" className="py-28 bg-[#17171B] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A]">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base">
            Everything you need to know about partnering with Prime Influence.
          </p>

          <div className="inline-flex bg-[#1E1E24] p-1.5 rounded-full border border-[#2D2D35] mt-8">
            <button
              onClick={() => { setActiveTab('brands'); setOpenIdx(0); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'brands'
                  ? 'bg-[#F47A2A] text-white shadow-md'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Brand Questions
            </button>
            <button
              onClick={() => { setActiveTab('creators'); setOpenIdx(0); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'creators'
                  ? 'bg-[#F47A2A] text-white shadow-md'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Creator Questions
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {faqs[activeTab].map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-[#1E1E24] border-[#F47A2A]/50 shadow-xl' : 'bg-[#1E1E24]/50 border-[#2D2D35] hover:border-[#3F3F4E]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-semibold text-white text-base sm:text-lg">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#17171B] border border-[#2D2D35] flex items-center justify-center text-[#A1A1AA] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#F47A2A] border-[#F47A2A]/50' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 text-[#A1A1AA] text-sm sm:text-base leading-relaxed border-t border-[#2D2D35]/50">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
