
import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import UniversalHero from '@/components/shared/UniversalHero';
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
import Seo, { businessSchema } from '@/components/seo/Seo';


const Wedding = () => {
  useHoneyBook();

  return (
    <main className="min-h-screen">
      <Seo
        title="Cincinnati Wedding Venue | Somerhaus"
        description="Plan your dream wedding at our industrial-chic event space in Over-the-Rhine."
        schema={businessSchema}
      />
      <Header />
              <UniversalHero pageKey="wedding" />
      <section className="py-8 text-center bg-white">
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Explore our tailored options for{' '}
          <a href="/lgbtq-weddings" className="text-primary underline hover:text-primary/80">LGBTQ weddings</a>,{' '}
          <a href="/micro-weddings" className="text-primary underline hover:text-primary/80">micro weddings</a>, and{' '}
          <a href="/elopements" className="text-primary underline hover:text-primary/80">elopements</a>.
        </p>
      </section>
      <WeddingPackages />
      <WeddingGallery />
      <WeddingTestimonials />
      <WeddingPlanning />
      <PreferredVendors />
      <WeddingFAQ />
      {/* HoneyBook Inquiry Form Section */}
      <section className="py-12 md:py-16"> {/* Added padding */}
        <div className="container mx-auto px-4"> {/* Added container */}
          <Card className="shadow-md"> {/* Added shadow like other cards */}
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-header text-center">Wedding Inquiry</CardTitle> {/* Centered title */}
            </CardHeader>
            <CardContent>
              <HoneyBookForm placementId="6" />
              {/* Script is loaded via useHoneyBook */}
            </CardContent>
          </Card>
        </div>
      </section>

      <WeddingCTA />
      <Footer logoType="clients" />
    </main>
  );
};

export default Wedding;
