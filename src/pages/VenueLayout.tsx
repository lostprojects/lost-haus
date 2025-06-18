import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Breadcrumb from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const VenueLayout = () => {
  return (
    <PageLayout footerLogoType="clients" hasHero={false}>
      <Seo
        title="Venue Layout | Somerhaus Cincinnati"
        description="Explore our 3,080 sq ft floor plan and envision your event in Cincinnati's Over-the-Rhine neighborhood."
        schema={businessSchema}
      />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Breadcrumb items={[
            { label: 'About', href: '/about' },
            { label: 'Venue Layout' }
          ]} />
          
          <div>
            <h1 className="text-3xl md:text-4xl font-header mb-4">
              Venue Layout
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Explore our 3,080 sq ft floor plan and envision your event in Cincinnati's Over-the-Rhine neighborhood.
            </p>
          </div>
        </div>
      </section>
      
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
    </PageLayout>
  );
};

export default VenueLayout; 