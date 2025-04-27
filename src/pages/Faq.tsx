
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { FaqCategories } from '@/components/faq/FaqCategories';

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero section with background image */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png" 
            alt="Somerhaus event venue"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center flex items-center justify-center h-[500px]">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6 font-header">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-body">
              Find answers to common questions about Somerhaus. We're here to help make your event planning smooth and stress-free.
            </p>
          </div>
        </div>
      </section>
      
      <FaqCategories />
      <Footerdemo />
    </main>
  );
};

export default FAQ;

