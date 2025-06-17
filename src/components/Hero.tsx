import React, { useState, useEffect } from 'react';
import { Star } from "lucide-react";
import { BookNowButton } from "@/components/ui/book-now-button";
import AvatarGroup from './AvatarGroup';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.jpg',
    '/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.jpeg',
    '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png',
    '/photo/party-hero1-cincinnati-event-venue-somerhaus.jpeg',
    '/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden hero">
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 max-w-7xl mx-auto">
        <AvatarGroup />
        <h1 className="text-5xl text-center mb-4 font-header flex flex-col items-center gap-2 md:text-6xl text-white">
          Cincinnati's Most Enchanting
          <span>Event Space</span>
        </h1>

          <p className="text-xl text-center mb-6 max-w-2xl font-body font-extralight md:text-lg">
            Book your tour today and see how our ivy-covered historic venue turns special moments into lasting memories.
          </p>

        <div className="flex items-center gap-2 mb-8 font-body">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-lg font-normal">5-Stars on Google Reviews</span>
        </div>
      </div>

      <div className="absolute left-[49.5%] transform -translate-x-1/2 bottom-[24.5%]" style={{
        animation: 'bounce 3.5s infinite'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%]">
        <BookNowButton />
      </div>
    </div>
  );
};

export default Hero;
