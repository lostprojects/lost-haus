
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PreferredVendors = () => {
  const vendorCategories = [
    {
      category: "Catering",
      vendors: [
        {
          name: "Elegant Eats Catering",
          description: "Specializing in gourmet finger foods and sweet treats perfect for showers.",
          website: "#"
        },
        {
          name: "Sweet Celebrations",
          description: "Custom cakes, cupcakes, and dessert displays for your special occasion.",
          website: "#"
        }
      ]
    },
    {
      category: "Decor & Floral",
      vendors: [
        {
          name: "Blooms & Balloons",
          description: "Stunning floral arrangements and balloon installations for your celebration.",
          website: "#"
        },
        {
          name: "Shower Chic Designs",
          description: "Custom decor packages including table settings, backdrops, and props.",
          website: "#"
        }
      ]
    },
    {
      category: "Photography",
      vendors: [
        {
          name: "Memorable Moments Photography",
          description: "Capturing the special moments of your celebration with a documentary style.",
          website: "#"
        },
        {
          name: "Shower Shots",
          description: "Specializing in baby and bridal shower photography with custom props.",
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
          <h2 className="text-3xl md:text-5xl font-header tracking-tight mb-4">Preferred Vendors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            We've partnered with Cincinnati's finest vendors to help make your celebration extraordinary.
          </p>
        </div>

        <div className="space-y-8">
          {vendorCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-header mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.vendors.map((vendor, i) => (
                  <Card key={i} className="border border-gray-100">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-medium mb-2 font-header">{vendor.name}</h4>
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
            Don't see what you're looking for? We're happy to work with your preferred vendors too!
          </p>
          <Button className="font-body">Contact for Vendor Inquiries</Button>
        </div>
      </div>
    </section>
  );
};

export default PreferredVendors;
