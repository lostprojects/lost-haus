
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Download } from 'lucide-react';

const CorporateHero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-header tracking-tight mb-4 text-white">
          Elevate Your Business Gatherings
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-body">
          A unique 3,080 sq ft industrial-chic space in Over-the-Rhine, designed for productive and memorable corporate events.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-body gap-2">
            Request Corporate Proposal <CalendarCheck className="w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-body gap-2"
          >
            Download Info Package <Download className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporateHero;
