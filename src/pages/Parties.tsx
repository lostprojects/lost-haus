import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import PartiesHero from '@/components/parties/PartiesHero';
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

const Parties = () => {
  const pricingPlans = [
    {
      name: "Birthday Bash",
      price: "$2,500",
      period: "/event",
      description: "Perfect for milestone birthday celebrations",
      features: [
        "Up to 50 guests",
        "4-hour venue rental",
        "Party lighting setup",
        "Sound system for music",
        "Mix of seating options",
        "Bar setup available",
        "Decoration coordination",
        "Event coordination"
      ],
      popular: false,
      buttonText: "Book This Package"
    },
    {
      name: "Celebration Party",
      price: "$3,800",
      period: "/event",
      description: "Our most popular party package for special occasions",
      features: [
        "Up to 75 guests",
        "5-hour venue rental",
        "Custom lighting design",
        "Professional sound system",
        "Full bar service",
        "Catering coordination",
        "Dance floor setup",
        "Photography space",
        "Dedicated party coordinator",
        "Welcome cocktail service"
      ],
      popular: true,
      buttonText: "Book This Package"
    },
    {
      name: "Grand Celebration",
      price: "$5,800",
      period: "/event",
      description: "Ultimate party experience for unforgettable celebrations",
      features: [
        "Up to 100 guests",
        "6-hour venue rental",
        "Premium lighting package",
        "DJ booth accommodation",
        "Full premium bar service",
        "Multi-course catering",
        "Live entertainment space",
        "VIP lounge area",
        "Professional event management",
        "Custom decoration support",
        "Late night service"
      ],
      popular: false,
      buttonText: "Book This Package"
    }
  ];

  const faqData = [
    {
      question: "What types of parties work best at Somerhaus?",
      answer: "Our venue is perfect for birthday parties, anniversary celebrations, graduation parties, holiday celebrations, retirement parties, and milestone celebrations. The industrial-chic atmosphere and flexible layout create the perfect backdrop for memorable party experiences."
    },
    {
      question: "Can we bring our own DJ or live entertainment?",
      answer: "Absolutely! We welcome DJs, live bands, and other entertainment. Our sound system can accommodate most setups, and we have adequate power and space for professional entertainment equipment. We can also recommend preferred entertainment vendors if needed."
    },
    {
      question: "Do you allow dancing at party events?",
      answer: "Yes! Dancing is encouraged at our venue. We can clear and designate a dance floor area, and our sound system is perfect for party music. The open floor plan naturally accommodates dancing while maintaining space for mingling and socializing."
    },
    {
      question: "What decoration options are available?",
      answer: "You're welcome to decorate the space for your party theme. We can coordinate balloon arrangements, centerpieces, lighting effects, and other decorations. Our team will work with you to ensure decorations complement the venue's aesthetic while creating your desired party atmosphere."
    },
    {
      question: "Can we serve a full dinner or just appetizers?",
      answer: "We can accommodate both! Our catering partners can provide everything from cocktail appetizers and finger foods to full plated dinners or buffet-style meals. The choice depends on your party style and guest preferences."
    },
    {
      question: "What's the latest our party can run?",
      answer: "Party end times depend on the day of the week and local noise ordinances. Weekend parties can typically run later than weekday events. We'll work with you during planning to establish appropriate timing that works for your celebration and complies with local regulations."
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
        title="Party Venue in Cincinnati | Somerhaus"
        description="Throw unforgettable celebrations in our one-of-a-kind Cincinnati venue."
        schema={[businessSchema, faqSchema]}
      />
      <Header />
      
      <PartiesHero />

      <ImageGallerySection />

      <PricingSection 
        title="Party Packages"
        description="Choose the perfect package for your celebration"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Party Events FAQ"
        description="Everything you need to know about hosting your party at Somerhaus"
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

export default Parties;
