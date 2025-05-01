
import React from 'react';
import PricingSection from '@/components/shared/PricingSection'; // Import shared section
import { PricingCardProps } from '@/components/shared/PricingCard'; // Import card props type
import { ArrowRight, Calendar } from "lucide-react"; // Keep icon imports

const WeddingPackages = () => {
  // Define package data conforming to PricingCardProps
  const packagesData: PricingCardProps[] = [
    {
      name: "Off-Peak Season",
      price: "$3,500",
      priceSuffix: "starting at",
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
      preFeaturesContent: ( // Use preFeaturesContent for the seasons info
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>January, February, March, November</span>
        </div>
      ),
      buttonText: "Check Available Dates",
      buttonIcon: <ArrowRight className="w-4 h-4" />,
    },
    {
      name: "Peak Season",
      price: "$5,500",
      priceSuffix: "starting at",
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
      preFeaturesContent: (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>April through October, December</span>
        </div>
      ),
      buttonText: "Check Available Dates",
      buttonIcon: <ArrowRight className="w-4 h-4" />,
    }
  ];

  // Define footer content
  const footer = (
    <>
      <p>* All packages include 10 hours of venue access (2pm - 12am)</p>
      <p>* Custom packages available upon request</p>
    </>
  );

  return (
    <PricingSection
      title="Wedding Packages"
      description="Choose the perfect package for your special day at Cincinnati's most enchanting venue."
      packages={packagesData}
      footerContent={footer}
      // Default class names match the original styling
    />
  );
};

export default WeddingPackages;
