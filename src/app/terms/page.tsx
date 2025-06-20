import type { Metadata } from 'next'
import React from 'react';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | Somerhaus Cincinnati',
  description: 'Review the terms and conditions for events and website use.',
  openGraph: {
    title: 'Terms of Service | Somerhaus Cincinnati',
    description: 'Review the terms and conditions for events and website use.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Somerhaus Cincinnati',
    description: 'Review the terms and conditions for events and website use.',
  },
};


const TermsPage: React.FC = () => {
  return (
    <PageLayout>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold mb-4">Terms of Service</h1>
        <p>Terms of service details will go here.</p>
        {/* Add more detailed terms of service content later */}
      </div>
    </PageLayout>
  );
};

export default TermsPage;
