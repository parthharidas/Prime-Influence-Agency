import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * end);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Brands', sub: 'Verified Corporate Partners' },
    { value: 15000, suffix: '+', label: 'Creators', sub: 'Across Tier 1 Niches' },
    { value: 20, suffix: 'M+', label: 'Audience Reach', sub: 'Combined Global Impressions' },
    { value: 95, suffix: '%', label: 'Client Satisfaction', sub: 'Measured Retention Rate' },
  ];

  return (
    <section className="py-24 bg-[#1E1E24] border-y border-[#2D2D35] relative overflow-hidden">
      {/* Subtle ambient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F47A2A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F47A2A]">
            Why Choose Prime Influence
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            Proven Performance at Global Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2D2D35]">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? 'pt-8 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="text-[#F47A2A] mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-display font-semibold text-[#E4E4E7] mt-1">
                {stat.label}
              </div>
              <div className="text-xs font-mono text-[#A1A1AA] mt-1">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
