import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text";

interface HeroImage {
  url: string;
  alt: string;
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images: HeroImage[] = [{
    url: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png",
    alt: "Somerhaus wedding ceremony setup"
  }, {
    url: "/placeholder.svg",
    alt: "Somerhaus evening ambiance"
  }, {
    url: "/placeholder.svg",
    alt: "Somerhaus dining setup"
  }];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000" style={{
      backgroundImage: `url(${images[currentImageIndex].url})`
    }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 font-header flex flex-col items-center gap-2">
          Cincinnati's Most Enchanting
          <div className="flex items-center gap-2">
            <GooeyText
              texts={["Event", "Wedding", "Meeting", "Shower", "Party", "Dinner"]}
              morphTime={2}
              cooldownTime={1.5}
              className="h-[80px] md:h-[100px]"
              textClassName="text-white font-header"
            />
            <span>Space</span>
          </div>
        </h1>
        
        <p className="text-xl text-center mb-6 max-w-2xl font-body font-thin md:text-lg">
          Transform your special moments into magical memories in our ivy-covered, 
          historic venue. Limited dates available for 2024.
        </p>

        <div className="flex items-center gap-2 mb-8 font-body">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-lg font-normal">100% 5-Star Google Reviews</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-black text-lg px-8 py-6 font-body bg-lime-300 hover:bg-lime-200">Start Your Event</Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? "bg-white w-8" : "bg-white/50"}`} />)}
      </div>
    </div>;
};

export default Hero;
