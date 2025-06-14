
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { FaqCategories, faqItems } from '@/components/faq/FaqCategories';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import Seo from '@/components/seo/Seo';

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  telephone: "513-902-1415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
  addressCountry: "US",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text:
        typeof item.answer === 'string'
          ? item.answer
          : renderToStaticMarkup(item.answer as React.ReactElement),
    },
  })),
};

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title="Somerhaus FAQ | Cincinnati Event Venue"
        description="Answers to common questions about our Cincinnati event venue."
        schema={[businessSchema, faqSchema]}
      />
      <Header />
      
      {/* Hero section with background image */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png" 
            alt="Somerhaus event venue"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center flex items-center justify-center h-[500px]">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6 font-header">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-mono">
              Find answers to common questions about Somerhaus. We're here to help make your event planning smooth and stress-free.
            </p>
          </div>
        </div>
      </section>
      
      <FaqCategories />
      <div className="text-center py-12">
        <p className="text-lg font-body text-muted-foreground">
          Still have questions?{' '}
          <a href="/contact" className="text-primary underline hover:text-primary/80">
            Contact us
          </a>{' '}
          and we'll be happy to help.
        </p>
      </div>
      <Footerdemo />
    </main>
  );
};

export default FAQ;

