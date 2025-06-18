import React from 'react';
import { Quote } from 'lucide-react';

const FeaturedQuote = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="relative">
            <Quote className="w-16 h-16 text-brand/20 mx-auto mb-8" />
            
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-header text-brand leading-tight mb-8 animate-fade-in-up-delay-1">
              "We wanted a venue that felt discovered, not decorated."
            </blockquote>
            
            <div className="text-xl md:text-2xl font-body text-black animate-fade-in-up-delay-2">
              <cite className="not-italic">-Tony</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturedQuote }; 