'use client'

import React from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import { teamMembers } from '@/data/teamMembers';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/HoneyBookForm';

const AboutClient: React.FC = () => {
  useHoneyBook();

  return (
    <PageLayout footerLogoType="clients">
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className={`${STANDARD_CONTAINER_CLASSES} space-y-8`}>
          <div>
            <h1 className="font-header mb-4">
              About Somerhaus
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Learn the story behind Somerhaus and meet the team that makes every event memorable.
            </p>
          </div>
        </div>
      </section>

      <div>
        {/* Our Story Section */}
        <section className="py-12 md:py-16">
          <div className={`${STANDARD_CONTAINER_CLASSES} max-w-3xl`}>
            <h2 className="font-header font-semibold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none mx-auto text-foreground font-mono">
              <p>
                Somerhaus was born from the same spirit of adventure that powers our sister venue, Somerset Bar—an indoor/outdoor oasis pieced together from eight shipping containers and treasures collected on global expeditions, opened in 2021 to instant acclaim. Guests loved Somerset so much they kept asking to rent it for private events. Rather than close the bar, we transformed a nearby 1880s industrial loft at 1415 Republic Street into a purpose-built event space, keeping the maximalist, globally-sourced design language people fell for.
              </p>
              <p>
                Walk inside and you'll see the details: a 200-year-old Japanese fishing boat suspended beneath a soaring skylight, antique village gates shipped home from India, and layered textures that feel more curated than "decorated." The result is a venue that sparks conversation the moment your guests walk through the door.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        {/* The Space Section */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className={`${STANDARD_CONTAINER_CLASSES} max-w-3xl`}>
            <h2 className="font-header font-semibold mb-6 text-center">The Space</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground font-mono marker:text-primary">
              <li>3,000+ sq ft of uninterrupted floor-plan freedom—yours to configure for ceremonies, seated dinners up to 80, or cocktail receptions that flow past 150.</li>
              <li>Fully furnished lounges, dining tables, a built-in bar, and 70 extra folding chairs on-site—no rental scramble required.</li>
              <li>House A/V: blazing-fast Wi-Fi, integrated sound, wireless mics, and four 65-inch displays with AirPlay & Chromecast for plug-and-play presentations or photo loops.</li>
              <li>Two ADA-compliant restrooms and a caterer-friendly prep kitchen keep service seamless.</li>
              <li>One-block stroll to Washington Park and the streetcar; garage and lot parking within a two-minute walk.</li>
            </ul>
          </div>
        </section>

        <Separator className="my-0" />

        {/* Events We Host Section */}
        <section className="py-12 md:py-16">
          <div className={`${STANDARD_CONTAINER_CLASSES} max-w-3xl`}>
            <h2 className="font-header font-semibold mb-6 text-center">Events We Host</h2>
            <p className="text-lg text-muted-foreground text-center font-mono">
              From weddings and showers to product launches, off-sites, art shows, and film shoots—if you can dream it, chances are we've flipped the room for it already. Our only hard rule: celebrations should elevate the people and the neighborhood we love.
            </p>
          </div>
        </section>

        <Separator className="my-0" />

        {/* Meet the Team Section - Added from Contact page */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className={STANDARD_CONTAINER_CLASSES}>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3">The People Behind Your Events</Badge>
              <h2 className="font-header mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
                Our dedicated professionals work tirelessly to ensure your event exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="grid md:grid-cols-5 gap-4 p-0">
                    <div className="md:col-span-2 h-full">
                      <div className="h-full w-full relative overflow-hidden aspect-[3/4] md:aspect-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover object-center w-full h-full transition-transform hover:scale-105 duration-700"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h3 className="font-header mb-1">{member.name}</h3>
                          <p className="text-primary font-medium mb-4">{member.role}</p>
                          <p className="text-gray-600 font-mono">{member.bio}</p>
                        </div>
                        <div className="flex mt-6">
                          <a href="/about/contact" className="text-primary hover:text-primary/80 font-medium">
                            Contact →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        {/* The Team Section */}
        <section className="py-12 md:py-16">
          <div className={`${STANDARD_CONTAINER_CLASSES} max-w-3xl`}>
            <h2 className="font-header font-semibold mb-6 text-center">The Team</h2>
            <p className="text-lg text-muted-foreground text-center font-mono">
              Somerhaus operates under the Lost Hospitality umbrella, the Cincinnati-grown collective behind Somerset, Second Story, Alice, and the forthcoming Muse Hotel. Day-to-day magic is orchestrated by Beth Smiley and Sara Hutslar, our co-General Managers whose obsessive eye for detail (and deep OTR roots) ensures every client feels at home from the first walkthrough to the last dance.
            </p>
          </div>
        </section>

        <Separator className="my-0" />

        {/* Why We're Different Section */}
        <section className="py-12 md:py-16">
          <div className={`${STANDARD_CONTAINER_CLASSES} max-w-3xl`}>
            <h2 className="font-header font-semibold mb-6 text-center">Why We're Different</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground font-mono marker:text-primary">
              <li>Design without the white-box blandness. Your photos pop because the space already tells a story—yours just becomes the next chapter.</li>
              <li>Hospitality, not just venue rental. We cap events per week so our team can focus on service instead of churn.</li>
            </ul>
          </div>
        </section>

        <Separator className="my-0" />

        {/* HoneyBook Form Section */}
        <section className="py-12 md:py-16 bg-muted/40">
           <div className={`${STANDARD_CONTAINER_CLASSES} max-w-2xl`}>
            <Card className="shadow-md border">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-header">Ready to see it in person?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-6 font-mono">
                  Schedule a visit to experience Somerhaus firsthand. Use the form below to book your tour.
                </p>
                {/* HoneyBook Embed Code */}
                <div className="mt-6">
                  <HoneyBookForm placementId="5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutClient;