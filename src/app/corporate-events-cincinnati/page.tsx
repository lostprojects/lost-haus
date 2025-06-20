import type { Metadata } from 'next';
import { localBusinessSchema } from '@/components/seo/seo-schemas';
import CorporateClient from './CorporateClient';

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
      "name": "Corporate Events Cincinnati",
      "item": "https://somerhaus.com/corporate-events-cincinnati"
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Corporate Event Venue",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://somerhaus.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Cincinnati",
    "containedIn": {
      "@type": "AdministrativeArea",
      "name": "Ohio"
    }
  },
  "description": "Professional corporate event venue in Cincinnati's Over-the-Rhine district offering meeting spaces, AV equipment, catering options, and full-service event planning for business gatherings.",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "1000.00"
    }
  }
};

export const metadata: Metadata = {
  title: 'Corporate Event Venue Cincinnati | Meeting Space in Over-the-Rhine | Somerhaus',
  description: 'Book Cincinnati\'s premier corporate event venue in historic Over-the-Rhine. Professional meeting space with full AV setup, catering options, and downtown accessibility. Ideal for 20-130 attendees.',
  openGraph: {
    title: 'Corporate Event Venue in Cincinnati | Somerhaus',
    description: 'Host productive meetings and memorable company events in our stylish Over-the-Rhine space.',
    url: 'https://somerhaus.com/corporate',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Event Venue in Cincinnati | Somerhaus',
    description: 'Host productive meetings and memorable company events in our stylish Over-the-Rhine space.',
  },
};

const Corporate = () => {
  return (
    <>
      {/* Main Schema */}
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

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <CorporateClient />
    </>
  );
};

export default Corporate;
