import Header from '@/components/ui/header';
import { Footer } from "@/components/ui/footer-section";
import { SimpleFaqCategories } from '@/components/faq/SimpleFaqCategories';
import React from 'react';
import Seo, { businessSchema, mainFaqSchema } from '@/components/seo/Seo';

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <Seo
        title="Somerhaus FAQ | Cincinnati Event Venue"
        description="Answers to common questions about our Cincinnati event venue."
        schema={[businessSchema, mainFaqSchema]}
      />
      <Header />
      
      {/* Hero section with background image */}
      <section className="relative py-16 overflow-hidden hero">
        <div className="absolute inset-0 z-0">
          <img 
                          src="/photo/space-portrait2-cincinnati-event-space-somerhaus.webp" 
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
      
      <SimpleFaqCategories />
      <div className="text-center py-12">
        <p className="text-lg font-body text-muted-foreground">
          Still have questions?{' '}
          <a href="/contact" className="text-primary underline hover:text-primary/80">
            Contact us
          </a>{' '}
          and we'll be happy to help.
        </p>
      </div>
      <Footer logoType="clients" />
    </main>
  );
}

