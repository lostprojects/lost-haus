import React from 'react';
import Header from '@/components/ui/header';
import UniversalHero from '@/components/shared/UniversalHero';
import { Footer } from "@/components/ui/footer-section";
import { LogoTicker } from '@/components/blocks/LogoTicker';
import { clientLogos } from '@/data/clientLogos';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';
import PricingSection from '@/components/shared/PricingSection';
import BarCostCalculator from '@/components/bar/BarCostCalculator';
import BarFaq from '@/components/bar/BarFaq';

const BarPackages = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Bar Packages | Somerhaus Cincinnati Event Venue"
        description="Signature cocktails, curated wine, beer. Choose a tier or let us customize your pour."
        schema={businessSchema}
      />
      <Header />
      
      <UniversalHero pageKey="barpackages" />

      <main className="flex-grow">
        <PricingSection
          title="Choose Your Package"
          description="Three tiers, one unforgettable bar experience—pick the level that matches your vibe, or ask us to craft something custom."
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
              buttonProps: { } ,
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
              buttonProps: { variant: 'outline' },
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
              buttonProps: { variant: 'outline' },
            },
          ]}
          footerContent={
            <div className="mt-8">
              <h3 className="text-2xl font-header mb-4">Additional Offerings</h3>
              <ul className="list-disc list-inside space-y-2 font-mono">
                <li>$5/guest Custom Cocktail: Margarita Three Ways (Regular, Spicy, Ube)</li>
                <li>Welcome Glass of Champagne/Champagne Toast <em>(included in Tier 1)</em></li>
              </ul>
            </div>
          }
        />
        <BarCostCalculator />
        <BarFaq />
        <LogoTicker heading="Trusted By" logos={clientLogos} className="bg-black" />
      </main>
      
      <Footer logoType="clients" />
    </div>
  );
};

export default BarPackages;
