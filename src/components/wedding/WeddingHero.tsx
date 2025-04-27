
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const WeddingHero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ 
      playOnInit: true, 
      stopOnInteraction: false, 
      interval: 4000 
    })
  ]);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Romantic wedding setup at Somerhaus"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Elegant wedding reception at Somerhaus"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Beautiful wedding ceremony at Somerhaus"
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
            Where Cincinnati Love Stories Begin
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-body">
            An enchanting 3,080 sq ft industrial-chic venue in the heart of Over-the-Rhine, 
            perfect for creating unforgettable wedding memories.
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

export default WeddingHero;
