import Hero from '@/components/Hero';
import Header from '@/components/ui/header';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { FeatureStepsDemo } from '@/components/blocks/feature-section-demo';
import { FeaturesSectionWithBentoGrid } from '@/components/blocks/feature-section-with-bento-grid';
import { Footerdemo } from '@/components/ui/footer-section';
import { Logos3 } from '@/components/blocks/logos3';
import { RevealImageListDemo } from '@/components/ui/reveal-images/demo';
import { CTADemo } from '@/components/ui/call-to-action/demo';
import { EventSpinner } from '@/components/ui/spinning-text/EventSpinner';
const logos = [{
  id: "logo-1",
  description: "Photography",
  image: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png",
  className: "h-12 w-auto"
}, {
  id: "logo-2",
  description: "Events",
  image: "/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png",
  className: "h-12 w-auto"
}, {
  id: "logo-3",
  description: "Catering",
  image: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png",
  className: "h-12 w-auto"
}, {
  id: "logo-4",
  description: "Weddings",
  image: "/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png",
  className: "h-12 w-auto"
}];
const Index = () => {
  return <main className="min-h-screen relative" style={{
    backgroundColor: '#F5F3F1'
  }}>
      <Header />
      <div className="relative">
        <Hero />
        <EventSpinner />
      </div>
      <Logos3 heading="Cincinnati's Most Notable Event Planners Trust Us" logos={logos} />
      <RevealImageListDemo />
      <FeaturesSectionWithBentoGrid />
      <TestimonialsDemo />
      {/* White container for FeatureStepsDemo section */}
      <div className="bg-white max-w-[1280px] mx-auto rounded-lg p-4 my-8">
        <FeatureStepsDemo />
      </div>
      <CTADemo />
      <Footerdemo />
    </main>;
};
export default Index;