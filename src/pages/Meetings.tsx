
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
import { LogoTicker } from '@/components/blocks/LogoTicker';
import { getFAQsForPage } from '@/lib/faqUtils';




const Meetings = () => {
  const pricingPlans = [
    {
      name: "Team Meeting",
      price: "$800",
      period: "/event",
      description: "Perfect for small team meetings and brainstorming sessions",
      features: [
        "Up to 15 people",
        "Half-day rental (4 hours)",
        "High-speed WiFi",
        "Presentation display",
        "Conference seating setup",
        "Coffee service",
        "Basic AV equipment",
        "Meeting coordination"
      ],
      popular: false,
    },
    {
      name: "Board Meeting",
      price: "$1,800",
      period: "/event",
      description: "Our most popular package for executive and board meetings",
      features: [
        "Up to 25 people",
        "Full-day rental (8 hours)",
        "Premium WiFi network",
        "Multiple displays available",
        "Executive boardroom setup",
        "Catered lunch included",
        "Professional AV system",
        "Video conferencing setup",
        "Dedicated meeting support",
        "Private breakout spaces"
      ],
      popular: true,
    },
    {
      name: "Corporate Summit",
      price: "$3,200",
      period: "/event",
      description: "Ultimate meeting experience for large corporate gatherings",
      features: [
        "Up to 50 people",
        "Extended rental (10 hours)",
        "Enterprise-grade WiFi",
        "Multi-screen presentation setup",
        "Theater and breakout configurations",
        "Full catering service",
        "Live streaming capabilities",
        "Professional recording options",
        "On-site technical support",
        "Welcome reception area",
        "Executive hospitality suite"
      ],
      popular: false,
    }
  ];

  // Get FAQs from centralized data
  const faqData = getFAQsForPage('meetings', 6);

  const meetingsFaqSchema = createFaqSchema(faqData);

  return (
    <main className="min-h-screen relative bg-background">
      <Seo
        title="Meeting Venue in Cincinnati | Somerhaus"
        description="Hold productive corporate gatherings in our flexible Over-the-Rhine space."
        schema={[businessSchema, meetingsFaqSchema]}
      />
      <Header />
      
      <UniversalHero pageKey="meetings" />

              <LogoTicker type="clients" />

      <ImageGallerySection />

      <PricingSection 
        title="Meeting Packages"
        description="Choose the perfect package for your business meeting needs"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Business Meetings FAQ"
        description="Everything you need to know about hosting your business meeting at Somerhaus"
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

      <Footer logoType="press" />
    </main>
  );
};

export default Meetings;
