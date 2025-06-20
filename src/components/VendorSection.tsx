import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { 

'use client';
  getVendorsByEventType, 
  vendorNetworkBenefits, 
  type VendorEventType,
  type VendorCategory 
} from '@/data/vendorData';

// Utility function to strip protocol from URL for display
const formatUrlForDisplay = (url: string): string => {
  if (!url) return '';
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '');
};

interface VendorSectionProps {
  eventType?: VendorEventType;
  customCategories?: VendorCategory[];
  title?: string;
  subtitle?: string;
  showBenefits?: boolean;
  showContactCTA?: boolean;
  showHeader?: boolean;
  layout?: 'grid' | 'compact';
  maxColumns?: 2 | 3;
  className?: string;
}

const VendorSection: React.FC<VendorSectionProps> = ({
  eventType,
  customCategories,
  title = "Preferred Vendors",
  subtitle = "We've partnered with Cincinnati's finest vendors to help make your celebration extraordinary.",
  showBenefits = true,
  showContactCTA = true,
  showHeader = true,
  layout = 'grid',
  maxColumns = 3,
  className = ""
}) => {
  // Get vendor data - either filtered by event type or use custom categories
  const vendorCategories = customCategories || (eventType ? getVendorsByEventType(eventType) : []);

  if (vendorCategories.length === 0) {
    return null;
  }

  const gridCols = layout === 'compact' 
    ? 'grid-cols-1 md:grid-cols-2' 
    : maxColumns === 2 
      ? 'grid-cols-1 md:grid-cols-2' 
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className={STANDARD_CONTAINER_CLASSES}>
        {showHeader && (
          <div className="text-center mb-12">
            <Badge className="mb-4 font-body">Our Network</Badge>
            <h2 className="font-header tracking-tight mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              {subtitle}
            </p>
          </div>
        )}
        
        {!showHeader && subtitle && (
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              {subtitle}
            </p>
          </div>
        )}

        <div className="space-y-12">
          {vendorCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-header mb-6">{category.category}</h3>
              {category.description && (
                <p className="text-muted-foreground mb-6 font-body">
                  {category.description}
                </p>
              )}
              <div className={`grid ${gridCols} gap-6`}>
                {category.vendors.map((vendor, i) => (
                  <Card key={i} className="border border-gray-100 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      {/* For wedding-style layout with images */}
                      {layout === 'compact' && vendor.image ? (
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            <OptimizedImage 
                              src={vendor.image} 
                              alt={vendor.name} 
                              className="h-12 w-auto object-contain" />
                          </div>
                          <h4 className="font-medium font-header text-black">{vendor.name}</h4>
                          {vendor.description && (
                            <p className="text-sm text-muted-foreground mt-1 font-body">
                              {vendor.description}
                            </p>
                          )}
                          {vendor.website && (
                            <div className="mt-2">
                              <a
                                href={vendor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-brand hover:text-brand-700 transition-colors font-body flex items-center gap-1"
                              >
                                {formatUrlForDisplay(vendor.website)}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Standard layout for most vendors */
                        <>
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium font-header text-black">{vendor.name}</h4>
                          </div>
                          <p className="text-muted-foreground mb-4 font-body">{vendor.description}</p>
                          {vendor.website && (
                            <div className="flex items-center justify-between">
                              <a
                                href={vendor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-brand hover:text-brand-700 transition-colors font-body flex items-center gap-1"
                              >
                                {formatUrlForDisplay(vendor.website)}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        {showBenefits && (
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="font-header mb-4">Why Use Our Preferred Vendors?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {vendorNetworkBenefits.map((benefit, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground font-body text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {showContactCTA && (
              <div className="border-t pt-6">
                <p className="mb-6 text-muted-foreground font-body">
                  Don't see what you're looking for? We're happy to work with your preferred vendors too!
                </p>
                <Button className="font-body">
                  <a href="/event-inquiry">Contact for Vendor Inquiries</a>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VendorSection; 