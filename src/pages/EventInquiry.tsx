import React from 'react';
import HeaderLeadCapture from '@/components/ui/header-lead-capture';
import { Footer } from "@/components/ui/footer-section";
import { useHoneyBook } from '@/hooks/use-honeybook';
import HoneyBookForm from '@/components/honeybook/HoneyBookForm';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';
import { LogoTicker } from '@/components/blocks/LogoTicker';
import UrgencyFlagBanner from '@/components/ui/urgency-flag';
import { Star } from 'lucide-react';
import BouncingArrow from '@/components/ui/bouncing-arrow';
import { clientLogos } from '@/data/clientLogos';
import { pressLogos } from '@/data/pressLogos';
import UniversalHero from '@/components/shared/UniversalHero';

const EventInquiry = () => {
  useHoneyBook();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Event Inquiry | Somerhaus Cincinnati"
        description="Tell us about your upcoming event and we'll craft a personalized proposal."
        schema={businessSchema}
      />
      {/* Capture Header */}
      <HeaderLeadCapture />
      
      {/* Full-height hero background */}
      <UniversalHero pageKey="eventinquiry" />
      
      {/* Content layered over the hero */}
      <main className="absolute inset-0 z-20 flex flex-col pt-20">
        {/* Featured In Section - positioned at top */}
        <div className="w-full mb-6 flex justify-center pt-8">
          <LogoTicker type="press" className="bg-transparent" />
        </div>

        {/* Rating Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-base font-body text-white">5-Stars on Google & Yelp</span>
        </div>

        {/* Form Container - centered over hero */}
        <div className="flex-grow flex items-center justify-center px-4 pb-16">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg border border-gray-200 shadow-2xl shadow-black/40 p-6 md:p-8">
              <h2 className="pt-5 text-4xl md:text-5xl font-header mb-6 text-center text-[#5CA87E]">Let's Make It Happen!</h2>
              <p className="text-gray-600 mb-6 text-center">
                <strong>We'd love to host you at Somerhaus!</strong> <br />
                Please fill out the short form and we'll get back to you in 24 hours or less.
              </p>
              {/* Urgency Flag */}
              <UrgencyFlagBanner />
              
              {/* Animated Arrow */}
              <div className="flex justify-center mt-[40px]">
                <BouncingArrow color="#5CA87E" duration={3.3} />
              </div>
              
              {/* Honeybook Embed */}
              <div className="-mt-10">
                <HoneyBookForm placementId="5" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trusted By section (identical to homepage) */}
      <LogoTicker type="clients" className="bg-black" />
    </div>
  );
};

export default EventInquiry;