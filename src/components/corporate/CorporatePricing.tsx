
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CorporatePricing = () => {
  const packages = [
    {
      name: "Half-Day Meeting",
      price: "$800",
      duration: "4 hours",
      features: [
        "Meeting space setup",
        "Basic A/V equipment",
        "High-speed WiFi",
        "Water service",
        "Flipcharts & markers",
        "On-site coordinator"
      ],
      isPopular: false
    },
    {
      name: "Full-Day Meeting",
      price: "$1,200",
      duration: "8 hours",
      features: [
        "Meeting space setup",
        "Complete A/V package",
        "High-speed WiFi",
        "Water & coffee service",
        "Flipcharts & markers",
        "Lunch coordination",
        "On-site coordinator"
      ],
      isPopular: true
    },
    {
      name: "Evening Event",
      price: "$1,500",
      duration: "Sunday-Thursday",
      features: [
        "Exclusive venue access",
        "Complete A/V package",
        "High-speed WiFi",
        "Bar setup ($500 minimum)",
        "Flexible floor plan",
        "Event coordinator",
        "Security personnel"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-header mb-4">Corporate Packages</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Transparent pricing options designed to provide excellent value for your business events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden border ${pkg.isPopular ? 'border-primary shadow-lg' : 'border-gray-200'}`}>
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-body">
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-header">{pkg.name}</CardTitle>
                <p className="text-gray-500 font-body">{pkg.duration}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-header">{pkg.price}</span>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center font-body">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className={`w-full font-body ${pkg.isPopular ? '' : 'bg-black hover:bg-black/80'}`}>
                  Book This Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 font-body">
            Need a custom solution for your event? We can create a tailored package.
          </p>
          <Button variant="outline" className="font-body">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporatePricing;
