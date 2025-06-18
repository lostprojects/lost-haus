// Centralized client logos configuration
export const clientLogos = [
  { 
    id: 'client-1', 
    description: 'University of Cincinnati', 
    image: '/client-logos/University-of-Cincinnati-Logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-2', 
    description: 'Procter & Gamble', 
    image: '/client-logos/P&G-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-3', 
    description: 'Fischer Homes', 
    image: '/client-logos/fischer-homes-logo.webp', 
    className: 'grayscale contrast-200' 
  },
  { 
    id: 'client-4', 
    description: 'City of Cincinnati', 
    image: '/client-logos/cincinnati-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-5', 
    description: 'Instacart', 
    image: '/client-logos/instacart-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-6', 
    description: 'Artworks', 
    image: '/client-logos/artworks-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-7', 
    description: 'CincyTech', 
    image: '/client-logos/cincytech-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-8', 
    description: 'Black Tech Week', 
    image: '/client-logos/black-tech-week.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-9', 
    description: 'Scripps', 
    image: '/client-logos/Scripps-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-10', 
    description: 'Xavier University', 
    image: '/client-logos/xavier-university-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-11', 
    description: 'North American Properties', 
    image: '/client-logos/north-american.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-12', 
    description: 'Kroger', 
    image: '/client-logos/kroger-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-13', 
    description: "Alzheimer's Foundation", 
    image: '/client-logos/Alzheimers-Foundation-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-14', 
    description: 'Cincinnati Chamber', 
    image: '/client-logos/cincinnati-chamber-logo.webp', 
    className: 'brightness-0 invert' 
  },
  { 
    id: 'client-15', 
    description: 'OTR Film Festival', 
    image: '/client-logos/otr-film-festival-logo.webp', 
    className: 'brightness-0 invert' 
  }
];

// Alternative configuration for pages that use grayscale instead of invert
export const clientLogosGrayscale = clientLogos.map(logo => ({
  ...logo,
  className: logo.id === 'client-3' ? 'grayscale contrast-200' : 'grayscale'
})); 