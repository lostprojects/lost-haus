import React from 'react';
import Header from '@/components/ui/header';
import UniversalHero from '@/components/shared/UniversalHero';
import { Footer } from "@/components/ui/footer-section";
import VenueHighlights from '@/components/wedding/VenueHighlights';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';
import WeddingContact from '@/components/wedding/WeddingContact';
import Seo, { businessSchema } from '@/components/seo/Seo';

const WeddingLGBTQ: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="LGBTQ+ Weddings | Somerhaus Cincinnati"
        description="Celebrating love in all its forms in Cincinnati's most inclusive venue space."
        schema={businessSchema}
      />
      <Header />
      
      <UniversalHero pageKey="weddinglgbtq" />

      <main className="flex-grow">
        {/* Inclusivity Statement Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-6">
                Love is Love
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-body">
                At Somerhaus, we believe every love story deserves to be celebrated. We're proud to provide a safe, 
                welcoming space where all couples can create their perfect wedding day. Our team is committed to 
                ensuring your celebration reflects your unique journey and values.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rainbow-gradient rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">Inclusive Environment</h3>
                  <p className="text-gray-600 font-body">A safe space where everyone feels welcome and celebrated.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">LGBTQ+ Friendly Vendors</h3>
                  <p className="text-gray-600 font-body">Vetted vendors who share our commitment to equality.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">Personalized Experience</h3>
                  <p className="text-gray-600 font-body">Every detail crafted to tell your unique love story.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      
      <Footer logoType="clients" />
    </div>
  );
};

export default WeddingLGBTQ;
