import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Page Not Found | Somerhaus Cincinnati',
  description: 'The page you requested could not be found.',
  openGraph: {
    title: 'Page Not Found | Somerhaus Cincinnati',
    description: 'The page you requested could not be found.',
    siteName: 'Somerhaus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | Somerhaus Cincinnati',
    description: 'The page you requested could not be found.',
  },
};

export default function NotFound() {
  return (
    <PageLayout showBreadcrumbs={false}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

