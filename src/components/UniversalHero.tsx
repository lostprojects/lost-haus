'use client';

import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import BookNowButton from "@/components/ui/book-now-button";
import { Star } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ResponsiveImage from '@/components/ui/responsive-image';
import AvatarGroup from '@/components/AvatarGroup';
import BouncingArrow from '@/components/ui/bouncing-arrow';
import { getHeroConfig } from '@/data/heroConfigs';
import { LogoTicker } from '@/components/LogoTicker';

interface UniversalHeroProps {
  pageKey: string;
  className?: string;
  // Optional overrides for dynamic content (e.g., blog posts)
  title?: string;
  subtitle?: string;
  images?: string[];
}

const UniversalHero: React.FC<UniversalHeroProps> = ({ 
  pageKey, 
  className = '', 
  title: titleOverride,
  subtitle: subtitleOverride,
  images: imagesOverride
}) => {
  // Must call hooks before any conditional returns
  const autoplayOptions = { delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
  
  // State for mega hero carousel (simple approach)
  const [currentImage, setCurrentImage] = useState(0);
  
  const config = getHeroConfig(pageKey);
  
  // Mega hero carousel effect 
  useEffect(() => {
    if (config && config.type === 'mega' && config.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % config.images.length);
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [config]);
  
  if (!config) {
    console.error(`No hero configuration found for page: ${pageKey}`);
    return null;
  }

  // Use overrides if provided, otherwise use config values
  const { type, backgroundStyle, logoType, titleLines } = config;
  const title = titleOverride || config.title;
  const subtitle = subtitleOverride || config.subtitle;
  const images = imagesOverride || config.images;

  // Render background based on type and carousel setting
  const renderBackground = () => {
    if (type === 'mega' && backgroundStyle === 'carousel' && images.length > 1) {
      return (
        <Carousel className="w-full h-full" ref={emblaRef}>
          <CarouselContent className="h-full">
            {images.map((imageSrc, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageSrc})` }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    } else {
      const imageSrc = images[0];
      return (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      );
    }
  };

  // Different styling based on hero type
  const getHeroStyles = () => {
    switch (type) {
      case 'mega':
        return {
          section: "relative w-full h-screen overflow-hidden hero",
          content: "relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 max-w-7xl mx-auto",
          title: "text-5xl text-center mb-4 font-header flex flex-col items-center gap-2 md:text-6xl text-white",
          subtitle: "text-xl text-center mb-6 max-w-2xl font-body font-extralight md:text-lg",
          overlay: "absolute inset-0 bg-black/30"
        };
      case 'secondary':
        return {
          section: "relative w-full h-[60vh] min-h-[400px] overflow-hidden", // 35% less tall than mega
          content: "absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4",
          title: "text-4xl md:text-5xl font-header tracking-tight mb-4 text-white",
          subtitle: "text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-body",
          overlay: "absolute inset-0 z-10 bg-black/40"
        };
      case 'minimal':
        return {
          section: "relative w-full h-screen overflow-hidden", // Full height like mega heroes
          content: "absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4",
          title: "text-3xl md:text-4xl font-header tracking-tight mb-4 text-white",
          subtitle: "text-base md:text-lg max-w-xl mx-auto text-white/90 font-body",
          overlay: "absolute inset-0 z-10 bg-black/50"
        };
      default:
        return getHeroStyles();
    }
  };

  const styles = getHeroStyles();

  // Render different hero types
  if (type === 'mega') {
    // MEGA HERO - Exact copy of homepage hero structure
    return (
      <>
        <div className={`${styles.section} ${className}`} style={{ backgroundColor: '#000000' }}>
          {/* Base black background layer */}
          <div className="absolute inset-0 bg-black"></div>
          
          {images.map((imageSrc, index) => (
            <div 
              key={`hero-${index}`} 
              className={`absolute inset-0 bg-cover bg-center opacity-0 ${currentImage === index ? '!opacity-100' : ''}`}
              style={{ 
                backgroundImage: `url(${imageSrc})`,
                transition: 'opacity 2s ease-in-out'
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}

          <div className={styles.content}>

            <AvatarGroup />
            <h1 className={styles.title}>
              {titleLines && titleLines.length > 1 ? (
                <>
                  {titleLines[0]}
                  <span>{titleLines[1]}</span>
                </>
              ) : (
                title
              )}
            </h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className="flex items-center gap-2 mb-8 font-body mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-lg font-normal">5-Stars on Google Reviews</span>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[24.5%]">
            <BouncingArrow />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%]">
            <BookNowButton href="/event-inquiry" variant="black" size="large" />
          </div>
        </div>

        {/* Logos section below the hero image with black background */}
        {logoType && logoType !== 'none' && (
          <LogoTicker 
            type={logoType} 
            className="bg-black" 
          />
        )}
      </>
    );
  }

  // SECONDARY/MINIMAL HEROES - Simple title + subtitle only
  return (
    <>
      <section className={`${styles.section} ${className}`}>
        {/* Background */}
        {renderBackground()}
        
        {/* Overlay */}
        <div className={styles.overlay} />
        
        {/* Content - ONLY title and subtitle for secondary heroes */}
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </section>

      {/* Logos section below the hero image with black background */}
      {logoType && logoType !== 'none' && (
        <LogoTicker 
          type={logoType} 
          className="bg-black" 
        />
      )}
    </>
  );
};

export default UniversalHero; 