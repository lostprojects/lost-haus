
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import ShowersHero from '@/components/showers/ShowersHero';
import VenueHighlights from '@/components/showers/VenueHighlights';
import ShowersPackages from '@/components/showers/ShowersPackages';
import ShowersGallery from '@/components/showers/ShowersGallery';
import ShowersTestimonials from '@/components/showers/ShowersTestimonials';
import ShowersPlanning from '@/components/showers/ShowersPlanning';
import PreferredVendors from '@/components/showers/PreferredVendors';
import ShowersFAQ from '@/components/showers/ShowersFAQ';
import { ShowersCTA } from '@/components/showers/ShowersCTA';
import ShowersContact from '@/components/showers/ShowersContact';

const Showers = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <ShowersHero />
      <VenueHighlights />
      <ShowersPackages />
      <ShowersGallery />
      <ShowersTestimonials />
      <ShowersPlanning />
      <PreferredVendors />
      <ShowersFAQ />
      <ShowersCTA />
      <ShowersContact />
      <Footerdemo />
    </main>
  );
};

export default Showers;
