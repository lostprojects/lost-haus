
import React from 'react';
import VendorSection from '@/components/VendorSection';

const PreferredVendors = () => {
  return (
    <VendorSection 
      eventType="shower"
      maxColumns={2}
      showBenefits={false}
    />
  );
};

export default PreferredVendors;
