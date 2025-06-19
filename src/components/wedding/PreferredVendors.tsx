
import React from 'react';
import VendorSection from '@/components/VendorSection';

const PreferredVendors = () => {
  return (
    <VendorSection 
      eventType="wedding"
      layout="compact"
      maxColumns={2}
      showBenefits={false}
      showContactCTA={false}
      title="Our Preferred Vendors"
      subtitle="We've partnered with Cincinnati's finest wedding professionals to ensure your day is perfect."
      className="py-16 md:py-24"
    />
  );
};

export default PreferredVendors;
