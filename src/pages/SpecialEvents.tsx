import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';

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
      buttonText: "Book This Package"
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
      buttonText: "Book This Package"
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
      buttonText: "Book This Package"
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

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#F5F3F1' }}>
      <Header />
      
      <HeroSection 
        backgroundType="static"
        backgroundSources={[{
          src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
          alt: "Special Events at Somerhaus"
        }]}
        title="Special Events at Somerhaus"
        subtitle="Creating Unforgettable Moments in Cincinnati's Most Enchanting Venue. From milestone celebrations to intimate gatherings, our 3,080 sq ft industrial-chic space in Over-the-Rhine provides the perfect backdrop for your special event."
      />

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
      />

      <CTA />

      <Footerdemo />
    </main>
  );
};

export default SpecialEvents;
