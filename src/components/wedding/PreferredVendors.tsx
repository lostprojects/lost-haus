
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PreferredVendors = () => {
  const categories = [
    {
      name: "Catering",
      vendors: [
        { name: "Eat Well Catering", image: "/placeholder.svg" },
        { name: "Conscious Kitchen", image: "/placeholder.svg" },
      ]
    },
    {
      name: "Photography",
      vendors: [
        { name: "Capture Moments", image: "/placeholder.svg" },
        { name: "Forever Frames", image: "/placeholder.svg" },
      ]
    },
    {
      name: "Florists",
      vendors: [
        { name: "Blooming Beauty", image: "/placeholder.svg" },
        { name: "Green Love Florals", image: "/placeholder.svg" },
      ]
    },
    {
      name: "Music",
      vendors: [
        { name: "Harmony DJs", image: "/placeholder.svg" },
        { name: "The String Quartet", image: "/placeholder.svg" },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">Our Preferred Vendors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            We've partnered with Cincinnati's finest wedding professionals to ensure your day is perfect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="mb-4">
                <Badge variant="outline" className="text-sm font-medium">{category.name}</Badge>
              </div>
              <Card className="border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {category.vendors.map((vendor, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                          <img 
                            src={vendor.image} 
                            alt={vendor.name} 
                            className="h-12 w-auto object-contain" 
                          />
                        </div>
                        <p className="font-medium">{vendor.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreferredVendors;
