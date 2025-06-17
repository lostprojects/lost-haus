"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Testimonial data with variety
const testimonials = [
  {
    title: "Perfect Wedding Welcome Party",
    content: "Somerhaus was the perfect place for our wedding welcome party in Nov 2024. We loved the plant vibes and that the event space needed very little decor to look complete. Beth was great to work with and Emma and Dusty took great care of us during the event...",
    author: "Sarah S",
    initials: "SS",
    stars: 5,
    tag: "Wedding",
    thumbnail: "/review-thumbnails/sarah-s.png"
  },
  {
    title: "Dream Wedding Venue",
    content: "From the historic charm to the modern amenities, Somerhaus provided the perfect backdrop for our celebration. Couldn't have asked for more!",
    author: "Jessica & David",
    initials: "JD",
    stars: 5,
    tag: "Wedding"
  },
  {
    title: "Exceptional Service",
    content: "The team at Somerhaus made planning our corporate event seamless. The space is versatile and the attention to detail was outstanding.",
    author: "Amanda Chen",
    initials: "AC",
    stars: 5,
    tag: "Corporate"
  },
  {
    title: "Magical Evening",
    content: "Our anniversary party was unforgettable. The intimate atmosphere and beautiful decor created exactly the ambiance we wanted.",
    author: "Robert & Maria",
    initials: "RM",
    stars: 5,
    tag: "Anniversary"
  },
  {
    title: "Perfect Location",
    content: "Located in the heart of Over-the-Rhine, Somerhaus offered our guests easy access and the historic neighborhood added to the charm.",
    author: "Taylor Johnson",
    initials: "TJ",
    stars: 5,
    tag: "Party"
  },
  {
    title: "Outstanding Experience",
    content: "Every detail was handled with care. The venue coordinator was amazing and helped bring our vision to life perfectly.",
    author: "Emily & James",
    initials: "EJ",
    stars: 5,
    tag: "Wedding"
  },
  {
    title: "Highly Recommend",
    content: "Beautiful space, professional staff, and reasonable pricing. Our baby shower was everything we hoped for and more!",
    author: "Lisa Rodriguez",
    initials: "LR",
    stars: 5,
    tag: "Shower"
  },
  {
    title: "Incredible Venue",
    content: "The natural light, exposed brick, and modern touches make Somerhaus truly unique. Our guests are still talking about it!",
    author: "Kevin & Nicole",
    initials: "KN",
    stars: 5,
    tag: "Reception"
  }
];

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
      <div className="flex flex-col gap-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold md:text-5xl text-brand font-header py-[19px]">Hundreds of Perfect Moments</h2>
          <p className="text-base font-body text-black">Over 200 amazing events in 3 years</p>
        </div>
        <div className="w-full">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem className="basis-96 flex-shrink-0" key={index}>
                  <div className="bg-white rounded-md h-full lg:col-span-2 p-6 min-h-64 flex justify-between flex-col">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl tracking-tight font-header">
                            {testimonial.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {testimonial.tag}
                          </Badge>
                        </div>
                        <p className="text-black max-w-xs text-base font-body font-light">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array.from({
                        length: testimonial.stars
                      }).map((_, starIndex) => <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        </div>
                        <svg className="w-4 h-4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                          <path fill="#FF3D00" d="m6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center font-body">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.thumbnail || "https://github.com/shadcn.png"} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>)}
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
export { Testimonials };