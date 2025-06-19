import React from 'react';
import PageLayout from '@/components/PageLayout';
import { CTA } from '@/components/CTASection';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';


const PhotoShoots: React.FC = () => {

  return (
    <PageLayout heroKey="photoshoots" footerLogoType="clients" mainClassName="relative">
      <Seo
        title="Photo & Film Shoots at Somerhaus | Cincinnati Studio Loft"
        description="Book Somerhaus or our sister venue Somerset Bar as your next backdrop for editorial, commercial, or lifestyle shoots."
        schema={businessSchema}
      />

      {/* About Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-header mb-6">Why Shoot at Somerhaus?</h2>
          <p className="text-lg text-muted-foreground font-mono mb-4">
            Massive skylights, 18-ft ceilings, and layered textures give photographers and filmmakers a versatile canvas with minimal need for additional set dressing. From fashion editorials to product look-books, the space adapts to your vision.
          </p>
          <p className="text-lg text-muted-foreground font-mono">
            Rental windows are typically weekday mornings before 2 PM or any time Monday–Tuesday. Custom timing is available on request.
          </p>
        </div>
      </section>

      {/* Somerset Promo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-64 md:h-96 bg-cover bg-center rounded-md shadow-md" style={{ backgroundImage: "url('/photo/party-hero1-cincinnati-event-venue-somerhaus.webp')" }} />
          <div>
            <h3 className="font-header mb-4">Need an Outdoor Jungle Set?</h3>
            <p className="text-lg text-muted-foreground font-mono mb-6">
              Step across the street to <a href="https://somersetotr.com" className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">Somerset Bar</a>, our sister venue featured in Vogue and Architectural Digest for its lush, globe-trotting aesthetic. Outside of service hours, the gardens and shipping-container lounges are available for styled shoots, music videos, and branded content.
            </p>
            <a
              href="https://somersetotr.com/photoshoots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-body hover:bg-[#5CA87E] hover:text-white transition-colors"
            >
              Explore Somerset Photo Shoots →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </PageLayout>
  );
};

export default PhotoShoots; 