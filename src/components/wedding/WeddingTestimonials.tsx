import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface WeddingTestimonialsProps {
  badgeText?: string;
}

const WeddingTestimonials: React.FC<WeddingTestimonialsProps> = ({ 
  badgeText = "Client Stories"
}) => {
  const testimonials = [
    {
      name: "Jennifer & Michael",
      date: "June 2023",
      quote: "Our wedding at Somerhaus was absolutely magical. The industrial-chic space with all the greenery created the perfect backdrop for our special day. The staff went above and beyond to ensure everything ran smoothly.",
      image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Sarah & David",
      date: "September 2023",
      quote: "We fell in love with Somerhaus the moment we walked in. The unique furnishings and abundant plant life created exactly the vibe we wanted. Our guests couldn't stop complimenting the venue!",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Ashley & Jason",
      date: "May 2023",
      quote: "The team at Somerhaus made planning our wedding so stress-free. The venue itself is stunning, but it's the personal touches and attentive service that really made our day special.",
      image: "https://images.unsplash.com/photo-1529636444744-adffc9135a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">{badgeText}</Badge>
          <h2 className="font-header tracking-tight mb-4">Love Stories at Somerhaus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Hear from couples who celebrated their special day with us.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-10">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-3/4 p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="order-2 md:order-1 text-center md:text-left p-6">
                          <div className="flex justify-center md:justify-start mb-4">
                            {Array(5).fill(0).map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <blockquote className="text-lg italic mb-6">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                          </div>
                        </div>
                        <div className="order-1 md:order-2">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full aspect-[4/3] object-cover rounded-lg shadow-md" 
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default WeddingTestimonials;
