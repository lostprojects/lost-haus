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
    category: "Catering & Food Service",
    slug: "catering-food",
    description: "Full-service, specialty, and casual catering options to suit every palate",
    vendors: [
      {
        name: "Bee's BBQ",
        specialty: "BBQ",
        description: "Authentic smoked BBQ catering. Phone: 513-561-2337.",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Chef's Choice Catering",
        specialty: "Full-Service Caterer",
        description: "Comprehensive catering services. Email: info@chefschoicecatering.com • Phone: 513-489-6006.",
        website: "https://chefschoicecatering.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'meeting', 'all']
      },
      {
        name: "Crown Restaurant Group",
        specialty: "Full-Service Caterer",
        description: "Restaurant-quality menus and service for any occasion.",
        website: "https://crownrestaurantgroup.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Essen Kitchen",
        specialty: "Vegan",
        description: "Plant-forward catering. Email: eat@essenkitchen.com • Phone: 513-802-5013.",
        website: "https://essenkitchen.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "Findlay Market Merchants",
        description: "Customizable food stations from Cincinnati's historic Findlay Market vendors.",
        website: "https://findlaymarket.org",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Garnish Catering",
        specialty: "Full-Service Catering",
        description: "Inspired menus with elegant presentation.",
        website: "https://garnishcincinnati.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Jeff Thomas Catering",
        specialty: "Full-Service Caterer",
        description: "Upscale catering. Email: events@jeffthomascatering.com • Phone: 859-291-0286.",
        website: "https://jeffthomascatering.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Keystone Bar & Grill",
        specialty: "American / Comfort",
        description: "Comfort-food favorites from Keystone.",
        website: "https://keystonebar.com",
        eventTypes: ['wedding', 'corporate', 'party', 'meeting', 'all']
      },
      {
        name: "Mazunte",
        specialty: "Mexican",
        description: "Authentic Mexican street-food catering. Phone: 513-785-0000.",
        website: "https://mazuntetacos.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Share Cheesebar",
        specialty: "Cheese & Charcuterie",
        description: "Artful cheese & charcuterie displays.",
        website: "https://sharecheesebar.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "Southern Grace Catering",
        specialty: "Southern",
        description: "Southern-inspired menus. Email: southerngracecincy@gmail.com • Phone: 513-808-5819.",
        website: "https://southerngracecincy.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Taglio OTR",
        specialty: "Pizza",
        description: "Award-winning NY-style pizza. Email: info@eattaglio.com • Phone: 513-321-0454.",
        website: "https://eattaglio.com",
        eventTypes: ['wedding', 'corporate', 'party', 'meeting', 'all']
      },
      {
        name: "The Rhined",
        specialty: "Charcuterie",
        description: "Curated cheese & charcuterie boards. Phone: 513-655-5938.",
        website: "https://therhined.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "Yee Mama",
        specialty: "Asian",
        description: "Asian-inspired small bites and dumplings.",
        website: "https://yeemama.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      }
    ]
  },
  {
    category: "Desserts & Bakery",
    slug: "desserts-bakery",
    description: "Cakes, pastries, and sweet treats for your event",
    vendors: [
      {
        name: "Allez",
        specialty: "Artisanal Breads",
        description: "French-inspired bakery. Phone: 513-381-6700.",
        website: "https://allezbakery.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Abby Girl Sweets",
        specialty: "Cupcakes & Cheesecakes",
        description: "Gourmet cupcakes & cheesecakes. Phone: 513-335-0898 ext.3.",
        website: "https://abbygirlsweets.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "Brown Bear Bakery",
        specialty: "Pastries",
        description: "Small-batch pastries. Email: hello@brownbearbakery.com • Phone: 513-975-2142.",
        website: "https://brownbearbakery.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "Cafe Mochiko",
        specialty: "Asian Bakery & Cafe",
        description: "Japanese-inspired breads and pastries. Phone: 513-559-1000.",
        website: "https://cafemochiko.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Ilan's Raw Chocolate",
        specialty: "Fine Chocolates",
        description: "Handcrafted raw chocolates.",
        website: "https://ilansrawchocolate.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "North South Baking Company",
        specialty: "Bakery",
        description: "Seasonal cakes & pastries. Email: kate@northsouthbaking.com.",
        website: "https://northsouthbaking.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Sixteen Bricks Bakery",
        specialty: "Artisan Bread",
        description: "Slow-fermented breads. Phone: 513-873-1426.",
        website: "https://sixteenbricks.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Sweet Mae's Cookie Co.",
        specialty: "Cookies",
        description: "Small-batch cookies. Phone: 256-520-7763.",
        website: "https://sweetmaescookies.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      }
    ]
  },
  {
    category: "Coffee Service",
    slug: "coffee-service",
    description: "Specialty coffee bars and mobile espresso carts",
    vendors: [
      {
        name: "Deeper Roots Coffee",
        description: "Craft coffee bar service featuring locally-roasted beans.",
        website: "https://deeperrootscoffee.com",
        eventTypes: ['wedding', 'corporate', 'party', 'meeting', 'all']
      },
      {
        name: "Yield Coffee Roasters",
        description: "Fair-trade coffee roasted in Cincinnati for on-site service.",
        website: "https://yieldcoffee.com",
        eventTypes: ['wedding', 'corporate', 'party', 'meeting', 'all']
      }
    ]
  },
  {
    category: "Photography & Videography",
    slug: "photography-videography",
    description: "Professional photographers to capture your special moments",
    vendors: [
      {
        name: "Bird and Rose Photography",
        description: "Timeless wedding and lifestyle photography.",
        website: "https://birdandrosephoto.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Blushing Finch Photography",
        description: "Joy-filled storytelling imagery. Email: blushingfinchphoto@gmail.com.",
        website: "https://blushingfinchphotography.com",
        eventTypes: ['wedding', 'party', 'all']
      },
      {
        name: "Catherine Grace Photography",
        description: "Bright, natural photography. Email: catieviox@gmail.com • Phone: 513-288-3999.",
        website: "https://catherinegracephotography.com",
        eventTypes: ['wedding', 'party', 'all']
      },
      {
        name: "Eleven11 Photography",
        description: "Documentary-style wedding photography. Email: info@eleven11photo.com • Phone: 513-739-9399.",
        website: "https://eleven11photo.com",
        eventTypes: ['wedding', 'party', 'all']
      },
      {
        name: "J Carr Photography",
        description: "Vibrant imagery for weddings and events. Email: jecarr.photos@gmail.com • Phone: 513-835-7332.",
        website: "https://jcarrphotography.com",
        eventTypes: ['wedding', 'party', 'all']
      }
    ]
  },
  {
    category: "Entertainment & Music",
    slug: "entertainment-music",
    description: "Professional entertainment to set the perfect mood for your event",
    vendors: [
      {
        name: "DJ Matty Joy",
        description: "High-energy DJ keeping the dance floor full. Phone: 937-725-0145.",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "DJ Pillo",
        description: "Custom playlists and seamless mixing. Email: djpillo.info@gmail.com.",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "DJ Rah D",
        description: "Open-format DJ with nationwide experience. Website: djrahd.com • Phone: 313-437-7959.",
        website: "https://djrahd.com",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Michael Ronstadt & Doug Hamilton",
        specialty: "String Trio / Quartet",
        description: "Live classical & contemporary string music. Phones: 520-730-5768 (Michael) • 513-593-1299 (Doug).",
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      }
    ]
  },
  {
    category: "Floral & Decor",
    slug: "floral-decor",
    description: "Beautiful floral arrangements and decor to transform your space",
    vendors: [
      {
        name: "Adrian Durban Florist",
        description: "Full-service floral design. Phone: 513-436-6920.",
        website: "https://adriandurbanflorist.com",
        featured: true,
        eventTypes: ['wedding', 'corporate', 'party', 'all']
      },
      {
        name: "Gia & the Blooms",
        description: "Whimsical garden-style arrangements. Phone: 513-487-0915.",
        website: "https://giaandtheblooms.com",
        eventTypes: ['wedding', 'corporate', 'party', 'shower', 'all']
      },
      {
        name: "Wiley Flower Farms",
        description: "Locally-grown seasonal blooms. Phone: 513-767-3324.",
        website: "https://wileyflowerfarm.com",
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