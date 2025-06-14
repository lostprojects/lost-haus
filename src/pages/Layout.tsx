import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import usePageMetadata from '@/hooks/usePageMetadata';

const LayoutPage = () => {
  usePageMetadata({
    title: 'Venue Layout - Somerhaus',
    description:
      'Get exact room dimensions and included furnishings to plan your perfect event layout.',
    canonical: 'https://somerhaus.space/layout',
  });
  const heroImages = [{ src: '/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png', alt: 'Somerhaus floor layout' }];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Venue Layout"
        subtitle="Our 3,080 sq ft open floor plan is yours to configure. Explore the possibilities and start envisioning your event."
      />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Room Dimensions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>Main space: approximately 3,080 square feet</li>
                  <li>Ceiling height: over 20 feet with skylight</li>
                  <li>Two ADA-compliant restrooms</li>
                  <li>Caterer-friendly prep kitchen</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Included Furnishings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>80 wooden cross-back chairs and 70 folding chairs</li>
                  <li>10 round tables and 6 rectangular tables</li>
                  <li>4 high-top cocktail tables</li>
                  <li>Fully furnished lounge vignettes</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Configurations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono">We offer digital floor plans and sample setups for ceremonies, seated dinners, meetings and more. Let us know how you'd like the room arranged and we'll help craft the perfect layout.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Separator />
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-header mb-4">Visualize your event here</h2>
            <p className="text-lg text-muted-foreground mb-8 font-mono">Schedule a tour to see how Somerhaus can transform for you.</p>
            <a href="/event-inquiry">
              <Button size="lg">Book a Tour <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </a>
          </div>
        </section>
      </main>
      <Footerdemo />
    </div>
  );
};

export default LayoutPage;
