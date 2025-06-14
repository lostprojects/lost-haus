import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const PressPage = () => {
  usePageMetadata({
    title: 'Press & Media - Somerhaus',
    description: 'Browse recent media coverage and get in touch for press inquiries.',
    canonical: 'https://somerhaus.space/press',
  });
  const heroImages = [{ src: '/lovable-uploads/8eb7ab37-08dc-43b9-9f7a-fa74ac9b112d.png', alt: 'Event at Somerhaus' }];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Press & Media"
        subtitle="See what others are saying about Somerhaus and reach out for media inquiries."
      />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Coverage</CardTitle>
              </CardHeader>
              <CardContent className="font-mono space-y-2">
                <p><strong>CityBeat:</strong> "The Dazzling Paper Lanterns Burlesque and Aerial Variety Show at Somerhaus"</p>
                <p><strong>Cincinnati Business Courier:</strong> "Growing Entertainment Group Opening OTR Event Space"</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Media Contact</CardTitle>
              </CardHeader>
              <CardContent className="font-mono">
                <p>Email: <a href="mailto:hello@somerhaus.com" className="text-primary hover:underline">hello@somerhaus.com</a></p>
                <p>Phone: <a href="tel:+15139021415" className="text-primary hover:underline">(513) 902-1415</a></p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Separator />
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-header mb-4">Want to feature Somerhaus?</h2>
            <p className="text-lg text-muted-foreground mb-8 font-mono">We're happy to provide quotes, imagery and tours for journalists and bloggers.</p>
            <a href="mailto:hello@somerhaus.com">
              <Button size="lg">Contact Our Team <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </a>
          </div>
        </section>
      </main>
      <Footerdemo />
    </div>
  );
};

export default PressPage;
