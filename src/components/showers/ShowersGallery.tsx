
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ShowersGallery = () => {
  const galleryImages = [
    {
      src: "/photo/haus-wedding-main.webp",
      alt: "Baby shower celebration setup with elegant decor",
      caption: "Baby Shower Celebration"
    },
    {
      src: "/photo/haus-wedding-2.webp",
      alt: "Bridal shower with floral arrangements and table settings",
      caption: "Bridal Shower Elegance"
    },
    {
      src: "/photo/haus-meeting.webp",
      alt: "Gender reveal party with colorful decorations",
      caption: "Gender Reveal Celebration"
    },
    {
      src: "/photo/haus-party.webp",
      alt: "Custom shower decorations and table setup",
      caption: "Custom Shower Decorations"
    }
  ];

  return (
    <section className="py-16 bg-[#FCF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Photo Gallery</Badge>
          <h2 className="text-3xl md:text-5xl font-header tracking-tight mb-4">Shower Celebrations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Browse our gallery of past baby showers, bridal showers, and celebrations.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-md group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[250px] w-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="p-3 bg-white">
                        <p className="font-medium text-sm font-body">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ShowersGallery;
