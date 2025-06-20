import type { Metadata } from 'next'
import React from 'react';
import { businessSchema } from '@/components/seo/seo-schemas';
import ElopementsClient from './ElopementsClient';

export const metadata: Metadata = {
  title: 'Elopement Venue in Cincinnati | Somerhaus',
  description: 'Plan an intimate elopement in our chic Cincinnati venue.',
  openGraph: {
    title: 'Elopement Venue in Cincinnati | Somerhaus',
    description: 'Plan an intimate elopement in our chic Cincinnati venue.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elopement Venue in Cincinnati | Somerhaus',
    description: 'Plan an intimate elopement in our chic Cincinnati venue.',
  },
};

const Elopements = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <ElopementsClient />
    </>
  );
};

export default Elopements;
