
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

const Brunches = () => {
  const pricingPlans = [
    {
      name: "Intimate Brunch",
      price: "$2,800",
      period: "/event",
      description: "Perfect for small brunch gatherings and celebrations",
      features: [
        "Up to 40 guests",
        "4-hour venue rental",
        "Morning light setup",
        "Mix of high-top and low tables",
        "Coffee service coordination",
        "Mimosa bar setup",
        "Dedicated event coordinator"
      ],
      popular: false,
      buttonText: "Book This Package"
    },
    {
      name: "Classic Brunch",
      price: "$4,200",
      period: "/event",
      description: "Our most popular brunch package for memorable mornings",
      features: [
        "Up to 70 guests",
        "5-hour venue rental",
        "Premium brunch lighting",
        "Buffet and seating areas",
        "Full coffee & tea service",
        "Signature brunch cocktails",
        "Professional sound system",
        "Catering coordination",
        "Welcome mimosa service"
      ],
      popular: true,
      buttonText: "Book This Package"
    },
    {
      name: "Grand Brunch Event",
      price: "$6,200",
      period: "/event",
      description: "Ultimate brunch experience for special celebrations",
      features: [
        "Up to 90 guests",
        "6-hour venue rental",
        "Custom brunch atmosphere",
        "Multiple dining stations",
        "Artisanal coffee bar",
        "Full cocktail service",
        "Live music accommodation",
        "Premium catering support",
        "Professional event management",
        "Custom menu coordination"
      ],
      popular: false,
      buttonText: "Book This Package"
    }
  ];

  const faqData = [
    {
      question: "What makes Somerhaus perfect for brunch events?",
      answer: "Our space features beautiful natural light that's ideal for morning and early afternoon events. The industrial-chic atmosphere combined with our flexible layout creates the perfect backdrop for elegant brunch gatherings, from baby showers to birthday brunches."
    },
    {
      question: "Do you provide brunch catering services?",
      answer: "We work with preferred caterers who specialize in brunch menus, including both buffet-style and plated brunch options. Our catering partners can accommodate everything from classic brunch fare to specialty dietary requirements and custom menu requests."
    },
    {
      question: "Can we serve alcohol at brunch events?",
      answer: "Absolutely! Brunch cocktails are very popular at our venue. We can provide mimosa bars, bloody mary stations, and other brunch cocktails through our bar packages. Our team will coordinate all alcohol service in compliance with local regulations."
    },
    {
      question: "What time can brunch events start and end?",
      answer: "Brunch events typically run from 10 AM to 3 PM, though we can accommodate earlier start times for special requests. Our packages include setup time, so your actual event can begin when your guests arrive during these prime brunch hours."
    },
    {
      question: "Do you have coffee service available?",
      answer: "Yes! We work with local coffee roasters to provide professional coffee and tea service for brunch events. This can include everything from simple coffee stations to elaborate espresso bars, depending on your package and preferences."
    },
    {
      question: "How far in advance should we book a brunch event?",
      answer: "We recommend booking 3-4 months in advance for weekend brunch events, especially during popular seasons like spring and early summer. Weekday brunch events often have more flexibility and can sometimes be booked with shorter notice."
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
        title="Brunch Event Venue | Somerhaus"
        description="Host stylish brunch celebrations in our light-filled Cincinnati space."
        schema={[businessSchema, faqSchema]}
      />
      <Header />
      
      <HeroSection 
        backgroundType="static"
        backgroundSources={[{
          src: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png",
          alt: "Brunch Events at Somerhaus"
        }]}
        title="Brunch Events at Somerhaus"
        subtitle="Elegant morning and afternoon celebrations in Cincinnati's premier venue. From showers to birthday brunches, our 3,080 sq ft space is made for unforgettable gatherings—reserve your date now."
      />

      <ImageGallerySection />

      <PricingSection 
        title="Brunch Event Packages"
        description="Choose the perfect package for your brunch celebration"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Brunch Events FAQ"
        description="Everything you need to know about hosting your brunch event at Somerhaus"
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

export default Brunches;
