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
import { dinnersPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';


const Dinners = () => {

  // Get FAQs from centralized data
  const faqData = getFAQsForPage('dinners', 6);

  const dinnersFaqSchema = createFaqSchema(faqData);

  return (
    <PageLayout footerLogoType="press" mainClassName="relative">
      <Seo
        title="Dinner Event Venue in Cincinnati | Somerhaus"
        description="Host rehearsal dinners and celebrations in our industrial-chic Cincinnati venue."
        schema={[businessSchema, dinnersFaqSchema]}
      />

      <UniversalHero pageKey="dinners" />

      <ImageGallerySection />

      <PricingSection
        title="Dinner Event Packages"
        description="Choose the perfect package for your dining celebration"
        packages={dinnersPricing}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Dinner Events FAQ"
        description="Everything you need to know about hosting your dinner event at Somerhaus"
        faqs={faqData}
        postAccordionContent={<FaqMoreAnswers />}
      />

      <CTA />
    </PageLayout>
  );
};

export default Dinners;
