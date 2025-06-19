import React from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import { LogoTicker } from '@/components/LogoTicker';
import { clientLogos } from '@/data/clientLogos';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';
import PricingSection from '@/components/PricingSection';
import BarCostCalculator from '@/components/BarCostCalculator';
import FAQSection from '@/components/FAQSection';
import { getFAQsForPage } from '@/lib/faqUtils';
import { Badge } from "@/components/ui/badge";
import { createFaqSchema } from '@/components/seo/seo-schemas';
import { CTA } from '@/components/CTASection';

const BarPackages = () => {
  const barFaqs = getFAQsForPage('bar');
  
  return (
    <PageLayout footerLogoType="clients">
      <Seo
        title="Bar Packages | Somerhaus Cincinnati Event Venue"
        description="Signature cocktails, curated wine, beer. Choose a tier or let us customize your pour."
        schema={[businessSchema, createFaqSchema(barFaqs)]}
      />
      
      <section className="pt-8 pb-4 md:pt-12 md:pb-4">
        <div className={`${STANDARD_CONTAINER_CLASSES} space-y-8`}>
          <div>
            <h1 className="font-header mb-4">
              Bar Packages
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Three tiers, one unforgettable bar experience—pick the level that matches your vibe, or <a href="/contact" className="text-blue-600 underline cursor-pointer">ask us</a> to craft something custom.
            </p>
          </div>
        </div>
      </section>

      <PricingSection
        title=""
        sectionClassName="pt-0 pb-8 md:pt-0 md:pb-8"
        containerClassName={STANDARD_CONTAINER_CLASSES}
        gridClassName="grid grid-cols-1 md:grid-cols-3 gap-8"
        packages={[
          {
            name: 'Tier 1',
            price: '$45',
            priceSuffix: 'per guest',
            popular: true,
            features: [
              '3 beer selections, 3 wine selections, 1 seltzer',
              "8 premium spirits inc. Tito's & Maker's Mark",
              'Custom Cocktail: Margarita Three Ways',
              'Welcome Champagne toast',
              'Soft drinks, mixers & garnishes',
              '3 hours of service (add hrs $9/guest)' ,
            ],
            hideButton: true,
          },
          {
            name: 'Tier 2',
            price: '$35',
            priceSuffix: 'per guest',
            features: [
              '3 beer selections, 3 wine selections',
              '5 spirits inc. Finlandia & Cruzan',
              'Soft drinks, mixers & garnishes',
              '3 hours of service (add hrs $7/guest)',
            ],
            cardClassName: 'border-none shadow-none',
            hideButton: true,
          },
          {
            name: 'Tier 3',
            price: '$25',
            priceSuffix: 'per guest',
            features: [
              '3 beer selections, 3 wine selections',
              'Soft drinks included',
              '3 hours of service (add hrs $7/guest)',
            ],
            cardClassName: 'border-none shadow-none',
            hideButton: true,
          },
        ]}
        footerContent={
          <div className="mt-4">
            <h4 className="font-body mb-4">Additional Offerings</h4>
            <ul className="list-disc list-inside space-y-2 font-mono">
              <li>$5/guest Custom Cocktail: Margarita Three Ways (Regular, Spicy, Ube)</li>
              <li>Welcome Glass of Champagne/Champagne Toast <em>(included in Tier 1)</em></li>
            </ul>
          </div>
        }
      />
      <div className="py-16 md:py-12">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <div className="bg-white rounded-lg border-none shadow-none p-8">
            <BarCostCalculator />
          </div>
        </div>
      </div>
      <CTA badgeText="Book Your Bar Service" />
      <FAQSection
        title="Bar Service FAQs"
        faqs={barFaqs}
        preTitleContent={<Badge className="mb-4 font-body">Bar Service Info</Badge>}
        sectionClassName="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
        titleClassName="font-header text-center mb-6"
      />
    </PageLayout>
  );
};

export default BarPackages;
