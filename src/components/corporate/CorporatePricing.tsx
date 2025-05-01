
import React from 'react';
import PricingSection from '@/components/shared/PricingSection'; // Import shared section
import { PricingCardProps } from '@/components/shared/PricingCard'; // Import card props type
import { Button } from '@/components/ui/button'; // Keep Button import for footer
import { Check } from 'lucide-react'; // Keep Check import

const CorporatePricing = () => {
  // Define package data conforming to PricingCardProps
  const packagesData: PricingCardProps[] = [
    {
      name: "Half-Day Meeting",
      price: "$800",
      // No priceSuffix needed
      features: [
        "Meeting space setup",
        "Basic A/V equipment",
        "High-speed WiFi",
        "Water service",
        "Flipcharts & markers",
        "On-site coordinator"
      ],
      preFeaturesContent: ( // Use preFeaturesContent for duration
        <p className="text-gray-500 font-body">4 hours</p>
      ),
      buttonText: "Book This Package",
      buttonProps: { className: "font-body bg-black hover:bg-black/80" }, // Specific style for non-popular
      popular: false, // Map 'isPopular' to 'popular'
      cardClassName: "font-body", // Apply base font
    },
    {
      name: "Full-Day Meeting",
      price: "$1,200",
      features: [
        "Meeting space setup",
        "Complete A/V package",
        "High-speed WiFi",
        "Water & coffee service",
        "Flipcharts & markers",
        "Lunch coordination",
        "On-site coordinator"
      ],
      preFeaturesContent: (
        <p className="text-gray-500 font-body">8 hours</p>
      ),
      buttonText: "Book This Package",
      buttonProps: { className: "font-body" }, // Default style for popular
      popular: true,
      popularText: "Most Popular",
      // Replicate simple badge style via className prop in PricingCard
      badgeClassName: "bg-primary text-white px-3 py-1 text-sm font-body rounded-md m-0 absolute top-0 right-0", // Adjust styling as needed
      cardClassName: "font-body",
    },
    {
      name: "Evening Event",
      price: "$1,500",
      features: [
        "Exclusive venue access",
        "Complete A/V package",
        "High-speed WiFi",
        "Bar setup ($500 minimum)",
        "Flexible floor plan",
        "Event coordinator",
        "Security personnel"
      ],
      preFeaturesContent: (
        <p className="text-gray-500 font-body">Sunday-Thursday</p>
      ),
      buttonText: "Book This Package",
      buttonProps: { className: "font-body bg-black hover:bg-black/80" },
      popular: false,
      cardClassName: "font-body",
    }
  ];

  // Define footer content
  const footer = (
    <>
      <p className="text-gray-600 mb-4 font-body">
        Need a custom solution for your event? We can create a tailored package.
      </p>
      <Button variant="outline" className="font-body">
        Request Custom Quote
      </Button>
    </>
  );

  return (
    <PricingSection
      title="Corporate Packages"
      description="Transparent pricing options designed to provide excellent value for your business events."
      packages={packagesData}
      footerContent={footer}
      sectionClassName="py-20 bg-gray-50" // Override section style
      titleClassName="text-3xl md:text-4xl font-header mb-4" // Override title style
      descriptionClassName="max-w-2xl mx-auto text-lg text-gray-600 font-body" // Override description style
      gridClassName="grid grid-cols-1 md:grid-cols-3 gap-8" // Override grid layout
      footerClassName="mt-12 text-center" // Override footer margin/alignment
    />
  );
};

export default CorporatePricing;
