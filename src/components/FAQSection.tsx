'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
  sectionClassName?: string; // Optional class for the section
  containerClassName?: string; // Optional class for the container div
  preTitleContent?: React.ReactNode; // Optional content before the title
  titleClassName?: string; // Optional class for the title
  descriptionClassName?: string; // Optional class for the description
  accordionContainerClassName?: string; // Optional class for the accordion container
  accordionTriggerClassName?: string; // Optional class for the accordion trigger
  accordionContentClassName?: string; // Optional class for the accordion content
  postAccordionContent?: React.ReactNode; // Optional content after the accordion
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
  sectionClassName = "py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white",
  containerClassName = "container mx-auto px-4",
  preTitleContent,
  titleClassName = "text-3xl md:text-4xl font-header tracking-tight mb-4",
  descriptionClassName = "text-lg text-muted-foreground max-w-2xl mx-auto font-body",
  accordionContainerClassName = "max-w-3xl mx-auto",
  accordionTriggerClassName = "text-left font-medium", // Default trigger class
  accordionContentClassName = "text-muted-foreground", // Default content class
  postAccordionContent
}) => {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className="text-center mb-12">
          {preTitleContent} {/* Render pre-title content */}
          <h2 className={titleClassName}>{title}</h2>
          {description && (
            <p className={descriptionClassName}>
              {description}
            </p>
          )}
        </div>

        <div className={accordionContainerClassName}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={accordionTriggerClassName}> {/* Use prop for class */}
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={accordionContentClassName}> {/* Use prop for class */}
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {postAccordionContent} {/* Render post-accordion content */}
      </div>
    </section>
  );
};

export default FAQSection;