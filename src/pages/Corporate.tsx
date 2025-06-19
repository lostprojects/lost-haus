import React from 'react';
import PageLayout from '@/components/PageLayout';
import CorporateValueProps from '@/components/corporate/CorporateValueProps';
import CorporateLayouts from '@/components/corporate/CorporateLayouts';
import CorporateAmenities from '@/components/corporate/CorporateAmenities';
import CorporatePricing from '@/components/corporate/CorporatePricing';
import CorporateTestimonials from '@/components/corporate/CorporateTestimonials';
import PreferredVendors from '@/components/corporate/PreferredVendors';
import CorporateFAQ from '@/components/corporate/CorporateFAQ';
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/HoneyBookForm';
import Seo from '@/components/seo/Seo';
import { businessSchema, organizationSchema } from '@/components/seo/seo-schemas';

const Corporate = () => {
  useHoneyBook();

  return (
    <PageLayout heroKey="corporate" footerLogoType="press">
      <Seo
        title="Corporate Event Venue in Cincinnati | Somerhaus"
        description="Host productive meetings and memorable company events in our stylish Over-the-Rhine space."
        schema={[businessSchema, organizationSchema]}
      />
      
      <CorporateValueProps badgeText="Business Benefits" />
      <CorporateLayouts badgeText="Meeting Setups" />
      <CorporateAmenities badgeText="Professional Amenities" />
      <CorporatePricing />
      <CorporateTestimonials badgeText="Business Reviews" />
      <PreferredVendors />
      <CorporateFAQ />
      
      {/* Honeybook Embed Form */}
      <div className="bg-white p-6 rounded-lg shadow-md border-none">
        <h2 className="font-bold mb-4 text-center">Plan Your Corporate Event</h2>
        <p className="text-gray-600 mb-6 text-center">Fill out the form below to get started.</p>
        <HoneyBookForm placementId="7" />
      </div>
    </PageLayout>
  );
};

export default Corporate;
