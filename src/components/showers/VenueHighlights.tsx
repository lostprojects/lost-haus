
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VenueHighlights = () => {
  const highlights = [
    {
      title: "Industrial-Chic Space",
      description: "3,080 sq ft of customizable space perfect for baby showers, bridal showers, and special celebrations.",
      icon: "✨"
    },
    {
      title: "Prime Location",
      description: "Located in the heart of Over-the-Rhine, Cincinnati's most vibrant neighborhood.",
      icon: "📍"
    },
    {
      title: "Versatile Setup",
      description: "Flexible layout options to accommodate both intimate gatherings and larger celebrations.",
      icon: "🪑"
    },
    {
      title: "Modern Amenities",
      description: "State-of-the-art sound system, designer lighting, and climate control for year-round comfort.",
      icon: "🎛️"
    },
    {
      title: "Picture-Perfect Backdrops",
      description: "Stunning architectural details and natural light for breathtaking photos.",
      icon: "📸"
    },
    {
      title: "Full-Service Bar",
      description: "Custom beverage packages with professional bartending service for your celebration.",
      icon: "🍹"
    }
  ];

  return (
    <section className="py-16 bg-[#FBF5F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Venue Features</Badge>
          <h2 className="font-header tracking-tight mb-4">Shower Venue Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Our meticulously designed space offers the perfect setting for your special celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-medium mb-2 font-header">{item.title}</h3>
                <p className="text-muted-foreground font-body">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueHighlights;
