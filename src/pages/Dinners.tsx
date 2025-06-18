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

  const faqData = [
    {
      question: "What types of dinner events work best at Somerhaus?",
      answer: "Our space is perfect for rehearsal dinners, anniversary celebrations, birthday dinners, corporate dinner events, holiday parties, and intimate wedding receptions. The warm, industrial-chic atmosphere creates an elegant yet comfortable dining experience."
    },
    {
      question: "Do you provide catering services for dinner events?",
      answer: "We work with an exclusive list of preferred caterers who specialize in plated dinners and family-style service. Our caterers know the space intimately and can accommodate various dietary restrictions and menu preferences. We'll coordinate all catering logistics for you."
    },
    {
      question: "What dining configurations are available?",
      answer: "We can accommodate various seating arrangements including round tables for 6-8 guests, long family-style tables, U-shaped configurations, or a mix of seating styles. Our team will work with you to design the perfect layout for your dinner event."
    },
    {
      question: "Can we host a cocktail hour before dinner?",
      answer: "Absolutely! Most dinner packages include time for a cocktail reception before the seated portion. We can set up a separate bar area and configure the space to flow naturally from cocktails to dinner seating."
    },
    {
      question: "What's included in the kitchen access?",
      answer: "Our prep kitchen includes warming equipment, refrigeration, and basic prep space for caterers. While it's not a full commercial kitchen, it provides everything needed for professional catering teams to execute beautiful plated dinners."
    },
    {
      question: "How far in advance should we book our dinner event?",
      answer: "We recommend booking 4-6 months in advance for dinner events, especially for popular dates like Friday and Saturday evenings. However, we can often accommodate shorter notice depending on availability."
    }
  ];

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
