import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  /**
   * Schema.org JSON-LD object, array, or pre-stringified JSON.
   * This allows pages to provide structured data for SEO.
   */
  schema?: Record<string, unknown> | Record<string, unknown>[] | string;
}

const Seo = ({ title, description, schema }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    {schema && (
      <script type="application/ld+json">
        {typeof schema === 'string' ? schema : JSON.stringify(schema)}
      </script>
    )}
  </Helmet>
);

export default Seo;
