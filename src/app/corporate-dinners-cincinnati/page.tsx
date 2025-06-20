import type { Metadata } from 'next'
import React from 'react';
import { businessSchema } from '@/components/seo/seo-schemas';
import DinnersClient from './DinnersClient';

export const metadata: Metadata = {
  title: 'Dinner Event Venue in Cincinnati | Somerhaus',
  description: 'Host rehearsal dinners and celebrations in our industrial-chic Cincinnati venue.',
  openGraph: {
    title: 'Dinner Event Venue in Cincinnati | Somerhaus',
    description: 'Host rehearsal dinners and celebrations in our industrial-chic Cincinnati venue.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinner Event Venue in Cincinnati | Somerhaus',
    description: 'Host rehearsal dinners and celebrations in our industrial-chic Cincinnati venue.',
  },
};

const Dinners = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <DinnersClient />
    </>
  );
};

export default Dinners;
