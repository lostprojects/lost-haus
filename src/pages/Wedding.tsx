
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import WeddingHero from '@/components/wedding/WeddingHero';
import VenueHighlights from '@/components/wedding/VenueHighlights';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import WeddingContact from '@/components/wedding/WeddingContact';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';

const Wedding = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <WeddingHero />
      <VenueHighlights />
      <WeddingPackages />
      <WeddingGallery />
      <WeddingTestimonials />
      <WeddingPlanning />
      <PreferredVendors />
      <WeddingFAQ />
      <WeddingCTA />
      <WeddingContact />
      <Footerdemo />
    </main>
  );
};

export default Wedding;
