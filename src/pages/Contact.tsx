
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, CalendarDays } from 'lucide-react';

import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
// Add type declaration for Honeybook
declare global {
  interface Window {
    _HB_?: {
      pid?: string;
    };
  }
}

const ContactPage = () => {
  // Honeybook form integration
  useEffect(() => {
    // Create script element for Honeybook
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
    
    // Initialize Honeybook
    window._HB_ = window._HB_ || {};
    // Type assertion to avoid TypeScript errors
    (window._HB_ as any).pid = '61a840e6341fbd00074ed82a';
    
    // Append script to document
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  

  const teamMembers = [
    {
      name: "Emma Robinson",
      role: "Events Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Venue Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Client Experience",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "What is your availability for 2025?",
      answer: "We're currently booking for 2025 with some limited weekend dates still available. Weekdays offer more flexibility, especially for corporate events."
    },
    {
      question: "What's included in your venue rental?",
      answer: "Our standard venue rental includes exclusive use of the 3,080 sq ft space, tables and chairs for up to 150 guests, basic sound system, lighting, climate control, and on-site staff during your event."
    },
    {
      question: "Do you have preferred vendors?",
      answer: "While we have a list of recommended vendors who are familiar with our space, you're welcome to bring in your own. All vendors will need to provide proof of insurance prior to the event."
    },
    {
      question: "What are your payment terms?",
      answer: "We require a 50% deposit to secure your date, with the remainder due 30 days before your event. We accept all major credit cards, checks, and bank transfers."
    },
    {
      question: "Is parking available?",
      answer: "There are several public parking options within a 2-block radius. We can arrange valet service for an additional fee, and there's a loading zone directly in front of the building for vendors."
    }
  ];

  const businessHours = [
    { day: "Note", hours: "By Appointment/Booking Only" },
    { day: "Event Venue", hours: "No Regular Business Hours" }
  ];

  const testimonials = [
    {
      name: "Jennifer & David",
      event: "Wedding",
      text: "Somerhaus exceeded our expectations in every way. The space is gorgeous, and the team was incredibly helpful throughout the planning process."
    },
    {
      name: "TechNova Inc.",
      event: "Corporate Retreat",
      text: "Our team loved the unique atmosphere and professional setup. It was the perfect balance of creative and functional for our annual planning session."
    },
    {
      name: "Sarah's 40th",
      event: "Birthday Celebration",
      text: "I couldn't have chosen a better venue for my milestone birthday. The industrial-chic vibe created the perfect backdrop for an unforgettable night."
    }
  ];
  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517252962841-9bf2188be09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-header tracking-tight mb-4 text-white">
            Let's Plan Something Magical Together
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-mono">
            We're excited to bring your vision to life in our unique space.
          </p>
        </div>
      </section>
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          
          {/* Added items-start for top alignment */}
          {/* Removed items-start */}
          {/* Re-added items-start for top alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 items-start">
            
            {/* NEW: Container for left two columns (Find Us + Honeybook) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Find Us Section (Moved inside new container) */}
              <div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <h2 className="text-2xl md:text-3xl font-header mb-6">Find Us</h2>
                      <h3 className="text-xl font-medium mb-4">Our Location</h3>
                      <address className="not-italic text-gray-700 font-mono mb-6">
                        1415 Republic St<br />
                        Over-the-Rhine<br />
                        Cincinnati, OH 45202
                      </address>
                      <a
                        href="https://www.google.com/maps/place/Somerhaus+Events+Venue/@39.110867,-84.5190902,909m/data=!3m1!1e3!4m15!1m8!3m7!1s0x8841b3fdd0601891:0x811889af4f0f71c3!2s1415+Republic+St,+Cincinnati,+OH+45202!3b1!8m2!3d39.110867!4d-84.5165153!16s%2Fg%2F11c1b0gv1j!3m5!1s0x8841b3addfdf5775:0x850f5a834ff19779!8m2!3d39.110867!4d-84.5165162!16s%2Fg%2F11rkmrkrbg?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Get Directions
                      </a>
                    </div>
                    <div className="md:col-span-2 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                      <iframe
                        title="Somerhaus Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5335635388787!2d-84.51802772412837!3d39.11347593370424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3addfdf5775%3A0x850f5a834ff19779!2sSomerhaus%20Events%20Venue!5e0!3m2!1sen!2sus!4v1714444288981!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Honeybook Form Section (Moved inside new container) */}
              <div>
                {/* Honeybook Form Embed */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-header mb-6">Contact Form</h2>
                  <p className="text-gray-600 mb-8 font-mono">
                    Use this form to get in touch with us about general inquiries.
                  </p>
                  <div className="hb-p-61a840e6341fbd00074ed82a-2"></div>
                  <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.honeybook.com/p.png?pid=61a840e6341fbd00074ed82a"
                    alt=""
                  />
                </div>
                
                {/* Event Inquiry Link */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8 mt-8"> {/* Added mt-8 for spacing */}
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-medium mb-4">Planning an Event?</h3>
                    <p className="text-gray-600 mb-6 font-mono">
                      If you're looking to host an event at our venue, please visit our dedicated Event Inquiry page.
                    </p>
                    <a
                      href="/event-inquiry"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <CalendarDays className="mr-2 h-5 w-5" />
                      Plan Your Event
                    </a>
                  </div>
                </div>
              </div>
            </div> {/* End of NEW container */}
            
            {/* Sidebar Content (Removed order class) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Hours Information */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Hours</h3>
                <p className="text-sm font-mono mb-4">
                  We are available by appointment only, but we'd love to show you around!
                </p>
                <p className="text-sm font-mono">
                  Please use the contact form to reach out and schedule a visit.
                </p>
              </div>
              {/* Venue Information (Removed mb-8) */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Venue Information</h3>
                <ul className="space-y-3 text-sm font-mono">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Private event space (sister space to Somerset Bar)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Located in the heart of the Over The Rhine Neighborhood in downtown Cincinnati</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>3000+ square feet of event space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Capacity: Up to 80 guests for formal seated dinner or up to 130 for cocktail-style events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Venue fee starts from $1,500 + fees (regular pricing, excluding non-profit rates)</span>
                  </li>
                </ul>
              </div>

              {/* Parking Information (Removed mb-8) */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Parking Information</h3>
                <ul className="space-y-3 text-sm font-mono">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Washington Park underground parking lot (one block away, 2-minute walk from northeastern elevator)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>New open air 3CDC lot on Vine St & 15th</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Mercer Commons garage (two blocks or 4-minute walk)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="font-medium">Note: Republic Street is permit parking only (visitors may be ticketed or towed)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Street parking may be available on northern streets, but garage/lot parking is recommended</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Alternative transportation: Streetcar or Uber recommended</span>
                  </li>
                </ul>
              </div>

              {/* Related Venues (Removed mb-8) */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Related Venues</h3>
                <ul className="space-y-3 text-sm font-mono">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Somerset Bar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Second Story Bar & Patio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>The Muse Hotel & Bar (coming soon)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Alice Bar & Disco</span>
                  </li>
                </ul>
              </div>
              
              {/* Testimonials (Removed mb-8) */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-6">What People Are Saying</h3>
                <div className="relative min-h-[180px]">
                  <div className="mb-4">
                    <p className="text-gray-700 italic mb-4 font-mono">"{currentTestimonial.text}"</p>
                    <p className="text-sm font-medium font-mono">{currentTestimonial.name}</p>
                    <p className="text-xs text-gray-500 font-mono">{currentTestimonial.event}</p>
                  </div>
                  <div className="flex justify-center space-x-1 mt-6">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === currentTestimonialIndex ? 'bg-primary' : 'bg-gray-300'}`}
                        onClick={() => setCurrentTestimonialIndex(idx)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Quick Links (Removed mb-8) */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Explore More</h3>
                <div className="space-y-3 font-mono">
                  <a href="/wedding" className="flex items-center text-primary hover:underline">
                    <span className="mr-2">→</span> Wedding Packages
                  </a>
                  <a href="/corporate" className="flex items-center text-primary hover:underline">
                    <span className="mr-2">→</span> Corporate Events
                  </a>
                  <a href="/faq" className="flex items-center text-primary hover:underline">
                    <span className="mr-2">→</span> Frequently Asked Questions
                  </a>
                </div>
              </div>
              
              {/* Phone Contact (No mb-8 as it's the last item) */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Call Us</h3>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <a href="tel:+15139021415" className="text-primary hover:underline font-medium">
                    (513) 902-1415
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Value-Add Elements */}
          <div className="space-y-16">
            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-header text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="font-mono">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Meet the Team */}
            <div>
              <h2 className="text-2xl md:text-3xl font-header text-center mb-8">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-xl mb-1">{member.name}</h3>
                    <p className="text-gray-500 font-mono">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footerdemo />
    </div>
  );
};

export default ContactPage;
