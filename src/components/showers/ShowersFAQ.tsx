
import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-16 bg-[#FCF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Questions & Answers</Badge>
          <h2 className="text-3xl md:text-5xl font-header tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Find answers to common questions about hosting your shower or celebration at Somerhaus.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-header text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground">
            Have more questions? Don't hesitate to <a href="#contact" className="text-primary underline hover:text-primary/80">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowersFAQ;
