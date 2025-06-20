'use client';


import React from 'react';
import PricingSection from '@/components/PricingSection'; // Import shared section
import { PricingCardProps } from '@/components/PricingCard'; // Import card props type
import { Badge } from "@/components/ui/badge"; // Keep Badge import
import { Check } from "lucide-react"; // Keep Check import

const ShowersPackages = () => {
  // Define package data conforming to PricingCardProps
  const packagesData: PricingCardProps[] = [
    {
      name: "Essential",
      price: "$1,500",
      priceSuffix: "base package",
      description: "Perfect for intimate baby or bridal showers.",
      features: [
        "4 hours of venue access",
        "Up to 50 guests",
        "Basic decor setup",
        "Sound system access",
        "Tables and chairs included",
        "On-site coordinator"
      ],
      buttonProps: { variant: "outline", className: "font-body" },
      popular: false, // Use 'popular' prop, map 'highlighted' to it
      cardClassName: "font-body", // Apply font-body to card if needed, or adjust PricingCard
    },
    {
      name: "Premium",
      price: "$2,800",
      priceSuffix: "base package",
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
      buttonProps: { variant: "default", className: "font-body" },
      popular: true, // Map 'highlighted' to 'popular'
      popularText: "Most Popular", // Or keep original badge text if different
      cardClassName: "scale-105 font-body", // Apply scale and font
    },
    {
      name: "Luxe",
      price: "$3,900",
      priceSuffix: "base package",
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
      ],
      buttonProps: { variant: "outline", className: "font-body" },
      popular: false,
      cardClassName: "font-body",
    }
  ];

  // Define footer content
  const footer = (
    <p className="font-body"> {/* Apply font-body here */}
      All packages can be customized to suit your specific shower needs. Contact us for custom quotes.
    </p>
  );

  // Define pre-title content (the badge)
  const preTitle = (
    <Badge className="mb-4 font-body">Celebration Packages</Badge>
  );

  return (
    <PricingSection
      title="Shower Packages"
      description="Thoughtfully designed packages to make your special celebration unforgettable."
      packages={packagesData}
      preTitleContent={preTitle} // Pass the badge content here
      footerContent={footer}
      sectionClassName="py-16 bg-white" // Override section background
      titleClassName="text-3xl md:text-5xl font-header tracking-tight mb-4" // Override title style
      gridClassName="grid grid-cols-1 md:grid-cols-3 gap-8" // Override grid layout
      footerClassName="text-center mt-10 text-muted-foreground" // Keep default footer style
    />
  );
};

export default ShowersPackages;
