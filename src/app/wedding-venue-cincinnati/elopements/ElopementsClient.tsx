'use client'

import React from 'react';
import PageLayout from '@/components/PageLayout';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/HoneyBookForm';

const ElopementsClient = () => {
  useHoneyBook();

  return (
    <PageLayout heroKey="elopements" footerLogoType="clients">
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
    </PageLayout>
  );
};

export default ElopementsClient;