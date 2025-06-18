import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/ui/header';
import FAQSection from '@/components/shared/FAQSection';
import PressKitSection from '@/components/press/PressKitSection';
import { Footer } from "@/components/ui/footer-section";
import { LogoTicker } from '@/components/blocks/LogoTicker';
import { pressLogos } from '@/data/pressLogos';
import { clientLogos } from '@/data/clientLogos';
import UniversalHero from '@/components/shared/UniversalHero';

const Press: React.FC = () => {
  const faqData = [
    {
      question: "How can I schedule a press tour of Somerhaus?",
      answer: "Contact our media relations team at hello@somerhaus.com or call (513) 381-3119. We're happy to arrange a personalized tour for journalists, bloggers, and content creators."
    },
    {
      question: "Do you have high-resolution photos available for press use?",
      answer: "Yes! We have a comprehensive media kit with high-resolution venue photos, event shots, and brand assets. Access our press kit below or request specific images from our team."
    },
    {
      question: "Can we film or photograph events at Somerhaus?",
      answer: "Absolutely! We welcome professional media coverage of events. Please coordinate with our events team in advance to ensure seamless coverage without disrupting the celebration."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Press & Media | Somerhaus Cincinnati</title>
        <meta name="description" content="Media resources, press releases, and contact information for Cincinnati's premier event venue, Somerhaus." />
      </Helmet>
      <Header />
      
      <UniversalHero pageKey="press" />
      
      <main className="flex-grow">
        <PressKitSection />
        <LogoTicker heading="Featured In" logos={pressLogos} className="bg-white" />
        <FAQSection title="Media Inquiries" faqs={faqData} />
        <LogoTicker heading="Trusted By" logos={clientLogos} className="bg-black" />
      </main>
      
      <Footer logoType="clients" />
    </div>
  );
};

export default Press;
