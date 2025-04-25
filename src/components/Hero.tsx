
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface HeroImage {
  url: string;
  alt: string;
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images: HeroImage[] = [
    { url: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png", alt: "Somerhaus wedding ceremony setup" },
    { url: "/placeholder.svg", alt: "Somerhaus evening ambiance" },
    { url: "/placeholder.svg", alt: "Somerhaus dining setup" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Video Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Cincinnati's Most Enchanting Event Space
        </h1>
        
        <p className="text-xl md:text-2xl text-center mb-6 max-w-2xl">
          Transform your special moments into magical memories in our ivy-covered, 
          historic venue. Limited dates available for 2024.
        </p>

        {/* Social Proof */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-lg">100% 5-Star Google Reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
          >
            Check Available Dates
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/20 text-lg px-8 py-6"
          >
            Schedule a Tour
          </Button>
        </div>
      </div>

      {/* Image Counter */}
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
    </div>
  );
};

export default Hero;
