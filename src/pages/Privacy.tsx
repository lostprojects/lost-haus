import React from 'react';
import Seo from '@/components/seo/Seo';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Seo
        title="Privacy Policy | Somerhaus Cincinnati"
        description="Learn how Somerhaus handles personal information for event inquiries."
      />
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Privacy policy details will go here.</p>
      {/* Add more detailed privacy policy content later */}
    </div>
  );
};

export default PrivacyPage;
