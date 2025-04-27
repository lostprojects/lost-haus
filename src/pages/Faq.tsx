
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Faq3 } from '@/components/blocks/faq3';

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Faq3 
        heading="Frequently Asked Questions About Somerhaus"
        description="Find answers to common questions about our venue and services. Our team is here to help make your event perfect."
        supportHeading="Want to discuss your event?"
        supportDescription="Our dedicated event planning team is ready to help create your perfect occasion at Somerhaus."
        supportButtonText="Schedule a Consultation"
        supportButtonUrl="#contact"
      />
      <Footerdemo />
    </main>
  );
};

export default FAQ;
