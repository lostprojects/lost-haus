import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

'use client';

const PreferredVendors = () => {
  const vendorCategories = [
    {
      category: "Catering & Food Service",
      vendors: [
        {
          name: "Corporate Cuisine Co.",
          description: "Professional catering specializing in business meetings and corporate events.",
          website: "#"
        },
        {
          name: "Executive Eats",
          description: "Gourmet breakfast, lunch, and coffee service for corporate gatherings.",
          website: "#"
        }
      ]
    },
    {
      category: "Audio Visual & Tech",
      vendors: [
        {
          name: "Cincinnati AV Solutions",
          description: "Complete audio visual setup for presentations and corporate meetings.",
          website: "#"
        },
        {
          name: "TechFlow Productions",
          description: "Live streaming, recording, and technical support for business events.",
          website: "#"
        }
      ]
    },
    {
      category: "Photography & Videography",
      vendors: [
        {
          name: "Corporate Focus Photography",
          description: "Professional event photography for meetings, conferences, and team building.",
          website: "#"
        },
        {
          name: "Business Media Productions",
          description: "Corporate videography and promotional content creation.",
          website: "#"
        }
      ]
    },
    {
      category: "Event Planning & Coordination",
      vendors: [
        {
          name: "Executive Event Planners",
          description: "Full-service corporate event planning and coordination services.",
          website: "#"
        },
        {
          name: "Professional Meetings Inc.",
          description: "Specialized in corporate retreats, conferences, and business gatherings.",
          website: "#"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Our Network</Badge>
          <h2 className="font-header tracking-tight mb-4">Preferred Corporate Vendors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            We've partnered with Cincinnati's finest business event professionals to ensure your corporate gathering exceeds expectations.
          </p>
        </div>

        <div className="space-y-8">
          {vendorCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-header mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.vendors.map((vendor, i) => (
                  <Card key={i} className="border border-gray-100 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2 font-header">{vendor.name}</h4>
                      <p className="text-muted-foreground mb-4 font-body">{vendor.description}</p>
                      <Button variant="outline" size="sm" className="gap-2 font-body">
                        Visit Website <ExternalLink className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-muted-foreground font-body">
            Need specialized vendors for your corporate event? We're happy to help you find the perfect partners!
          </p>
          <Button className="font-body">
            <a href="/event-inquiry">Contact for Vendor Recommendations</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreferredVendors; 