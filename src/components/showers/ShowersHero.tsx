
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ShowersHero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ 
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false
    })
  ]);

  const heroImages = [
    {
      src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
      alt: "Baby shower setup at Somerhaus"
    },
    {
      src: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png",
      alt: "Bridal shower celebration at Somerhaus"
    },
    {
      src: "/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png",
      alt: "Elegant shower party at Somerhaus"
    }
  ];

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black/30" />
      
      <Carousel className="w-full h-full" ref={emblaRef}>
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s]" 
                style={{ backgroundImage: `url(${image.src})` }}
                aria-label={image.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-header tracking-tight mb-4 text-white">
            Celebrate Life's Special Moments
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-body">
            Host your perfect baby shower, bridal shower, or celebration in our enchanting 
            3,080 sq ft industrial-chic venue in Over-the-Rhine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-body gap-2">
              Schedule a Tour <CalendarCheck className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-body gap-2">
              Get Your Custom Quote <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowersHero;
