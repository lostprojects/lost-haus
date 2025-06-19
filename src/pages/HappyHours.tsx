import React from 'react';
import PageLayout from '@/components/PageLayout';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import { Testimonials } from '@/components/ui/testimonials';
import { CTA } from '@/components/CTASection';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import HoneyBookForm from '@/components/HoneyBookForm';
import Seo from '@/components/seo/Seo';
import { businessSchema, createFaqSchema } from '@/components/seo/seo-schemas';
import { LogoTicker } from '@/components/LogoTicker';
import { clientLogosGrayscale } from '@/data/clientLogos';
import { happyHoursPricing } from '@/data/pricingPlans';
import FaqMoreAnswers from '@/components/faq/FaqMoreAnswers';




const HappyHours = () => {

  const faqData = [
    {
      question: "What makes Somerhaus ideal for happy hour events?",
      answer: "Our industrial-chic atmosphere and flexible layout create the perfect setting for both casual and upscale happy hour events. The open floor plan allows for natural mingling, while our bar setup and lighting options create an inviting after-work atmosphere."
    },
    {
      question: "What bar services do you provide?",
      answer: "We offer full bar service with professional bartenders, premium liquor options, wine selections, and craft beer choices. Our packages can be customized to include signature cocktails, wine tastings, or specific drink preferences for your group."
    },
    {
      question: "Can we serve food during happy hour events?",
      answer: "Absolutely! We work with preferred caterers to provide appetizer stations, hors d'oeuvres, and finger foods perfect for happy hour gatherings. Options range from simple bar snacks to elaborate appetizer spreads depending on your package."
    },
    {
      question: "What are the typical hours for happy hour events?",
      answer: "Happy hour events typically run from 4 PM to 8 PM on weekdays, though we can accommodate different time slots based on your needs. Weekend happy hours are also available and can start earlier or run later depending on your preference."
    },
    {
      question: "Do you accommodate corporate networking events?",
      answer: "Yes! Our space is perfect for corporate networking, team building events, client appreciation gatherings, and company celebrations. We can provide name tags, networking facilitation, and professional atmosphere while maintaining the relaxed happy hour vibe."
    },
    {
      question: "How far in advance should we book a happy hour event?",
      answer: "We recommend booking 2-3 months in advance for weekday happy hours, especially during busy networking seasons. Weekend events may require longer lead times. However, we can often accommodate shorter notice depending on availability."
    }
  ];

  const happyhoursFaqSchema = createFaqSchema(faqData);

  return (
    <PageLayout heroKey="happyhours" footerLogoType="press" mainClassName="relative">
      <Seo
        title="Happy Hour Venue in Cincinnati | Somerhaus"
        description="Plan networking mixers and team gatherings at our OTR event space."
        schema={[businessSchema, happyhoursFaqSchema]}
      />

      <ImageGallerySection />

      <PricingSection 
        title="Happy Hour Packages"
        description="Choose the perfect package for your after-work celebration"
        packages={happyHoursPricing}
      />

      <Testimonials />

      {/* HoneyBook Inquiry Form */}
      <div className="bg-white p-6 rounded-lg shadow-md border-none">
        <h2 className="font-bold mb-4 text-center">Plan Your Happy Hour</h2>
        <p className="text-gray-600 mb-6 text-center">Fill out the form below to get started.</p>
        <HoneyBookForm placementId="7" />
      </div>

      <FAQSection
        title="Happy Hour Events FAQ"
        description="Everything you need to know about hosting your happy hour event at Somerhaus"
        faqs={faqData}
        postAccordionContent={<FaqMoreAnswers />}
      />

      <CTA />
    </PageLayout>
  );
};

export default HappyHours;
