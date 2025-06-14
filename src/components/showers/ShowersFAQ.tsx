
import React from 'react';
import FAQSection from '@/components/shared/FAQSection'; // Import the shared component
import { Badge } from "@/components/ui/badge"; // Keep Badge import

const ShowersFAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I book the venue for my shower?",
      answer: "We recommend booking at least 3-6 months in advance for shower events, especially for weekend dates during peak seasons (spring and summer). Popular dates fill quickly, so the earlier you book, the better!"
    },
    {
      question: "What is the capacity for shower events?",
      answer: "Our venue comfortably accommodates anywhere from 30 to 100 guests for shower events, depending on your seating arrangement and setup preferences."
    },
    {
      question: "Can I bring my own decorations?",
      answer: "Absolutely! You're welcome to bring your own decorations to personalize your celebration. We just ask that they be freestanding (no nails or tape on walls) and removed at the end of your event."
    },
    {
      question: "Do you offer catering services or do I need to hire a separate caterer?",
      answer: "We don't provide in-house catering, but we have a list of preferred caterers who are familiar with our space. You're welcome to choose from this list or bring in your own licensed caterer for a small outside catering fee."
    },
    {
      question: "How long do shower rentals typically last?",
      answer: "Our standard shower packages include 4-8 hours of venue access, which includes setup and cleanup time. The actual event typically lasts 2-4 hours, with the remaining time allocated for setup and teardown."
    },
    {
      question: "Can I schedule a tour of the venue before booking?",
      answer: "Yes! We encourage you to schedule a tour to see our space in person. You can book a tour through our website or by calling our event coordinator directly."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our standard policy requires a non-refundable deposit to secure your date. If you need to cancel, we require written notice at least 60 days prior to your event for a partial refund of any additional payments made beyond the deposit."
    }
  ];

  return (
    <FAQSection
      title="Frequently Asked Questions"
      description="Find answers to common questions about hosting your shower or celebration at Somerhaus."
      faqs={faqs}
      sectionClassName="py-16 bg-[#FCF8F5]" // Override section background
      preTitleContent={ // Add the badge before the title
        <Badge className="mb-4 font-body">Questions & Answers</Badge>
      }
      titleClassName="text-3xl md:text-5xl font-header tracking-tight mb-4" // Override title style
      accordionTriggerClassName="text-left font-header text-lg" // Override trigger style
      accordionContentClassName="font-body text-muted-foreground" // Override content style
      postAccordionContent={ // Add the contact link after the accordion
        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground">
            Have more questions? Don't hesitate to <a href="#contact" className="text-primary underline hover:text-primary/80">contact us</a>.
            {' '}You can also browse our{' '}
            <a href="/faq" className="text-primary underline hover:text-primary/80">
              full FAQ page
            </a>
            .
          </p>
        </div>
      }
    />
  );
};

export default ShowersFAQ;
