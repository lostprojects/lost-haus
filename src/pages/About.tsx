import React, { useEffect } from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
// Removed HeroSection import as we'll create a simpler header structure
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Add type declaration for Honeybook
declare global {
  interface Window {
    _HB_?: {
      pid?: string;
    };
  }
}

const About: React.FC = () => {
  useEffect(() => {
    // Create script element for Honeybook
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';

    // Initialize Honeybook safely
    window._HB_ = window._HB_ ?? {}; // Ensure _HB_ exists using nullish coalescing
    window._HB_.pid = '61a840e6341fbd00074ed82a'; // Assign pid using defined type

    // Append script to document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background"> {/* Added bg-background */}
      <Header />
      <main className="flex-grow"> {/* Removed container/padding from main */}

        {/* Simple Header Section */}
        <section className="py-16 md:py-24 text-center bg-muted/40"> {/* Added standard padding & bg */}
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-header tracking-tight mb-4 text-foreground">
              About Somerhaus
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground font-mono">
              A design-driven canvas for unforgettable gatherings in the heart of Over-the-Rhine.
            </p>
          </div>
        </section>

        {/* Separator is now part of the section spacing */}

        {/* Our Story Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl"> {/* Container with max-width */}
            <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none mx-auto text-foreground font-mono"> {/* Added prose for styling */}
              <p>
                Somerhaus was born from the same spirit of adventure that powers our sister venue, Somerset Bar—an indoor/outdoor oasis pieced together from eight shipping containers and treasures collected on global expeditions, opened in 2021 to instant acclaim. Guests loved Somerset so much they kept asking to rent it for private events. Rather than close the bar, we transformed a nearby 1880s industrial loft at 1415 Republic Street into a purpose-built event space, keeping the maximalist, globally-sourced design language people fell for.
              </p>
              <p>
                Walk inside and you’ll see the details: a 200-year-old Japanese fishing boat suspended beneath a soaring skylight, antique village gates shipped home from India, and layered textures that feel more curated than “decorated.” The result is a venue that sparks conversation the moment your guests walk through the door.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-0" /> {/* Separator between sections */}

        {/* The Space Section */}
        <section className="py-12 md:py-16 bg-muted/40"> {/* Alternating background */}
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center text-foreground">The Space</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground font-mono marker:text-primary"> {/* Styled list */}
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
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center text-foreground">Events We Host</h2>
            <p className="text-lg text-muted-foreground text-center font-mono">
              From weddings and showers to product launches, off-sites, art shows, and film shoots—if you can dream it, chances are we’ve flipped the room for it already. Our only hard rule: celebrations should elevate the people and the neighborhood we love.
            </p>
          </div>
        </section>

        <Separator className="my-0" />

        {/* The Team Section */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center text-foreground">The Team</h2>
            <p className="text-lg text-muted-foreground text-center font-mono">
              Somerhaus operates under the Lost Hospitality umbrella, the Cincinnati-grown collective behind Somerset, Second Story, Alice, and the forthcoming Muse Hotel. Day-to-day magic is orchestrated by Beth Smiley and Sara Hutslar, our co-General Managers whose obsessive eye for detail (and deep OTR roots) ensures every client feels at home from the first walkthrough to the last dance.
            </p>
          </div>
        </section>

        <Separator className="my-0" />

        {/* Why We’re Different Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center text-foreground">Why We’re Different</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground font-mono marker:text-primary">
              <li>Design without the white-box blandness. Your photos pop because the space already tells a story—yours just becomes the next chapter.</li>
              <li>Hospitality, not just venue rental. We cap events per week so our team can focus on service instead of churn.</li>
            </ul>
          </div>
        </section>

        <Separator className="my-0" />

        {/* HoneyBook Form Section */}
        <section className="py-12 md:py-16 bg-muted/40"> {/* Added standard padding & bg */}
           <div className="container mx-auto px-4 max-w-2xl"> {/* Container with max-width for form */}
            <Card className="shadow-md border"> {/* Added shadow and border like Wedding page */}
              <CardHeader className="text-center"> {/* Centered header */}
                <CardTitle className="text-2xl md:text-3xl font-header">Ready to see it in person?</CardTitle> {/* Use font-header */}
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-6 font-mono"> {/* Use font-body */}
                  Schedule a visit to experience Somerhaus firsthand. Use the form below to book your tour.
                </p>
                {/* HoneyBook Embed Code */}
                <div className="mt-6">
                  <div className="hb-p-61a840e6341fbd00074ed82a-5"></div>
                  <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.honeybook.com/p.png?pid=61a840e6341fbd00074ed82a"
                    alt=""
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
      <Footerdemo />
    </div>
  );
};

export default About;