import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import VenueHighlights from '@/components/wedding/VenueHighlights';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';
import WeddingContact from '@/components/wedding/WeddingContact';
import { businessSchema } from '@/components/seo/seo-schemas';

export const metadata: Metadata = {
  title: 'Micro Weddings | Somerhaus Cincinnati',
  description: 'Perfect intimate celebrations with your closest family and friends in our stunning Cincinnati venue.',
  openGraph: {
    title: 'Micro Weddings | Somerhaus Cincinnati',
    description: 'Perfect intimate celebrations with your closest family and friends in our stunning Cincinnati venue.',
    url: 'https://somerhaus.com/wedding/micro-weddings',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro Weddings | Somerhaus Cincinnati',
    description: 'Perfect intimate celebrations with your closest family and friends in our stunning Cincinnati venue.',
  },
};

export default function MicroWeddings() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <PageLayout heroKey="microweddings" footerLogoType="clients">
        <main className="flex-grow">
          <VenueHighlights />
          <WeddingPackages />
          <WeddingGallery />
          <WeddingTestimonials />
          <WeddingPlanning />
          <PreferredVendors />
          <WeddingFAQ />
          <WeddingContact />
          <WeddingCTA />
        </main>
      </PageLayout>
    </>
  );
}
