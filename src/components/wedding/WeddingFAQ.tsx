
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Find answers to common questions about hosting your wedding at Somerhaus.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WeddingFAQ;
