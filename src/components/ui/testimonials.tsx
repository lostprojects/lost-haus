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
  return <div className="w-full py-20 lg:py-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-5xl font-bold md:text-5xl text-orange-600 font-header text-center py-[19px]">Hundreds of Perfect Moments</h2>
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
                        <p className="text-muted-foreground max-w-xs text-base font-body font-light">
                          Somerhaus exceeded all our expectations. The venue is stunning, 
                          and the staff went above and beyond to make our day special.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array.from({
                        length: 5
                      }).map((_, starIndex) => <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        </div>
                        <svg className="w-4 h-4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                          <path fill="#FF3D00" d="m6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        <span className="text-sm font-body">5-Stars on Google Reviews</span>
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