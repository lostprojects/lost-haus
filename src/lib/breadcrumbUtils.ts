import { BreadcrumbItem } from '@/components/ui/breadcrumb';

// Route configuration with labels
const routeLabels: Record<string, string> = {
  '': 'Home',
  'wedding': 'Weddings',
  'micro-weddings': 'Micro Weddings',
  'elopements': 'Elopements',
  'rehearsals': 'Rehearsal Dinners',
  'corporate': 'Corporate Events',
  'meetings': 'Meetings',
  'happy-hours': 'Happy Hours',
  'parties': 'Parties',
  'dinners': 'Dinners',
  'special-events': 'Special Events',
  'showers': 'Showers',
  'photo-shoots': 'Photo Shoots',
  'about': 'About',
  'faq': 'FAQ',
  'contact': 'Contact',
  'press': 'Press',
  'venue-layout': 'Venue Layout',
  'bar-packages': 'Bar Packages',
  'pricing': 'Pricing',
  'gallery': 'Gallery',
  'vendors': 'Vendors',
  'blog': 'Blog',
  'event-inquiry': 'Event Inquiry',
  'resources': 'Resources',
  'emergency-kit': 'Emergency Kit',
  'budget-checklist': 'Budget Checklist'
};

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  // Remove leading slash and split by '/'
  const pathSegments = pathname.replace(/^\//, '').split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Get the label for this segment
    const label = routeLabels[segment] || segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Only add href if it's not the last segment
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbs.push({
      label,
      href: isLast ? undefined : currentPath
    });
  });

  return breadcrumbs;
};

// Custom breadcrumbs for specific pages that need different structures
export const getCustomBreadcrumbs = (pathname: string): BreadcrumbItem[] | null => {
  // Handle blog posts
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Article' } // Will be overridden by page-specific title
    ];
  }
  
  return null;
};

export default generateBreadcrumbs; 