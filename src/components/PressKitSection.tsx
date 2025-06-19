import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Download } from 'lucide-react';

const PressKitSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-header mb-6">Press Resources</h2>
        <p className="text-lg text-muted-foreground mb-12 font-mono max-w-2xl mx-auto">
          Get high-resolution images, logos, and venue information for press coverage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center">
            <img src="/photo/space-portrait2-cincinnati-event-space-somerhaus.webp" alt="Press Images" className="h-28 w-auto object-cover rounded mb-4" />
            <h3 className="font-header mb-2">High-Res Images</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">Professional event photos</p>
            <p className="text-xs text-center text-muted-foreground mb-4">Contact us for high-resolution image pack</p>
            <Button asChild>
              <a href="mailto:info@somerhaus.com?subject=Press Images Request">
                <Mail className="w-4 h-4 mr-2" />
                Request Images
              </a>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center">
            <img src="/haus-logo.webp" alt="Somerhaus Logo" className="h-24 w-auto object-contain mb-4" />
            <h3 className="font-header mb-2">Logo Assets</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">Brand logos & variations</p>
            <p className="text-xs text-center text-muted-foreground mb-4">Available in PNG, SVG, light & dark versions</p>
            <Button asChild>
              <a href="mailto:info@somerhaus.com?subject=Logo Pack Request">
                <Mail className="w-4 h-4 mr-2" />
                Request Logos
              </a>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center">
            <Download className="h-24 w-24 text-primary mb-4" />
            <h3 className="font-header mb-2">Press Information</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">Venue specs & details</p>
            <div className="text-xs text-left text-muted-foreground mb-4 space-y-1">
              <p>• Address: 1415 Republic St, Cincinnati, OH</p>
              <p>• Phone: (513) 902-1415</p>
              <p>• Capacity: Up to 150 (cocktail) / 80 (seated)</p>
              <p>• Square Footage: 3,080 sq ft</p>
              <p>• Features: Bar Packages, Built-in A/V, Natural Light</p>
            </div>
            <Button asChild>
              <a href="mailto:info@somerhaus.com?subject=Press Kit Request">
                <Mail className="w-4 h-4 mr-2" />
                Request Press Kit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKitSection; 