import React from 'react';
import { Quote } from 'lucide-react';

const FeaturedQuote = () => {
  return (
    <section 
      className="py-24 md:py-32 w-full relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/photo/space-hero-somerhaus-cincinnati-events.webp')"
      }}
    >
      {/* Black overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
        <div className="relative">
          <Quote className="w-16 h-16 text-white/40 mx-auto mb-8" />
          
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-header text-white leading-tight mb-8 animate-fade-in-up-delay-1">
            "We wanted a venue that felt discovered, not decorated."
          </blockquote>
          
          <div className="text-xl md:text-2xl font-body text-white animate-fade-in-up-delay-2">
            <cite className="not-italic">-Tony</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturedQuote }; 