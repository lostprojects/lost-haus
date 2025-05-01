import React, { useEffect } from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';

// Add type declaration for Honeybook
declare global {
  interface Window {
    _HB_?: {
      pid?: string;
    };
  }
}

const EventInquiry = () => {

  useEffect(() => {
    // Create script element for Honeybook
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
    
    // Initialize Honeybook
    window._HB_ = window._HB_ || {};
    // Type assertion to avoid TypeScript errors
    window._HB_.pid = '61a840e6341fbd00074ed82a';
    
    // Append script to document
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-header tracking-tight mb-4 text-white">
            Event Inquiry Form
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-mono">
            Tell us about your event and we'll help bring your vision to life.
          </p>
        </div>
      </section>
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-header mb-6">Submit Your Event Inquiry</h2>
              <p className="text-gray-600 mb-8">
                Please fill out the form below to inquire about hosting your event at our venue. 
                Our team will review your submission and get back to you within 24 hours.
              </p>
              
              {/* Honeybook Embed */}
              <div className="mt-8">
                <div className="hb-p-61a840e6341fbd00074ed82a-5"></div>
                <img 
                  height="1" 
                  width="1" 
                  style={{ display: 'none' }} 
                  src="https://www.honeybook.com/p.png?pid=61a840e6341fbd00074ed82a" 
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footerdemo />
    </div>
  );
};

export default EventInquiry;