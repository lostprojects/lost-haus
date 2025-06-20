import type { Metadata } from 'next'
import React from 'react';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Somerhaus Cincinnati',
  description: 'Learn how Somerhaus handles personal information for event inquiries.',
  openGraph: {
    title: 'Privacy Policy | Somerhaus Cincinnati',
    description: 'Learn how Somerhaus handles personal information for event inquiries.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Somerhaus Cincinnati',
    description: 'Learn how Somerhaus handles personal information for event inquiries.',
  },
};


const PrivacyPage: React.FC = () => {
  return (
    <PageLayout>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold mb-4">Privacy Policy</h1>
        <p>Privacy policy details will go here.</p>
        {/* Add more detailed privacy policy content later */}
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;
