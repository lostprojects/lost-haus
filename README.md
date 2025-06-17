# Somerhaus - Cincinnati Event Venue Website

A modern, responsive website for Somerhaus, Cincinnati's premier event venue located in the historic Over-the-Rhine neighborhood. This React/TypeScript application showcases the venue's capabilities for weddings, corporate events, parties, and special occasions.

## Project Overview

**Venue**: Somerhaus Event Space  
**Location**: 1415 Republic St, Cincinnati, OH 45202  
**Purpose**: Professional event venue website with booking capabilities  
**Framework**: React + TypeScript + Vite  
**UI Library**: shadcn/ui + Tailwind CSS  

## Tech Stack

### Core Technologies
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1 with SWC plugin for fast compilation
- **Routing**: React Router DOM 6.26.2
- **Styling**: Tailwind CSS 3.4.11 with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion 12.9.2
- **State Management**: TanStack React Query 5.56.2
- **Forms**: React Hook Form 7.53.0 with Zod validation

### Key Dependencies
- **Icons**: Lucide React + Tabler Icons
- **Carousels**: Embla Carousel with autoplay/autoscroll
- **Theme**: next-themes for dark/light mode
- **SEO**: React Helmet Async
- **Date Handling**: date-fns
- **Toast Notifications**: Sonner
- **Charts**: Recharts (if needed)

## Project Structure

```
lost-haus/
├── public/                          # Static assets
│   ├── photo/                       # Event photography
│   │   ├── event-1.jpg             # Example event image
│   │   ├── event-2.jpg             # Example event image
│   │   └── event-3.jpg             # Example event image
│   ├── client-logos/                # Client logo assets  
│   ├── illustration/                # Illustrations and graphics
│   ├── team/                        # Team member photos
│   │   ├── team-member-1.jpg       # Example team member photo
│   │   ├── team-member-2.jpg       # Example team member photo
│   │   └── team-member-3.jpg       # Example team member photo
│   ├── icons/                       # Icon assets
│   ├── haus-logo.png               # Main venue logo
│   ├── favicon.png                 # Site favicon
│   ├── FreshMango-*.woff           # Header font files
│   ├── Nebulica-*.woff             # Body font files
│   └── robots.txt                  # SEO directives
├── src/
│   ├── components/                  # React components
│   │   ├── ui/                     # shadcn/ui base components
│   │   ├── blocks/                 # Composed feature blocks
│   │   ├── shared/                 # Shared components
│   │   ├── wedding/                # Wedding-specific components
│   │   ├── corporate/              # Corporate event components
│   │   ├── faq/                    # FAQ components
│   │   ├── seo/                    # SEO components
│   │   ├── showers/                # Shower event components
│   │   ├── honeybook/              # Integration components
│   │   ├── Hero.tsx                # Main hero component
│   │   └── AvatarGroup.tsx         # Team avatar display
│   ├── pages/                      # Route components
│   │   ├── blog/                   # Blog post pages
│   │   ├── Index.tsx               # Homepage
│   │   ├── About.tsx               # About page
│   │   ├── Contact.tsx             # Contact/inquiry forms
│   │   ├── Wedding.tsx             # Wedding landing
│   │   ├── Corporate.tsx           # Corporate events
│   │   ├── Gallery.tsx             # Photo gallery
│   │   ├── BarPackages.tsx         # Bar service packages
│   │   ├── Vendors.tsx             # Preferred vendors
│   │   ├── Layout.tsx              # Venue layout info
│   │   ├── Press.tsx               # Press mentions
│   │   ├── FAQ.tsx                 # Frequently asked questions
│   │   └── [EventType].tsx         # Various event type pages
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions
│   ├── styles/                     # Global styles
│   ├── App.tsx                     # Main app component with routing
│   ├── main.tsx                    # App entry point
│   └── index.css                   # Global CSS with Tailwind
├── contentnotes.md                 # Content strategy and copy
├── tailwind.config.ts              # Tailwind configuration
├── vite.config.ts                  # Vite build configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
└── components.json                 # shadcn/ui configuration
```

## Key Features & Routes

### Main Navigation Structure
- **Home** (`/`) - Hero, testimonials, features, gallery
- **About** (`/about`) - Venue information, team, location
- **Events** - Multiple event type pages:
  - Weddings (`/wedding`, `/lgbtq-weddings`, `/micro-weddings`, `/elopements`)
  - Corporate (`/corporate`, `/meetings`)
  - Social (`/parties`, `/dinners`, `/brunches`, `/happy-hours`, `/rehearsals`)
  - Special (`/special-events`, `/showers`)
- **Gallery** (`/gallery`) - Event photography showcase
- **Info Pages**:
  - Bar Packages (`/bar-packages`) - Tiered bar service options
  - Vendors (`/vendors`) - Preferred vendor directory
  - Venue Layout (`/venue-layout`) - Space configuration options
  - FAQ (`/faq`) - Common questions
  - Press (`/press`) - Media mentions
- **Contact** (`/contact`, `/event-inquiry`) - Inquiry and booking forms
- **Blog** (`/blog`) - Content marketing with event tips

### Venue Information
- **Capacity**: 3000+ sq ft, seats 80 dining + 15-20 lounge
- **Location**: Over-the-Rhine, Cincinnati (downtown)
- **Event Types**: Weddings, corporate, parties, meetings, photoshoots
- **Amenities**: Full AV, WiFi, built-in bar, furnished space
- **Bar Packages**: 3 tiers ($25-$45 per guest, 3-hour service)

## Design System

### Typography
- **Headers**: FreshMango (custom font family)
- **Body**: Nebulica (custom font family)
- **Fallbacks**: serif for headers, sans-serif for body

### Color Palette
- **Brand Orange**: `#ea580c` (orange-600) with full scale (50-900)
- **Background**: `#F5F3F1` (warm off-white)
- **System Colors**: HSL-based design tokens for theming
- **Components**: shadcn/ui default color system

### Component Architecture
- **Base UI**: shadcn/ui components in `src/components/ui/`
- **Blocks**: Composed sections in `src/components/blocks/`
- **Page-Specific**: Event-type specific components organized by folder
- **Shared**: Reusable components across multiple pages

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev  # Runs on http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### File Conventions
- **Components**: PascalCase, `.tsx` extension
- **Pages**: PascalCase, correspond to routes
- **Utilities**: camelCase in `/lib` folder
- **Assets**: Organized by type in `/public`
- **Imports**: Use `@/` alias for `src/` directory

### Key Patterns
1. **SEO**: Every page uses `<Seo>` component with structured data
2. **Forms**: React Hook Form + Zod validation for all contact forms
3. **Images**: Optimized assets in `/public/photo/` with descriptive names
4. **Responsive**: Mobile-first design with Tailwind breakpoints
5. **Performance**: Lazy loading, code splitting, optimized fonts

## Content Management

### Static Content
- Main copy stored in `contentnotes.md`
- Image assets organized by type and event category
- Client logos in `/public/client-logos/`
- Team photos in `/public/team/`

### Dynamic Content
- Event inquiries handled through contact forms
- Bar packages with tiered pricing structure
- Vendor directory with contact information
- Photo gallery with categorized event images

## Deployment & Infrastructure

### Build Configuration
- **Vite**: Fast build tool with React SWC plugin
- **Docker**: Multi-stage build with nginx serving
- **Development**: Hot reload on port 8080
- **Production**: Optimized bundle with code splitting

### Docker Setup
```bash
# Development
docker-compose up

# Production build
docker build -f Dockerfile .
```

## AI Agent Guidelines

### When Working on This Project:

1. **Maintain Design Consistency**:
   - Use existing shadcn/ui components
   - Follow the brand color palette (orange theme)
   - Maintain typography hierarchy with custom fonts
   - Keep mobile-first responsive approach

2. **Content Guidelines**:
   - Reference `contentnotes.md` for official copy
   - Maintain professional, welcoming tone
   - Highlight venue's 3000 sq ft space and downtown location
   - Emphasize versatility for different event types

3. **Technical Standards**:
   - Use TypeScript for all new components
   - Follow existing component patterns in `/ui` and `/blocks`
   - Implement proper SEO with structured data
   - Use React Hook Form + Zod for any new forms
   - Maintain accessibility standards

4. **Image Handling**:
   - Optimize images before adding to `/public/photo/`
   - Use descriptive filenames following existing convention
   - Provide alt text for accessibility
   - Consider loading performance for gallery sections

5. **Routing**:
   - Add new routes to `App.tsx`
   - Follow RESTful URL patterns
   - Create corresponding page components in `/pages`
   - Update navigation in header component if needed

### Common Tasks:
- **New Event Type**: Create page in `/pages`, add route, update navigation
- **Content Updates**: Modify existing page components, check `contentnotes.md`
- **UI Changes**: Work with components in `/ui` and `/blocks` directories
- **Form Additions**: Use React Hook Form pattern from existing contact forms
- **Gallery Updates**: Add images to `/public/photo/`, update gallery component

This website represents a professional event venue with a focus on user experience, SEO optimization, and conversion through well-designed inquiry forms and compelling visual storytelling.
