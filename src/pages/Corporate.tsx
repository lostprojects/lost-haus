
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import CorporateHero from '@/components/corporate/CorporateHero';
import CorporateValueProps from '@/components/corporate/CorporateValueProps';
import CorporateLayouts from '@/components/corporate/CorporateLayouts';
import CorporateAmenities from '@/components/corporate/CorporateAmenities';
import CorporatePricing from '@/components/corporate/CorporatePricing';
import CorporateTestimonials from '@/components/corporate/CorporateTestimonials';
import CorporateFAQ from '@/components/corporate/CorporateFAQ';
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';
import Seo from '@/components/seo/Seo';
import { Logos3 } from '@/components/blocks/logos3';

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
    addressCountry: "US"
  }
};

const clientLogos = [{
  id: "client-1",
  description: "University of Cincinnati",
  image: "/client-logos/University-of-Cincinnati-Logo.png",
  className: "grayscale"
}, {
  id: "client-2",
  description: "Procter & Gamble",
  image: "/client-logos/P&G-logo.png",
  className: "grayscale"
}, {
  id: "client-3",
  description: "Fischer Homes",
  image: "/client-logos/fischer-homes-logo.jpg",
  className: "grayscale"
}, {
  id: "client-4",
  description: "City of Cincinnati",
  image: "/client-logos/cincinnati-logo.png",
  className: "grayscale"
}, {
  id: "client-5",
  description: "Instacart",
  image: "/client-logos/instacart-logo.png",
  className: "grayscale"
}, {
  id: "client-6",
  description: "Artworks",
  image: "/client-logos/artworks-logo.png",
  className: "grayscale"
}, {
  id: "client-7",
  description: "CincyTech",
  image: "/client-logos/cincytech-logo.png",
  className: "grayscale"
}, {
  id: "client-8",
  description: "Black Tech Week",
  image: "/client-logos/black-tech-week.png",
  className: "grayscale"
}, {
  id: "client-9",
  description: "Scripps",
  image: "/client-logos/Scripps-logo.png",
  className: "grayscale"
}, {
  id: "client-10",
  description: "Xavier University",
  image: "/client-logos/xavier-university-logo.png",
  className: "grayscale"
}, {
  id: "client-11",
  description: "North American Properties",
  image: "/client-logos/north-american.png",
  className: "grayscale"
}, {
  id: "client-12",
  description: "Kroger",
  image: "/client-logos/kroger-logo.png",
  className: "grayscale"
}, {
  id: "client-13",
  description: "Alzheimer's Foundation",
  image: "/client-logos/Alzheimers-Foundation-logo.png",
  className: "grayscale"
}, {
  id: "client-14",
  description: "Cincinnati Chamber",
  image: "/client-logos/cincinnati-chamber-logo.png",
  className: "grayscale"
}, {
  id: "client-15",
  description: "OTR Film Festival",
  image: "/client-logos/otr-film-festival-logo.png",
  className: "grayscale"
}];

const Corporate = () => {
  useHoneyBook();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Corporate Event Venue in Cincinnati | Somerhaus"
        description="Host productive meetings and memorable company events in our stylish Over-the-Rhine space."
        schema={businessSchema}
      />
      <Header />
      <main className="flex-grow">
        <CorporateHero />
        <Logos3 heading="Trusted By" logos={clientLogos} />
        <CorporateValueProps />
        <CorporateLayouts />
        <CorporateAmenities />
        <CorporatePricing />
        <CorporateTestimonials />
        <CorporateFAQ />
        {/* Honeybook Embed Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border-none">
          <h2 className="text-2xl font-bold mb-4 text-center">Plan Your Corporate Event</h2>
          <p className="text-gray-600 mb-6 text-center">Fill out the form below to get started.</p>
          <HoneyBookForm placementId="7" />
        </div>
      </main>
      <Footerdemo />
    </div>
  );
};


export default Corporate;
