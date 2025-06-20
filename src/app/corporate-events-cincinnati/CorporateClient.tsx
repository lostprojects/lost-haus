'use client'

import PageLayout from '@/components/PageLayout';
import CorporateValueProps from '@/components/corporate/CorporateValueProps';
import CorporateAmenities from '@/components/corporate/CorporateAmenities';
import CorporatePricing from '@/components/corporate/CorporatePricing';
import CorporateTestimonials from '@/components/corporate/CorporateTestimonials';
import CorporateFAQ from '@/components/corporate/CorporateFAQ';
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/HoneyBookForm';

const CorporateClient = () => {
  useHoneyBook();

  return (
    <PageLayout heroKey="corporate" footerLogoType="press">
      <CorporateValueProps badgeText="Business Benefits" />
      <CorporateAmenities badgeText="Professional Amenities" />
      <CorporatePricing />
      <CorporateTestimonials badgeText="Business Reviews" />
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

export default CorporateClient;