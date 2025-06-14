
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import Seo from '@/components/seo/Seo';

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
    addressCountry: "US",
  },
};

const HappyHours = () => {
  const pricingPlans = [
    {
      name: "After-Work Social",
      price: "$2,200",
      period: "/event",
      description: "Perfect for casual networking and team gatherings",
      features: [
        "Up to 40 guests",
        "3-hour venue rental",
        "Bar setup included",
        "High-top cocktail tables",
        "Ambient lighting",
        "Sound system for background music",
        "Event coordination"
      ],
      popular: false,
      buttonText: "Book This Package"
    },
    {
      name: "Premium Happy Hour",
      price: "$3,800",
      period: "/event",
      description: "Our most popular package for memorable happy hour events",
      features: [
        "Up to 70 guests",
        "4-hour venue rental",
        "Full bar service",
        "Mix of seating options",
        "Premium lighting package",
        "Professional sound system",
        "Appetizer station setup",
        "Dedicated bartender",
        "Event management"
      ],
      popular: true,
      buttonText: "Book This Package"
    },
    {
      name: "Corporate Celebration",
      price: "$5,500",
      period: "/event",
      description: "Ultimate happy hour experience for special company events",
      features: [
        "Up to 100 guests",
        "5-hour venue rental",
        "Premium bar package",
        "Multiple bar stations",
        "Custom lighting design",
        "Live music accommodation",
        "Full catering coordination",
        "Multiple bartenders",
        "Professional event management",
        "Photography coordination"
      ],
      popular: false,
      buttonText: "Book This Package"
    }
  ];

  const faqData = [
    {
      question: "What makes Somerhaus ideal for happy hour events?",
      answer: "Our industrial-chic atmosphere and flexible layout create the perfect setting for both casual and upscale happy hour events. The open floor plan allows for natural mingling, while our bar setup and lighting options create an inviting after-work atmosphere."
    },
    {
      question: "What bar services do you provide?",
      answer: "We offer full bar service with professional bartenders, premium liquor options, wine selections, and craft beer choices. Our packages can be customized to include signature cocktails, wine tastings, or specific drink preferences for your group."
    },
    {
      question: "Can we serve food during happy hour events?",
      answer: "Absolutely! We work with preferred caterers to provide appetizer stations, hors d'oeuvres, and finger foods perfect for happy hour gatherings. Options range from simple bar snacks to elaborate appetizer spreads depending on your package."
    },
    {
      question: "What are the typical hours for happy hour events?",
      answer: "Happy hour events typically run from 4 PM to 8 PM on weekdays, though we can accommodate different time slots based on your needs. Weekend happy hours are also available and can start earlier or run later depending on your preference."
    },
    {
      question: "Do you accommodate corporate networking events?",
      answer: "Yes! Our space is perfect for corporate networking, team building events, client appreciation gatherings, and company celebrations. We can provide name tags, networking facilitation, and professional atmosphere while maintaining the relaxed happy hour vibe."
    },
    {
      question: "How far in advance should we book a happy hour event?",
      answer: "We recommend booking 2-3 months in advance for weekday happy hours, especially during busy networking seasons. Weekend events may require longer lead times. However, we can often accommodate shorter notice depending on availability."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#F5F3F1' }}>
      <Seo
        title="Happy Hour Venue | Somerhaus"
        description="Plan networking mixers and team gatherings at our OTR event space."
        schema={[businessSchema, faqSchema]}
      />
      <Header />
      
      <HeroSection 
        backgroundType="static"
        backgroundSources={[{
          src: "/lovable-uploads/8eb7ab37-08dc-43b9-9f7a-fa74ac9b112d.png",
          alt: "Happy Hour Events at Somerhaus"
        }]}
        title="Happy Hour Events at Somerhaus"
        subtitle="Unwind and connect in Cincinnati's premier event space. From networking to casual team gatherings, our 3,080 sq ft venue sets the mood for memorable happy hours—reserve your time today."
      />

      <ImageGallerySection />

      <PricingSection 
        title="Happy Hour Packages"
        description="Choose the perfect package for your after-work celebration"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Happy Hour Events FAQ"
        description="Everything you need to know about hosting your happy hour event at Somerhaus"
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

      <Footerdemo />
    </main>
  );
};

export default HappyHours;
