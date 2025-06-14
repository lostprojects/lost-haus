import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import WeddingHero from '@/components/wedding/WeddingHero';
import VenueHighlights from '@/components/wedding/VenueHighlights';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import WeddingContact from '@/components/wedding/WeddingContact';
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

const WeddingLGBTQ = () => {
  useHoneyBook();

  return (
    <main className="min-h-screen">
      <Seo
        title="LGBTQ+ Wedding Venue | Somerhaus"
        description="Celebrate your love at our inclusive Cincinnati venue, perfect for LGBTQ weddings."
        schema={businessSchema}
      />
      <Header />
      <WeddingHero />
      <section className="py-8 text-center bg-white">
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          We proudly host LGBTQ weddings and welcome couples of all identities. Our team ensures your celebration reflects your love story.
        </p>
      </section>
      <WeddingPackages />
      <WeddingGallery />
      <WeddingTestimonials />
      <WeddingPlanning />
      <PreferredVendors />
      <WeddingFAQ />
      {/* HoneyBook Inquiry Form Section */}
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

export default WeddingLGBTQ;
