
import Hero from '@/components/Hero';
import Header from '@/components/ui/header';
import { TestimonialsDemo } from '@/components/ui/testimonials-demo';
import { FeatureStepsDemo } from '@/components/blocks/feature-section-demo';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TestimonialsDemo />
      <FeatureStepsDemo />
    </main>
  );
};

export default Index;
