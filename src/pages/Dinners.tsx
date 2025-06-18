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


const Dinners = () => {
  const pricingPlans = [
    {
      name: "Intimate Dinner",
      price: "$3,200",
      period: "/event",
      description: "Perfect for small dinner parties and special occasions",
      features: [
        "Up to 30 guests",
        "5-hour venue rental",
        "Premium lighting package",
        "Round tables for 6-8",
        "Full kitchen access",
        "Dedicated event coordinator",
        "Bar setup included"
      ],
      popular: false,
    },
    {
      name: "Elegant Dinner",
      price: "$4,800",
      period: "/event",
      description: "Our most popular dinner package for memorable evenings",
      features: [
        "Up to 60 guests",
        "6-hour venue rental",
        "Custom lighting design",
        "Mix of table configurations",
        "Full catering coordination",
        "Premium bar service",
        "Professional sound system",
        "Floral arrangement space",
        "Photography coordination"
      ],
      popular: true,
    },
    {
      name: "Grand Dinner Event",
      price: "$7,200",
      period: "/event",
      description: "Ultimate luxury dining experience for special celebrations",
      features: [
        "Up to 80 guests seated",
        "8-hour venue rental",
        "Complete lighting transformation",
        "Custom table arrangements",
        "Multi-course coordination",
        "Full-service bar",
        "Live music accommodation",
        "Valet parking available",
        "Professional event management",
        "Custom menu planning support"
      ],
      popular: false,
    }
  ];

  // Get FAQs from centralized data
  const faqData = getFAQsForPage('dinners', 6);

  const dinnersFaqSchema = createFaqSchema(faqData);

  return (
    <main className="min-h-screen relative bg-background">
      <Seo
        title="Dinner Event Venue in Cincinnati | Somerhaus"
        description="Host rehearsal dinners and celebrations in our industrial-chic Cincinnati venue."
        schema={[businessSchema, dinnersFaqSchema]}
      />
      <Header />
      
      <UniversalHero pageKey="dinners" />

      <ImageGallerySection />

      <PricingSection 
        title="Dinner Event Packages"
        description="Choose the perfect package for your dining celebration"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Dinner Events FAQ"
        description="Everything you need to know about hosting your dinner event at Somerhaus"
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

export default Dinners;
