import React, { useState, useEffect } from 'react';
import { Star } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import AvatarGroup from './AvatarGroup';

interface HeroImage {
  url: string;
  alt: string;
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  
  const images: HeroImage[] = [{
    url: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png",
    alt: "Somerhaus wedding ceremony celebration"
  }, {
    url: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png",
    alt: "Somerhaus dance party"
  }, {
    url: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png",
    alt: "Somerhaus event panel discussion"
  }, {
    url: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
    alt: "Somerhaus wedding ceremony setup"
  }];

  useEffect(() => {
    const loadImage = (url: string, index: number) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    };

    setImagesLoaded(new Array(images.length).fill(false));
    
    loadImage(images[0].url, 0);
    
    images.slice(1).forEach((image, index) => {
      loadImage(image.url, index + 1);
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded.length > 0 && imagesLoaded.every(loaded => loaded)) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (!allImagesLoaded) return;

    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [allImagesLoaded]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out" 
        style={{
          backgroundImage: `url(${images[currentImageIndex].url})`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 max-w-7xl mx-auto">
        <AvatarGroup />
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 font-header flex flex-col items-center gap-2">
          Cincinnati's Most Enchanting
          <div className="flex items-center gap-2">
            <span className="text-white font-header text-4xl md:text-6xl">Event</span>
            <span>Space</span>
          </div>
        </h1>
        
        <p className="text-xl text-center mb-6 max-w-2xl font-body font-thin md:text-lg">
          Transform your special moments into magical memories in our ivy-covered,
          historic venue.<br />
          <span className="italic">*Limited dates available for 2025*</span>
        </p>

        <div className="flex items-center gap-2 mb-8 font-body">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-lg font-normal">5-Stars on Google Reviews</span>
        </div>
      </div>

      {/* Arrow positioned exactly halfway between the main hero content and the button */}
      <div className="absolute left-[49.5%] transform -translate-x-1/2 bottom-[24.5%]" style={{ animation: 'bounce 3.5s infinite' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Button positioned 2/3 of the way between the bottom of main content and bottom of hero */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%]">
        <TiltCard
          href="/event-inquiry"
          className="group max-h-fit rounded-full bg-black p-2 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:bg-[#D9FF8A]"
        >
          <span className="text-xl text-white group-hover:text-black font-mono">Reserve Your Event</span>
        </TiltCard>
      </div>

      {allImagesLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
