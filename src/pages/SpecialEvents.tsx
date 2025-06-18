import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import UniversalHero from '@/components/shared/UniversalHero';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import Seo, { businessSchema, createFaqSchema } from '@/components/seo/Seo';


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

  const faqData = [
    {
      question: "What types of special events do you host?",
      answer: "We host a wide variety of special events including birthday celebrations, anniversaries, graduations, retirement parties, holiday gatherings, fundraisers, and other milestone celebrations. Our versatile space adapts beautifully to any occasion."
    },
    {
      question: "How far in advance should I book my special event?",
      answer: "We recommend booking 3-6 months in advance for popular dates, especially during peak seasons (spring and fall). However, we can often accommodate events with shorter notice depending on availability."
    },
    {
      question: "Do you provide catering services?",
      answer: "We work with a curated list of preferred caterers who know our space well, or you can choose your own licensed caterer. We'll coordinate with your chosen catering team to ensure everything runs smoothly on your event day."
    },
    {
      question: "Can I decorate the venue for my special event?",
      answer: "Absolutely! We encourage personalization to make your event unique. We have guidelines for decorating that our event coordinator will review with you. Most decorations are permitted, and we can help coordinate setup and breakdown."
    },
    {
      question: "What's included in the venue rental?",
      answer: "All packages include venue access, tables, chairs, basic lighting, sound system, bridal suite access, and event coordination. Premium packages include additional amenities like upgraded lighting, bar service, and extended access hours."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans to make your special event more manageable. Typically, we require a deposit to secure your date, with the balance due closer to your event date. Contact us to discuss payment options."
    }
  ];

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
