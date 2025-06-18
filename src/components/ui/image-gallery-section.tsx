import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const ImageGallerySection = () => {
  const firstRowImages = [
    "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp",
    "/photo/wedding-portrait1-cincinnati-wedding-venue-somerhaus.webp", 
    "/photo/meeting-hero1-cincinnati-event-venue-somerhaus.webp",
    "/photo/party-hero1-cincinnati-event-venue-somerhaus.webp",
    "/photo/space-portrait1-cincinnati-event-space-somerhaus.webp"
  ];

  const secondRowImages = [
    "/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.webp",
    "/photo/space-portrait2-cincinnati-event-space-somerhaus.webp",
    "/photo/wedding-portrait2-cincinnati-wedding-venue-somerhaus.webp",
    "/photo/wedding-portrait3-cincinnati-wedding-venue-somerhaus.webp",
    "/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.webp"
  ];

  return (
    <section className="bg-transparent py-[40px]">
      <div className="max-w-none mx-auto px-8">
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-5xl font-bold md:text-5xl text-brand font-header mb-4 my-[26px] py-0">
            Gallery
          </h2>
          <p className="text-lg text-black font-body max-w-2xl mx-auto">
            Explore the beautiful spaces and versatile layouts that make Somerhaus perfect for any occasion.
          </p>
        </div>
        
        <div className="relative flex flex-col items-center gap-10 h-full overflow-hidden py-[60px]">
          <div className="flex flex-row -ml-20">
            {firstRowImages.map((image, idx) => {
              const randomRotation = Math.random() * 20 - 10;
              return (
                <div 
                  key={"images-first" + idx} 
                  style={{ transform: `rotate(${randomRotation}deg)` }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden hover:scale-105 hover:z-50 transition-all duration-300 animate-fade-in-up"
                >
                  <img 
                    src={image} 
                    alt="Somerhaus venue" 
                    className="rounded-lg h-32 w-32 md:h-60 md:w-60 object-cover flex-shrink-0" 
                  />
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-row">
            {secondRowImages.map((image, idx) => {
              const randomRotation = Math.random() * 20 - 10;
              return (
                <div 
                  key={"images-second" + idx} 
                  style={{ transform: `rotate(${randomRotation}deg)` }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden hover:scale-105 hover:z-50 transition-all duration-300 animate-fade-in-up"
                >
                  <img 
                    src={image} 
                    alt="Somerhaus venue" 
                    className="rounded-lg h-32 w-32 md:h-60 md:w-60 object-cover flex-shrink-0" 
                  />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-8 animate-fade-in-up">
          <Link 
            to="/about/gallery" 
            className="inline-flex items-center text-brand hover:text-brand/80 transition-colors font-body text-base"
          >
            See More <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};