import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import UniversalHero from '@/components/shared/UniversalHero';
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
import Seo, { businessSchema } from '@/components/seo/Seo';


const Elopements = () => {
  useHoneyBook();

  return (
    <main className="min-h-screen">
      <Seo
        title="Elopement Venue in Cincinnati | Somerhaus"
        description="Plan an intimate elopement in our chic Cincinnati venue."
        schema={businessSchema}
      />
      <Header />
              <UniversalHero pageKey="elopements" />
      <section className="py-8 text-center bg-white">
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Our flexible space provides a romantic backdrop for small elopements and private ceremonies.
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
      <Footer logoType="clients" />
    </main>
  );
};

export default Elopements;
