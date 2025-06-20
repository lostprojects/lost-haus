import type { Metadata } from 'next'
import React from 'react';
import EventInquiryClient from './EventInquiryClient';

export const metadata: Metadata = {
  title: 'Event Inquiry | Somerhaus Cincinnati',
  description: 'Tell us about your upcoming event and we',
  openGraph: {
    title: 'Event Inquiry | Somerhaus Cincinnati',
    description: 'Tell us about your upcoming event and we',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Inquiry | Somerhaus Cincinnati',
    description: 'Tell us about your upcoming event and we',
  },
};

const EventInquiry = () => {
  return <EventInquiryClient />;
};

export default EventInquiry;