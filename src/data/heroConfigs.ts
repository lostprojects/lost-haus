export interface HeroConfig {
  type: 'mega' | 'secondary' | 'minimal';
  title: string;
  subtitle: string;
  images: string[];
  backgroundStyle?: 'carousel' | 'static';
  logoType?: 'press' | 'clients' | 'none';
}

export const heroConfigs: Record<string, HeroConfig> = {
  // MEGA HEROES - Full homepage replicas with carousel, badges, etc.
  homepage: {
    type: 'mega',
    title: "Experience Cincinnati's Premier Event Venue",
    subtitle: "Where unforgettable moments come to life in our stunning 3,080 sq ft industrial-chic space in Over-the-Rhine.",
    images: [
      '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/party-hero1-cincinnati-event-venue-somerhaus.webp',
      '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.webp',
      '/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.webp'
    ],
    backgroundStyle: 'carousel',
    logoType: 'press'
  },
  
  wedding: {
    type: 'mega',
    title: "Where Cincinnati Love Stories Begin",
    subtitle: "Create your perfect wedding day in our enchanting 3,080 sq ft venue—where industrial elegance meets romantic charm.",
    images: [
      '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/wedding-hero3-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/wedding-hero4-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/wedding-hero5-cincinnati-wedding-venue-somerhaus.webp'
    ],
    backgroundStyle: 'carousel',
    logoType: 'press'
  },
  
  corporate: {
    type: 'mega',
    title: "Elevate Your Corporate Events",
    subtitle: "Host impactful meetings, conferences, and corporate celebrations in Cincinnati's most sophisticated industrial-chic venue.",
    images: [
      '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.webp',
      '/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.webp',
      '/photo/space-portrait1-cincinnati-event-space-somerhaus.webp',
      '/photo/space-portrait2-cincinnati-event-space-somerhaus.webp',
      '/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp'
    ],
    backgroundStyle: 'carousel',
    logoType: 'clients'
  },
  
  parties: {
    type: 'mega',
    title: "Unforgettable Parties & Celebrations",
    subtitle: "Host milestone birthdays, anniversaries, and unforgettable nights in our 3,080 sq ft industrial-chic venue. Limited prime dates available—book your tour today.",
    images: [
      '/photo/party-hero1-cincinnati-event-venue-somerhaus.webp',
      '/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.webp',
      '/photo/space-portrait1-cincinnati-event-space-somerhaus.webp',
      '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp',
      '/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp'
    ],
    backgroundStyle: 'carousel',
    logoType: 'press'
  },

  // SECONDARY HEROES - Shorter, simpler with title + subtitle only
  barpackages: {
    type: 'secondary',
    title: "Bar Packages",
    subtitle: "Signature cocktails, curated wine, and craft beer—all under one roof. Choose a tier or let us customize your pour.",
    images: ['/photo/bar-package-hero-somerhaus-cincinnati-events.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  showers: {
    type: 'secondary',
    title: "Celebrate Life's Special Moments",
    subtitle: "Host your perfect baby or bridal shower in our enchanting 3,080 sq ft venue—book your tour today.",
    images: ['/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  elopements: {
    type: 'secondary',
    title: "Intimate Elopements",
    subtitle: "Say \"I do\" in an intimate setting designed for your most precious moments.",
    images: ['/photo/wedding-portrait-somerhaus-wedding-venue-cincinnati.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  microweddings: {
    type: 'secondary',
    title: "Micro Weddings",
    subtitle: "Perfect for intimate celebrations with your closest family and friends.",
    images: ['/photo/wedding-portrait1-cincinnati-wedding-venue-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  weddinglgbtq: {
    type: 'secondary',
    title: "LGBTQ+ Weddings",
    subtitle: "Celebrating love in all its forms in Cincinnati's most inclusive venue space.",
    images: ['/photo/wedding-portrait2-cincinnati-wedding-venue-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  press: {
    type: 'secondary',
    title: "In the Press",
    subtitle: "See what Cincinnati's top publications are saying about Somerhaus.",
    images: ['/photo/space-portrait1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  vendors: {
    type: 'secondary',
    title: "Preferred Vendors",
    subtitle: "Our curated network of Cincinnati's finest event professionals.",
    images: ['/photo/wedding-portrait3-cincinnati-wedding-venue-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  about: {
    type: 'secondary',
    title: "Our Story",
    subtitle: "Discover the passion and vision behind Cincinnati's premier event destination.",
    images: ['/photo/space-portrait2-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  gallery: {
    type: 'secondary',
    title: "Gallery",
    subtitle: "Explore our stunning venue through the lens of unforgettable events.",
    images: ['/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  faq: {
    type: 'secondary',
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about hosting your event at Somerhaus.",
    images: ['/photo/space-portrait1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  blog: {
    type: 'secondary',
    title: "Stories & Inspiration",
    subtitle: "Event planning tips, venue insights, and celebration inspiration from our team.",
    images: ['/photo/dinner-portrait-somerhaus-event-space-cincinnati.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  blogpost: {
    type: 'secondary',
    title: "Blog Post",
    subtitle: "Event planning tips and venue insights.",
    images: ['/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  pricing: {
    type: 'secondary',
    title: "Pricing & Packages",
    subtitle: "Transparent pricing for your Cincinnati event venue needs.",
    images: ['/photo/space-portrait1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },

  resources: {
    type: 'secondary',
    title: 'Event Planning Resources',
    subtitle: 'Helpful checklists and guides for your big day.',
    images: ['/photo/space-portrait2-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },

  // Corporate event types
  meetings: {
    type: 'secondary',
    title: "Corporate Meetings",
    subtitle: "Professional meeting spaces that inspire productivity and creativity.",
    images: ['/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'clients'
  },
  
  dinners: {
    type: 'secondary',
    title: "Corporate Dinners",
    subtitle: "Elegant dining experiences for your corporate events and client entertainment.",
    images: ['/photo/dinner-portrait-somerhaus-event-space-cincinnati.webp'],
    backgroundStyle: 'static',
    logoType: 'clients'
  },
  
  happyhours: {
    type: 'secondary',
    title: "Corporate Happy Hours",
    subtitle: "Unwind and connect with colleagues in our sophisticated event space.",
    images: ['/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'clients'
  },
  
  rehearsals: {
    type: 'secondary',
    title: "Rehearsal Dinners",
    subtitle: "Intimate pre-wedding celebrations in our warm, welcoming space.",
    images: ['/photo/dinner-portrait-somerhaus-event-space-cincinnati.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  specialevents: {
    type: 'secondary',
    title: "Special Events",
    subtitle: "From galas to fundraisers, make your special event truly extraordinary.",
    images: ['/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  photoshoots: {
    type: 'secondary',
    title: "Photo Shoots",
    subtitle: "A picture-perfect backdrop for your creative projects and brand photography.",
    images: ['/photo/photoshoot-hero-1-somerset-somerhaus-event space.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },

  contact: {
    type: 'secondary',
    title: "Let's Plan Something Magical Together",
    subtitle: "We're excited to bring your vision to life in our unique space.",
    images: ['/photo/space-portrait1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },
  
  layout: {
    type: 'secondary',
    title: "Venue Layout",
    subtitle: "Our 3,080 sq ft open floor plan is yours to configure. Explore the possibilities and start envisioning your event.",
    images: ['/photo/space-portrait1-cincinnati-event-space-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  },

  // MINIMAL HEROES - For capture/conversion pages (no title/subtitle)
  eventinquiry: {
    type: 'minimal',
    title: "Let's Make It Happen!",
    subtitle: "Tell us about your event and we'll create something extraordinary together.",
    images: ['/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp'],
    backgroundStyle: 'static',
    logoType: 'press'
  }
};

// Helper function to get hero config by page key
export const getHeroConfig = (pageKey: string): HeroConfig | null => {
  return heroConfigs[pageKey.toLowerCase()] || null;
};

// Helper function to get all available hero types
export const getHeroTypes = (): Array<'mega' | 'secondary' | 'minimal'> => {
  return ['mega', 'secondary', 'minimal'];
}; 