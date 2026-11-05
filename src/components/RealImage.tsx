import React, { useState, useEffect } from 'react';

interface RealImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '1/1' | '3/2';
  className?: string;
  caption?: string;
  badge?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export const RealImage: React.FC<RealImageProps> = ({
  src,
  fallbackSrc,
  alt,
  aspectRatio = '16/9',
  className = '',
  caption,
  badge,
  style,
  imgStyle,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[21/9]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
  };

  return (
    <div
      style={style}
      className={`relative w-full overflow-hidden rounded-xl bg-slate-100 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Loading Shimmer */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" />
      )}

      {/* Real High-Resolution Photograph */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          style={imgStyle}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoading ? 'opacity-0 scale-102' : 'opacity-100 scale-100'
          }`}
        />
      ) : (
        /* Styled Fallback Container if network blocks external images */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-slate-100 via-slate-50 to-slate-200">
          <div className="text-xs font-mono-num font-semibold uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/5 border border-[#C8102E]/20 px-3 py-1 rounded">
            {badge || 'KIDRILL GROUP'}
          </div>
          <p className="mt-2 text-sm font-medium text-slate-800 max-w-xs">{alt}</p>
        </div>
      )}

      {/* Optional Badge Overlay */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 text-[10px] font-mono-num uppercase tracking-wider font-semibold bg-white/95 text-slate-900 backdrop-blur-md rounded shadow-xs border border-white/40">
            {badge}
          </span>
        </div>
      )}

      {/* Optional Bottom Caption Scrim */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 pt-6 z-10 text-left">
          <p className="text-xs text-white font-medium drop-shadow-sm">{caption}</p>
        </div>
      )}
    </div>
  );
};
