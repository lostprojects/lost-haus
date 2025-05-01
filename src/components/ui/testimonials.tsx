"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [api, current]);
  return <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-header">
            Create Your Perfect Moment
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({
              length: 4
            }).map((_, index) => <CarouselItem className="lg:basis-1/3" key={index}>
                  <div className="bg-white rounded-md h-full lg:col-span-2 p-4 aspect-video flex justify-between flex-col">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight font-header">
                          Absolutely Perfect
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base font-body font-thin">
                          Somerhaus exceeded all our expectations. The venue is stunning, 
                          and the staff went above and beyond to make our day special.
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({
                      length: 5
                    }).map((_, starIndex) => <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center font-body">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>Sarah & Mike</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>;
}
export { Testimonials };