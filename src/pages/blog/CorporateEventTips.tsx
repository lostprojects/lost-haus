import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { CTA } from '@/components/ui/call-to-action/component';
import Seo from '@/components/seo/Seo';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "10 Expert Tips for Memorable Corporate Events",
  image: "https://somerhaus.com/lovable-uploads/8eb7ab37-08dc-43b9-9f7a-fa74ac9b112d.png",
  author: { "@type": "Organization", name: "Somerhaus" },
  publisher: { "@type": "Organization", name: "Somerhaus" },
  mainEntityOfPage: "https://somerhaus.com/blog/corporate-event-tips",
  description: "Professional advice to host productive and engaging business events."
};

const CorporateEventTips = () => {
  const heroImages = [{
    src: '/lovable-uploads/8eb7ab37-08dc-43b9-9f7a-fa74ac9b112d.png',
    alt: 'Corporate event at Somerhaus',
  }];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="10 Expert Tips for Memorable Corporate Events in Cincinnati"
        description="Plan engaging meetings and company celebrations with advice from the Somerhaus team."
        schema={articleSchema}
      />
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Corporate Event Tips"
        subtitle="Strategies to elevate your next meeting or retreat"
      />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-8 max-w-3xl font-body text-muted-foreground">
          <section>
            <h2 className="text-2xl font-header mb-2">1. Start With Clear Objectives</h2>
            <p>
              Define your goals before choosing a format. Whether it's team building or a product launch, clarity drives success.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">2. Choose a Venue That Inspires</h2>
            <p>
              A unique setting like <a className="text-primary underline" href="/corporate">Somerhaus</a> boosts creativity and keeps attendees engaged.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">3. Incorporate Interactive Elements</h2>
            <p>
              Breakout sessions, live polling, and networking lounges encourage participation and collaboration.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">4. Provide Memorable Catering</h2>
            <p>
              Offer local flavors and accommodate dietary needs. Great food keeps energy high throughout the day.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-header mb-2">5. End With a Strong Call to Action</h2>
            <p>
              Wrap up your event by guiding attendees toward the next step, whether that's booking a follow-up session or scheduling a tour.
            </p>
          </section>
          <p>
            Ready to elevate your company gathering? <a className="text-primary underline" href="/event-inquiry">Request a proposal</a> or <a className="text-primary underline" href="/contact">connect with our team</a> today.
          </p>
        </div>
      </main>
      <CTA />
      <Footerdemo />
    </div>
  );
};

export default CorporateEventTips;
