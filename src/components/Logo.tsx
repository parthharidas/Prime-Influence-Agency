import React from 'react';

interface LogoProps {
  className?: string;
  showStar?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showStar = true, size = 'md' }) => {
  const scaleClass = {
    sm: 'scale-75 origin-left',
    md: 'scale-100',
    lg: 'scale-125 origin-left'
  }[size];

  return (
    <div className={`inline-flex items-center gap-1 select-none ${scaleClass} ${className}`}>
      <div className="relative leading-none flex flex-col justify-center">
        <span className="font-display font-bold text-[28px] tracking-tight text-[#F47A2A] leading-none">
          prime
        </span>
        <span className="font-display font-semibold text-[15px] tracking-wide text-[#E4E4E7] ml-auto -mt-1">
          Influence
        </span>
      </div>
      {showStar && (
        <svg
          className="w-3.5 h-3.5 text-[#A1A1AA] self-end mb-0.5 ml-0.5 animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      )}
    </div>
  );
};
