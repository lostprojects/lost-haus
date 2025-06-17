import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import HeroSection from '@/components/shared/HeroSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Seo from '@/components/seo/Seo';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const businessSchema = {
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
    addressCountry: "US",
  },
};

interface Article {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  category: string;
}

const articles: Article[] = [
  {
    title: 'The Ultimate Cincinnati Wedding Planning Checklist',
    slug: '/blog/wedding-checklist',
    image: '/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.jpeg',
    excerpt: 'Step-by-step guidance to plan a flawless celebration in the Queen City.',
    category: 'Weddings'
  },
  {
    title: '10 Expert Tips for Memorable Corporate Events',
    slug: '/blog/corporate-event-tips',
    image: '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png',
    excerpt: 'Pro advice to host productive meetings and standout company gatherings.',
    category: 'Corporate'
  },
  {
    title: 'Budget-Smart Weddings: 15 Ways to Maximize Style',
    slug: '/blog/budget-smart-weddings',
    image: '/photo/wedding-hero4-cincinnati-wedding-venue-somerhaus.jpg',
    excerpt: 'Real cost breakdowns, negotiation scripts, and sample budgets you can steal.',
    category: 'Weddings'
  },
  {
    title: 'Corporate Retreat Playbook: Icebreakers & ROI',
    slug: '/blog/corporate-retreat-playbook',
    image: '/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.jpg',
    excerpt: 'Field-tested agendas, metrics, and team-building games in one kit.',
    category: 'Corporate'
  },
  {
    title: 'Cocktail Trends 2025 (+ Recipes)',
    slug: '/blog/cocktail-trends-2025',
    image: '/photo/food-portrait2-somerhaus-cincinnati-events.jpg',
    excerpt: 'Signature drink ideas, batching math, and zero-proof twists for 100 guests.',
    category: 'Food & Beverage'
  },
  {
    title: 'Micro-Events, Mega-Impact',
    slug: '/blog/micro-events-mega-impact',
    image: '/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.jpg',
    excerpt: 'Layout hacks and vendor picks for gatherings under 40 people.',
    category: 'Strategy'
  },
  {
    title: 'Inclusive Celebrations Checklist',
    slug: '/blog/inclusive-celebrations-accessibility',
    image: '/photo/space-portrait2-cincinnati-event-space-somerhaus.jpg',
    excerpt: '12 accessibility tweaks guests actually notice (and love).',
    category: 'Accessibility'
  },
  {
    title: 'Seasonal Décor Roadmap',
    slug: '/blog/seasonal-decor-roadmap',
    image: '/photo/wedding-hero5-cincinnati-wedding-venue-somerhaus.jpg',
    excerpt: 'Color palettes, bloom charts, and rental vs. buy math—spring to winter.',
    category: 'Design'
  },
  {
    title: 'Email Templates That Fill Seats',
    slug: '/blog/email-templates-that-fill-seats',
    image: '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png',
    excerpt: 'Copy-and-paste sequence from save-the-date to thank-you.',
    category: 'Marketing'
  },
  {
    title: 'Venue Walk-Through Checklist: 45 Questions',
    slug: '/blog/venue-walkthrough-checklist',
    image: '/photo/space-portrait1-cincinnati-event-space-somerhaus.jpg',
    excerpt: 'Printable PDF to compare venues and spot red flags fast.',
    category: 'Planning'
  }
];

const Blog = () => {
  const heroImages = [
    { src: '/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.jpg', alt: 'Dinner setup at Somerhaus' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Seo
        title="Haus Journal | Inspiration & Tips"
        description="Ideas, stories, and resources to craft unforgettable gatherings at Somerhaus."
        schema={businessSchema}
      />
      <Header />
      <HeroSection
        backgroundType="static"
        backgroundSources={heroImages}
        title="Haus Journal"
        subtitle="Ideas & inspiration for extraordinary gatherings"
        sectionClassName="relative w-full h-[60vh] min-h-[400px] overflow-hidden"
      />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.slug} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link to={article.slug} className="absolute inset-0 z-10" />
              <img src={article.image} alt={article.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-white">
                <span className="text-xs uppercase tracking-wide text-[#399892] font-semibold">{article.category}</span>
                <h3 className="mt-2 font-header text-lg group-hover:text-[#399892] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3 font-body">{article.excerpt}</p>
                <div className="mt-3 inline-flex items-center text-[#399892] text-sm font-medium group-hover:underline">
                  Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footerdemo />
    </div>
  );
};

export default Blog;
