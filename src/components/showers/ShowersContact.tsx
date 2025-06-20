
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

'use client';

const ShowersContact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">Get In Touch</Badge>
          <h2 className="font-header tracking-tight mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Ready to start planning your perfect shower or celebration? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-header mb-6">Inquiry Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium font-body">First Name</label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium font-body">Last Name</label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium font-body">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium font-body">Phone Number</label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="event-type" className="text-sm font-medium font-body">Event Type</label>
                <Select>
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baby-shower">Baby Shower</SelectItem>
                    <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                    <SelectItem value="gender-reveal">Gender Reveal</SelectItem>
                    <SelectItem value="birthday">Birthday Celebration</SelectItem>
                    <SelectItem value="other">Other Celebration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="event-date" className="text-sm font-medium font-body">Preferred Date</label>
                  <Input id="event-date" type="date" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium font-body">Estimated Guest Count</label>
                  <Input id="guests" type="number" placeholder="Number of guests" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-body">Tell Us About Your Vision</label>
                <Textarea 
                  id="message" 
                  placeholder="Share details about your celebration, questions, or special requests" 
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full font-body">Submit Inquiry</Button>
            </form>
          </div>
          
          <div>
            <h3 className="font-header mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium font-body">Our Location</h4>
                  <p className="text-muted-foreground font-body">123 Main Street</p>
                  <p className="text-muted-foreground font-body">Over-the-Rhine, Cincinnati, OH 45202</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium font-body">Email Us</h4>
                  <p className="text-muted-foreground font-body">events@somerhausvenue.com</p>
                  <p className="text-muted-foreground font-body">For general inquiries and booking information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium font-body">Call Us</h4>
                  <p className="text-muted-foreground font-body">(513) 555-1234</p>
                  <p className="text-muted-foreground font-body">Monday-Friday: 9am-5pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium font-body">Tours Available</h4>
                  <p className="text-muted-foreground font-body">Tuesday-Saturday: 10am-6pm</p>
                  <p className="text-muted-foreground font-body">By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 aspect-video w-full h-[300px] bg-gray-100 rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12421.26456285043!2d-84.51735656966697!3d39.11199947315291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3d47910b10f%3A0x7138eb559168a01a!2sOver-the-Rhine%2C%20Cincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1659601981978!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowersContact;
