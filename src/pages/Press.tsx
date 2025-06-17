import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import PressHero from '@/components/press/PressHero';
import { Logos3 } from '@/components/blocks/logos3';
import PressKitSection from '@/components/press/PressKitSection';

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
    addressCountry: "US"
  }
};

const PressPage = () => {
  const pressLogos = [
    { id: 'press-1', description: 'Zola', image: '/press-logos/zola-logo.svg', className: 'brightness-0 invert' },
    { id: 'press-2', description: 'Peerspace', image: '/press-logos/peerspace-logo.svg', className: 'brightness-0 invert' },
    { id: 'press-3', description: 'Business Courier', image: '/press-logos/business-courier-logo.webp', className: 'grayscale invert contrast-200' },
    { id: 'press-4', description: 'Cincinnati Magazine', image: '/press-logos/Cincinnati-mag-logo.png', className: 'brightness-0 invert' },
    { id: 'press-5', description: 'The Knot', image: '/press-logos/the-knot-logo.webp', className: 'brightness-0 invert' },
    { id: 'press-6', description: 'Cincinnati Enquirer', image: '/press-logos/Enquirer-logo.png', className: 'brightness-0 invert' },
    { id: 'press-7', description: 'Cincinnati.com', image: '/press-logos/cincinnati-com-logo.png', className: 'brightness-0 invert' },
    { id: 'press-8', description: 'CityBeat', image: '/press-logos/City-Beat-logo.png', className: 'brightness-0 invert' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="Somerhaus Press | Cincinnati Event Venue"
        description="News articles and media resources about Cincinnati's most enchanting event venue."
        schema={businessSchema}
      />
      <Header />
      <PressHero />

      <Logos3 heading="" logos={pressLogos} className="bg-black" />

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
                <p><strong>Cincinnati Magazine:</strong> "Inside Somerhaus—OTR's Newest Event Space"</p>
                <p><strong>Cincinnati Enquirer:</strong> "Historic Over-the-Rhine Loft Transformed into Modern Event Venue"</p>
                <p><strong>Cincinnati.com:</strong> "First Look: Somerhaus Brings Industrial-Chic Style to Republic Street"</p>
                <p><strong>Peerspace:</strong> "Top 10 Industrial Wedding Venues in Cincinnati"</p>
                <p><strong>The Knot:</strong> "Somerhaus — Venue Spotlight"</p>
                <p><strong>Zola:</strong> "Hidden Gem: Somerhaus Loft for Intimate Cincinnati Weddings"</p>
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

        <Separator />
        <PressKitSection />
      </main>
      <Footerdemo />
    </div>
  );
};

export default PressPage;
