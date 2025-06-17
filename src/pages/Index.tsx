import Hero from '@/components/Hero';
import Header from '@/components/ui/header';
import Seo from '@/components/seo/Seo';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { FeatureStepsDemo } from '@/components/blocks/feature-section-demo';
import { FeaturesSectionWithBentoGrid } from '@/components/blocks/feature-section-with-bento-grid';
import { Footerdemo } from '@/components/ui/footer-section';
import { Logos3 } from '@/components/blocks/logos3';
import { RevealImageListDemo } from '@/components/ui/reveal-images/demo';
import { CTADemo } from '@/components/ui/call-to-action/demo';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';
import { FeaturedQuote } from '@/components/ui/featured-quote';

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  telephone: "513-902-1415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US"
  }
};
const clientLogos = [{
  id: "client-1",
  description: "University of Cincinnati",
  image: "/client-logos/University-of-Cincinnati-Logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-2",
  description: "Procter & Gamble",
  image: "/client-logos/P&G-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-3",
  description: "Fischer Homes",
  image: "/client-logos/fischer-homes-logo.jpg",
  className: "brightness-0 invert"
}, {
  id: "client-4",
  description: "City of Cincinnati",
  image: "/client-logos/cincinnati-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-5",
  description: "Instacart",
  image: "/client-logos/instacart-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-6",
  description: "Artworks",
  image: "/client-logos/artworks-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-7",
  description: "CincyTech",
  image: "/client-logos/cincytech-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-8",
  description: "Black Tech Week",
  image: "/client-logos/black-tech-week.png",
  className: "brightness-0 invert"
}, {
  id: "client-9",
  description: "Scripps",
  image: "/client-logos/Scripps-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-10",
  description: "Xavier University",
  image: "/client-logos/xavier-university-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-11",
  description: "North American Properties",
  image: "/client-logos/north-american.png",
  className: "brightness-0 invert"
}, {
  id: "client-12",
  description: "Kroger",
  image: "/client-logos/kroger-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-13",
  description: "Alzheimer's Foundation",
  image: "/client-logos/Alzheimers-Foundation-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-14",
  description: "Cincinnati Chamber",
  image: "/client-logos/cincinnati-chamber-logo.png",
  className: "brightness-0 invert"
}, {
  id: "client-15",
  description: "OTR Film Festival",
  image: "/client-logos/otr-film-festival-logo.png",
  className: "brightness-0 invert"
}];

const pressLogos = [{
  id: "press-1",
  description: "Zola",
  image: "/press-logos/zola-logo.svg",
  className: "brightness-0 invert"
}, {
  id: "press-2",
  description: "Peerspace",
  image: "/press-logos/peerspace-logo.svg",
  className: "brightness-0 invert"
}, {
  id: "press-3",
  description: "Business Courier",
  image: "/press-logos/business-courier-logo.webp",
  className: "grayscale invert contrast-200"
}, {
  id: "press-4",
  description: "Cincinnati Magazine",
  image: "/press-logos/Cincinnati-mag-logo.png",
  className: "brightness-0 invert"
}, {
  id: "press-5",
  description: "The Knot",
  image: "/press-logos/the-knot-logo.webp",
  className: "brightness-0 invert"
}, {
  id: "press-6",
  description: "Cincinnati Enquirer",
  image: "/press-logos/Enquirer-logo.png",
  className: "brightness-0 invert"
}, {
  id: "press-7",
  description: "Cincinnati.com",
  image: "/press-logos/cincinnati-com-logo.png",
  className: "brightness-0 invert"
}, {
  id: "press-8",
  description: "CityBeat",
  image: "/press-logos/City-Beat-logo.png",
  className: "brightness-0 invert"
}];
const Index = () => {
  return <>
    <Seo
      title="Somerhaus - Cincinnati Event Venue | Weddings, Corporate Events & Celebrations"
      description="Host unforgettable events at Cincinnati's most enchanting 3,080 sq ft venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations in Over-the-Rhine."
      image="/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.jpg"
      url="https://somerhaus.com"
      schema={businessSchema}
    />
    <main className="min-h-screen relative" style={{
    backgroundColor: '#F5F3F1'
  }}>
      <Header />
      <Hero />
      <Logos3 heading="" logos={pressLogos} className="bg-black" />
      
      {/* Background section */}
      <div style={{ backgroundColor: '#F8F6F7' }}>
        <RevealImageListDemo />
        <TestimonialsDemo />
        <CTADemo />
        <ImageGallerySection />
        <FeaturedQuote />
        {/* White container for FeatureStepsDemo section */}
        <div className="w-full py-10 lg:py-[40px]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-md p-4 lg:p-14 py-[50px] px-[50px]">
              <FeatureStepsDemo />
            </div>
          </div>
        </div>
      </div>
      
      <Logos3 heading="Trusted By" logos={clientLogos} className="bg-black" />
              <Footerdemo noBorder />
    </main>
  </>;
};
export default Index;
