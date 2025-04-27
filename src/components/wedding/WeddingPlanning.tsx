
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Users, Heart, BookOpen } from "lucide-react";

const WeddingPlanning = () => {
  const steps = [
    {
      icon: <CalendarCheck className="h-10 w-10 text-primary" />,
      title: "1. Schedule a Tour",
      description: "Start by visiting Somerhaus to experience our enchanting venue firsthand. Our team will show you around and answer all your questions."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "2. Reserve Your Date",
      description: "Once you've fallen in love with Somerhaus, secure your preferred wedding date with a deposit and signed agreement."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "3. Plan Your Details",
      description: "Work with our experienced team to plan your wedding details, from layout to vendors, timeline, and everything in between."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "4. Celebrate Your Day",
      description: "Arrive and celebrate your special day in our magical space, while we take care of all the logistics behind the scenes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">Your Wedding Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            From your first visit to your wedding day, we make the planning process seamless.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Steps Connection Line */}
          <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16 items-center`}>
                <div className="relative md:w-1/2 text-center">
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 relative z-10">
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="gap-2">
            Begin Your Journey <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlanning;
