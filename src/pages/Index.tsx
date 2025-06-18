import UniversalHero from '@/components/shared/UniversalHero';
import Header from '@/components/ui/header';
import Seo from '@/components/seo/Seo';
import { enhancedBusinessSchema, localBusinessSchema } from '@/components/seo/seo-schemas';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { ThreeStepProcess } from '@/components/blocks/ThreeStepProcess';

import { Footer } from "@/components/ui/footer-section";
import { RevealImageListDemo } from '@/components/ui/reveal-images/demo';
import { CTADemo } from '@/components/ui/call-to-action/demo';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import { FeaturedQuote } from '@/components/ui/featured-quote';

const Index = () => {
  return <>
    <Seo
      title="Somerhaus - Cincinnati Event Venue | Weddings, Corporate Events & Celebrations"
      description="Host unforgettable events at Cincinnati's most enchanting 3,080 sq ft venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations in Over-the-Rhine."
      image="/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp"
      url="https://somerhaus.com"
              schema={[enhancedBusinessSchema, localBusinessSchema]}
    />
    <main className="min-h-screen relative bg-background">
      <Header />
      <UniversalHero pageKey="homepage" />
      
      <RevealImageListDemo />
      <TestimonialsDemo />
      <CTADemo />
      <ImageGallerySection />
      <FeaturedQuote />
      {/* White container for Three Step Process section */}
      <div className="w-full py-10 lg:py-[40px]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-md p-4 lg:p-14 py-[50px] px-[50px]">
            <ThreeStepProcess 
              steps={[
                { 
                  step: 'Step 1', 
                  title: 'Share Your Vision',
                  content: 'Tell us about your dream event. Whether it\'s an intimate wedding ceremony, dynamic corporate gathering, or milestone celebration, we\'ll listen carefully and help transform your unique vision into reality.'
                },
                { 
                  step: 'Step 2',
                  title: 'Craft Your Plan',
                  content: 'Our experienced team collaborates with you to design every detail, from spatial layout and ambient lighting to personalized touches that reflect your style and story.'
                },
                { 
                  step: 'Step 3',
                  title: 'Celebrate & Create Magic',
                  content: 'Relax and be present while our dedicated professionals orchestrate every moment, ensuring your event flows effortlessly and creates unforgettable memories.'
                },
              ]}
              title="A Perfect Event in Three Steps"
              subtitle={
                <>
                  Our approachable, helpful <a href="/about" className="text-brand hover:text-brand/80 underline underline-offset-2">team</a> is here to make planning your perfect event effortless and enjoyable.
                </>
              }
            />
          </div>
        </div>
      </div>
      
      <Footer noBorder logoType="clients" />
    </main>
  </>;
};
export default Index;
