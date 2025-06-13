
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import PricingSection from '@/components/shared/PricingSection';
import FAQSection from '@/components/shared/FAQSection';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { CTA } from '@/components/ui/call-to-action/component';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';

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
      buttonText: "Book This Package"
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
      buttonText: "Book This Package"
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
      buttonText: "Book This Package"
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

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#F5F3F1' }}>
      <Header />
      
      <HeroSection 
        backgroundType="static"
        backgroundSources={[{
          src: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png",
          alt: "Business Meetings at Somerhaus"
        }]}
        title="Business Meetings at Somerhaus"
        subtitle="Inspire Innovation & Drive Results in Cincinnati's Premier Meeting Space. From team meetings to corporate summits, our 3,080 sq ft industrial-chic venue in Over-the-Rhine provides the perfect environment for productive business gatherings."
      />

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
      />

      <CTA />

      <Footerdemo />
    </main>
  );
};

export default Meetings;
