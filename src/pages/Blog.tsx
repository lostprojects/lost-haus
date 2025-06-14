import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    addressCountry: "US",
  },
};

const Blog = () => {
  const heroImages = [{
    src: '/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png',
    alt: 'Blog at Somerhaus',
  }];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="Somerhaus Blog | Event Planning Inspiration in Cincinnati"
        description="Expert tips and inspiration for unforgettable events at Cincinnati's most enchanting venue."
        schema={businessSchema}
      />
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Somerhaus Blog"
        subtitle="Ideas and resources to plan extraordinary gatherings"
      />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>The Ultimate Cincinnati Wedding Planning Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-body text-muted-foreground">
              <p>Step-by-step guidance to plan a flawless celebration in the Queen City.</p>
              <Button asChild className="font-body">
                <a href="/blog/wedding-checklist">Read More</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>10 Expert Tips for Memorable Corporate Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-body text-muted-foreground">
              <p>Pro advice to host productive meetings and standout company gatherings.</p>
              <Button asChild className="font-body">
                <a href="/blog/corporate-event-tips">Read More</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footerdemo />
    </div>
  );
};

export default Blog;
