import React from 'react';
import Header from '@/components/ui/header';
import UniversalHero from '@/components/shared/UniversalHero';
import { Footer } from "@/components/ui/footer-section";
import VenueHighlights from '@/components/wedding/VenueHighlights';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';
import WeddingContact from '@/components/wedding/WeddingContact';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const MicroWeddings: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Micro Weddings | Somerhaus Cincinnati"
        description="Perfect intimate celebrations with your closest family and friends in our stunning Cincinnati venue."
        schema={businessSchema}
      />
      <Header />
      
      <UniversalHero pageKey="microweddings" />

      <main className="flex-grow">
        <VenueHighlights />
        <WeddingPackages />
        <WeddingGallery />
        <WeddingTestimonials />
        <WeddingPlanning />
        <PreferredVendors />
        <WeddingFAQ />
        <WeddingContact />
        <WeddingCTA />
      </main>
      
      <Footer logoType="clients" />
    </div>
  );
};

export default MicroWeddings;
