import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { localBusinessSchema } from '@/components/seo/seo-schemas'
import './globals.css'

// Load local fonts with next/font for automatic preloading & optimal font-face generation
const freshMango = localFont({
  src: [
    { path: '../../public/FreshMango-Regular.woff', weight: '400', style: 'normal' },
    { path: '../../public/FreshMango-Italic.woff', weight: '400', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-freshmango',
})

const nebulica = localFont({
  src: [
    { path: '../../public/Nebulica-Thin.woff', weight: '200', style: 'normal' },
    { path: '../../public/Nebulica-Medium.woff', weight: '500', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-nebulica',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Somerhaus',
    default: 'Somerhaus - Cincinnati\'s Premier Event Venue',
  },
  description: 'Host unforgettable events at Cincinnati\'s most enchanting venue. Perfect for weddings, corporate gatherings, parties, meetings, and special celebrations.',
  keywords: ['Cincinnati venue', 'wedding venue', 'corporate events', 'Over-the-Rhine', 'event space'],
  authors: [{ name: 'Somerhaus' }],
  creator: 'Somerhaus',
  publisher: 'Somerhaus',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://somerhaus.com',
    siteName: 'Somerhaus',
    title: 'Somerhaus - Cincinnati\'s Premier Event Venue',
    description: 'Host unforgettable events at Cincinnati\'s most enchanting venue.',
    images: [
      {
        url: '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp',
        width: 1200,
        height: 630,
        alt: 'Somerhaus - Cincinnati\'s Premier Event Venue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somerhaus - Cincinnati\'s Premier Event Venue',
    description: 'Host unforgettable events at Cincinnati\'s most enchanting venue.',
    images: ['/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp'],
  },
  alternates: {
    canonical: 'https://somerhaus.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nebulica.variable} ${freshMango.variable}`}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}