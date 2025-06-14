import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BarPackages = () => {
  const heroImages = [{
    src: '/lovable-uploads/31c22bc4-b41f-4ea7-84ca-97efc98eaef1.png',
    alt: 'Somerhaus bar setup'
  }];
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Bar Packages"
        subtitle="Simplicity for your busy schedule – our tiered bar packages meet every need. Have something special in mind? We'll make it happen."
      />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center text-foreground">Choose Your Package</h2>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tier 1 – $45 per guest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>3 beer selections, 3 wine selections, 1 seltzer</li>
                  <li>8 spirits: Tito’s Vodka, Bombay Sapphire, Bacardi Rum, Hornitos Tequila, Maker’s Mark, Redemption Rye, Dewar’s Scotch, Jack Daniel’s</li>
                  <li>Custom Cocktail: Margarita Three Ways</li>
                  <li>Welcome Champagne toast</li>
                  <li>Soft drinks, mixers and garnishes</li>
                  <li>3 hours of service (extra hours $9/guest, max 2)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tier 2 – $35 per guest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>3 beer selections, 3 wine selections</li>
                  <li>5 spirits: Finlandia Vodka, New Amsterdam Gin, Cruzan Rum, El Jimador Tequila, Kentucky Tavern Bourbon</li>
                  <li>Soft drinks, mixers and garnishes</li>
                  <li>3 hours of service (extra hours $7/guest, max 2)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tier 3 – $25 per guest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>3 beer selections, 3 wine selections</li>
                  <li>Soft drinks included</li>
                  <li>3 hours of service (extra hours $7/guest, max 2)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        <Separator />
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-header mb-4">Ready to raise a glass?</h2>
            <p className="text-lg text-muted-foreground mb-8 font-mono">Book Somerhaus and let our bar team craft something unforgettable.</p>
            <a href="/event-inquiry">
              <Button size="lg">Plan Your Event <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </a>
          </div>
        </section>
      </main>
      <Footerdemo />
    </div>
  );
};

export default BarPackages;
