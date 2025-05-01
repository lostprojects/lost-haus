
import React, { useState, useEffect } from 'react';
import { Star } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import AvatarGroup from './AvatarGroup';

const Hero = () => {
  // Image is now a static background, so we don't need the state and effects for image carousel
  return <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/5bc412c9-8530-43fc-8266-371fd01df196.png')`
        }}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 max-w-7xl mx-auto">
        <AvatarGroup />
        <h1 className="text-5xl text-center mb-4 font-header flex flex-col items-center gap-2 md:text-6xl">
          Cincinnati's Most Enchanting
          <span>Event Space</span>
        </h1>
        
        <p className="text-xl text-center mb-6 max-w-2xl font-body font-extralight md:text-lg">
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
      <div className="absolute left-[49.5%] transform -translate-x-1/2 bottom-[24.5%]" style={{
        animation: 'bounce 3.5s infinite'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Button positioned 2/3 of the way between the bottom of main content and bottom of hero */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%]">
        <TiltCard href="/event-inquiry" className="group max-h-fit rounded-full bg-black p-2 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:bg-[#D9FF8A]">
          <span className="text-xl text-white group-hover:text-black font-body">Reserve Your Event</span>
        </TiltCard>
      </div>
    </div>;
};

export default Hero;
