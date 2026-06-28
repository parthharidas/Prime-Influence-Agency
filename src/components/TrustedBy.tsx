import React from 'react';

export const TrustedBy: React.FC = () => {
  const brands = [
    { name: 'STRIPE', style: 'font-sans tracking-widest font-bold' },
    { name: 'LINEAR', style: 'font-display tracking-tight font-extrabold' },
    { name: 'VERCEL', style: 'font-mono tracking-tighter font-bold' },
    { name: 'APPLE MEDIA', style: 'font-sans tracking-normal font-semibold' },
    { name: 'GOAT', style: 'font-display tracking-widest font-black' },
    { name: 'WPP GLOBAL', style: 'font-sans tracking-wider font-bold' },
  ];

  return (
    <section className="py-16 border-y border-[#2D2D35]/60 bg-[#17171B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-[#71717A] mb-10">
          Trusted by Next-Generation Startups & Enterprise Marketing Teams
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-4 transition-transform hover:scale-105 cursor-default select-none"
            >
              <span className={`text-lg text-[#E4E4E7] group-hover:text-[#F47A2A] transition-colors ${brand.style}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
