'use client'

import React from 'react';
import PageLayout from '@/components/PageLayout';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import { Testimonials } from '@/components/ui/reviews';
import { CTA } from '@/components/CTASection';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import { createFaqSchema } from '@/components/seo/seo-schemas';
import { getFAQsForPage } from '@/lib/faqUtils';
import { dinnersPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';

const DinnersClient = () => {
  // Get FAQs from centralized data
  const faqData = getFAQsForPage('dinners', 6);
  const dinnersFaqSchema = createFaqSchema(faqData);

  return (
    <PageLayout heroKey="dinners" footerLogoType="press" mainClassName="relative">
      <ImageGallerySection />

      <PricingSection
        title="Dinner Event Packages"
        description="Choose the perfect package for your dining celebration"
        packages={dinnersPricing}
      />

      <Testimonials />

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

export default DinnersClient;