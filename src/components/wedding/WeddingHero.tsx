
import React from 'react';
import HeroSection from '@/components/shared/HeroSection'; // Import the shared component
import { BookNowButton } from '@/components/ui/book-now-button';

const WeddingHero = () => {
  const heroImages = [
    { src: '/photo/haus-wedding-main.png', alt: 'Wedding at Somerhaus' },
    { src: '/photo/haus-wedding-2.png', alt: 'Wedding reception at Somerhaus' },
    { src: '/photo/haus-meeting.png', alt: 'Meeting at Somerhaus' },
    { src: '/photo/haus-party.png', alt: 'Party at Somerhaus' }
  ];

  // Buttons handled separately with BookNowButton

  return (
    <div className="relative">
      <HeroSection
        backgroundType="carousel"
        backgroundSources={heroImages}
        title="Where Cincinnati Love Stories Begin"
        subtitle="Tour our 3,080 sq ft industrial-chic venue and discover the perfect backdrop for your dream wedding."
        buttons={[]}
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%] z-30">
        <BookNowButton />
      </div>
    </div>
  );
};

export default WeddingHero;
