import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import UniversalHero from '@/components/shared/UniversalHero';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import Seo from '@/components/seo/Seo';
import { businessSchema, createFaqSchema } from '@/components/seo/seo-schemas';
import { getFAQsForPage } from '@/lib/faqUtils';
import { specialEventsPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';


const SpecialEvents = () => {

  // Get FAQs from centralized data
  const faqData = getFAQsForPage('specialevents', 6);

  const specialeventsFaqSchema = createFaqSchema(faqData);

  return (
    <PageLayout footerLogoType="clients" mainClassName="relative">
      <Seo
        title="Special Event Venue in Cincinnati | Somerhaus"
        description="Host milestone celebrations in our character-rich Cincinnati venue."
        schema={[businessSchema, specialeventsFaqSchema]}
      />

      <UniversalHero pageKey="specialevents" />

      <ImageGallerySection />

      <PricingSection 
        title="Special Event Packages"
        description="Choose the perfect package for your celebration"
        packages={specialEventsPricing}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Special Events FAQ"
        description="Everything you need to know about hosting your special event at Somerhaus"
        faqs={faqData}
        postAccordionContent={<FaqMoreAnswers />}
      />

      <CTA />
    </PageLayout>
  );
};

export default SpecialEvents;
