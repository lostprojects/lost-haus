
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Clock } from 'lucide-react';

const CorporateContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      eventType: '',
      attendees: '',
      date: '',
      message: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you would handle the form submission
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-header mb-6">Ready to Plan Your Corporate Event?</h2>
            <p className="text-lg text-gray-600 mb-8 font-body">
              Fill out this form with your event details, and our corporate events team will create a custom proposal for you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-body">Call Us</h3>
                  <p className="text-gray-600 font-body">(513) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-body">Email Us</h3>
                  <p className="text-gray-600 font-body">corporate@somerhaus.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-body">Response Time</h3>
                  <p className="text-gray-600 font-body">Within 24 business hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" className="font-body" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone" className="font-body" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" className="font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="font-body">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="meeting" className="font-body">Meeting</SelectItem>
                            <SelectItem value="presentation" className="font-body">Presentation</SelectItem>
                            <SelectItem value="workshop" className="font-body">Workshop</SelectItem>
                            <SelectItem value="networking" className="font-body">Networking Event</SelectItem>
                            <SelectItem value="other" className="font-body">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="attendees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Expected Attendees</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="font-body">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10" className="font-body">1-10 people</SelectItem>
                            <SelectItem value="11-25" className="font-body">11-25 people</SelectItem>
                            <SelectItem value="26-50" className="font-body">26-50 people</SelectItem>
                            <SelectItem value="51-100" className="font-body">51-100 people</SelectItem>
                            <SelectItem value="100+" className="font-body">100+ people</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Preferred Date</FormLabel>
                      <FormControl>
                        <Input type="date" className="font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Additional Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please share any specific requirements or questions about your event."
                          className="resize-none h-32 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full font-body">
                  Request Proposal
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateContactForm;
