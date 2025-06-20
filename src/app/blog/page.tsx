import type { Metadata } from 'next'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import { businessSchema } from '@/components/seo/seo-schemas'
import { ArrowUpRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blogData'
import OptimizedImage from '@/components/ui/OptimizedImage'

// Next.js metadata for SEO
export const metadata: Metadata = {
  title: 'Haus Journal | Inspiration & Tips',
  description: 'Ideas, stories, and resources to craft unforgettable gatherings at Somerhaus.',
  alternates: {
    canonical: 'https://somerhaus.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      
      <PageLayout heroKey="blog" footerLogoType="clients">
      <div className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.slug} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href={post.slug} className="absolute inset-0 z-10" />
              <div className="relative h-56 w-full">
                <OptimizedImage src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wide text-[#5CA87E] font-semibold">{post.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-2 font-header group-hover:text-[#5CA87E] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3 font-body">{post.excerpt}</p>
                <div className="mt-3 inline-flex items-center text-[#5CA87E] text-sm font-medium group-hover:underline">
                  Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </PageLayout>
    </>
  )
}
