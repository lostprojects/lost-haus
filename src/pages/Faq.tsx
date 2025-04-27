
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { FaqCategories } from '@/components/faq/FaqCategories';

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero section with more prominent styling */}
      <section className="py-16 bg-gradient-to-b from-purple-100 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Somerhaus. We're here to help make your event planning smooth and stress-free.
          </p>
        </div>
      </section>
      
      <FaqCategories />
      <Footerdemo />
    </main>
  );
};

export default FAQ;
