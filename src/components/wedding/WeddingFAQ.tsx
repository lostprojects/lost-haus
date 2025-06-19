
import React from 'react';
import FAQSection from '@/components/FAQSection'; // Import the new component

const WeddingFAQ = () => {
  const faqs = [
    {
      question: "How many guests can Somerhaus accommodate?",
      answer: "Somerhaus can accommodate up to 130 guests for a cocktail-style reception, or up to 80 seated guests with tables and chairs provided."
    },
    {
      question: "What is included in the venue rental?",
      answer: "Our venue rental includes tables and chairs for up to 80 guests, basic lighting, sound system with wireless microphone, setup and tear-down assistance, and access to our bridal suite."
    },
    {
      question: "Can we bring our own vendors?",
      answer: "Yes, you are welcome to bring your own vendors. We also have a list of preferred vendors who are familiar with our space and can ensure your day runs smoothly."
    },
    {
      question: "How far in advance should we book?",
      answer: "For peak season dates (April-October, December), we recommend booking 12-18 months in advance. Off-peak dates can sometimes be booked with less lead time."
    },
    {
      question: "Is there parking available for guests?",
      answer: "While Somerhaus doesn't have its own parking lot, there are several public parking options nearby in Over-the-Rhine. We can provide a list of recommended parking locations for your guests."
    },
    {
      question: "Can we visit the venue before booking?",
      answer: "Absolutely! We encourage couples to schedule a tour to experience our unique space firsthand before making any decisions."
    }
  ];

  return (
    <FAQSection
      title="Frequently Asked Questions"
      description="Find answers to common questions about hosting your wedding at Somerhaus."
      faqs={faqs}
      // The default class names in FAQSection match the original styling, so no need to override them here.
      postAccordionContent={
        <p className="text-center mt-8 font-body text-muted-foreground">
          Need more answers? Visit our{' '}
          <a href="/about/faq" className="text-primary underline hover:text-primary/80">
            full FAQ page
          </a>
          .
        </p>
      }
    />
  );
};

export default WeddingFAQ;
