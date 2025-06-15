import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';

const Vendors = () => {
  const heroImages = [
  { src: '/photo/haus-wedding-main.png', alt: 'Wedding at Somerhaus' },
  { src: '/photo/haus-wedding-2.png', alt: 'Wedding reception at Somerhaus' },
  { src: '/photo/haus-meeting.png', alt: 'Meeting at Somerhaus' },
  { src: '/photo/haus-party.png', alt: 'Party at Somerhaus' }
];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="Preferred Event Vendors | Somerhaus Cincinnati"
        description="Browse trusted Cincinnati vendors for catering, photography, and more."
      />
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Preferred Vendors"
        subtitle="From photographers to catering, we've curated a trusted list of partners to make your planning effortless."
      />
      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>Catering & Specialty</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>Bee’s BBQ – (513) 561-2337</li>
                  <li>Chef’s Choice Catering – info@chefschoicecatering.com</li>
                  <li>Crown Restaurant Group</li>
                  <li>Essen Kitchen – eat@essenkitchen.com</li>
                  <li>Findlay Market Merchants</li>
                  <li>Garnish Catering</li>
                  <li>Jeff Thomas Catering – events@jeffthomascatering.com</li>
                  <li>Keystone Bar & Grill</li>
                  <li>Mazunte – (513) 785-0000</li>
                  <li>Share Cheesebar</li>
                  <li>Southern Grace Catering – (513) 808-5819</li>
                  <li>Taglio OTR – info@eattaglio.com</li>
                  <li>The Rhined – (513) 655-5938</li>
                  <li>Yee Mama</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Desserts & Bakeries</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>Allez Bakery – (513) 381-6700</li>
                  <li>Abby Girl Sweets – (513) 335-0898</li>
                  <li>Brown Bear Bakery – hello@brownbearbakery.com</li>
                  <li>Cafe Mochiko – (513) 559-1000</li>
                  <li>Ilan’s Raw Chocolate</li>
                  <li>North South Baking Company – kate@northsouthbaking.com</li>
                  <li>Sixteen Bricks Bakery – (513) 873-1426</li>
                  <li>Mae’s Cookie Co. – (256) 520-7763</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coffee Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>Deeper Roots Coffee</li>
                  <li>Yield Coffee Roasters</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Photographers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>Bird and Rose Photography</li>
                  <li>Blushing Finch Photography – blushingfinchphoto@gmail.com</li>
                  <li>Catherine Grace Photography – catievox@gmail.com</li>
                  <li>Eleven11 Photography – info@eleven11photo.com</li>
                  <li>J. Carr Photography – jecarr.photos@gmail.com</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        <Separator />
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-header mb-4">Have your own vendor in mind?</h2>
            <p className="text-lg text-muted-foreground mb-8 font-mono">You're welcome to work with anyone you love. A small service fee helps us coordinate logistics seamlessly.</p>
            <a href="/contact">
              <Button size="lg">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </a>
          </div>
        </section>
      </main>
      <Footerdemo />
    </div>
  );
};

export default Vendors;
