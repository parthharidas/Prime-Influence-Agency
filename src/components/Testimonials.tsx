import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Prime Influence completely transformed our Q4 acquisition model. Their AI matchmaking paired us with creators who drove a 3.4x ROI within two weeks.",
      author: "Marcus Vance",
      role: "VP of Growth, Linear Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      type: "Brand Partner"
    },
    {
      quote: "As a tech creator, most agencies send irrelevant sponsor pitches. Prime Influence only brings high-ticket corporate partnerships that my audience actually loves.",
      author: "Elena Rostova",
      role: "Tier 1 Tech Reviewer (1.2M Subs)",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      type: "Creator VIP"
    },
    {
      quote: "The end-to-end managed execution is flawless. From contract negotiation to real-time attribution reporting, it feels like having an in-house luxury agency.",
      author: "David Sterling",
      role: "Chief Marketing Officer, FinVault",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      type: "Enterprise Brand"
    }
  ];

  return (
    <section id="creators" className="py-28 bg-[#1E1E24] border-y border-[#2D2D35] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A]">
            Trusted Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4 tracking-tight">
            Loved by Marketing Leaders & Top Creators
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base">
            Don't take our word for it. Read how we are shaping the future of creator partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#17171B] border border-[#2D2D35] hover:border-[#F47A2A]/40 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[#F47A2A]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F47A2A]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#1E1E24] text-[#A1A1AA] border border-[#2D2D35]">
                    {t.type}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#2D2D35] mb-4" />
                <p className="text-[#E4E4E7] text-sm sm:text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#2D2D35]/80">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#F47A2A]/40"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-mono">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
