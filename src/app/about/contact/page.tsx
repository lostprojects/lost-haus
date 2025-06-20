import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { businessSchema, localBusinessSchema } from '@/components/seo/seo-schemas'

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://somerhaus.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://somerhaus.com/about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://somerhaus.com/about/contact"
    }
  ]
}

export const metadata: Metadata = {
  title: 'Contact Somerhaus | Premier Event Venue in Over-the-Rhine, Cincinnati',
  description: 'Contact Somerhaus, Cincinnati\'s premier event venue located at 1415 Republic St in historic Over-the-Rhine. Schedule a tour of our unique industrial-chic space perfect for weddings, corporate events, and special celebrations.',
  openGraph: {
    title: 'Contact Somerhaus in Cincinnati',
    description: 'Get in touch with our team to book your event or schedule a tour at Cincinnati\'s most enchanting venue.',
    url: 'https://somerhaus.com/about/contact',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Somerhaus in Cincinnati',
    description: 'Get in touch with our team to book your event or schedule a tour at Cincinnati\'s most enchanting venue.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <ContactClient />
    </>
  )
}
