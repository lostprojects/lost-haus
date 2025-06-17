import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What bar packages do you offer?',
    answer: (
      <div>
        <p>We provide several tiers to fit different budgets:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Premium Open Bar:</strong> Top-shelf spirits, craft beers and curated wines ($45-55/person)</li>
          <li><strong>Standard Open Bar:</strong> Quality spirits, domestic and imported beers, house wines ($35-45/person)</li>
          <li><strong>Beer & Wine:</strong> Selection of beers with house wines ($25-35/person)</li>
          <li><strong>Consumption Bar:</strong> Pay only for what\'s consumed (minimums apply)</li>
          <li><strong>Cash Bar:</strong> Guests purchase their own drinks (setup fees apply)</li>
        </ul>
        <p className="mt-2">All packages include professional bartenders, standard mixers and non-alcoholic options. Custom packages and signature cocktails are available upon request.</p>
      </div>
    ),
  },
  {
    question: 'Can we bring our own alcohol?',
    answer: 'Yes. Our BYOB option starts at $10 per guest which covers licensed bartenders, mixers, ice, glassware and insurance. Alcohol must be delivered during your rental and removed afterward. Only our staff may serve and all state liquor laws apply.',
  },
];

const BarFaq: React.FC = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-header text-center mb-6">Bar Service FAQs</h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default BarFaq;
