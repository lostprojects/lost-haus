// Centralized vendor data following DRY principles
// Similar to clientLogos.ts, blogData.ts, etc.

export interface Vendor {
  name: string;
  description: string;
  website?: string;
  image?: string;
  specialty?: string;
  featured?: boolean;
  eventTypes?: VendorEventType[];
}

export interface VendorCategory {
  category: string;
  slug: string;
  description?: string;
  vendors: Vendor[];
}

export type VendorEventType = 'wedding' | 'shower' | 'corporate' | 'party' | 'meeting' | 'all';

export const vendorCategories: VendorCategory[] = [
  {
    category: "Photography & Videography",
    slug: "photography-videography",
    description: "Professional photographers and videographers to capture your special moments",
    vendors: [
      {
        name: "Aperture Studios",
        description: "Award-winning wedding and event photography with a documentary style approach.",
        website: "https://aperturestudioscinci.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Motion Pictures Co.",
        description: "Cinematic wedding and event videography capturing your story beautifully.",
        website: "https://motionpicturescincy.com",
        eventTypes: ['wedding', 'corporate', 'all']
      },
      {
        name: "Memorable Moments Photography",
        description: "Capturing the special moments of your celebration with artistic flair.",
        website: "https://memorablemomentscin.com",
        eventTypes: ['wedding', 'shower', 'party', 'all']
      },
      {
        name: "Capture Moments",
        description: "Professional wedding photography with timeless elegance.",
        website: "https://capturemomentsphotography.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding']
      },
      {
        name: "Forever Frames",
        description: "Creative photography that tells your unique love story.",
        website: "https://foreverframescinci.com",
        image: "/placeholder.svg", 
        eventTypes: ['wedding']
      },
      {
        name: "Shower Shots",
        description: "Specializing in baby and bridal shower photography with custom props.",
        website: "https://showershotsphotography.com",
        eventTypes: ['shower']
      }
    ]
  },
  {
    category: "Catering & Food Service",
    slug: "catering-food",
    description: "Exceptional catering services for every taste and dietary requirement",
    vendors: [
      {
        name: "Culinary Creations",
        description: "Gourmet catering with locally-sourced ingredients and custom menus.",
        website: "https://culinarycreationscinci.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Elegant Eats Catering",
        description: "Specializing in gourmet finger foods and elegant presentations for all events.",
        website: "https://eleganteatscatering.com",
        eventTypes: ['wedding', 'shower', 'corporate', 'party', 'all']
      },
      {
        name: "Sweet Celebrations",
        description: "Custom cakes, cupcakes, and dessert displays for your special occasion.",
        website: "https://sweetcelebrationscakes.com",
        eventTypes: ['wedding', 'shower', 'party', 'all']
      },
      {
        name: "Eat Well Catering",
        description: "Farm-to-table catering with seasonal menus and sustainable practices.",
        website: "https://eatwellcatering.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding', 'corporate']
      },
      {
        name: "Conscious Kitchen",
        description: "Health-conscious catering options with organic and local ingredients.",
        website: "https://consciouskitchencinci.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding', 'corporate']
      }
    ]
  },
  {
    category: "Floral & Decor",
    slug: "floral-decor",
    description: "Beautiful floral arrangements and decor to transform your space",
    vendors: [
      {
        name: "Bloom & Co.",
        description: "Modern floral design and event styling with a focus on seasonal arrangements.",
        website: "https://bloomandcocinci.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Blooms & Balloons",
        description: "Stunning floral arrangements and balloon installations for celebrations.",
        website: "https://bloomsandballoons.com",
        eventTypes: ['wedding', 'shower', 'party', 'all']
      },
      {
        name: "Event Elements",
        description: "Full-service event design and rental with custom decor packages.",
        website: "https://eventelementsdesign.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Shower Chic Designs",
        description: "Custom decor packages including table settings, backdrops, and props.",
        website: "https://showerchicdesigns.com",
        eventTypes: ['shower']
      },
      {
        name: "Blooming Beauty",
        description: "Romantic floral designs for weddings and special occasions.",
        website: "https://bloomingbeautyflorals.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding']
      },
      {
        name: "Green Love Florals",
        description: "Sustainable floral design with locally-sourced blooms.",
        website: "https://greenloveflorals.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding']
      }
    ]
  },
  {
    category: "Entertainment & Music",
    slug: "entertainment-music", 
    description: "Professional entertainment to set the perfect mood for your event",
    vendors: [
      {
        name: "Cincinnati Sound Co.",
        description: "Professional DJ services and sound equipment for weddings and events.",
        website: "https://cincinnatisoundco.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Live Wire Entertainment",
        description: "Live bands and acoustic performers for intimate celebrations.",
        website: "https://livewireentertainment.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Harmony DJs",
        description: "Expert DJs specializing in wedding receptions and dance parties.",
        website: "https://harmonydjs.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding', 'party']
      },
      {
        name: "The String Quartet",
        description: "Classical musicians for ceremony and cocktail hour entertainment.",
        website: "https://stringquartetcinci.com",
        image: "/placeholder.svg",
        eventTypes: ['wedding']
      }
    ]
  },
  {
    category: "Planning & Coordination",
    slug: "planning-coordination",
    description: "Expert planners to ensure every detail is perfectly executed",
    vendors: [
      {
        name: "Perfect Day Planners",
        description: "Full-service event planning with attention to every detail.",
        website: "https://perfectdayplanners.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Cincinnati Event Coordinators",
        description: "Day-of coordination services to ensure your event runs seamlessly.",
        website: "https://cincinnatieventcoordinators.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      }
    ]
  }
];

// Helper functions for filtering and organizing vendor data
export const getVendorsByEventType = (eventType: VendorEventType): VendorCategory[] => {
  // If requesting 'all', return all categories with all vendors
  if (eventType === 'all') {
    return vendorCategories;
  }
  
  // Otherwise filter by specific event type
  return vendorCategories.map(category => ({
    ...category,
    vendors: category.vendors.filter(vendor => 
      vendor.eventTypes?.includes(eventType) || vendor.eventTypes?.includes('all')
    )
  })).filter(category => category.vendors.length > 0);
};

export const getFeaturedVendors = (): Vendor[] => {
  return vendorCategories
    .flatMap(category => category.vendors)
    .filter(vendor => vendor.featured);
};

export const getVendorsByCategory = (categorySlug: string): Vendor[] => {
  const category = vendorCategories.find(cat => cat.slug === categorySlug);
  return category?.vendors || [];
};

export const getAllVendors = (): Vendor[] => {
  return vendorCategories.flatMap(category => category.vendors);
};

export const getVendorCategoryInfo = (categorySlug: string): VendorCategory | undefined => {
  return vendorCategories.find(cat => cat.slug === categorySlug);
};

// Event type display names
export const eventTypeDisplayNames: Record<VendorEventType, string> = {
  wedding: 'Weddings',
  shower: 'Showers',
  corporate: 'Corporate Events',
  party: 'Parties',
  meeting: 'Meetings',
  all: 'All Events'
};

// Benefits/features for vendor network
export const vendorNetworkBenefits = [
  {
    title: "Quality Assured",
    description: "Every vendor has been personally vetted for excellence and professionalism."
  },
  {
    title: "Venue Familiar", 
    description: "Our partners know Somerhaus inside and out for seamless coordination."
  },
  {
    title: "Direct Support",
    description: "We facilitate introductions and coordinate logistics between all parties."
  }
];

export default vendorCategories; 