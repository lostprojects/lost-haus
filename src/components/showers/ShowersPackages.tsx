
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ShowersPackages = () => {
  const packages = [
    {
      name: "Essential",
      price: "$1,500",
      description: "Perfect for intimate baby or bridal showers.",
      features: [
        "4 hours of venue access",
        "Up to 50 guests",
        "Basic decor setup",
        "Sound system access",
        "Tables and chairs included",
        "On-site coordinator"
      ]
    },
    {
      name: "Premium",
      price: "$2,800",
      description: "Our most popular package for memorable celebrations.",
      features: [
        "6 hours of venue access",
        "Up to 80 guests",
        "Enhanced decor package",
        "Sound system & lighting",
        "Tables, chairs & linens",
        "On-site coordinator",
        "Beverage station setup",
        "Photo backdrop area"
      ],
      highlighted: true
    },
    {
      name: "Luxe",
      price: "$3,900",
      description: "The ultimate all-inclusive shower celebration.",
      features: [
        "8 hours of venue access",
        "Up to 100 guests",
        "Premium decor collection",
        "Full A/V setup with tech",
        "Complete furniture package",
        "Dedicated event manager",
        "Custom beverage package",
        "Photo booth with props",
        "Floral centerpieces"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Celebration Packages</Badge>
          <h2 className="text-3xl md:text-5xl font-header tracking-tight mb-4">Shower Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Thoughtfully designed packages to make your special celebration unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`border ${pkg.highlighted ? 'border-primary shadow-lg scale-105' : 'border-gray-200'}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-header">{pkg.name}</CardTitle>
                <CardDescription className="font-body">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold font-header">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground font-body">base package</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 font-body">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={pkg.highlighted ? "default" : "outline"} 
                  className="w-full font-body"
                >
                  Choose {pkg.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-muted-foreground font-body">
            All packages can be customized to suit your specific shower needs. Contact us for custom quotes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowersPackages;
