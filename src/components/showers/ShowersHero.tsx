
import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import the shared component
import { CalendarCheck, ArrowRight } from "lucide-react"; // Keep icon imports

const ShowersHero = () => {
  const heroImages = [
    {
      src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
      alt: "Baby shower setup at Somerhaus"
    },
    {
      src: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png",
      alt: "Bridal shower celebration at Somerhaus"
    },
    {
      src: "/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png",
      alt: "Elegant shower party at Somerhaus"
    }
  ];

  const buttons = [
    {
      text: "Schedule a Tour",
      icon: <CalendarCheck className="w-5 h-5" />,
      size: "lg" as const,
    },
    {
      text: "Get Your Custom Quote",
      icon: <ArrowRight className="w-5 h-5" />,
      size: "lg" as const,
      variant: "outline" as const,
      className: "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white",
    }
  ];

  return (
    <HeroSection
      backgroundType="carousel"
      backgroundSources={heroImages}
      title="Celebrate Life's Special Moments"
      subtitle="Host your perfect baby shower, bridal shower, or celebration in our enchanting 3,080 sq ft industrial-chic venue in Over-the-Rhine."
      buttons={buttons}
      // Default class names and carousel options match
      // Add contentContainerClassName="animate-fade-in" if animation is desired
    />
  );
};

export default ShowersHero;
