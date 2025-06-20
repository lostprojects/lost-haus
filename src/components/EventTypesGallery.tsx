import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/ui/OptimizedImage';

export interface EventTypeCard {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface EventTypesGalleryProps {
  title?: string;
  description?: string;
  items?: EventTypeCard[];
}

const defaultEventTypes: EventTypeCard[] = [
  {
    id: "weddings",
    title: "Weddings",
    description: "Create your perfect wedding day in our stunning industrial-chic space with exposed brick and soaring ceilings.",
    href: "/wedding",
    image: "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Host impressive corporate gatherings, product launches, and team celebrations in downtown Cincinnati.",
    href: "/corporate",
    image: "/photo/meeting-hero-somerhaus-cincinnati-events.webp",
  },
  {
    id: "parties",
    title: "Parties & Celebrations",
    description: "Celebrate life's special moments with friends and family in our flexible, vibrant event space.",
    href: "/parties",
    image: "/photo/party-pride-hero-somerhaus-cincinnati.webp",
  },
  {
    id: "showers",
    title: "Showers & Brunch",
    description: "Host elegant bridal showers, baby showers, and intimate brunch gatherings with natural light and charm.",
    href: "/showers",
    image: "/photo/special-portrait1-somerhaus-cincinnati-events.webp",
  },
  {
    id: "meetings",
    title: "Business Meetings",
    description: "Conduct productive meetings and workshops in our modern space with full AV capabilities and inspiring atmosphere.",
    href: "/meetings",
    image: "/photo/meeting-hero2-somerhaus-cincinnati-events.webp",
  },
  {
    id: "dinners",
    title: "Private Dinners",
    description: "Enjoy intimate dining experiences and dinner parties in our warm, welcoming environment perfect for conversation.",
    href: "/dinners",
    image: "/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp",
  },
];

const EventTypesGallery: React.FC<EventTypesGalleryProps> = ({
  title = "Event Types",
  description = "From intimate celebrations to grand corporate gatherings, our 3,080 sq ft venue transforms to match your vision. Located in the heart of Cincinnati's historic Over-the-Rhine, we've mastered the art of creating unforgettable experiences.",
  items = defaultEventTypes,
}) => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="w-full">
        <div className="mb-12 text-center">
          <Badge className="mb-6 font-body mx-auto">Our Venue</Badge>
          <h2 className="font-bold font-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{color: '#FFD764'}}>
            {title}
          </h2>
          <p className="text-lg font-body text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold font-header mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-2 font-body mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm font-medium">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypesGallery; 