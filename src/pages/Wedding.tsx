
import React, { useEffect } from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import WeddingHero from '@/components/wedding/WeddingHero';
import VenueHighlights from '@/components/wedding/VenueHighlights';
import WeddingPackages from '@/components/wedding/WeddingPackages';
import WeddingGallery from '@/components/wedding/WeddingGallery';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingPlanning from '@/components/wedding/WeddingPlanning';
import PreferredVendors from '@/components/wedding/PreferredVendors';
import WeddingFAQ from '@/components/wedding/WeddingFAQ';
import WeddingContact from '@/components/wedding/WeddingContact';
import { WeddingCTA } from '@/components/wedding/WeddingCTA';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Add type declaration for Honeybook
declare global {
  interface Window {
    _HB_?: {
      pid?: string;
    };
  }
}

const Wedding = () => {
  // Honeybook form integration
  useEffect(() => {
    const HONEYBOOK_SCRIPT_SELECTOR = 'script[data-honeybook-script="true"]';
    const HONEYBOOK_SCRIPT_URL = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
    const HONEYBOOK_PID = '61a840e6341fbd00074ed82a';

    // Check if the script is already added to prevent duplicates
    if (document.querySelector(HONEYBOOK_SCRIPT_SELECTOR)) {
      // If script exists, ensure PID is set (HoneyBook might handle this, but belt-and-suspenders)
      window._HB_ = window._HB_ || {};
      window._HB_.pid = HONEYBOOK_PID;
      return; // Exit early
    }

    // Initialize Honeybook window object *before* script load
    window._HB_ = window._HB_ || {};
    window._HB_.pid = HONEYBOOK_PID;

    // Create script element for Honeybook
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = HONEYBOOK_SCRIPT_URL;
    script.setAttribute('data-honeybook-script', 'true'); // Add custom attribute for identification

    // Append script to document body
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(HONEYBOOK_SCRIPT_SELECTOR);
      if (existingScript && document.body.contains(existingScript)) {
        // Attempt to remove the script
        // Note: Some third-party scripts might resist removal or cause issues if removed.
        // Test thoroughly if cleanup is strictly necessary.
        try {
          document.body.removeChild(existingScript);
        } catch (error) {
          console.error("Failed to remove HoneyBook script:", error);
        }
      }
      // Optional: Clean up the window object. Be cautious.
      // delete window._HB_;
    };
  }, []); // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  return (
    <main className="min-h-screen">
      <Header />
      <WeddingHero />
      <WeddingPackages />
      <WeddingGallery />
      <WeddingTestimonials />
      <WeddingPlanning />
      <PreferredVendors />
      <WeddingFAQ />
      {/* HoneyBook Inquiry Form Section */}
      <section className="py-12 md:py-16"> {/* Added padding */}
        <div className="container mx-auto px-4"> {/* Added container */}
          <Card className="shadow-md"> {/* Added shadow like other cards */}
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-header text-center">Wedding Inquiry</CardTitle> {/* Centered title */}
            </CardHeader>
            <CardContent>
              <div className="hb-p-61a840e6341fbd00074ed82a-6"></div>
              <img height="1" width="1" style={{display:'none'}} src="https://www.honeybook.com/p.png?pid=61a840e6341fbd00074ed82a" alt="" />
              {/* Script is loaded via useEffect */}
            </CardContent>
          </Card>
        </div>
      </section>

      <WeddingCTA />
      <Footerdemo />
    </main>
  );
};

export default Wedding;
