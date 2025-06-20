'use client'

import React from 'react';
import PageLayout from '@/components/PageLayout';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import { Testimonials } from '@/components/ui/reviews';
import { CTA } from '@/components/CTASection';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import { businessSchema, createFaqSchema } from '@/components/seo/seo-schemas';
import { partiesPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';


const Parties = () => {

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

  const partiesFaqSchema = createFaqSchema(faqData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <PageLayout heroKey="parties" footerLogoType="clients" mainClassName="relative">
      

      <ImageGallerySection />

      <PricingSection 
        title="Party Packages"
        description="Choose the perfect package for your celebration"
        packages={partiesPricing}
      />

      <Testimonials />

      <FAQSection
        title="Party Events FAQ"
        description="Everything you need to know about hosting your party at Somerhaus"
        faqs={faqData}
        postAccordionContent={<FaqMoreAnswers />}
      />

      <CTA />
    </PageLayout>
    </>
  );
};

export default Parties;
