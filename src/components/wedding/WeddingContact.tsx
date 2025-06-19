import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WeddingContactProps {
  badgeText?: string;
}

const WeddingContact: React.FC<WeddingContactProps> = ({ 
  badgeText = "Get In Touch"
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">{badgeText}</Badge>
          <h2 className="font-header tracking-tight mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Ready to start planning your dream wedding? Reach out to our team today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-semibold mb-6">Venue Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">Over-the-Rhine, Cincinnati, OH 45202</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">(513) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">weddings@somerhaus.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Hours of Operation</h4>
              <p className="text-muted-foreground">Monday - Friday: 10am - 6pm</p>
              <p className="text-muted-foreground">Saturday: By appointment only</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              
              <div>
                <label htmlFor="wedding-date" className="block text-sm font-medium mb-1">Preferred Wedding Date</label>
                <Input id="wedding-date" type="date" />
              </div>
              
              <div>
                <label htmlFor="guest-count" className="block text-sm font-medium mb-1">Estimated Guest Count</label>
                <Input id="guest-count" type="number" placeholder="Number of guests" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <Textarea id="message" placeholder="Tell us about your wedding vision..." className="min-h-[120px]" />
              </div>
              
              {isSubmitted && (
                <div className="flex items-center gap-2 p-3 bg-[#5CA87E]/10 border border-[#5CA87E]/30 rounded-md text-[#5CA87E]">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Message sent! We'll respond within 24 hours.</span>
                </div>
              )}
              
              <Button type="submit" className="w-full gap-2" disabled={isSubmitted}>
                {isSubmitted ? 'Message Sent!' : 'Send Message'} <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingContact;
