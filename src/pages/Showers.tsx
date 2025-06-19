import React from 'react';
import PageLayout from '@/components/PageLayout';
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
    <PageLayout heroKey="showers" footerLogoType="clients">
      <Seo
        title="Bridal & Baby Showers | Somerhaus Cincinnati"
        description="Host your perfect bridal or baby shower in our enchanting 3,080 sq ft venue."
        schema={businessSchema}
      />
        <VenueHighlights />
        <ShowersPackages />
        <ShowersGallery />
        <ShowersPlanning />
        <ShowersTestimonials />
        <PreferredVendors />
        <ShowersFAQ />
        <ShowersContact />
        <ShowersCTA />
    </PageLayout>
  );
};

export default Showers;
