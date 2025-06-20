import type { Metadata } from 'next'
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PrintButton from '@/components/ui/print-button';
import ShareButton from '@/components/ui/share-button';
import { businessSchema } from '@/components/seo/seo-schemas';

export const metadata: Metadata = {
  title: 'Budget Category Checklist',
  description: 'Track all potential wedding expenses with average Cincinnati costs.',
  openGraph: {
    title: 'Budget Category Checklist',
    description: 'Track all potential wedding expenses with average Cincinnati costs.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Category Checklist',
    description: 'Track all potential wedding expenses with average Cincinnati costs.',
  },
};


const BudgetChecklist: React.FC = () => {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <PageLayout footerLogoType="none">
      
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <PrintButton />
              <ShareButton 
                title="Budget Category Checklist"
                text="Check out this comprehensive wedding budget checklist from Somerhaus"
              />
            </div>
          </div>
          
          <h1 className="font-header">
            Budget Category Checklist (and Average Costs)
          </h1>
          <p className="font-body text-muted-foreground">
            Use this list to ensure you've accounted for all potential wedding expenses. Every celebration is unique, so not all will apply.
          </p>
          <h3 className="font-header mt-6">Venue & Rentals</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Venue rental fee – average ~$6,000 (Cincinnati range ~$5k-$7k)</li>
            <li>On-site ceremony fee</li>
            <li>Tables, chairs, linens if not included</li>
            <li>Table settings via caterer</li>
            <li>Tent or weather backup</li>
            <li>Dance floor and lighting/AV equipment</li>
            <li>Heaters, fans or decor rentals</li>
          </ul>
          <h3 className="font-header mt-6">Catering & Bar</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Food service – average ~$5,100 for 150 guests</li>
            <li>Cake or desserts – ~$2-$5 per slice</li>
            <li>Bar/alcohol – average ~$4,000 for open bar</li>
            <li>Service charge, tax and gratuities</li>
            <li>Bartender or catering staff fees</li>
          </ul>
          <h3 className="font-header mt-6">Attire & Beauty</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Wedding dress and alterations</li>
            <li>Groom's attire</li>
            <li>Hair and makeup with trials</li>
            <li>Accessories and shoes</li>
          </ul>
          <h3 className="font-header mt-6">Photography & Video</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Photographer – Cincinnati average ~$4,000</li>
            <li>Videographer – average ~$3,700</li>
            <li>Engagement session or extra hours</li>
            <li>Albums or prints</li>
          </ul>
          <h3 className="font-header mt-6">Flowers & Decor</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Bouquets, boutonnieres and ceremony florals</li>
            <li>Reception centerpieces and lighting</li>
            <li>Linens or specialty rentals</li>
          </ul>
          <h3 className="font-header mt-6">Music & Entertainment</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Ceremony musicians, DJ or live band</li>
            <li>Sound equipment rental</li>
            <li>Dance floor or stage</li>
          </ul>
          <h3 className="font-header mt-6">Stationery</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Save-the-dates and invitations</li>
            <li>Postage for invites and RSVPs</li>
            <li>Programs, escort cards and menus</li>
          </ul>
          <h3 className="font-header mt-6">Rings & Officiant</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Wedding bands and insurance</li>
            <li>Marriage license (~$75 in Ohio)</li>
            <li>Officiant fee or donation</li>
          </ul>
          <h3 className="font-header mt-6">Transportation & Lodging</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Couple's transportation or guest shuttles</li>
            <li>Valet service or parking</li>
            <li>Hotel accommodations</li>
          </ul>
          <h3 className="font-header mt-6">Gifts & Misc</h3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Favors, welcome bags and tips</li>
            <li>Wedding party or parent gifts</li>
            <li>Emergency kit items and contingency fund</li>
          </ul>
        </div>
      </section>
    </PageLayout>
    </>
  );
};

export default BudgetChecklist;
