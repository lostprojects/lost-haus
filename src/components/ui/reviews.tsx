'use client';

"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import reviewsJson from "@/data/testimonials.json";
import OptimizedImage from '@/components/ui/OptimizedImage';

// Optional: define an interface for stronger typing
interface Testimonial {
  title: string;
  content: string;
  author: string;
  initials: string;
  stars: number;
  tag: string;
  thumbnail?: string;
  type: string;
}

const reviewsData = reviewsJson as Testimonial[];

function Reviews() {
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
      <div className="flex flex-col gap-10">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 font-body">Word on the Street</Badge>
          <h2 className="font-bold text-brand font-header py-[19px]">What Our Guests Are Saying</h2>
          <p className="text-base font-body text-black">Over 200 amazing events in 3 years</p>
        </div>
        <div className="w-full">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {reviewsData.map((review, index) => {
                const iconPath = review.type === "Google Review" ? "/icons/google-icon.webp" : review.type === "Yelp Review" ? "/icons/Yelp-icon.png" : undefined;
                return (
                <CarouselItem className="basis-96 flex-shrink-0" key={index}>
                  <div className="bg-white rounded-md h-full lg:col-span-2 p-6 min-h-64 flex justify-between flex-col">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="tracking-tight font-header" style={{ color: '#000' }}>
                            “{review.title}”
                          </h3>
                          <div>
                            {(() => {
                              const colorMap: Record<string, string> = {
                                Wedding: "bg-pink-100 text-pink-800",
                                Corporate: "bg-blue-100 text-blue-800",
                                Anniversary: "bg-purple-100 text-purple-800",
                                Party: "bg-teal-100 text-teal-800",
                                Shower: "bg-lime-100 text-lime-800",
                                Reception: "bg-cyan-100 text-cyan-800"
                              };
                              const tagClass = colorMap[review.tag] || "bg-gray-100 text-gray-800";
                              return <Badge className={`text-xs ${tagClass}`}>{review.tag}</Badge>;
                            })()}
                          </div>
                        </div>
                        <p className="text-black max-w-xs text-base font-body font-light">
                          {review.content}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.stars }).map((_, starIndex) => (
                            <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        {iconPath && (
                          <OptimizedImage src={iconPath} alt={review.type} className="w-4 h-4" />
                        )}
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center font-body">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={review.thumbnail || "https://github.com/shadcn.png"} />
                          <AvatarFallback>{review.initials}</AvatarFallback>
                        </Avatar>
                        <span>{review.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>);
              })}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.google.com/search?q=somerhaus&oq=somerhaus&gs_lcrp=EgZjaHJvbWUqDwgAEAAYQxjjAhiABBiKBTIPCAAQABhDGOMCGIAEGIoFMgYIARBFGDwyFQgCEC4YQxivARjHARiABBiKBRiOBTIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEC4YChiABDIGCAYQRRg9MgGIBxBFGDzSAQgyMjczajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#mpd=~8675299177521287378/customers/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand hover:text-brand/80 transition-colors font-body text-base"
            >
              View Google Reviews <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            <a 
              href="https://www.yelp.com/biz/somerhaus-cincinnati-5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand hover:text-brand/80 transition-colors font-body text-base"
            >
              View Yelp Reviews <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>;
}
export { Reviews };
// Backward compatibility export
export { Reviews as Testimonials };