
import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import shared component
import { Button } from '@/components/ui/button'; // Keep Button import if needed elsewhere, or remove if only used via HeroSection
import { CalendarCheck, Download } from 'lucide-react'; // Keep icon imports

const CorporateHero = () => {
  const heroImage = [
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Corporate event setup at Somerhaus" // Added alt text
    }
  ];

  const buttons = [
    {
      text: "Request Corporate Proposal",
      icon: <CalendarCheck className="w-5 h-5" />,
      size: "lg" as const,
      // Add href if needed, e.g., href: "/corporate-proposal"
    },
    {
      text: "Download Info Package",
      icon: <Download className="w-5 h-5" />,
      size: "lg" as const,
      variant: "outline" as const,
      className: "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white",
      // Add href if needed, e.g., href: "/downloads/corporate-package.pdf", download: true
    }
  ];

  return (
    <HeroSection
      backgroundType="static"
      backgroundSources={heroImage}
      overlayClassName="absolute inset-0 bg-black/40 z-10" // Specific overlay
      title="Elevate Your Business Gatherings"
      subtitle="A unique 3,080 sq ft industrial-chic space in Over-the-Rhine, designed for productive and memorable corporate events."
      buttons={buttons}
      // Use default section, title, subtitle classes as they match
      contentContainerClassName="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center" // Specific content layout
    />
  );
};

export default CorporateHero;
