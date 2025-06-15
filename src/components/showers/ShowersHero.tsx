
import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import the shared component
import { CalendarCheck, ArrowRight } from "lucide-react"; // Keep icon imports

const ShowersHero = () => {
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
      subtitle="Host your perfect baby or bridal shower in our enchanting 3,080 sq ft venue—book your tour today."
      buttons={buttons}
      // Default class names and carousel options match
      // Add contentContainerClassName="animate-fade-in" if animation is desired
    />
  );
};

export default ShowersHero;
