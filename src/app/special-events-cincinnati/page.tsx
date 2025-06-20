import type { Metadata } from 'next'
import React from 'react';
import { businessSchema } from '@/components/seo/seo-schemas';
import SpecialEventsClient from './SpecialEventsClient';

export const metadata: Metadata = {
  title: 'Special Event Venue in Cincinnati | Somerhaus',
  description: 'Host milestone celebrations in our character-rich Cincinnati venue.',
  openGraph: {
    title: 'Special Event Venue in Cincinnati | Somerhaus',
    description: 'Host milestone celebrations in our character-rich Cincinnati venue.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Event Venue in Cincinnati | Somerhaus',
    description: 'Host milestone celebrations in our character-rich Cincinnati venue.',
  },
};

const SpecialEvents = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <SpecialEventsClient />
    </>
  );
};

export default SpecialEvents;
