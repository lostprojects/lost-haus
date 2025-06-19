
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import { Testimonials } from '@/components/ui/testimonials';
import { CTA } from '@/components/CTASection';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import Seo from '@/components/seo/Seo';
import { businessSchema, createFaqSchema } from '@/components/seo/seo-schemas';
import { getFAQsForPage } from '@/lib/faqUtils';
import { meetingsPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';




const Meetings = () => {

  // Get FAQs from centralized data
  const faqData = getFAQsForPage('meetings', 6);

  const meetingsFaqSchema = createFaqSchema(faqData);

  return (
    <PageLayout heroKey="meetings" footerLogoType="press" mainClassName="relative">
      <Seo
        title="Meeting Venue in Cincinnati | Somerhaus"
        description="Hold productive corporate gatherings in our flexible Over-the-Rhine space."
        schema={[businessSchema, meetingsFaqSchema]}
      />

      <ImageGallerySection />

      <PricingSection 
        title="Meeting Packages"
        description="Choose the perfect package for your business meeting needs"
        packages={meetingsPricing}
      />

      <Testimonials />

      <FAQSection
        title="Business Meetings FAQ"
        description="Everything you need to know about hosting your business meeting at Somerhaus"
        faqs={faqData}
        postAccordionContent={<FaqMoreAnswers />}
      />

      <CTA />
    </PageLayout>
  );
};

export default Meetings;
