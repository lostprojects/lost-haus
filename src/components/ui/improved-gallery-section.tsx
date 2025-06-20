'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Shuffle } from "lucide-react";
import { getBalancedImages, galleryImages as allImages } from "@/data/galleryImages";
import OptimizedImage from '@/components/ui/OptimizedImage';

interface ImprovedGallerySectionProps {
  badgeText?: string;
}

export const ImprovedGallerySection: React.FC<ImprovedGallerySectionProps> = ({ 
  badgeText = "Photo Gallery"
}) => {
  // Get initial balanced set of images from the comprehensive data file
  const [galleryImages, setGalleryImages] = useState(() => getBalancedImages(10));

  const randomizeGallery = () => {
    // Get a new balanced set of random images
    setGalleryImages(getBalancedImages(10));
  };

  return (
    <section className="bg-transparent py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-body">{badgeText}</Badge>
          <h2 className="font-bold text-brand font-header mb-4 text-3xl md:text-4xl">
            Concrete, Greenery, Good Energy.
          </h2>
          <p className="text-lg text-gray-700 font-body max-w-2xl mx-auto mb-6">
            Explore the beautiful spaces and versatile layouts that make Somerhaus perfect for any occasion.
          </p>
          <Button 
            variant="outline" 
            onClick={randomizeGallery}
            className="font-body"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Randomize Gallery
          </Button>
        </div>
        
                <div className="grid grid-cols-4 grid-rows-4 aspect-[4/3] mb-12">
          {/* Row 1 */}
          <div 
            className="col-span-2 row-span-1 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[0]?.src}
              alt={galleryImages[0]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
          <div 
            className="col-span-1 row-span-2 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[1]?.src}
              alt={galleryImages[1]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
          <div 
            className="col-span-1 row-span-2 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[2]?.src}
              alt={galleryImages[2]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>

          {/* Row 2 */}
          <div 
            className="col-span-1 row-span-1 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[3]?.src}
              alt={galleryImages[3]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
          <div 
            className="col-span-1 row-span-1 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[4]?.src}
              alt={galleryImages[4]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>

          {/* Row 3 */}
          <div 
            className="col-span-2 row-span-1 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[5]?.src}
              alt={galleryImages[5]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
          <div 
            className="col-span-1 row-span-2 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[6]?.src}
              alt={galleryImages[6]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
          <div 
            className="col-span-1 row-span-2 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[7]?.src}
              alt={galleryImages[7]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>

          {/* Row 4 */}
          <div 
            className="col-span-1 row-span-1 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[8]?.src}
              alt={galleryImages[8]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
          <div 
            className="col-span-1 row-span-1 opacity-0 animate-fade-in-up overflow-hidden hover:shadow-lg transition-shadow duration-500"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            <OptimizedImage 
              src={galleryImages[9]?.src}
              alt={galleryImages[9]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" />
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-base font-body">
            <Link 
              href="/about/gallery"
              className="inline-flex items-center text-brand hover:text-brand/80 transition-colors"
            >
              See more photos <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href="/about/venue-layout"
              className="inline-flex items-center text-brand hover:text-brand/80 transition-colors"
            >
              Explore potential layouts <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 