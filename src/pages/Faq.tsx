import React from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import { SimpleFaqCategories } from '@/components/faq/SimpleFaqCategories';
import Seo from '@/components/seo/Seo';
import { businessSchema, mainFaqSchema } from '@/components/seo/seo-schemas';

export const STANDARD_CONTAINER_CLASSES = "container mx-auto";

export default function FAQ() {
  return (
    <PageLayout footerLogoType="clients">
      <Seo
        title="Somerhaus FAQ | Cincinnati Event Venue"
        description="Answers to common questions about our Cincinnati event venue."
        schema={[businessSchema, mainFaqSchema]}
      />
      
      <section className="pt-8 md:pt-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-header mb-4">
            Frequently Asked<br />Questions
          </h1>
          <p className="text-lg text-muted-foreground font-body">
            Find answers to common questions about Somerhaus. We're here to help make your event planning smooth and stress-free.
          </p>
        </div>
      </section>
      
      <SimpleFaqCategories />
      
      <section className="py-12">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <div className="text-center">
            <p className="text-lg font-body text-muted-foreground">
              Still have questions?{' '}
              <a href="/about/contact" className="text-primary underline hover:text-primary/80">
                Contact us
              </a>{' '}
              and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 