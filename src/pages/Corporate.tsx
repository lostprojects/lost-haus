
import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import UniversalHero from '@/components/shared/UniversalHero';
import CorporateValueProps from '@/components/corporate/CorporateValueProps';
import CorporateLayouts from '@/components/corporate/CorporateLayouts';
import CorporateAmenities from '@/components/corporate/CorporateAmenities';
import CorporatePricing from '@/components/corporate/CorporatePricing';
import CorporateTestimonials from '@/components/corporate/CorporateTestimonials';
import CorporateFAQ from '@/components/corporate/CorporateFAQ';
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';
import Seo from '@/components/seo/Seo';
import { businessSchema, organizationSchema } from '@/components/seo/seo-schemas';
import { LogoTicker } from '@/components/blocks/LogoTicker';
import { clientLogosGrayscale } from '@/data/clientLogos';




const Corporate = () => {
  useHoneyBook();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Corporate Event Venue in Cincinnati | Somerhaus"
        description="Host productive meetings and memorable company events in our stylish Over-the-Rhine space."
        schema={[businessSchema, organizationSchema]}
      />
      <Header />
      <main className="flex-grow">
        <UniversalHero pageKey="corporate" />
        <LogoTicker heading="Trusted By" logos={clientLogosGrayscale} />
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
      <Footer logoType="press" />
    </div>
  );
};


export default Corporate;
