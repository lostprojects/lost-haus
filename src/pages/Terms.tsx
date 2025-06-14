import React from 'react';
import Seo from '@/components/seo/Seo';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Seo
        title="Terms of Service | Somerhaus Cincinnati"
        description="Review the terms and conditions for events and website use."
      />
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p>Terms of service details will go here.</p>
      {/* Add more detailed terms of service content later */}
    </div>
  );
};

export default TermsPage;
