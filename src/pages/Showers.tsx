import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import UniversalHero from '@/components/shared/UniversalHero';
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
import { businessSchema } from '@/components/seo/seo-schemas';

const Showers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Bridal & Baby Showers | Somerhaus Cincinnati"
        description="Host your perfect bridal or baby shower in our enchanting 3,080 sq ft venue."
        schema={businessSchema}
      />
      <Header />
      
      <UniversalHero pageKey="showers" />

      <main className="flex-grow">
        <VenueHighlights />
        <ShowersPackages />
        <ShowersGallery />
        <ShowersPlanning />
        <ShowersTestimonials />
        <PreferredVendors />
        <ShowersFAQ />
        <ShowersContact />
        <ShowersCTA />
      </main>
      
      <Footer logoType="clients" />
    </div>
  );
};

export default Showers;
