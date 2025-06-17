
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import Seo from '@/components/seo/Seo';
import { Logos3 } from '@/components/blocks/logos3';

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

const clientLogos = [{
  id: "client-1",
  description: "University of Cincinnati",
  image: "/client-logos/University-of-Cincinnati-Logo.png",
  className: "grayscale"
}, {
  id: "client-2",
  description: "Procter & Gamble",
  image: "/client-logos/P&G-logo.png",
  className: "grayscale"
}, {
  id: "client-3",
  description: "Fischer Homes",
  image: "/client-logos/fischer-homes-logo.jpg",
  className: "grayscale"
}, {
  id: "client-4",
  description: "City of Cincinnati",
  image: "/client-logos/cincinnati-logo.png",
  className: "grayscale"
}, {
  id: "client-5",
  description: "Instacart",
  image: "/client-logos/instacart-logo.png",
  className: "grayscale"
}, {
  id: "client-6",
  description: "Artworks",
  image: "/client-logos/artworks-logo.png",
  className: "grayscale"
}, {
  id: "client-7",
  description: "CincyTech",
  image: "/client-logos/cincytech-logo.png",
  className: "grayscale"
}, {
  id: "client-8",
  description: "Black Tech Week",
  image: "/client-logos/black-tech-week.png",
  className: "grayscale"
}, {
  id: "client-9",
  description: "Scripps",
  image: "/client-logos/Scripps-logo.png",
  className: "grayscale"
}, {
  id: "client-10",
  description: "Xavier University",
  image: "/client-logos/xavier-university-logo.png",
  className: "grayscale"
}, {
  id: "client-11",
  description: "North American Properties",
  image: "/client-logos/north-american.png",
  className: "grayscale"
}, {
  id: "client-12",
  description: "Kroger",
  image: "/client-logos/kroger-logo.png",
  className: "grayscale"
}, {
  id: "client-13",
  description: "Alzheimer's Foundation",
  image: "/client-logos/Alzheimers-Foundation-logo.png",
  className: "grayscale"
}, {
  id: "client-14",
  description: "Cincinnati Chamber",
  image: "/client-logos/cincinnati-chamber-logo.png",
  className: "grayscale"
}, {
  id: "client-15",
  description: "OTR Film Festival",
  image: "/client-logos/otr-film-festival-logo.png",
  className: "grayscale"
}];

const Meetings = () => {
  const pricingPlans = [
    {
      name: "Team Meeting",
      price: "$800",
      period: "/event",
      description: "Perfect for small team meetings and brainstorming sessions",
      features: [
        "Up to 15 people",
        "Half-day rental (4 hours)",
        "High-speed WiFi",
        "Presentation display",
        "Conference seating setup",
        "Coffee service",
        "Basic AV equipment",
        "Meeting coordination"
      ],
      popular: false,
    },
    {
      name: "Board Meeting",
      price: "$1,800",
      period: "/event",
      description: "Our most popular package for executive and board meetings",
      features: [
        "Up to 25 people",
        "Full-day rental (8 hours)",
        "Premium WiFi network",
        "Multiple displays available",
        "Executive boardroom setup",
        "Catered lunch included",
        "Professional AV system",
        "Video conferencing setup",
        "Dedicated meeting support",
        "Private breakout spaces"
      ],
      popular: true,
    },
    {
      name: "Corporate Summit",
      price: "$3,200",
      period: "/event",
      description: "Ultimate meeting experience for large corporate gatherings",
      features: [
        "Up to 50 people",
        "Extended rental (10 hours)",
        "Enterprise-grade WiFi",
        "Multi-screen presentation setup",
        "Theater and breakout configurations",
        "Full catering service",
        "Live streaming capabilities",
        "Professional recording options",
        "On-site technical support",
        "Welcome reception area",
        "Executive hospitality suite"
      ],
      popular: false,
    }
  ];

  const faqData = [
    {
      question: "What makes Somerhaus ideal for business meetings?",
      answer: "Our 3,080 sq ft space offers the perfect blend of professionalism and inspiration. The industrial-chic atmosphere creates an engaging environment that promotes creativity and productivity, while our flexible layout can accommodate everything from intimate team meetings to large corporate presentations."
    },
    {
      question: "What AV equipment and technology do you provide?",
      answer: "We offer high-speed WiFi, multiple HD displays with wireless connection capabilities, professional sound systems, video conferencing equipment, presentation clickers, and interactive whiteboard options. Our technical support team ensures everything runs smoothly throughout your meeting."
    },
    {
      question: "Can you accommodate hybrid meetings with remote participants?",
      answer: "Absolutely! Our video conferencing setup supports seamless hybrid meetings. We have professional cameras, microphones, and display systems that ensure remote participants can fully engage with in-person attendees."
    },
    {
      question: "Do you provide catering for meetings?",
      answer: "Yes! We work with preferred caterers to provide everything from simple coffee and pastries for morning meetings to full lunch spreads for day-long sessions. We can accommodate dietary restrictions and specific catering requests."
    },
    {
      question: "What seating arrangements are available?",
      answer: "Our flexible space can be configured for various meeting styles including boardroom tables, theater seating, U-shape configurations, cocktail rounds for networking, and breakout pod areas. We'll work with you to create the ideal setup for your meeting objectives."
    },
    {
      question: "How far in advance should we book a meeting?",
      answer: "For regular business meetings, we recommend booking 3-4 weeks in advance. For larger corporate events or meetings during busy periods, 6-8 weeks advance notice ensures availability and allows time for proper planning and coordination."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#F5F3F1' }}>
      <Seo
        title="Meeting Venue in Cincinnati | Somerhaus"
        description="Hold productive corporate gatherings in our flexible Over-the-Rhine space."
        schema={[businessSchema, faqSchema]}
      />
      <Header />
      
      <HeroSection 
        backgroundType="static"
        backgroundSources={[{
          src: "/photo/haus-meeting.png",
          alt: "Business Meetings at Somerhaus"
        }]}
        title="Business Meetings at Somerhaus"
        subtitle="Inspire innovation and drive results in Cincinnati's premier meeting space. From team sessions to corporate summits, our 3,080 sq ft venue fuels productivity—contact us to plan yours."
      />

      <Logos3 heading="Trusted By" logos={clientLogos} />

      <ImageGallerySection />

      <PricingSection 
        title="Meeting Packages"
        description="Choose the perfect package for your business meeting needs"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Business Meetings FAQ"
        description="Everything you need to know about hosting your business meeting at Somerhaus"
        faqs={faqData}
        postAccordionContent={
          <p className="text-center mt-8 font-body text-muted-foreground">
            Need more answers? Visit our{' '}
            <a href="/faq" className="text-primary underline hover:text-primary/80">
              full FAQ page
            </a>
            .
          </p>
        }
      />

      <CTA />

      <Footerdemo />
    </main>
  );
};

export default Meetings;
