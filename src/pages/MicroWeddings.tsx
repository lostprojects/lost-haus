import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import WeddingHero from '@/components/wedding/WeddingHero';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';
import Seo from '@/components/seo/Seo';

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  telephone: "513-902-1415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US"
  }
};

const MicroWeddings = () => {
  useHoneyBook();

  return (
    <main className="min-h-screen">
      <Seo
        title="Micro Wedding Venue in Cincinnati | Somerhaus"
        description="Host an intimate micro wedding in our stylish Over-the-Rhine space."
        schema={businessSchema}
      />
      <Header />
      <WeddingHero />
      <section className="py-8 text-center bg-white">
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Our venue is perfect for micro weddings of 50 guests or fewer, offering a cozy setting without sacrificing style.
        </p>
      </section>
      <WeddingPackages />
      <WeddingGallery />
      <WeddingTestimonials />
      <WeddingPlanning />
      <PreferredVendors />
      <WeddingFAQ />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-header text-center">Wedding Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <HoneyBookForm placementId="6" />
            </CardContent>
          </Card>
        </div>
      </section>
      <WeddingCTA />
      <Footerdemo />
    </main>
  );
};

export default MicroWeddings;
