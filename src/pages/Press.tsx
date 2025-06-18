import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Breadcrumb from '@/components/ui/breadcrumb';
import FAQSection from '@/components/shared/FAQSection';
import PressKitSection from '@/components/press/PressKitSection';
import { LogoTicker } from '@/components/blocks/LogoTicker';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';
import { getFAQsForPage } from '@/lib/faqUtils';

const Press: React.FC = () => {
  // Get FAQs from centralized data
  const faqData = getFAQsForPage('press', 3);

  return (
    <PageLayout footerLogoType="clients" hasHero={false}>
      <Seo
        title="Press & Media | Somerhaus Cincinnati"
        description="Media resources, press releases, and contact information for Cincinnati's premier event venue, Somerhaus."
        schema={businessSchema}
      />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Breadcrumb items={[
            { label: 'About', href: '/about' },
            { label: 'Press' }
          ]} />
          
          <div>
            <h1 className="text-3xl md:text-4xl font-header mb-4">
              In the Press
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              See what Cincinnati's top publications are saying about Somerhaus.
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-grow">
        <PressKitSection />
        <LogoTicker type="press" className="bg-white" />
        <FAQSection title="Media Inquiries" faqs={faqData} />
        <LogoTicker type="clients" className="bg-black" />
      </main>
    </PageLayout>
  );
};

export default Press;
