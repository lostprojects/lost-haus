'use client';

"use client";

import { useEffect, useState, useRef } from "react";
import { pressLogos } from '@/data/pressLogos';
import { clientLogos } from '@/data/clientLogos';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogoTickerProps {
  type: 'press' | 'clients';
  className?: string;
}

const LogoTicker = ({
  type,
  className = ""
}: LogoTickerProps) => {
  // Get logos and heading based on type
  const logos = type === 'press' ? pressLogos : clientLogos;
  const heading = type === 'press' ? '' : 'Clients';
  // Duplicate logos for seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const isBlackBackground = className.includes('bg-black');
  const isTransparentBackground = className.includes('bg-transparent');
  const hasClientsHeading = heading === "Clients";
  
  return (
    <section 
      className={`${hasClientsHeading ? 'pt-4 pb-2' : 'pt-0 pb-0'} bg-background overflow-hidden ${className}`}
    >
      {heading && hasClientsHeading && (
        <div className="text-center mb-2">
          <p className="text-sm font-body text-white leading-none">
            {heading}
          </p>
        </div>
      )}
      {heading && !hasClientsHeading && (
        <div className="text-center mb-2">
          <p className="text-base font-body text-muted-foreground/80">
            {heading}
          </p>
        </div>
      )}
      
      <div className="relative w-full">
        <div 
          className="flex items-center gap-12 animate-scroll"
          style={{ 
            width: 'max-content'
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="flex items-center justify-center h-16 px-6 flex-shrink-0"
            >
              <OptimizedImage 
                src={logo.image} 
                alt={logo.description} 
                className={`h-[72px] w-[96px] object-contain ${logo.className || ''}`} />
            </div>
          ))}
        </div>
        
        {/* Fade edges for seamless effect */}
        {!isTransparentBackground && (
          <>
            <div className={`absolute inset-y-0 left-0 w-20 ${isBlackBackground ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-stone-100 to-transparent'} pointer-events-none z-10`}></div>
            <div className={`absolute inset-y-0 right-0 w-20 ${isBlackBackground ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-stone-100 to-transparent'} pointer-events-none z-10`}></div>
          </>
        )}
      </div>
    </section>
  );
};
export { LogoTicker };