
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const animationRef = React.useRef<number | null>(null);
  const lastTimeRef = React.useRef<number>(0);
  const textIndexRef = React.useRef<number>(0);
  const morphRef = React.useRef<number>(0);
  const cooldownRef = React.useRef<number>(cooldownTime);

  // Animation state management
  const animate = React.useCallback((time: number) => {
    if (lastTimeRef.current === 0) {
      lastTimeRef.current = time;
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const dt = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    // Handle cooldown phase
    if (cooldownRef.current > 0) {
      cooldownRef.current -= dt;
      if (cooldownRef.current <= 0) {
        // Transition to morph phase
        morphRef.current = morphTime;
        
        // Update text indices
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        if (text1Ref.current && text2Ref.current) {
          text1Ref.current.textContent = texts[textIndexRef.current];
          text2Ref.current.textContent = texts[(textIndexRef.current + 1) % texts.length];
        }
      }
    } else {
      // Handle morph phase
      morphRef.current -= dt;
      if (morphRef.current <= 0) {
        // Transition to cooldown phase
        cooldownRef.current = cooldownTime;
        morphRef.current = 0;
      }
    }

    // Apply visual effects based on current phase
    if (cooldownRef.current <= 0) {
      const fraction = Math.max(0, Math.min(1, morphRef.current / morphTime));
      updateTextStyles(fraction);
    } else {
      // During cooldown, text2 is invisible, text1 is fully visible
      if (text1Ref.current && text2Ref.current) {
        text1Ref.current.style.filter = '';
        text1Ref.current.style.opacity = '100%';
        text2Ref.current.style.filter = '';
        text2Ref.current.style.opacity = '0%';
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [texts, morphTime, cooldownTime]);

  // Apply visual transition effects
  const updateTextStyles = React.useCallback((fraction: number) => {
    if (!text1Ref.current || !text2Ref.current) return;
    
    // Non-linear easing for smoother transitions
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    const easedFraction = easeInOutCubic(fraction);
    
    // Apply effects to the incoming text
    text2Ref.current.style.filter = `blur(${Math.max(0, 8 * (1 - easedFraction))}px)`;
    text2Ref.current.style.opacity = `${easedFraction * 100}%`;
    
    // Apply inverse effects to the outgoing text
    const inverseFraction = 1 - easedFraction;
    text1Ref.current.style.filter = `blur(${Math.max(0, 8 * inverseFraction)}px)`;
    text1Ref.current.style.opacity = `${(1 - easedFraction) * 100}%`;
  }, []);

  // Initialize and clean up animation
  React.useEffect(() => {
    // Initialize texts
    if (text1Ref.current && text2Ref.current && texts.length > 0) {
      textIndexRef.current = 0;
      text1Ref.current.textContent = texts[0];
      text2Ref.current.textContent = texts[1 % texts.length];
      
      // Start with text1 fully visible and text2 invisible
      text1Ref.current.style.opacity = '100%';
      text2Ref.current.style.filter = '';
      text2Ref.current.style.opacity = '0%';
    }

    // Reset animation state
    lastTimeRef.current = 0;
    cooldownRef.current = cooldownTime;
    morphRef.current = 0;

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Clean up
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [texts, animate, cooldownTime]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative inline-block", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center w-full h-full"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center w-full",
            textClassName
          )}
          aria-hidden="true"
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center w-full",
            textClassName
          )}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
