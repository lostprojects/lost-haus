import React from 'react';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/seo/Seo';

const PrivacyPage: React.FC = () => {
  return (
    <PageLayout>
      <Seo
        title="Privacy Policy | Somerhaus Cincinnati"
        description="Learn how Somerhaus handles personal information for event inquiries."
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold mb-4">Privacy Policy</h1>
        <p>Privacy policy details will go here.</p>
        {/* Add more detailed privacy policy content later */}
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;
