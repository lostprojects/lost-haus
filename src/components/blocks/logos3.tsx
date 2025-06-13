"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}
interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}
const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [{
    id: "logo-1",
    description: "Logo 1",
    image: "/placeholder.svg",
    className: "h-7 w-auto"
  }, {
    id: "logo-2",
    description: "Logo 2",
    image: "/placeholder.svg",
    className: "h-7 w-auto"
  }, {
    id: "logo-3",
    description: "Logo 3",
    image: "/placeholder.svg",
    className: "h-7 w-auto"
  }, {
    id: "logo-4",
    description: "Logo 4",
    image: "/placeholder.svg",
    className: "h-7 w-auto"
  }, {
    id: "logo-5",
    description: "Logo 5",
    image: "/placeholder.svg",
    className: "h-7 w-auto"
  }]
}: Logos3Props) => {
  return <section className="py-0 my-[13px]">
      <div className="container flex flex-col items-center text-center my-0 py-[5px]">
        <h1 className="text-sm font-black uppercase font-body mb-4 text-orange-600 py-0 my-[21px]">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20 py-[16px]">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel opts={{
          loop: true
        }} plugins={[AutoScroll({
          playOnInit: true
        })]}>
            <CarouselContent className="ml-0">
              {logos.map(logo => <CarouselItem key={logo.id} className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img src={logo.image} alt={logo.description} className={logo.className} />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
    </section>;
};
export { Logos3 };