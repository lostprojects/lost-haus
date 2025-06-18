import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Breadcrumb from '@/components/ui/breadcrumb';
import { SimpleFaqCategories } from '@/components/faq/SimpleFaqCategories';
import Seo from '@/components/seo/Seo';
import { businessSchema, mainFaqSchema } from '@/components/seo/seo-schemas';

export default function FAQ() {
  return (
    <PageLayout footerLogoType="clients" hasHero={false}>
      <Seo
        title="Somerhaus FAQ | Cincinnati Event Venue"
        description="Answers to common questions about our Cincinnati event venue."
        schema={[businessSchema, mainFaqSchema]}
      />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Breadcrumb items={[
            { label: 'About', href: '/about' },
            { label: 'FAQ' }
          ]} />
          
          <div>
            <h1 className="text-3xl md:text-4xl font-header mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Find answers to common questions about Somerhaus. We're here to help make your event planning smooth and stress-free.
            </p>
          </div>
        </div>
      </section>
      
      <SimpleFaqCategories />
      
      <div className="text-center py-12">
        <p className="text-lg font-body text-muted-foreground">
          Still have questions?{' '}
          <a href="/about/contact" className="text-primary underline hover:text-primary/80">
            Contact us
          </a>{' '}
          and we'll be happy to help.
        </p>
      </div>
    </PageLayout>
  );
}

