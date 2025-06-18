import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/ui/header';
import FAQSection from '@/components/shared/FAQSection';
import PressKitSection from '@/components/press/PressKitSection';
import { Footer } from "@/components/ui/footer-section";
import { LogoTicker } from '@/components/blocks/LogoTicker';
import UniversalHero from '@/components/shared/UniversalHero';
import { getFAQsForPage } from '@/lib/faqUtils';

const Press: React.FC = () => {
  // Get FAQs from centralized data
  const faqData = getFAQsForPage('press', 3);

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
        <LogoTicker type="press" className="bg-white" />
        <FAQSection title="Media Inquiries" faqs={faqData} />
        <LogoTicker type="clients" className="bg-black" />
      </main>
      
      <Footer logoType="clients" />
    </div>
  );
};

export default Press;
