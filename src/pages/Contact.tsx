
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { toast } from "sonner";

import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  eventType: z.string().min(1, { message: "Please select an event type" }),
  eventDate: z.date().optional(),
  guestCount: z.string().optional(),
  message: z.string().min(10, { message: "Please tell us a bit about your vision" }),
  preferredContact: z.enum(["email", "phone"]),
  subscribeToBlog: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
      preferredContact: "email",
      subscribeToBlog: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Here you would normally send the form data to your backend
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.");
    setIsSubmitted(true);
    form.reset();
  }

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
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "By Appointment" }
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-body">
            We're excited to bring your vision to life in our unique space.
          </p>
        </div>
      </section>
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          {/* Multi-Channel Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Call Us</h3>
                <p className="text-sm text-gray-500 mb-4">We're happy to chat about your plans</p>
                <a href="tel:+15135551234" className="text-primary hover:underline font-medium">
                  (513) 555-1234
                </a>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Email Us</h3>
                <p className="text-sm text-gray-500 mb-4">Send us your questions anytime</p>
                <a href="mailto:events@somerhaus.com" className="text-primary hover:underline font-medium">
                  events@somerhaus.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Visit Us</h3>
                <p className="text-sm text-gray-500 mb-4">Come see our beautiful space</p>
                <address className="not-italic text-primary">
                  123 Republic Street<br />
                  Over-the-Rhine<br />
                  Cincinnati, OH 45202
                </address>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Office Hours</h3>
                <p className="text-sm text-gray-500 mb-4">When you can reach us</p>
                <div className="space-y-2 text-sm">
                  {businessHours.map((item) => (
                    <p key={item.day}>
                      <span className="font-medium">{item.day}:</span> {item.hours}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
            {/* Smart Contact Form */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-header mb-6">Contact Us About Your Event</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and one of our event specialists will be in touch within 24 hours. 
                  We're excited to learn more about your plans!
                </p>
                
                {!isSubmitted ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(XXX) XXX-XXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="eventType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Event Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select event type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="wedding">Wedding</SelectItem>
                                  <SelectItem value="corporate">Corporate</SelectItem>
                                  <SelectItem value="social">Social Event</SelectItem>
                                  <SelectItem value="nonprofit">Non-Profit</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="eventDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Preferred Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Select date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="guestCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expected Guest Count</FormLabel>
                              <FormControl>
                                <Input placeholder="Approximate number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell Us About Your Vision</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Share a few details about what you're planning..." 
                                className="min-h-32"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="preferredContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Method</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="How should we reach you?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subscribeToBlog"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Subscribe to our newsletter for event tips and special offers
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end">
                        <Button type="submit" className="px-8">
                          Send Inquiry
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-medium mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your inquiry has been received and we'll be in touch soon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Inquiry
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar Content */}
            <div className="lg:col-span-1 order-1 lg:order-2 space-y-8">
              {/* Location Map */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  title="Somerhaus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5335635388787!2d-84.51802772412837!3d39.11347593370424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3fd94670d83%3A0xb847537c5e93815c!2sOver-the-Rhine%2C%20Cincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1714410898274!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Testimonials */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-6">What People Are Saying</h3>
                <div className="relative min-h-[180px]">
                  <div className="mb-4">
                    <p className="text-gray-700 italic mb-4">"{currentTestimonial.text}"</p>
                    <p className="text-sm font-medium">{currentTestimonial.name}</p>
                    <p className="text-xs text-gray-500">{currentTestimonial.event}</p>
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
              
              {/* Quick Links */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Explore More</h3>
                <div className="space-y-3">
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
                    <AccordionContent>{faq.answer}</AccordionContent>
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
                    <p className="text-gray-500">{member.role}</p>
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
