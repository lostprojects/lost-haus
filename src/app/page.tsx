import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import { enhancedBusinessSchema, localBusinessSchema } from '@/components/seo/seo-schemas'
import { Testimonials } from '@/components/ui/reviews'
import { ThreeStepProcess } from '@/components/ThreeStepProcess'

import EventTypesGallery from '@/components/EventTypesGallery'
import { CTA } from '@/components/CTASection'
import { ImprovedGallerySection } from '@/components/ui/improved-gallery-section'
import { FeaturedQuote } from '@/components/ui/featured-quote'

// Next.js metadata for SEO
export const metadata: Metadata = {
  title: 'Somerhaus - Cincinnati Event Venue | Weddings, Corporate Events & Celebrations',
  description: 'Host unforgettable events at Cincinnati\'s most enchanting 3,080 sq ft venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations in Over-the-Rhine.',
  openGraph: {
    title: 'Somerhaus - Cincinnati Event Venue | Weddings, Corporate Events & Celebrations',
    description: 'Host unforgettable events at Cincinnati\'s most enchanting 3,080 sq ft venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations in Over-the-Rhine.',
    images: [
      {
        url: '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp',
        width: 1200,
        height: 630,
        alt: 'Somerhaus Event Space Interior',
      },
    ],
  },
  alternates: {
    canonical: 'https://somerhaus.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(enhancedBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      
      <PageLayout heroKey="homepage" footerLogoType="clients">
      
      {/* Creative Somerhaus Description */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="space-y-6 text-lg font-body text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Tucked into an old Over-the-Rhine garage, <span className="font-semibold text-brand">Somerhaus</span> Event Space is Cincinnati's green-lined playground for people who like their gatherings a little less ordinary. Concrete floors meet climbing vines, daylight pours through the long skylight & roll-up door. The space hums with the energy of artists, makers, and neighbors who've already tested the limits of what a "venue" can do.
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
      
      {/* Local SEO H2 Sections - Every GBP category becomes H2 section per guide */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-header mb-4">Cincinnati Event Venue Services</h2>
            <p className="text-lg text-gray-600 font-body">Your premier destination for unforgettable events in Over-the-Rhine</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Venue Cincinnati */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-header mb-3 text-brand">Wedding Venue Cincinnati</h2>
              <p className="text-gray-600 font-body mb-4">Create your perfect wedding day in our enchanting 3,080 sq ft venue in Cincinnati's historic Over-the-Rhine neighborhood. From intimate ceremonies to grand receptions.</p>
              <a href="/wedding" className="text-brand hover:text-brand/80 font-medium">Learn More →</a>
            </div>
            
            {/* Corporate Event Space Cincinnati */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-header mb-3 text-brand">Corporate Event Space Cincinnati</h2>
              <p className="text-gray-600 font-body mb-4">Host impactful meetings, conferences, and corporate celebrations in Cincinnati's most sophisticated industrial-chic venue in Over-the-Rhine.</p>
              <a href="/corporate" className="text-brand hover:text-brand/80 font-medium">Learn More →</a>
            </div>
            
            {/* Party Venue Cincinnati */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-header mb-3 text-brand">Party Venue Cincinnati</h2>
              <p className="text-gray-600 font-body mb-4">Celebrate milestone birthdays, anniversaries, and special occasions in our versatile 3,080 sq ft party space in Cincinnati's trendy Over-the-Rhine.</p>
              <a href="/parties" className="text-brand hover:text-brand/80 font-medium">Learn More →</a>
            </div>
            
            {/* Meeting Space Cincinnati */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-header mb-3 text-brand">Meeting Space Cincinnati</h2>
              <p className="text-gray-600 font-body mb-4">Professional meeting spaces in Cincinnati that inspire productivity and creativity in our modern Over-the-Rhine location.</p>
              <a href="/meetings" className="text-brand hover:text-brand/80 font-medium">Learn More →</a>
            </div>
            
            {/* Photo Shoot Venue Cincinnati */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-header mb-3 text-brand">Photo Shoot Venue Cincinnati</h2>
              <p className="text-gray-600 font-body mb-4">Picture-perfect backdrop for creative projects and brand photography in Cincinnati's most photogenic Over-the-Rhine venue.</p>
              <a href="/photo-shoots" className="text-brand hover:text-brand/80 font-medium">Learn More →</a>
            </div>
            
            {/* Special Events Venue Cincinnati */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-header mb-3 text-brand">Special Events Venue Cincinnati</h2>
              <p className="text-gray-600 font-body mb-4">From galas to fundraisers, make your special event extraordinary in Cincinnati's premier Over-the-Rhine event space.</p>
              <a href="/special-events" className="text-brand hover:text-brand/80 font-medium">Learn More →</a>
            </div>
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
                  content: 'Tell us about your event. Whether it\'s an intimate wedding ceremony, dynamic corporate gathering, or milestone celebration, we\'ll listen carefully and help transform your unique vision into reality.'
                },
                { 
                  step: 'Step 2',
                  title: 'Craft Your Plan',
                  content: 'We\'ll set the guidelines and step out of the way, or collaborate as much as you need to figure out every detail, from spatial layout and ambient lighting to personalized touches that reflect your style and story.'
                },
                { 
                  step: 'Step 3',
                  title: 'Celebrate & Create Magic',
                  content: 'Relax and be present while our dedicated professionals orchestrate every moment, ensuring your event flows effortlessly and creates unforgettable memories.'
                },
              ]}
              title="Roll-Up Door. Switch-On Imagination.
"
              subtitle={
                <>
                  Our approachable, helpful <a href="/about" className="text-brand hover:text-brand/80 underline underline-offset-2">team</a> is here to make planning your perfect Somerhaus event effortless and enjoyable.
                </>
              }
              buttonLabel="Three Steps"
              badgeText="Three Steps"
            />
          </div>
        </div>
      </div>
      </PageLayout>
    </>
  )
}
