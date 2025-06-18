import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Breadcrumb from '@/components/ui/breadcrumb';
import PricingSection from '@/components/shared/PricingSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const Pricing = () => {
  return (
    <PageLayout footerLogoType="clients" hasHero={false}>
      <Seo 
        title="Event Pricing | Somerhaus" 
        description="Transparent venue rental rates for events at Somerhaus" 
        schema={businessSchema}
      />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Breadcrumb items={[
            { label: 'About', href: '/about' },
            { label: 'Pricing' }
          ]} />
          
          <div>
            <h1 className="text-3xl md:text-4xl font-header mb-4">
              Event Pricing
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Our straightforward packages make budgeting simple. Beverage minimums apply as listed.
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-grow">
        <PricingSection
          title="Venue Rental Rates"
          description="All rentals include tables and chairs for up to 80 guests, basic lighting, sound system, and setup/teardown assistance."
          packages={[
            {
              name: 'Sun–Thu Evening',
              price: '$1,500',
              priceSuffix: '+ $500 bar minimum',
              features: [
                '5-hour event block',
                'Tables & chairs for up to 80 guests',
                'Basic lighting & sound system',
              ],
              buttonText: 'Inquire',
              buttonProps: { variant: 'outline' },
            },
            {
              name: 'Fri–Sat Evening',
              price: '$3,000',
              priceSuffix: '+ $1,000 bar minimum',
              features: [
                '5-hour event block',
                'Tables & chairs for up to 80 guests',
                'Basic lighting & sound system',
              ],
              buttonText: 'Inquire',
              buttonProps: { variant: 'outline' },
            },
            {
              name: 'Corporate Half-Day',
              price: '$750',
              priceSuffix: 'Mon–Fri',
              features: [
                'Up to 4-hour daytime block',
                'Tables & chairs arranged for meetings',
                'AV support & WiFi',
              ],
              buttonText: 'Book Now',
              buttonProps: { variant: 'outline' },
            },
            {
              name: 'Corporate Full-Day',
              price: '$1,200',
              priceSuffix: 'Mon–Fri',
              features: [
                'Up to 8-hour daytime block',
                'Tables & chairs arranged for meetings',
                'AV support & WiFi',
              ],
              buttonText: 'Book Now',
              buttonProps: { variant: 'outline' },
            },
            {
              name: 'Non-Profit Events',
              price: 'Custom',
              features: [
                'Flexible pricing tailored to your organization',
                'Includes standard amenities',
              ],
              buttonText: 'Contact Us',
              buttonProps: { variant: 'outline' },
            },
          ]}
        />
        <section className="py-12 text-center">
          <a href="/event-inquiry">
            <Button size="lg">Start Planning <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </a>
        </section>
      </main>
    </PageLayout>
  );
};

export default Pricing;
