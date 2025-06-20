import type { Metadata } from 'next'
import React from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import VendorSection from '@/components/VendorSection';
import { businessSchema } from '@/components/seo/seo-schemas';

export const metadata: Metadata = {
  title: 'Preferred Vendors | Somerhaus Cincinnati',
  description: 'Our curated network of Cincinnati',
  openGraph: {
    title: 'Preferred Vendors | Somerhaus Cincinnati',
    description: 'Our curated network of Cincinnati',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preferred Vendors | Somerhaus Cincinnati',
    description: 'Our curated network of Cincinnati',
  },
};


const Vendors: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <PageLayout footerLogoType="clients">
      

      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className={`${STANDARD_CONTAINER_CLASSES} space-y-8`}>
          <div>
            <h1 className="font-header mb-4">
              Preferred Vendors
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Our curated network of Cincinnati's finest event professionals for your perfect celebration.
            </p>
          </div>
        </div>
      </section>

      <VendorSection 
        eventType="all"
        showHeader={false}
        subtitle="We've partnered with Cincinnati's finest vendors to help make your celebration extraordinary. Every vendor has been personally vetted for quality, professionalism, and excellence."
      />
    </PageLayout>
    </>
  );
};

export default Vendors;
