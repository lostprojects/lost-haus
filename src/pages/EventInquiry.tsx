import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';
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
    addressCountry: "US"
  }
};

const EventInquiry = () => {
  useHoneyBook();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Event Inquiry | Somerhaus Cincinnati"
        description="Tell us about your upcoming event and we'll craft a personalized proposal."
        schema={businessSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden hero">
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
                <HoneyBookForm placementId="5" />
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