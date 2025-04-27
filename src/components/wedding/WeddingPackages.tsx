
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check } from "lucide-react";

const WeddingPackages = () => {
  const packages = [
    {
      name: "Off-Peak Season",
      price: "$3,500",
      popular: false,
      features: [
        "Access to entire 3,080 sq ft venue",
        "Tables and chairs for up to 80 guests",
        "Basic lighting package",
        "Sound system with wireless microphone",
        "Setup and tear-down assistance",
        "Bridal suite access"
      ],
      description: "Perfect for weddings during our off-peak months. Enjoy our beautiful venue at a special rate.",
      seasons: "January, February, March, November"
    },
    {
      name: "Peak Season",
      price: "$5,500",
      popular: true,
      features: [
        "Access to entire 3,080 sq ft venue",
        "Tables and chairs for up to 80 guests",
        "Premium lighting package",
        "Sound system with wireless microphone",
        "Setup and tear-down assistance",
        "Extended bridal suite access",
        "Day-of coordinator assistance"
      ],
      description: "Our most popular package for weddings during the peak months of the year.",
      seasons: "April through October, December"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">Wedding Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Choose the perfect package for your special day at Cincinnati's most enchanting venue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative rounded-xl overflow-hidden border ${pkg.popular ? 'border-primary shadow-lg' : 'border-gray-200 shadow-sm'} bg-white`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="m-4 py-1.5 px-3">Most Popular</Badge>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground mb-1">starting at</span>
                </div>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{pkg.seasons}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full gap-2">
                  Check Available Dates <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-muted-foreground">
          <p>* All packages include 10 hours of venue access (2pm - 12am)</p>
          <p>* Custom packages available upon request</p>
        </div>
      </div>
    </section>
  );
};

export default WeddingPackages;
