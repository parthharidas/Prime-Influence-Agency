import React from 'react';
import { motion } from 'motion/react';

export const NetworkNodesIllustration: React.FC = () => {
  const nodes = [
    { id: 'brand1', label: 'Global Brand', type: 'brand', x: '18%', y: '25%' },
    { id: 'brand2', label: 'Tech Unicorn', type: 'brand', x: '22%', y: '72%' },
    { id: 'core', label: 'Prime Engine', type: 'core', x: '50%', y: '48%' },
    { id: 'creator1', label: 'Tech Creator', type: 'creator', x: '82%', y: '20%' },
    { id: 'creator2', label: 'Lifestyle VIP', type: 'creator', x: '80%', y: '50%' },
    { id: 'creator3', label: 'Podcaster', type: 'creator', x: '75%', y: '82%' },
  ];

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none overflow-hidden">
      {/* Subtle ambient back-glow */}
      <div className="absolute w-72 h-72 bg-[#F47A2A]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#2D2D35]">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D2D35" />
            <stop offset="50%" stopColor="#F47A2A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2D2D35" />
          </linearGradient>
        </defs>

        {/* Lines from brands to core */}
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          x1="18%" y1="25%" x2="50%" y2="48%" strokeWidth="1.5" strokeDasharray="4 4"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          x1="22%" y1="72%" x2="50%" y2="48%" strokeWidth="1.5"
        />

        {/* Lines from core to creators */}
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          x1="50%" y1="48%" x2="82%" y2="20%" stroke="url(#lineGrad)" strokeWidth="2"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          x1="50%" y1="48%" x2="80%" y2="50%" stroke="url(#lineGrad)" strokeWidth="2"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          x1="50%" y1="48%" x2="75%" y2="82%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3"
        />

        {/* Floating animated pulses along lines */}
        <circle r="3" fill="#F47A2A">
          <animateMotion path="M 180 120 L 250 240" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating Nodes */}
      {nodes.map((n, idx) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          style={{ left: n.x, top: n.y }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-md shadow-xl transition-transform hover:scale-105 cursor-pointer ${
              n.type === 'core'
                ? 'bg-[#1E1E24] border-[#F47A2A] shadow-[#F47A2A]/20 px-6 py-4'
                : n.type === 'brand'
                ? 'bg-[#17171B]/90 border-[#2D2D35]'
                : 'bg-[#1E1E24]/90 border-[#2D2D35]'
            }`}
          >
            {/* Status dot / icon */}
            <div
              className={`w-3 h-3 rounded-full flex items-center justify-center ${
                n.type === 'core'
                  ? 'bg-[#F47A2A] animate-ping'
                  : n.type === 'brand'
                  ? 'bg-white'
                  : 'bg-[#F47A2A]'
              }`}
            />

            <div className="flex flex-col">
              <span className={`text-[10px] uppercase font-mono tracking-wider ${
                n.type === 'core' ? 'text-[#F47A2A] font-bold' : 'text-[#A1A1AA]'
              }`}>
                {n.type === 'core' ? 'AI Matchmaker' : n.type === 'brand' ? 'Verified Brand' : 'Tier 1 Creator'}
              </span>
              <span className={`font-display font-semibold tracking-tight ${
                n.type === 'core' ? 'text-white text-base' : 'text-[#E4E4E7] text-xs sm:text-sm'
              }`}>
                {n.label}
              </span>
            </div>

            {/* Micro badge */}
            {n.type === 'creator' && (
              <span className="text-[10px] font-mono bg-[#17171B] px-2 py-0.5 rounded text-[#F47A2A] border border-[#2D2D35]">
                98% Match
              </span>
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Live Campaign Card Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-4 left-6 bg-[#1E1E24]/80 border border-[#2D2D35] p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-4 max-w-xs z-20 hidden sm:flex"
      >
        <div className="w-10 h-10 rounded-xl bg-[#F47A2A]/10 border border-[#F47A2A]/30 flex items-center justify-center font-display font-bold text-[#F47A2A]">
          2.4x
        </div>
        <div>
          <div className="text-xs font-medium text-white">Average Campaign ROI</div>
          <div className="text-[10px] text-[#A1A1AA]">Real-time verified attribution</div>
        </div>
      </motion.div>
    </div>
  );
};
