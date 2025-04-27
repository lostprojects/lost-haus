
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Faq3 } from '@/components/blocks/faq3';
import { FaqCategories } from '@/components/faq/FaqCategories';

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 bg-gradient-to-b from-purple-50 to-white">
        <Faq3 
          heading="Frequently Asked Questions About Somerhaus"
          description="Find answers to common questions about our venue and services. Our team is here to help make your event perfect."
          supportHeading="Want to discuss your event?"
          supportDescription="Our dedicated event planning team is ready to help create your perfect occasion at Somerhaus."
          supportButtonText="Schedule a Consultation"
          supportButtonUrl="#contact"
          items={[]} // We'll use our custom categories component instead
        />
      </div>
      <FaqCategories />
      <Footerdemo />
    </main>
  );
};

export default FAQ;
