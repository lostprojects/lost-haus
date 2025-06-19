import React from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import FAQSection from '@/components/FAQSection';
import PressKitSection from '@/components/PressKitSection';
import { LogoTicker } from '@/components/LogoTicker';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';
import { getFAQsForPage } from '@/lib/faqUtils';

const Press: React.FC = () => {
  // Get FAQs from centralized data
  const faqData = getFAQsForPage('press', 3);

  return (
    <PageLayout footerLogoType="clients">
      <Seo
        title="Press & Media | Somerhaus Cincinnati"
        description="Media resources, press releases, and contact information for Cincinnati's premier event venue, Somerhaus."
        schema={businessSchema}
      />
      
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className={`${STANDARD_CONTAINER_CLASSES} space-y-8`}>
          <div>
            <h1 className="font-header mb-4">
              In the Press
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              See what Cincinnati's top publications are saying about Somerhaus.
            </p>
          </div>
        </div>
      </section>
      
      <PressKitSection />
      <LogoTicker type="press" className="bg-white" />
      <FAQSection title="Media Inquiries" faqs={faqData} />
      <LogoTicker type="clients" className="bg-black" />
    </PageLayout>
  );
};

export default Press;
