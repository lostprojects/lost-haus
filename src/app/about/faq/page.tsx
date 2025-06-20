import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import { SimpleFaqCategories } from '@/components/faq/SimpleFaqCategories';
import { businessSchema, mainFaqSchema } from '@/components/seo/seo-schemas';

export const metadata: Metadata = {
  title: 'Somerhaus FAQ | Cincinnati Event Venue',
  description: 'Answers to common questions about our Cincinnati event venue.',
  openGraph: {
    title: 'Somerhaus FAQ | Cincinnati Event Venue',
    description: 'Answers to common questions about our Cincinnati event venue.',
    url: 'https://somerhaus.com/about/faq',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somerhaus FAQ | Cincinnati Event Venue',
    description: 'Answers to common questions about our Cincinnati event venue.',
  },
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([businessSchema, mainFaqSchema]),
        }}
      />
      <PageLayout footerLogoType="clients">
      
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
              <Link href="/about/contact" className="text-primary underline hover:text-primary/80">
                Contact us
              </Link>{' '}
              and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
}