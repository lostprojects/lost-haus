import type { Metadata } from 'next'
import React from 'react';
import { businessSchema } from '@/components/seo/seo-schemas';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Somerhaus | Event Space in Cincinnati',
  description: 'Learn the story behind Somerhaus and meet the team that makes every event memorable.',
  openGraph: {
    title: 'About Somerhaus | Event Space in Cincinnati',
    description: 'Learn the story behind Somerhaus and meet the team that makes every event memorable.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Somerhaus | Event Space in Cincinnati',
    description: 'Learn the story behind Somerhaus and meet the team that makes every event memorable.',
  },
};

const About: React.FC = () => {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <AboutClient />
    </>
  );
};

export default About;
