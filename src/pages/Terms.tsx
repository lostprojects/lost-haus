import React from 'react';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/seo/Seo';

const TermsPage: React.FC = () => {
  return (
    <PageLayout>
      <Seo
        title="Terms of Service | Somerhaus Cincinnati"
        description="Review the terms and conditions for events and website use."
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold mb-4">Terms of Service</h1>
        <p>Terms of service details will go here.</p>
        {/* Add more detailed terms of service content later */}
      </div>
    </PageLayout>
  );
};

export default TermsPage;
