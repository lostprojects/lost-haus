
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
import Seo from '@/components/seo/Seo';

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  telephone: "513-902-1415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US",
  },
};

const Showers = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title="Showers Venue in Cincinnati | Somerhaus"
        description="Celebrate bridal and baby showers in our stylish Over-the-Rhine space."
        schema={businessSchema}
      />
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
