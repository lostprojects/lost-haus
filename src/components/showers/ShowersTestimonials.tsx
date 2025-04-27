
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ShowersTestimonials = () => {
  const testimonials = [
    {
      quote: "The team at Somerhaus made my sister's baby shower absolutely perfect. The venue was stunning, and the staff helped with everything from setup to teardown. Our guests couldn't stop raving about how beautiful everything was!",
      name: "Sarah Thompson",
      role: "Baby Shower Host",
      avatar: "ST"
    },
    {
      quote: "We hosted my daughter's bridal shower at Somerhaus and it exceeded all our expectations. The space is versatile and photographs beautifully. The recommended vendors were amazing to work with too.",
      name: "Jennifer Davis",
      role: "Mother of the Bride",
      avatar: "JD"
    },
    {
      quote: "Our gender reveal party at Somerhaus was magical! The team helped us coordinate all the special moments, and the industrial-chic space made for the perfect backdrop for our celebration and photos.",
      name: "Michael & Emma Rodriguez",
      role: "Expectant Parents",
      avatar: "MR"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Client Stories</Badge>
          <h2 className="text-3xl md:text-5xl font-header tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Hear from families who celebrated their special moments with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md bg-[#FBF5F2]">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-primary opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mb-4 font-body">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-base font-body">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-body">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowersTestimonials;
