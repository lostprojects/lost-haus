
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CorporateFAQ = () => {
  const faqs = [
    {
      question: "What types of corporate events work best at Somerhaus?",
      answer: "Somerhaus is ideal for a wide range of corporate events including team meetings, client presentations, training sessions, product launches, company celebrations, networking events, and team-building workshops. Our versatile space adapts to gatherings from 10 to 150 attendees."
    },
    {
      question: "What technology and equipment are included with venue rental?",
      answer: "Our standard package includes high-speed WiFi, multiple display options with HDMI connectivity, a premium sound system with microphones, and basic presentation tools. Additional specialized equipment is available upon request for an additional fee."
    },
    {
      question: "Is there parking available for guests?",
      answer: "While Somerhaus doesn't have a private lot, there are multiple public parking options within a 2-5 minute walk, including the Mercer Garage and several street parking areas. We're happy to provide detailed parking information for your attendees."
    },
    {
      question: "Can you accommodate catering for corporate events?",
      answer: "Absolutely! We work with several preferred catering partners who specialize in corporate events, from coffee and breakfast service to full lunch buffets and evening receptions. We can also accommodate outside caterers with prior approval."
    },
    {
      question: "What is your cancellation policy for corporate bookings?",
      answer: "For corporate events, we require a 50% deposit to secure your date. This deposit is fully refundable up to 30 days before your event. Cancellations within 30 days may receive partial refunds depending on timing and circumstances."
    },
    {
      question: "How far in advance should we book for a corporate event?",
      answer: "We recommend booking 2-3 months in advance for standard corporate events and 4-6 months for larger or more complex gatherings. However, we occasionally have last-minute availability, so please contact us even for near-term needs."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-header mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Find answers to common questions about hosting your corporate event at Somerhaus.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-body text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 font-body">
            Have a question that's not answered here?
          </p>
          <Button variant="outline" className="font-body">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporateFAQ;
