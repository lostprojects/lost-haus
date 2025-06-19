import PageLayout from '@/components/PageLayout';
import Seo from '@/components/seo/Seo';
import { enhancedBusinessSchema, localBusinessSchema } from '@/components/seo/seo-schemas';
import { Testimonials } from '@/components/ui/testimonials';
import { ThreeStepProcess } from '@/components/ThreeStepProcess';
import { RevealImageListDemo } from '@/components/ui/reveal-images/demo';
import { CTA } from '@/components/CTASection';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-header mb-8 text-brand leading-tight">
              Industrial Elegance Meets Timeless Celebration
          </h2>
          <div className="space-y-6 text-lg font-body text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Step into <span className="font-semibold text-brand">Somerhaus</span>, where the soul of Cincinnati's historic Over-the-Rhine 
              neighborhood comes alive in every exposed brick wall and soaring ceiling. Our 3,080 square feet of meticulously curated space 
              tells a story of transformation—from industrial heritage to contemporary sanctuary.
            </p>
            <p>
              Here, beneath the glow of our signature lighting and surrounded by the warm embrace of reclaimed materials, 
              your most precious moments find their perfect stage. Whether you're saying "I do" under our dramatic ceiling beams, 
              celebrating a corporate milestone with Cincinnati's skyline as your backdrop, or gathering loved ones for an intimate dinner, 
              <span className="font-semibold text-brand"> Somerhaus doesn't just host events—we craft experiences that linger in memory long after the last guest departs</span>.
            </p>
            <p className="text-xl font-semibold text-brand italic">
              This is more than a venue. This is where your story becomes legendary.
            </p>
          </div>
        </div>
      </section>
      
      <RevealImageListDemo />
      <Testimonials />
      <CTA />
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
    </PageLayout>
  );
};
export default Index;
