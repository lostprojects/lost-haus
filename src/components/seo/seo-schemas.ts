// Centralized SEO schemas to eliminate duplication across pages

/**
 * Main business schema used across all pages
 */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  telephone: "513-902-1415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US"
  }
};

/**
 * Enhanced business schema with full venue details for main pages
 */
export const enhancedBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  telephone: "513-902-1415",
  email: "info@somerhaus.com",
  description: "Cincinnati's premier event venue located in historic Over-the-Rhine. Perfect for weddings, corporate events, parties, and special celebrations.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.1612",
    longitude: "-84.4557"
  },
  maximumAttendeeCapacity: 130,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "WiFi",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification", 
      name: "Full Bar Service",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "AV Equipment", 
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Catering Kitchen",
      value: true
    }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00"
    }
  ]
};

/**
 * Local business schema for better local SEO
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://somerhaus.com",
  name: "Somerhaus",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati", 
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.1612",
    longitude: "-84.4557"
  },
  telephone: "513-902-1415",
  url: "https://somerhaus.com",
  priceRange: "$$$$",
  servesCuisine: "Event Catering",
  hasMap: "https://maps.google.com/?q=1415+Republic+St,+Cincinnati,+OH+45202"
};

/**
 * Organization schema for corporate pages
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Somerhaus",
  url: "https://somerhaus.com",
  logo: "https://somerhaus.com/haus-logo.webp",
  description: "Premier event venue in Cincinnati's Over-the-Rhine neighborhood",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1415 Republic St",
    addressLocality: "Cincinnati",
    addressRegion: "OH", 
    postalCode: "45202",
    addressCountry: "US"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "513-902-1415",
    contactType: "Event Planning",
    availableLanguage: "English"
  },
  sameAs: [
    "https://www.facebook.com/somerhaus",
    "https://www.instagram.com/somerhaus"
  ]
};

/**
 * Article schema for blog posts
 */
export const createArticleSchema = (title: string, description: string, datePublished: string, imageUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  author: {
    "@type": "Organization",
    name: "Somerhaus"
  },
  publisher: {
    "@type": "Organization", 
    name: "Somerhaus",
    logo: {
      "@type": "ImageObject",
      url: "https://somerhaus.com/haus-logo.webp"
    }
  },
  datePublished: datePublished,
  dateModified: datePublished,
  image: imageUrl || "https://somerhaus.com/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://somerhaus.com"
  }
});

/**
 * Generic FAQ schema generator
 * Takes an array of FAQ data and generates proper schema markup
 */
export const createFaqSchema = (faqData: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { 
      "@type": "Answer", 
      text: faq.answer 
    }
  }))
});

/**
 * Pre-built FAQ schema for the main FAQ page
 * Uses the centralized FAQ data
 */
import faqData from '@/data/faqData.json';
export const mainFaqSchema = createFaqSchema(faqData); 