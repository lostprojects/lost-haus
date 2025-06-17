"use client";

import { useEffect, useState, useRef } from "react";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos,
  className = ""
}: Logos3Props) => {
  // Duplicate logos for seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const isBlackBackground = className.includes('bg-black');
  const isTransparentBackground = className.includes('bg-transparent');
  const hasTrustedByHeading = heading === "Trusted By";
  
  return (
    <section 
      className={`${hasTrustedByHeading ? 'pt-6 pb-3' : 'pt-0 pb-0'} bg-background overflow-hidden ${className}`}
    >
      {heading && hasTrustedByHeading && (
        <div className="text-center mb-3">
          <p className="text-base font-body text-white leading-none">
            {heading}
          </p>
        </div>
      )}
      {heading && !hasTrustedByHeading && (
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
              <img 
                src={logo.image} 
                alt={logo.description} 
                className={`h-[72px] w-[96px] object-contain ${logo.className || ''}`}
              />
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
export { Logos3 };