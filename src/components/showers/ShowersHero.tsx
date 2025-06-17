import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import the shared component
import { BookNowButton } from '@/components/ui/book-now-button';

const ShowersHero = () => {
  const heroImages = [
    { src: '/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.jpg', alt: 'Bridal or baby shower setup at Somerhaus' }
  ];

  return (
    <div className="relative">
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Celebrate Life's Special Moments"
        subtitle="Host your perfect baby or bridal shower in our enchanting 3,080 sq ft venue—book your tour today."
        buttons={[]}
      />

      {/* Downward Chevron Arrow, styled and positioned similar to homepage */}
      <div className="absolute left-[49.5%] transform -translate-x-1/2 bottom-[24.5%] z-30" style={{ animation: 'bounce 3.5s infinite' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* CTA TiltCard Button */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%] z-30">
        <BookNowButton />
      </div>
    </div>
  );
};

export default ShowersHero;
