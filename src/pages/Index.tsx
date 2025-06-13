import Hero from '@/components/Hero';
import Header from '@/components/ui/header';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { FeatureStepsDemo } from '@/components/blocks/feature-section-demo';
import { FeaturesSectionWithBentoGrid } from '@/components/blocks/feature-section-with-bento-grid';
import { Footerdemo } from '@/components/ui/footer-section';
import { Logos3 } from '@/components/blocks/logos3';
import { RevealImageListDemo } from '@/components/ui/reveal-images/demo';
import { CTADemo } from '@/components/ui/call-to-action/demo';
import { ImageGallerySection } from '@/components/ui/image-gallery-section';

const pressLogos = [{
  id: "press-1",
  description: "TechCrunch",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop",
  className: "h-8 w-auto grayscale hover:grayscale-0 transition-all"
}, {
  id: "press-2",
  description: "Forbes",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop",
  className: "h-8 w-auto grayscale hover:grayscale-0 transition-all"
}, {
  id: "press-3",
  description: "Wall Street Journal",
  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop",
  className: "h-8 w-auto grayscale hover:grayscale-0 transition-all"
}, {
  id: "press-4",
  description: "New York Times",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop",
  className: "h-8 w-auto grayscale hover:grayscale-0 transition-all"
}, {
  id: "press-5",
  description: "Bloomberg",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop",
  className: "h-8 w-auto grayscale hover:grayscale-0 transition-all"
}];

const Index = () => {
  return (
    <main className="min-h-screen relative" style={{
      backgroundColor: '#F5F3F1'
    }}>
      <Header />
      <Hero />
      <Logos3 heading="Featured In" logos={pressLogos} />
      <RevealImageListDemo />
      <FeaturesSectionWithBentoGrid />
      <ImageGallerySection />
      <TestimonialsDemo />
      {/* White container for FeatureStepsDemo section */}
      <div className="w-full py-10 lg:py-16">
        <div className="container">
          <div className="bg-white rounded-md p-4 lg:p-14 py-[50px] px-[50px]">
            <FeatureStepsDemo />
          </div>
        </div>
      </div>
      <CTADemo />
      <Footerdemo />
    </main>
  );
};

export default Index;
