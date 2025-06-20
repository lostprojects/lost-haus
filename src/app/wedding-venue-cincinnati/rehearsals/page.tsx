
import type { Metadata } from 'next'
import React from 'react';
import { businessSchema } from '@/components/seo/seo-schemas';
import RehearsalsClient from './RehearsalsClient';

export const metadata: Metadata = {
  title: 'Wedding Rehearsal Venue in Cincinnati | Somerhaus',
  description: 'Practice and celebrate in style at our historic Cincinnati space.',
  openGraph: {
    title: 'Wedding Rehearsal Venue in Cincinnati | Somerhaus',
    description: 'Practice and celebrate in style at our historic Cincinnati space.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Rehearsal Venue in Cincinnati | Somerhaus',
    description: 'Practice and celebrate in style at our historic Cincinnati space.',
  },
};

const Rehearsals = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <RehearsalsClient />
    </>
  );
};

export default Rehearsals;
