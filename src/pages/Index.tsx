import PageLayout from '@/components/PageLayout';
import Seo from '@/components/seo/Seo';
import { enhancedBusinessSchema, localBusinessSchema } from '@/components/seo/seo-schemas';
import { Testimonials } from '@/components/ui/testimonials';
import { ThreeStepProcess } from '@/components/ThreeStepProcess';

import EventTypesGallery from '@/components/EventTypesGallery';
import { CTA } from '@/components/CTASection';
import { ImprovedGallerySection } from '@/components/ui/improved-gallery-section';
import { FeaturedQuote } from '@/components/ui/featured-quote';

const Index = () => {
  return (
    <PageLayout heroKey="homepage" footerLogoType="clients">
      <Seo
        title="Somerhaus - Cincinnati Event Venue | Weddings, Corporate Events & Celebrations"
        description="Host unforgettable events at Cincinnati's most enchanting 3,080 sq ft venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations in Over-the-Rhine."
        image="/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp"
        url="https://somerhaus.com"
        schema={[enhancedBusinessSchema, localBusinessSchema]}
      />
      
      {/* Creative Somerhaus Description */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="space-y-6 text-lg font-body text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Tucked into an old Over-the-Rhine garage, <span className="font-semibold text-brand">Somerhaus</span> is Cincinnati's green-lined playground for people who like their gatherings a little less ordinary. Concrete floors meet climbing vines, daylight pours through the long skylight & roll-up door. The space hums with the energy of artists, makers, and neighbors who've already tested the limits of what a "venue" can do.
            </p>
            <p>
              We hand-made it this way on purpose—to be open, flexible, and ready for whatever you're dreaming up. Pop in for a long-table dinner, a pop-up market, a micro-wedding, or a late-night idea sprint; our room adapts without losing its character.
            </p>
            <p>
              If you want a space that feels alive, rooted in the neighborhood, and wide-open to creativity, you're in the right spot.
            </p>
            <p className="text-xl font-semibold text-black"> 
              Welcome to Somerhaus.
            </p>
          </div>
        </div>
      </section>
      
      {/* Event Types Gallery - 3x2 grid layout using full page width */}
      <EventTypesGallery />
      <Testimonials />
      <FeaturedQuote />
      <CTA />
      <ImprovedGallerySection />
      {/* White container for Three Step Process section */}
      <div className="w-full py-8 lg:py-[10px]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-md p-4 lg:p-14 py-[20px] px-[20px]">
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
    </PageLayout>
  );
};
export default Index;
