export interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'landscape' | 'portrait';
  category: 'wedding' | 'corporate' | 'party' | 'food' | 'bar' | 'space' | 'dinner' | 'meeting' | 'special';
  size?: 'small' | 'medium' | 'large';
  responsive?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
}

export const galleryImages: GalleryImage[] = [
  // Bar Photos
  {
    src: "/photo/bar-detail-portrait-somerhaus-cincinnati.webp",
    alt: "Bar detail portrait view",
    orientation: "portrait",
    category: "bar",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/bar-detail-somerhaus-cincinnati-events.webp",
    alt: "Bar detail setup",
    orientation: "landscape",
    category: "bar",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/bar-package-hero-somerhaus-cincinnati-events.webp",
    alt: "Bar package display",
    orientation: "landscape",
    category: "bar",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/bar-service-somerhaus-cincinnati-events.webp",
    alt: "Bar service area",
    orientation: "landscape",
    category: "bar",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Dinner Photos
  {
    src: "/photo/dinner-detail-somerhaus-cincinnati-events.webp",
    alt: "Dinner detail setup",
    orientation: "landscape",
    category: "dinner",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-food-portrait-somerhaus-cincinnati.webp",
    alt: "Dinner food portrait",
    orientation: "portrait",
    category: "dinner",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-food-somerhaus-cincinnati-events.webp",
    alt: "Dinner food presentation",
    orientation: "landscape",
    category: "dinner",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Elegant dinner setup",
    orientation: "landscape",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-hero1-somerhaus-cincinnati-events.webp",
    alt: "Dinner hero shot",
    orientation: "landscape",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-hero2-somerhaus-cincinnati-events.webp",
    alt: "Dinner arrangement",
    orientation: "landscape",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-hero5-somerhaus-cincinnati-events.webp",
    alt: "Dinner setting",
    orientation: "landscape",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-menu-hero-cincinnati-event-space-somerhaus.webp",
    alt: "Dinner menu presentation",
    orientation: "landscape",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/dinner-portrait-somerhaus-event-space-cincinnati.webp",
    alt: "Dinner portrait view",
    orientation: "portrait",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Food Photos
  {
    src: "/photo/food-detail-hero2-somerhaus-cincinnati.webp",
    alt: "Food detail artistry",
    orientation: "landscape",
    category: "food",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-detail-hero5-somerhaus-cincinnati.webp",
    alt: "Culinary detail",
    orientation: "landscape",
    category: "food",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-detail-portrait-somerhaus-cincinnati.webp",
    alt: "Food detail portrait",
    orientation: "portrait",
    category: "food",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-hero.webp",
    alt: "Food hero shot",
    orientation: "landscape",
    category: "food",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-hero-somerhaus-cincinnati-events.webp",
    alt: "Food presentation",
    orientation: "landscape",
    category: "food",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-hero2-somerhaus-cincinnati-events.webp",
    alt: "Food display",
    orientation: "landscape",
    category: "food",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-hero5-somerhaus-cincinnati-events.webp",
    alt: "Gourmet food",
    orientation: "landscape",
    category: "food",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-hero6-somerhaus-cincinnati-events.webp",
    alt: "Culinary showcase",
    orientation: "landscape",
    category: "food",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/food-portrait-somerhaus-cincinnati-events.webp",
    alt: "Food portrait",
    orientation: "portrait",
    category: "food",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Meeting & Corporate Photos
  {
    src: "/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.webp",
    alt: "Business dinner gathering",
    orientation: "landscape",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/meeting-hero-somerhaus-cincinnati-events.webp",
    alt: "Corporate meeting",
    orientation: "landscape",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/meeting-hero1-cincinnati-event-venue-somerhaus.webp",
    alt: "Meeting space",
    orientation: "landscape",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/meeting-hero2-somerhaus-cincinnati-events.webp",
    alt: "Business gathering",
    orientation: "landscape",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/meeting-hero3-somerhaus-cincinnati-events.webp",
    alt: "Corporate event space",
    orientation: "landscape",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/meeting-hero4-somerhaus-cincinnati-events.webp",
    alt: "Professional meeting setup",
    orientation: "landscape",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.webp",
    alt: "Business meeting portrait",
    orientation: "portrait",
    category: "meeting",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Wedding Photos
  {
    src: "/photo/wedding-blessing-cincinnati-venue-somerhaus.webp",
    alt: "Wedding blessing ceremony",
    orientation: "landscape",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding ceremony hero",
    orientation: "landscape",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding reception",
    orientation: "landscape",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-hero3-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding celebration",
    orientation: "landscape",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-hero4-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding gathering",
    orientation: "landscape",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-hero5-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding venue setup",
    orientation: "landscape",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-portrait-somerhaus-cincinnati-venue.webp",
    alt: "Wedding portrait view",
    orientation: "portrait",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-portrait-somerhaus-wedding-venue-cincinnati.webp",
    alt: "Wedding venue portrait",
    orientation: "portrait",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-portrait1-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding portrait 1",
    orientation: "portrait",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-portrait2-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding portrait 2",
    orientation: "portrait",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-portrait3-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding portrait 3",
    orientation: "portrait",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/wedding-portrait4-cincinnati-wedding-venue-somerhaus.webp",
    alt: "Wedding portrait 4",
    orientation: "portrait",
    category: "wedding",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Party Photos
  {
    src: "/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.webp",
    alt: "Party dinner celebration",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/party-hero1-cincinnati-event-venue-somerhaus.webp",
    alt: "Party celebration",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/party-hero1-somerhaus-cincinnati-events.webp",
    alt: "Party event hero",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/party-pride-hero-somerhaus-cincinnati.webp",
    alt: "Pride party celebration",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Space & Venue Photos
  {
    src: "/photo/space-detail-portrait-somerhaus-cincinnati.webp",
    alt: "Space detail portrait",
    orientation: "portrait",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-detail-somerhaus-cincinnati-events.webp",
    alt: "Space detail view",
    orientation: "landscape",
    category: "space",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-hero-somerhaus-cincinnati-events.webp",
    alt: "Venue space hero",
    orientation: "landscape",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-landrover-event-somerhaus-cincinnati.webp",
    alt: "Special event setup",
    orientation: "landscape",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-lounge-portrait1-somerhaus-cincinnati.webp",
    alt: "Lounge area portrait",
    orientation: "portrait",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-portrait-somerhaus-cincinnati-events.webp",
    alt: "Space portrait view",
    orientation: "portrait",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-portrait1-cincinnati-event-space-somerhaus.webp",
    alt: "Venue space overview",
    orientation: "portrait",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/space-portrait2-cincinnati-event-space-somerhaus.webp",
    alt: "Venue space portrait 2",
    orientation: "portrait",
    category: "space",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Special Event Photos
  {
    src: "/photo/special-hero5-somerhaus-cincinnati-events.webp",
    alt: "Special event hero",
    orientation: "landscape",
    category: "special",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/special-portrait-somerhaus-cincinnati-events.webp",
    alt: "Special event portrait",
    orientation: "portrait",
    category: "special",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/special-portrait1-somerhaus-cincinnati-events.webp",
    alt: "Special event portrait 1",
    orientation: "portrait",
    category: "special",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Additional Categories
  
  // Photoshoot Photos
  {
    src: "/photo/photoshoot-hero1-somerhaus-cincinnati.webp",
    alt: "Professional photoshoot",
    orientation: "landscape",
    category: "special",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/photoshoot-portrait-somerhaus-cincinnati.webp",
    alt: "Photoshoot portrait",
    orientation: "portrait",
    category: "special",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/photoshoot-portrait2-somerhaus-cincinnati.webp",
    alt: "Photoshoot portrait 2",
    orientation: "portrait",
    category: "special",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/photoshoot-wedding-portrait-somerset-somerhaus.webp",
    alt: "Wedding photoshoot portrait",
    orientation: "portrait",
    category: "wedding",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Music & Entertainment
  {
    src: "/photo/music-hero1-somerhaus-cincinnati-events.webp",
    alt: "Music event",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/music-performance-hero1-somerhaus-cincinnati.webp",
    alt: "Live music performance",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Shower & Brunch
  {
    src: "/photo/shower-hero-somerhaus-cincinnati-events.webp",
    alt: "Shower event",
    orientation: "landscape",
    category: "special",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },
  {
    src: "/photo/shower-portrait6-somerhaus-cincinnati.webp",
    alt: "Shower portrait",
    orientation: "portrait",
    category: "special",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Table Setup & Details
  {
    src: "/photo/table-setup-hero-somerhaus-cincinnati.webp",
    alt: "Table setup arrangement",
    orientation: "landscape",
    category: "dinner",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Team & Staff
  {
    src: "/photo/team-portrait-somerhaus-cincinnati.webp",
    alt: "Somerhaus team",
    orientation: "portrait",
    category: "space",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Venue Detail
  {
    src: "/photo/venue-detail-somerhaus-cincinnati-events.webp",
    alt: "Venue architectural detail",
    orientation: "landscape",
    category: "space",
    size: "medium",
    responsive: { mobile: true, tablet: true, desktop: true }
  },

  // Miscellaneous
  {
    src: "/photo/miscellaneous-hero-somerhaus-cincinnati-events.webp",
    alt: "Event gathering",
    orientation: "landscape",
    category: "party",
    size: "large",
    responsive: { mobile: true, tablet: true, desktop: true }
  }
];

// Helper functions for filtering images
export const getImagesByOrientation = (orientation: 'landscape' | 'portrait'): GalleryImage[] => {
  return galleryImages.filter(image => image.orientation === orientation);
};

export const getImagesByCategory = (category: GalleryImage['category']): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category);
};

export const getRandomImages = (count: number = 10): GalleryImage[] => {
  const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getResponsiveImages = (device: 'mobile' | 'tablet' | 'desktop'): GalleryImage[] => {
  return galleryImages.filter(image => image.responsive?.[device]);
};

// Get balanced mix of orientations for grid layout
export const getBalancedImages = (count: number = 10): GalleryImage[] => {
  const portraits = getImagesByOrientation('portrait');
  const landscapes = getImagesByOrientation('landscape');
  
  // Aim for roughly 40% portraits, 60% landscapes for good grid balance
  const portraitCount = Math.floor(count * 0.4);
  const landscapeCount = count - portraitCount;
  
  const selectedPortraits = [...portraits].sort(() => Math.random() - 0.5).slice(0, portraitCount);
  const selectedLandscapes = [...landscapes].sort(() => Math.random() - 0.5).slice(0, landscapeCount);
  
  return [...selectedPortraits, ...selectedLandscapes].sort(() => Math.random() - 0.5);
}; 