import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  /**
   * Schema.org JSON-LD object, array, or pre-stringified JSON.
   * This allows pages to provide structured data for SEO.
   */
  schema?: Record<string, unknown> | Record<string, unknown>[] | string;
}

// Re-export schemas for convenience
export { 
  businessSchema, 
  enhancedBusinessSchema,
  localBusinessSchema,
  organizationSchema,
  createFaqSchema, 
  mainFaqSchema,
  createArticleSchema 
} from './seo-schemas';

const Seo = ({ 
  title, 
  description = "Host unforgettable events at Cincinnati's most enchanting venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations. Discover Somerhaus - where timeless elegance meets modern sophistication.",
  image = "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp",
  url,
  type = 'website',
  schema 
}: SeoProps) => {
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://somerhaus.com');
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl.replace(/\/$/, '')}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Somerhaus - Cincinnati's Premier Event Venue" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Somerhaus" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Somerhaus - Cincinnati's Premier Event Venue" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Somerhaus" />
      <meta name="keywords" content="Cincinnati event venue, wedding venue Cincinnati, corporate events Cincinnati, event space, Somerhaus, wedding reception, party venue" />
      
      {/* Geo Location Tags */}
      <meta name="geo.region" content="US-OH" />
      <meta name="geo.placename" content="Cincinnati" />
      <meta name="geo.position" content="39.1612;-84.4557" />
      <meta name="ICBM" content="39.1612, -84.4557" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {typeof schema === 'string' ? schema : JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
