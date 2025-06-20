'use client'

import React, { useMemo } from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import { Badge } from "@/components/ui/badge";
import OptimizedImage from '@/components/ui/OptimizedImage';
import { businessSchema } from '@/components/seo/seo-schemas';

export default function GalleryPage() {
  const galleryItems = useMemo(() => [
    // Add your gallery items here
    { id: 1, title: 'Wedding Gallery', category: 'wedding', image: '/photo/wedding-portrait-somerhaus-wedding-venue-cincinnati-mobile.webp' },
    { id: 2, title: 'Corporate Events', category: 'corporate', image: '/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.webp' },
    { id: 3, title: 'Special Events', category: 'special', image: '/photo/special-portrait1-somerhaus-cincinnati-events.webp' },
  ], []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <PageLayout footerLogoType="clients">
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className={STANDARD_CONTAINER_CLASSES}>
            <div>
              <h1 className="font-header mb-4">Event Gallery</h1>
              <p className="text-lg text-muted-foreground font-body mb-8">
                Browse our stunning gallery of weddings, corporate events, and special celebrations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="relative group overflow-hidden rounded-lg">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}
