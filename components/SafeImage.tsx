'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Compass, MapPin } from 'lucide-react';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackTitle,
  fallbackCategory,
  className,
  fill,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#1B4332] via-[#143326] to-[#0D2219] text-white relative overflow-hidden ${className || ''}`}
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 space-y-2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 text-emerald-300">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          {fallbackTitle && (
            <p className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
              {fallbackTitle}
            </p>
          )}
          {fallbackCategory && (
            <span className="text-[10px] uppercase font-semibold tracking-widest text-emerald-300/90 bg-white/10 px-2 py-0.5 rounded-full">
              {fallbackCategory}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${isLoading ? 'bg-cream-200 animate-pulse' : ''}`}>
      <Image
        src={src}
        alt={alt || 'Forever Adventurer'}
        fill={fill}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        className={`${className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
    </div>
  );
}
