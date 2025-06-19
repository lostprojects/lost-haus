import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Heart, Star } from "lucide-react";

interface VenueHighlightsProps {
  badgeText?: string;
}

const VenueHighlights: React.FC<VenueHighlightsProps> = ({ 
  badgeText = "Venue Features"
}) => {
  const highlights = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Prime Location",
      description: "Located in the heart of Cincinnati's historic Over-the-Rhine district, offering a unique urban wedding experience."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Generous Capacity",
      description: "Accommodate up to 130 guests, with tables and chairs for up to 80 seated guests."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Magical Atmosphere",
      description: "Interesting furnishings and art from around the world, abundant greenery, and eclectic design pieces."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "5-Star Experience",
      description: "Dedicated staff committed to making your wedding journey as seamless as possible."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">{badgeText}</Badge>
          <h2 className="font-header tracking-tight mb-4">Venue Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Discover what makes Somerhaus the most enchanting wedding venue in Cincinnati.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueHighlights;
