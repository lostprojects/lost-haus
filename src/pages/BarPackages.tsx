import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import BarPackagesHero from '@/components/bar/BarPackagesHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import PricingSection from '@/components/shared/PricingSection';

const BarPackages = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="Event Bar Packages in Cincinnati | Somerhaus"
        description="Choose from tiered bar packages for weddings and events at our Cincinnati venue."
      />
      <Header />
      <BarPackagesHero />
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
              buttonText: 'Book Tier 1',
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
              buttonText: 'Book Tier 2',
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
              buttonText: 'Book Tier 3',
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
        <Separator />
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-header mb-4">Ready to raise a glass?</h2>
            <p className="text-lg text-muted-foreground mb-8 font-mono">Book Somerhaus and let our bar team craft something unforgettable.</p>
            <a href="/event-inquiry">
              <Button size="lg">Plan Your Event <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </a>
          </div>
        </section>
      </main>
      <Footerdemo />
    </div>
  );
};

export default BarPackages;
