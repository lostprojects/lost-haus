
import React from 'react';
import { Metadata } from 'next';
import { businessSchema } from '@/components/seo/seo-schemas';
import MeetingsClient from './MeetingsClient';

export const metadata: Metadata = {
  title: 'Meeting Venue in Cincinnati | Somerhaus',
  description: 'Hold productive corporate gatherings in our flexible Over-the-Rhine space.',
  openGraph: {
    title: 'Meeting Venue in Cincinnati | Somerhaus',
    description: 'Hold productive corporate gatherings in our flexible Over-the-Rhine space.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Venue in Cincinnati | Somerhaus',
    description: 'Hold productive corporate gatherings in our flexible Over-the-Rhine space.',
  },
};





const Meetings = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <MeetingsClient />
    </>
  );
};

export default Meetings;
