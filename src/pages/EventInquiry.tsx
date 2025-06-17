import React from 'react';
import HeaderLeadCapture from '@/components/ui/header-lead-capture';
import { Footerdemo } from '@/components/ui/footer-section';
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';
import Seo from '@/components/seo/Seo';
import { Logos3 } from '@/components/blocks/logos3';
import UrgencyFlagBanner from '@/components/ui/urgency-flag';
import { Star, ChevronsDown } from 'lucide-react';

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

const pressLogos = [{
  id: "press-1",
  description: "Zola",
  image: "/press-logos/zola-logo.svg",
  className: "brightness-0 invert"
}, {
  id: "press-2",
  description: "Peerspace",
  image: "/press-logos/peerspace-logo.svg",
  className: "brightness-0 invert"
}, {
  id: "press-3",
  description: "Business Courier",
  image: "/press-logos/business-courier-logo.webp",
  className: "grayscale invert contrast-200"
}, {
  id: "press-4",
  description: "Cincinnati Magazine",
  image: "/press-logos/Cincinnati-mag-logo.png",
  className: "brightness-0 invert"
}, {
  id: "press-5",
  description: "The Knot",
  image: "/press-logos/the-knot-logo.webp",
  className: "brightness-0 invert"
}, {
  id: "press-6",
  description: "Cincinnati Enquirer",
  image: "/press-logos/Enquirer-logo.png",
  className: "brightness-0 invert"
}, {
  id: "press-7",
  description: "Cincinnati.com",
  image: "/press-logos/cincinnati-com-logo.png",
  className: "brightness-0 invert"
}, {
  id: "press-8",
  description: "CityBeat",
  image: "/press-logos/City-Beat-logo.png",
  className: "brightness-0 invert"
}];

// Client logos (same as homepage)
const clientLogos = [
  { id: 'client-1', description: 'University of Cincinnati', image: '/client-logos/University-of-Cincinnati-Logo.png', className: 'brightness-0 invert' },
  { id: 'client-2', description: 'Procter & Gamble', image: '/client-logos/P&G-logo.png', className: 'brightness-0 invert' },
  { id: 'client-3', description: 'Fischer Homes', image: '/client-logos/fischer-homes-logo.jpg', className: 'brightness-0 invert' },
  { id: 'client-4', description: 'City of Cincinnati', image: '/client-logos/cincinnati-logo.png', className: 'brightness-0 invert' },
  { id: 'client-5', description: 'Instacart', image: '/client-logos/instacart-logo.png', className: 'brightness-0 invert' },
  { id: 'client-6', description: 'Artworks', image: '/client-logos/artworks-logo.png', className: 'brightness-0 invert' },
  { id: 'client-7', description: 'CincyTech', image: '/client-logos/cincytech-logo.png', className: 'brightness-0 invert' },
  { id: 'client-8', description: 'Black Tech Week', image: '/client-logos/black-tech-week.png', className: 'brightness-0 invert' },
  { id: 'client-9', description: 'Scripps', image: '/client-logos/Scripps-logo.png', className: 'brightness-0 invert' },
  { id: 'client-10', description: 'Xavier University', image: '/client-logos/xavier-university-logo.png', className: 'brightness-0 invert' },
  { id: 'client-11', description: 'North American Properties', image: '/client-logos/north-american.png', className: 'brightness-0 invert' },
  { id: 'client-12', description: 'Kroger', image: '/client-logos/kroger-logo.png', className: 'brightness-0 invert' },
  { id: 'client-13', description: "Alzheimer's Foundation", image: '/client-logos/Alzheimers-Foundation-logo.png', className: 'brightness-0 invert' },
  { id: 'client-14', description: 'Cincinnati Chamber', image: '/client-logos/cincinnati-chamber-logo.png', className: 'brightness-0 invert' },
  { id: 'client-15', description: 'OTR Film Festival', image: '/client-logos/otr-film-festival-logo.png', className: 'brightness-0 invert' }
];

const EventInquiry = () => {
  useHoneyBook();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F3F1' }}>
      <Seo
        title="Event Inquiry | Somerhaus Cincinnati"
        description="Tell us about your upcoming event and we'll craft a personalized proposal."
        schema={businessSchema}
      />
      <HeaderLeadCapture />
      
      {/* Hero Section */}
      <section className="relative w-full h-[91vh] min-h-[650px] overflow-hidden hero">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.jpg')"
          }}
        />
      </section>
      
      <main className="flex-grow relative -mt-[80vh] z-20">
        {/* Featured In Section */}
        <div className="w-full mb-4 flex justify-center">
          <Logos3 heading="" logos={pressLogos} className="bg-transparent" />
        </div>

        {/* Rating Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-base font-body text-white">5-Stars on Google & Yelp</span>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-2xl shadow-black/40 p-6 md:p-8">
              <h2 className="pt-5 text-4xl md:text-5xl font-header mb-6 text-center text-[#399892]">Let's Make It Happen!</h2>
              <p className="text-gray-600 mb-6 text-center">
                <strong>We'd love to host you at Somerhaus!</strong> <br />
                Please fill out the short form and we'll get back to you in 24 hours or less.
              </p>
              {/* Urgency Flag */}
              <UrgencyFlagBanner />
              
              {/* Animated Arrow */}
              <div className="flex justify-center mt-[40px] animate-bounce" style={{ animationDuration: '3.3s' }}>
                <ChevronsDown className="w-6 h-6 text-[#399892]" />
              </div>
              
              {/* Honeybook Embed */}
              <div className="-mt-10">
                <HoneyBookForm placementId="5" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trusted By section (identical to homepage) */}
      <Logos3 heading="Trusted By" logos={clientLogos} className="bg-black" />
    </div>
  );
};

export default EventInquiry;