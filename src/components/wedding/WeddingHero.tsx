
import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import the shared component
import { CalendarCheck, ArrowRight } from "lucide-react"; // Keep icon imports

const WeddingHero = () => {
  const heroImages = [
    { src: '/photo/haus-wedding-main.png', alt: 'Wedding at Somerhaus' },
    { src: '/photo/haus-wedding-2.png', alt: 'Wedding reception at Somerhaus' },
    { src: '/photo/haus-meeting.png', alt: 'Meeting at Somerhaus' },
    { src: '/photo/haus-party.png', alt: 'Party at Somerhaus' }
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
