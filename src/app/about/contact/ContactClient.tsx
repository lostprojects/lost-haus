'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, CalendarDays } from 'lucide-react'
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BookNowButton from '@/components/ui/book-now-button'
import HoneyBookForm from '@/components/HoneyBookForm'

export default function ContactClient() {
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
  }]
  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const currentTestimonial = testimonials[currentTestimonialIndex]
  
  return (
    <PageLayout footerLogoType="clients">
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <div>
            <h1 className="font-header mb-4">
              Let's Plan Something Magical<br/>Together
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              We're excited to bring your vision to life in our unique space.
            </p>
          </div>
        </div>
      </section>
        
      <section className="pb-16">
        <div className={STANDARD_CONTAINER_CLASSES}>
          
          {/* Added items-start for top alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 items-start">
            
            {/* NEW: Container for left two columns (Find Us + Honeybook) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Find Us Section (Moved inside new container) */}
              <div>
                <Card className="bg-white">
                  <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                          <div className="md:col-span-1">
                        <h2 className="font-header mb-6">Find Us</h2>
                        <h4 className="font-bold mb-4 !text-black font-mono">Our Location</h4>
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
                  </CardContent>
                </Card>
              </div>

              {/* Honeybook Form Section (Moved inside new container) */}
              <div>
                {/* Honeybook Form Embed */}
                <Card className="bg-white">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-header mb-6">Contact Form</h2>
                    <p className="text-gray-600 mb-8 font-mono">
                      Use this form to get in touch with general inquiries.
                    </p>
                    <HoneyBookForm placementId="2" />
                  </CardContent>
                </Card>
                
                {/* Event Inquiry Link */}
                <Card className="bg-white mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-medium mb-4">Planning an Event?</h3>
                      <p className="text-gray-600 mb-6 font-mono">
                        If you're looking to host an event at our venue, please visit our dedicated Event Inquiry page.
                      </p>
                      <BookNowButton 
                        href="/event-inquiry" 
                        variant="black" 
                        size="medium"
                      >
                        Plan Your Event
                      </BookNowButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div> {/* End of NEW container */}
            
            {/* Sidebar Content (Removed order class) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Hours Information */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Business Hours</h3>
                  <div className="text-sm font-mono space-y-2">
                    <p className="font-bold">Monday - Friday</p>
                    <p>9:00 AM - 5:00 PM</p>
                    <p className="font-bold">Saturday - Sunday</p>
                    <p>10:00 AM - 10:00 PM</p>
                    <div className="mt-4">
                      <p className="text-muted-foreground">Tours available by appointment</p>
                      <p className="text-muted-foreground">Event hours may vary based on package</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Parking Information */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Parking Information</h3>
                  <div className="space-y-4 text-sm font-mono">
                    <div>
                      <p className="font-bold">Washington Park Underground Parking</p>
                      <p>One block away, a 2-minute walk from northeastern elevator</p>
                    </div>
                    <div>
                      <p className="font-bold">Open Air 3CDC Lot (Vine St)</p>
                      <p>Located on Vine St & 15th. 3-mintue walk</p>
                    </div>
                    <div>
                      <p className="font-bold">Mercer Commons Garage</p>
                      <p>Two blocks or a 4-minute walk</p>
                    </div>
                    <p className="font-medium">Note: Republic Street is permit parking only (visitors may be ticketed or towed)</p>
                    <p>Street parking may be available on northern streets, but garage/lot parking is recommended</p>
                    <p>Alternative transportation: Streetcar or Uber recommended</p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Venues */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Related Venues</h3>
                  <ul className="space-y-3 text-sm font-mono">
                    <li className="flex items-start">
                      <a href="https://somersetotr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Somerset Bar</a>
                    </li>
                    <li className="flex items-start">
                      <a href="https://secondstorybar.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Second Story Bar & Patio</a>
                    </li>
                    <li className="flex items-start">
                      <span>The Muse Hotel & Bar (coming soon)</span>
                    </li>
                    <li className="flex items-start">
                      <a href="https://alicebar.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Alice Bar & Disco</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}