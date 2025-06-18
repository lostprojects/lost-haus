import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import UniversalHero from '@/components/shared/UniversalHero';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import Seo from '@/components/seo/Seo';
import { businessSchema, createFaqSchema } from '@/components/seo/seo-schemas';
import { getFAQsForPage } from '@/lib/faqUtils';


const SpecialEvents = () => {
  const pricingPlans = [
    {
      name: "Intimate Gathering",
      price: "$2,500",
      period: "/event",
      description: "Perfect for small celebrations and milestone moments",
      features: [
        "Up to 50 guests",
        "4-hour venue rental",
        "Basic lighting package",
        "Tables and chairs included",
        "Bridal suite access",
        "Event coordination"
      ],
      popular: false,
    },
    {
      name: "Celebration Package",
      price: "$4,200",
      period: "/event",
      description: "Our most popular package for special occasions",
      features: [
        "Up to 120 guests",
        "6-hour venue rental",
        "Premium lighting & sound",
        "All furniture included",
        "Full venue access",
        "Dedicated event coordinator",
        "Bar service available",
        "Vendor coordination"
      ],
      popular: true,
    },
    {
      name: "Grand Celebration",
      price: "$6,500",
      period: "/event",
      description: "Ultimate luxury for your most important celebrations",
      features: [
        "Up to 200 guests",
        "8-hour venue rental",
        "Complete A/V package",
        "Custom lighting design",
        "Premium bar service",
        "Full catering coordination",
        "Valet parking available",
        "Photography coordination",
        "Day-of event management"
      ],
      popular: false,
    }
  ];

  // Get FAQs from centralized data
  const faqData = getFAQsForPage('specialevents', 6);

  const specialeventsFaqSchema = createFaqSchema(faqData);

  return (
    <main className="min-h-screen relative bg-background">
      <Seo
        title="Special Event Venue in Cincinnati | Somerhaus"
        description="Host milestone celebrations in our character-rich Cincinnati venue."
        schema={[businessSchema, specialeventsFaqSchema]}
      />
      <Header />
      
      <UniversalHero pageKey="specialevents" />

      <ImageGallerySection />

      <PricingSection 
        title="Special Event Packages"
        description="Choose the perfect package for your celebration"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Special Events FAQ"
        description="Everything you need to know about hosting your special event at Somerhaus"
        faqs={faqData}
        postAccordionContent={
          <p className="text-center mt-8 font-body text-muted-foreground">
            Need more answers? Visit our{' '}
            <a href="/faq" className="text-primary underline hover:text-primary/80">
              full FAQ page
            </a>
            .
          </p>
        }
      />

      <CTA />

      <Footer logoType="clients" />
    </main>
  );
};

export default SpecialEvents;
