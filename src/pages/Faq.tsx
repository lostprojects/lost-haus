
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { FaqCategories } from '@/components/faq/FaqCategories';

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Somerhaus. We're here to help make your event planning smooth and stress-free.
          </p>
        </div>
      </div>
      <FaqCategories />
      <Footerdemo />
    </main>
  );
};

export default FAQ;
