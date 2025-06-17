import React from 'react';
import HeroSection from '@/components/shared/HeroSection';
import { TiltCard } from '@/components/ui/tilt-card';

const PressHero: React.FC = () => {
  const heroImages = [
    {
      src: '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png',
      alt: 'Event at Somerhaus',
    },
  ];

  return (
    <div className="relative">
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Press & Media"
        subtitle="See what the media is saying about Somerhaus and get in touch for coverage."
        buttons={[]}
      />

      {/* Downward Arrow */}
      <div
        className="absolute left-[49.5%] transform -translate-x-1/2 bottom-[24.5%] z-30"
        style={{ animation: 'bounce 3.5s infinite' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L12 20M12 20L18 14M12 20L6 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* CTA */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%] z-30">
        <TiltCard
          href="mailto:hello@somerhaus.com"
          className="group max-h-fit rounded-full bg-black p-2 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:bg-[#D9FF8A]"
        >
          <span className="text-xl text-white group-hover:text-black font-body">Media Inquiries</span>
        </TiltCard>
      </div>
    </div>
  );
};

export default PressHero; 