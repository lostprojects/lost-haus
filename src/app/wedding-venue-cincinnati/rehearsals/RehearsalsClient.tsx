'use client'

import React from 'react';
import PageLayout from '@/components/PageLayout';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import { Testimonials } from '@/components/ui/reviews';
import { CTA } from '@/components/CTASection';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import { createFaqSchema } from '@/components/seo/seo-schemas';
import { rehearsalsPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';

const RehearsalsClient = () => {
  const faqData = [
    {
      question: "What makes Somerhaus ideal for wedding rehearsals?",
      answer: "Our spacious 3,080 sq ft venue provides ample room for ceremony run-throughs and rehearsal dinners in one location. The industrial-chic atmosphere creates a relaxed yet elegant setting where your wedding party can practice and celebrate together."
    },
    {
      question: "Can we practice our ceremony at the venue?",
      answer: "Absolutely! We can set up the space to mirror your wedding day ceremony layout, allowing you to practice processionals, positioning, and timing. Our sound system is available for music and microphone testing during the rehearsal."
    },
    {
      question: "Do you coordinate rehearsal dinners?",
      answer: "Yes! We work with preferred caterers to provide everything from casual family-style dinners to formal plated meals. Our team will coordinate all aspects of your rehearsal dinner, from setup to service, so you can focus on your family and wedding party."
    },
    {
      question: "What time should we schedule our rehearsal?",
      answer: "Most rehearsals work best in the early evening, typically starting around 4-5 PM for the practice, followed by dinner around 6-7 PM. We can accommodate different timing based on your needs and other wedding weekend events."
    },
    {
      question: "Can out-of-town guests join the rehearsal dinner?",
      answer: "Definitely! Our space can accommodate extended family and out-of-town guests who want to join the celebration. We can adjust seating arrangements and catering quantities to include everyone you'd like to celebrate with."
    },
    {
      question: "How far in advance should we book our rehearsal?",
      answer: "We recommend booking your rehearsal when you book your wedding day, as rehearsals typically happen the day before the wedding. This ensures availability and allows us to coordinate both events seamlessly."
    }
  ];

  const rehearsalsFaqSchema = createFaqSchema(faqData);

  return (
    <PageLayout heroKey="rehearsals" footerLogoType="clients" mainClassName="relative">
      <ImageGallerySection />

      <PricingSection 
        title="Rehearsal Packages"
        description="Choose the perfect package for your wedding rehearsal and dinner"
        packages={rehearsalsPricing}
      />

      <Testimonials />

      <FAQSection
        title="Wedding Rehearsals FAQ"
        description="Everything you need to know about hosting your wedding rehearsal at Somerhaus"
        faqs={faqData}
        postAccordionContent={<FaqMoreAnswers />}
      />

      <CTA />
    </PageLayout>
  );
};

export default RehearsalsClient;