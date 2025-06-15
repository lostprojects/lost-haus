
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

const Rehearsals = () => {
  const pricingPlans = [
    {
      name: "Simple Rehearsal",
      price: "$1,800",
      period: "/event",
      description: "Perfect for intimate wedding rehearsals and run-throughs",
      features: [
        "Up to 25 guests",
        "3-hour venue rental",
        "Basic seating arrangement",
        "Sound system for ceremony",
        "Processional area setup",
        "Event coordination",
        "Bridal suite access"
      ],
      popular: false,
      buttonText: "Book This Package"
    },
    {
      name: "Complete Rehearsal",
      price: "$2,800",
      period: "/event",
      description: "Our most popular rehearsal package with dinner coordination",
      features: [
        "Up to 40 guests",
        "4-hour venue rental",
        "Full ceremony setup",
        "Professional sound system",
        "Seating for rehearsal dinner",
        "Bar setup available",
        "Catering coordination",
        "Photography space",
        "Dedicated event coordinator"
      ],
      popular: true,
      buttonText: "Book This Package"
    },
    {
      name: "Premium Rehearsal Event",
      price: "$4,200",
      period: "/event",
      description: "Ultimate rehearsal experience with full dinner service",
      features: [
        "Up to 60 guests",
        "6-hour venue rental",
        "Complete ceremony rehearsal",
        "Full rehearsal dinner setup",
        "Premium bar service",
        "Multi-course dinner coordination",
        "Live music accommodation",
        "Professional lighting",
        "Full event management",
        "Welcome cocktail service"
      ],
      popular: false,
      buttonText: "Book This Package"
    }
  ];

  const faqData = [
    {
      question: "What makes Somerhaus ideal for wedding rehearsals?",
      answer: "Our spacious 3,080 sq ft venue provides ample room for ceremony run-throughs and rehearsal dinners in one location. The industrial-chic atmosphere creates a relaxed yet elegant setting where your wedding party can practice and celebrate together."
    },
    {
      question: "Can we practice our ceremony at the venue?",
      answer: "Absolutely! We can set up the space to mirror your wedding day ceremony layout, allowing you to practice processionals, positioning, and timing. Our sound system is available for music and microphone testing during the rehearsal."
    },
    {
      question: "Do you coordinate rehearsal dinners?",
      answer: "Yes! We work with preferred caterers to provide everything from casual family-style dinners to formal plated meals. Our team will coordinate all aspects of your rehearsal dinner, from setup to service, so you can focus on your family and wedding party."
    },
    {
      question: "What time should we schedule our rehearsal?",
      answer: "Most rehearsals work best in the early evening, typically starting around 4-5 PM for the practice, followed by dinner around 6-7 PM. We can accommodate different timing based on your needs and other wedding weekend events."
    },
    {
      question: "Can out-of-town guests join the rehearsal dinner?",
      answer: "Definitely! Our space can accommodate extended family and out-of-town guests who want to join the celebration. We can adjust seating arrangements and catering quantities to include everyone you'd like to celebrate with."
    },
    {
      question: "How far in advance should we book our rehearsal?",
      answer: "We recommend booking your rehearsal when you book your wedding day, as rehearsals typically happen the day before the wedding. This ensures availability and allows us to coordinate both events seamlessly."
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
        title="Wedding Rehearsal Venue in Cincinnati | Somerhaus"
        description="Practice and celebrate in style at our historic Cincinnati space."
        schema={[businessSchema, faqSchema]}
      />
      <Header />
      
      <HeroSection 
        backgroundType="static"
        backgroundSources={[{
          src: "/photo/haus-wedding-main.png",
          alt: "Wedding Rehearsals at Somerhaus"
        }]}
        title="Wedding Rehearsals at Somerhaus"
        subtitle="Practice perfectly and celebrate together in Cincinnati's most elegant venue. From run-throughs to rehearsal dinners, our 3,080 sq ft space is ready for your wedding weekend—secure your date now."
      />

      <ImageGallerySection />

      <PricingSection 
        title="Rehearsal Packages"
        description="Choose the perfect package for your wedding rehearsal and dinner"
        packages={pricingPlans}
      />

      <TestimonialsDemo />

      <FAQSection
        title="Wedding Rehearsals FAQ"
        description="Everything you need to know about hosting your wedding rehearsal at Somerhaus"
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

export default Rehearsals;
