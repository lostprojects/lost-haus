import type { Metadata } from 'next'
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
import { businessSchema } from '@/components/seo/seo-schemas';

export const metadata: Metadata = {
  title: 'Bridal & Baby Showers | Somerhaus Cincinnati',
  description: 'Host your perfect bridal or baby shower in our enchanting 3,080 sq ft venue.',
  openGraph: {
    title: 'Bridal & Baby Showers | Somerhaus Cincinnati',
    description: 'Host your perfect bridal or baby shower in our enchanting 3,080 sq ft venue.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridal & Baby Showers | Somerhaus Cincinnati',
    description: 'Host your perfect bridal or baby shower in our enchanting 3,080 sq ft venue.',
  },
};


const Showers: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <PageLayout heroKey="showers" footerLogoType="clients">
      
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
    </>
  );
};

export default Showers;
