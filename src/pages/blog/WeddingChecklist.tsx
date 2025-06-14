import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { CTA } from '@/components/ui/call-to-action/component';
import Seo from '@/components/seo/Seo';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Ultimate Cincinnati Wedding Planning Checklist",
  image: "https://somerhaus.com/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
  author: { "@type": "Organization", name: "Somerhaus" },
  publisher: { "@type": "Organization", name: "Somerhaus" },
  mainEntityOfPage: "https://somerhaus.com/blog/wedding-checklist",
  description: "A step-by-step wedding planning guide for couples in Cincinnati."
};

const WeddingChecklist = () => {
  const heroImages = [{
    src: '/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png',
    alt: 'Wedding setup at Somerhaus',
  }];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="Ultimate Cincinnati Wedding Planning Checklist"
        description="Comprehensive tips to plan a beautiful wedding at Somerhaus or any Cincinnati venue."
        schema={articleSchema}
      />
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Ultimate Wedding Checklist"
        subtitle="Plan every detail for a flawless celebration"
      />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-8 max-w-3xl font-body text-muted-foreground">
          <section>
            <h2 className="text-2xl font-header mb-2">1. Secure Your Dream Venue</h2>
            <p>
              Popular Cincinnati venues book up fast. Reserve your date at <a className="text-primary underline" href="/wedding">Somerhaus</a> or another location at least a year ahead.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">2. Build a Seasoned Vendor Team</h2>
            <p>
              From photographers to caterers, choose professionals who know the city well. Our <a className="text-primary underline" href="/vendors">preferred vendors list</a> is a great starting point.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">3. Craft a Timeline</h2>
            <p>
              Outline key milestones—tastings, fittings, rehearsals—to keep planning stress free. Include buffer time for unexpected changes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">4. Personalize the Experience</h2>
            <p>
              Signature cocktails, local favors, and custom playlists make your day unforgettable. Our team loves helping couples brainstorm unique touches.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">5. Confirm the Final Details</h2>
            <p>
              Finalize floor plans, vendor arrival times, and day-of contacts one month out. Then relax and enjoy the celebration!
            </p>
          </section>
          <p>
            Need expert guidance? <a className="text-primary underline" href="/event-inquiry">Request a custom quote</a> or <a className="text-primary underline" href="/contact">schedule a tour</a> to see how Somerhaus can bring your vision to life.
          </p>
        </div>
      </main>
      <CTA />
      <Footerdemo />
    </div>
  );
};

export default WeddingChecklist;
