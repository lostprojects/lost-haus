
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ShowersPlanning = () => {
  const planningSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Schedule a tour of our venue and discuss your vision, date, and guest count with our event coordinator.",
      icon: "📝"
    },
    {
      step: "2",
      title: "Choose Your Package",
      description: "Select the perfect package that meets your celebration needs and customize as needed.",
      icon: "📋"
    },
    {
      step: "3",
      title: "Vendor Selection",
      description: "Work with our recommended vendors or bring your own to create your perfect celebration.",
      icon: "👥"
    },
    {
      step: "4",
      title: "Design & Planning",
      description: "Finalize your floor plan, decor selections, and timeline with our dedicated coordinator.",
      icon: "🎨"
    },
    {
      step: "5",
      title: "Final Walkthrough",
      description: "Review all details with our team 2-4 weeks before your event to ensure everything is perfect.",
      icon: "✓"
    },
    {
      step: "6",
      title: "Celebrate!",
      description: "Relax and enjoy your special day while our team handles all the details from setup to cleanup.",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-16 bg-[#FBF5F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Planning Process</Badge>
          <h2 className="font-header tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Our streamlined planning process makes organizing your perfect shower stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planningSteps.map((step, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                    {step.step}
                  </div>
                  <h3 className="font-medium font-header">{step.title}</h3>
                </div>
                <p className="text-muted-foreground font-body">{step.description}</p>
                <div className="text-2xl mt-4">{step.icon}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowersPlanning;
