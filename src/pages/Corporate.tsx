
import React, { useEffect } from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import CorporateHero from '@/components/corporate/CorporateHero';
import CorporateValueProps from '@/components/corporate/CorporateValueProps';
import CorporateLayouts from '@/components/corporate/CorporateLayouts';
import CorporateAmenities from '@/components/corporate/CorporateAmenities';
import CorporatePricing from '@/components/corporate/CorporatePricing';
import CorporateTestimonials from '@/components/corporate/CorporateTestimonials';
import CorporateFAQ from '@/components/corporate/CorporateFAQ';

const Corporate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.onload = () => {
      (function(h,b,s,n,i,p,e,t) {
        h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
        t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
        e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
      })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","61a840e6341fbd00074ed82a");
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CorporateHero />
        <CorporateValueProps />
        <CorporateLayouts />
        <CorporateAmenities />
        <CorporatePricing />
        <CorporateTestimonials />
        <CorporateFAQ />
        {/* Honeybook Embed Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border-none">
          <h2 className="text-2xl font-bold mb-4 text-center">Plan Your Corporate Event</h2>
          <p className="text-gray-600 mb-6 text-center">Fill out the form below to get started.</p>
          <div className="hb-p-61a840e6341fbd00074ed82a-7"></div><img height="1" width="1" style={{display:'none'}} src="https://www.honeybook.com/p.png?pid=61a840e6341fbd00074ed82a" />
        </div>
      </main>
      <Footerdemo />
    </div>
  );
};


export default Corporate;
