import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import Seo from '@/components/seo/Seo';

export default function BudgetSmartWeddings() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo title="Budget-Smart Weddings" description="15 ways to maximize style and minimize spend at Somerhaus." />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 prose">
        <h1>Budget-Smart Weddings: 15 Ways to Maximize Style</h1>
        <p>Placeholder article content coming soon.</p>
      </main>
      <Footerdemo />
    </div>
  );
} 