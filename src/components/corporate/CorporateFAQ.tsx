'use client';


import React from 'react';
import FAQSection from '@/components/FAQSection'; // Import shared component
import { Button } from "@/components/ui/button"; // Keep Button import

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
    <FAQSection
      title="Frequently Asked Questions"
      description="Find answers to common questions about hosting your corporate event at Somerhaus."
      faqs={faqs}
      sectionClassName="py-20 bg-gray-50" // Override section style
      titleClassName="text-3xl md:text-4xl font-header mb-4" // Override title style
      descriptionClassName="max-w-2xl mx-auto text-lg text-gray-600 font-body" // Override description style
      accordionTriggerClassName="text-lg font-body text-left" // Override trigger style
      accordionContentClassName="font-body text-gray-700" // Override content style
      postAccordionContent={ // Add the contact section after the accordion
        <div className="mt-12 text-center">
          <p className="mb-4 font-body">
            Have a question that's not answered here?
          </p>
          <Button variant="outline" className="font-body" asChild>
            <a href="/about/contact">Contact Us</a>
          </Button>
          <p className="mt-4 font-body text-muted-foreground">
            Or see our{' '}
            <a href="/about/faq" className="text-primary underline hover:text-primary/80">
              full FAQ page
            </a>
            .
          </p>
        </div>
      }
    />
  );
};

export default CorporateFAQ;
