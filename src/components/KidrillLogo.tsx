import React, { useState } from 'react';

interface KidrillLogoProps {
  variant?: 'dark' | 'light' | 'monochrome';
  showWordmark?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const KidrillLogo: React.FC<KidrillLogoProps> = ({
  variant = 'dark',
  showTagline = false,
  size = 'md',
  className = '',
}) => {
  const isLight = variant === 'light';
  const [imgSrc, setImgSrc] = useState('/assets/aistudio/kidrill_logo_transparent.png');

  // Height configurations scaled proportionally for the 3:1 logo lockup
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16',
  };

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center">
        <img
          src={imgSrc}
          alt="Kidrill Group"
          decoding="async"
          loading="eager"
          onError={() => {
            if (imgSrc !== '/assets/aistudio/Kidrill_logo_1__1__d63ed5d2.png') {
              setImgSrc('/assets/aistudio/Kidrill_logo_1__1__d63ed5d2.png');
            }
          }}
          className={`w-auto object-contain object-left transition-transform duration-300 hover:scale-[1.02] ${
            sizeClasses[size]
          } ${isLight ? 'brightness-0 invert' : ''}`}
        />
      </div>

      {showTagline && (
        <span className={`font-sans-corp text-[8px] sm:text-[9px] tracking-[0.28em] uppercase font-semibold ${isLight ? 'text-white/80' : 'text-slate-900'} mt-1 pl-0.5`}>
          GLOBAL RESOURCES · TRUSTED TRADE
        </span>
      )}
    </div>
  );
};
