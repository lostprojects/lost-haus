// Centralized blog data to organize posts and eliminate duplication

export interface BlogPost {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  category: string;
  datePublished: string;
  readTime: string;
  description: string;
  keywords: string[];
}

export const blogCategories = [
  'Weddings',
  'Corporate', 
  'Food & Beverage',
  'Strategy',
  'Accessibility',
  'Design',
  'Marketing',
  'Planning'
] as const;

export type BlogCategory = typeof blogCategories[number];

export const blogPosts: BlogPost[] = [
  {
    title: 'The Ultimate Cincinnati Wedding Planning Checklist',
    slug: '/blog/wedding-checklist',
    image: '/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.webp',
    excerpt: 'Step-by-step guidance to plan a flawless celebration in the Queen City.',
    description: 'Comprehensive wedding planning guide for couples in Cincinnati. From venue selection to vendor coordination, timeline creation, and personalization tips.',
    category: 'Weddings',
    datePublished: '2024-01-15',
    readTime: '8 min read',
    keywords: ['wedding planning', 'Cincinnati weddings', 'venue selection', 'wedding checklist', 'Somerhaus']
  },
  {
    title: '10 Expert Tips for Memorable Corporate Events',
    slug: '/blog/corporate-event-tips',
    image: '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.webp',
    excerpt: 'Pro advice to host productive meetings and standout company gatherings.',
    description: 'Professional corporate event planning tips for successful business meetings, team building events, and company celebrations in Cincinnati.',
    category: 'Corporate',
    datePublished: '2024-01-10',
    readTime: '6 min read',
    keywords: ['corporate events', 'business meetings', 'team building', 'Cincinnati venues', 'event planning']
  },
  {
    title: 'Budget-Smart Weddings: 15 Ways to Maximize Style',
    slug: '/blog/budget-smart-weddings',
    image: '/photo/wedding-hero4-cincinnati-wedding-venue-somerhaus.webp',
    excerpt: 'Real cost breakdowns, negotiation scripts, and sample budgets you can steal.',
    description: 'Money-saving wedding tips and budget strategies for Cincinnati couples planning elegant celebrations without overspending.',
    category: 'Weddings',
    datePublished: '2024-01-05',
    readTime: '10 min read',
    keywords: ['budget weddings', 'wedding costs', 'money saving tips', 'affordable weddings', 'Cincinnati']
  }
];

// Helper functions for blog organization
export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .slice(0, limit);
}; 