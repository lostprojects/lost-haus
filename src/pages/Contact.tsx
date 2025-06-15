
import React, { useState } from 'react';
import { MapPin, Phone, CalendarDays } from 'lucide-react';
import Header from '@/components/ui/header';
import Seo from '@/components/seo/Seo';
import { Footerdemo } from '@/components/ui/footer-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';

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

const ContactPage = () => {
  useHoneyBook();

  const teamMembers = [
    {
      name: "Beth Smiley",
      role: "General Manager",
      image: "/team/beth-smiley.png",
      bio: "Beth brings over 15 years of hospitality and event management experience to Somerhaus. With her keen eye for detail and passion for creating memorable experiences, she ensures every event runs flawlessly."
    }, 
    {
      name: "Sara Hutslar",
      role: "Events Director",
      image: "/team/sara-hutslar.png",
      bio: "As our creative force, Sara transforms client visions into reality. Her background in design and event planning helps create unique, personalized experiences for every occasion at Somerhaus."
    }
  ];
  
  const faqs = [{
    question: "What is your availability for 2025?",
    answer: "We're currently booking for 2025 with some limited weekend dates still available. Weekdays offer more flexibility, especially for corporate events."
  }, {
    question: "What's included in your venue rental?",
    answer: "Our standard venue rental includes exclusive use of the 3,080 sq ft space, tables and chairs for up to 150 guests, basic sound system, lighting, climate control, and on-site staff during your event."
  }, {
    question: "Do you have preferred vendors?",
    answer: "While we have a list of recommended vendors who are familiar with our space, you're welcome to bring in your own. All vendors will need to provide proof of insurance prior to the event."
  }, {
    question: "What are your payment terms?",
    answer: "We require a 50% deposit to secure your date, with the remainder due 30 days before your event. We accept all major credit cards, checks, and bank transfers."
  }, {
    question: "Is parking available?",
    answer: "There are several public parking options within a 2-block radius. We can arrange valet service for an additional fee, and there's a loading zone directly in front of the building for vendors."
  }];
  
  const businessHours = [{
    day: "Note",
    hours: "By Appointment/Booking Only"
  }, {
    day: "Event Venue",
    hours: "No Regular Business Hours"
  }];
  
  const testimonials = [{
    name: "Jennifer & David",
    event: "Wedding",
    text: "Somerhaus exceeded our expectations in every way. The space is gorgeous, and the team was incredibly helpful throughout the planning process."
  }, {
    name: "TechNova Inc.",
    event: "Corporate Retreat",
    text: "Our team loved the unique atmosphere and professional setup. It was the perfect balance of creative and functional for our annual planning session."
  }, {
    name: "Sarah's 40th",
    event: "Birthday Celebration",
    text: "I couldn't have chosen a better venue for my milestone birthday. The industrial-chic vibe created the perfect backdrop for an unforgettable night."
  }];
  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];
  
  return <div className="min-h-screen flex flex-col">
      <Seo
        title="Contact Somerhaus in Cincinnati"
        description="Get in touch with our team to book your event or schedule a tour at Cincinnati's most enchanting venue."
        schema={businessSchema}
      />
      <Header />
      
      {/* Hero Section with updated background image */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden hero">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: "url('/photo/haus-wedding-main.png')"
      }} />
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
                      <a href="https://www.google.com/maps/place/Somerhaus+Events+Venue/@39.110867,-84.5190902,909m/data=!3m1!1e3!4m15!1m8!3m7!1s0x8841b3fdd0601891:0x811889af4f0f71c3!2s1415+Republic+St,+Cincinnati,+OH+45202!3b1!8m2!3d39.110867!4d-84.5165153!16s%2Fg%2F11c1b0gv1j!3m5!1s0x8841b3addfdf5775:0x850f5a834ff19779!8m2!3d39.110867!4d-84.5165162!16s%2Fg%2F11rkmrkrbg?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                        <MapPin className="mr-2 h-5 w-5" />
                        Get Directions
                      </a>
                    </div>
                    <div className="md:col-span-2 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                      <iframe title="Somerhaus Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5335635388787!2d-84.51802772412837!3d39.11347593370424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3addfdf5775:0x850f5a834ff19779!2sSomerhaus%20Events%20Venue!5e0!3m2!1sen!2sus!4v1714444288981!5m2!1sen!2sus!4v1714444288981!5m2!1sen!2sus" width="100%" height="300" style={{
                      border: 0
                    }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                  <HoneyBookForm placementId="2" />
                </div>
                
                {/* Event Inquiry Link */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8 mt-8"> {/* Added mt-8 for spacing */}
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-medium mb-4">Planning an Event?</h3>
                    <p className="text-gray-600 mb-6 font-mono">
                      If you're looking to host an event at our venue, please visit our dedicated Event Inquiry page.
                    </p>
                    <a href="/event-inquiry" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
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
                    {testimonials.map((_, idx) => <button key={idx} className={`w-2 h-2 rounded-full ${idx === currentTestimonialIndex ? 'bg-primary' : 'bg-gray-300'}`} onClick={() => setCurrentTestimonialIndex(idx)} />)}
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
            {/* Meet the Team Section - Redesigned with the real team members */}
            <div>
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-3">The People Behind Your Events</Badge>
                <h2 className="text-3xl md:text-5xl font-header mb-4">Meet Our Team</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
                  Our dedicated professionals work tirelessly to ensure your event exceeds expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="grid md:grid-cols-5 gap-4 p-0">
                      <div className="md:col-span-2 h-full">
                        <div className="h-full w-full relative overflow-hidden aspect-[3/4] md:aspect-auto">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="object-cover object-center w-full h-full transition-transform hover:scale-105 duration-700"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <h3 className="text-2xl font-header mb-1">{member.name}</h3>
                            <p className="text-primary font-medium mb-4">{member.role}</p>
                            <p className="text-gray-600 font-mono">{member.bio}</p>
                          </div>
                          <div className="flex mt-6">
                            <a href="#contact" className="text-primary hover:text-primary/80 font-medium">
                              Contact →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footerdemo />
    </div>;
};

export default ContactPage;
