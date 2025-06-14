
import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import the shared component
import { CalendarCheck, ArrowRight } from "lucide-react"; // Keep icon imports

const WeddingHero = () => {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Romantic wedding setup at Somerhaus"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Elegant wedding reception at Somerhaus"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Beautiful wedding ceremony at Somerhaus"
    }
  ];

  const buttons = [
    {
      text: "Schedule a Tour",
      icon: <CalendarCheck className="w-5 h-5" />,
      size: "lg" as const, // Ensure size is correctly typed
      // href: "/schedule-tour" // Example if it were a link
    },
    {
      text: "Get Your Custom Quote",
      icon: <ArrowRight className="w-5 h-5" />,
      size: "lg" as const,
      variant: "outline" as const, // Ensure variant is correctly typed
      className: "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white", // Maintain specific styling
      // href: "/custom-quote" // Example if it were a link
    }
  ];

  return (
    <HeroSection
      backgroundType="carousel"
      backgroundSources={heroImages}
      title="Where Cincinnati Love Stories Begin"
      subtitle="Tour our 3,080 sq ft industrial-chic venue and discover the perfect backdrop for your dream wedding."
      buttons={buttons}
      // Default class names and carousel options in HeroSection match the original component
      // Add contentContainerClassName="animate-fade-in" if animation is desired
    />
  );
};

export default WeddingHero;
