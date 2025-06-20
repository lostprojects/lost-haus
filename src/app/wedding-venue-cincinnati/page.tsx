'use client'

import type { Metadata } from 'next'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import VenueHighlights from '@/components/wedding/VenueHighlights'
import WeddingPackages from '@/components/wedding/WeddingPackages'
import WeddingGallery from '@/components/wedding/WeddingGallery'
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials'
import WeddingPlanning from '@/components/wedding/WeddingPlanning'
import PreferredVendors from '@/components/wedding/PreferredVendors'
import WeddingFAQ from '@/components/wedding/WeddingFAQ'
import WeddingContact from '@/components/wedding/WeddingContact'
import { WeddingCTA } from '@/components/wedding/WeddingCTA'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useHoneyBook } from '@/hooks/use-honeybook'
import HoneyBookForm from '@/components/HoneyBookForm'
import { businessSchema } from '@/components/seo/seo-schemas'

export default function WeddingPage() {
  useHoneyBook()

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      
      <PageLayout heroKey="wedding" footerLogoType="clients">
      
      <section className="py-8 text-center bg-white">
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Explore our tailored options for{' '}
          <a href="/wedding/micro-weddings" className="text-primary underline hover:text-primary/80">micro weddings</a>, and{' '}
          <a href="/wedding/elopements" className="text-primary underline hover:text-primary/80">elopements</a>.
        </p>
      </section>
      
      <WeddingPackages />
      <WeddingGallery badgeText="Wedding Photos" />
      <WeddingTestimonials badgeText="Happy Couples" />
      <WeddingPlanning badgeText="Wedding Planning" />
      <PreferredVendors />
      <WeddingFAQ />
      
      {/* HoneyBook Inquiry Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-header text-center">Wedding Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <HoneyBookForm placementId="6" />
            </CardContent>
          </Card>
        </div>
      </section>

        <WeddingCTA />
      </PageLayout>
    </>
  )
}
