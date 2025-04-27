
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CorporateTestimonials = () => {
  const testimonials = [
    {
      quote: "Somerhaus transformed our annual strategy meeting from a standard corporate event into a truly inspiring experience. The space fostered creativity and the team still talks about it.",
      author: "Jennifer Wilson",
      position: "Marketing Director",
      company: "Cincinnati Innovation Group"
    },
    {
      quote: "The technical capabilities at Somerhaus exceeded our expectations. Our product launch presentation went flawlessly and impressed all our clients and partners.",
      author: "Michael Chang",
      position: "VP of Sales",
      company: "TechForward Solutions"
    },
    {
      quote: "We've hosted three different client meetings at Somerhaus, and each time the feedback has been outstanding. The space is professional yet distinctive.",
      author: "Sarah Johnson",
      position: "Client Relations Manager",
      company: "Premier Financial Advisors"
    },
    {
      quote: "The versatility of the venue allowed us to host a formal presentation followed by a casual networking reception, all in the same beautiful space.",
      author: "David Miller",
      position: "Events Coordinator",
      company: "Global Connect Industries"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-header mb-4">What Businesses Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Don't take our word for it—hear from corporate clients who've hosted successful events at Somerhaus.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border border-gray-100">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <blockquote className="mb-6 text-gray-700 font-body">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold font-body">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 font-body">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CorporateTestimonials;
