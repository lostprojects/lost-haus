export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export const dinnersPricing: PricingPlan[] = [
  {
    name: "Intimate Dinner",
    price: "$3,200",
    period: "/event",
    description: "Perfect for small dinner parties and special occasions",
    features: [
      "Up to 30 guests",
      "5-hour venue rental",
      "Premium lighting package",
      "Round tables for 6-8",
      "Full kitchen access",
      "Dedicated event coordinator",
      "Bar setup included"
    ],
    popular: false,
  },
  {
    name: "Elegant Dinner",
    price: "$4,800",
    period: "/event",
    description: "Our most popular dinner package for memorable evenings",
    features: [
      "Up to 60 guests",
      "6-hour venue rental",
      "Custom lighting design",
      "Mix of table configurations",
      "Full catering coordination",
      "Premium bar service",
      "Professional sound system",
      "Floral arrangement space",
      "Photography coordination"
    ],
    popular: true,
  },
  {
    name: "Grand Dinner Event",
    price: "$7,200",
    period: "/event",
    description: "Ultimate luxury dining experience for special celebrations",
    features: [
      "Up to 80 guests seated",
      "8-hour venue rental",
      "Complete lighting transformation",
      "Custom table arrangements",
      "Multi-course coordination",
      "Full-service bar",
      "Live music accommodation",
      "Valet parking available",
      "Professional event management",
      "Custom menu planning support"
    ],
    popular: false,
  }
];

export const meetingsPricing: PricingPlan[] = [
  {
    name: "Team Meeting",
    price: "$800",
    period: "/event",
    description: "Perfect for small team meetings and brainstorming sessions",
    features: [
      "Up to 15 people",
      "Half-day rental (4 hours)",
      "High-speed WiFi",
      "Presentation display",
      "Conference seating setup",
      "Coffee service",
      "Basic AV equipment",
      "Meeting coordination"
    ],
    popular: false,
  },
  {
    name: "Board Meeting",
    price: "$1,800",
    period: "/event",
    description: "Our most popular package for executive and board meetings",
    features: [
      "Up to 25 people",
      "Full-day rental (8 hours)",
      "Premium WiFi network",
      "Multiple displays available",
      "Executive boardroom setup",
      "Catered lunch included",
      "Professional AV system",
      "Video conferencing setup",
      "Dedicated meeting support",
      "Private breakout spaces"
    ],
    popular: true,
  },
  {
    name: "Corporate Summit",
    price: "$3,200",
    period: "/event",
    description: "Ultimate meeting experience for large corporate gatherings",
    features: [
      "Up to 50 people",
      "Extended rental (10 hours)",
      "Enterprise-grade WiFi",
      "Multi-screen presentation setup",
      "Theater and breakout configurations",
      "Full catering service",
      "Live streaming capabilities",
      "Professional recording options",
      "On-site technical support",
      "Welcome reception area",
      "Executive hospitality suite"
    ],
    popular: false,
  }
];

export const rehearsalsPricing: PricingPlan[] = [
  {
    name: "Simple Rehearsal",
    price: "$1,800",
    period: "/event",
    description: "Perfect for intimate wedding rehearsals and run-throughs",
    features: [
      "Up to 25 guests",
      "3-hour venue rental",
      "Basic seating arrangement",
      "Sound system for ceremony",
      "Processional area setup",
      "Event coordination",
      "Bridal suite access"
    ],
    popular: false,
  },
  {
    name: "Complete Rehearsal",
    price: "$2,800",
    period: "/event",
    description: "Our most popular rehearsal package with dinner coordination",
    features: [
      "Up to 40 guests",
      "4-hour venue rental",
      "Full ceremony setup",
      "Professional sound system",
      "Seating for rehearsal dinner",
      "Bar setup available",
      "Catering coordination",
      "Photography space",
      "Dedicated event coordinator"
    ],
    popular: true,
  },
  {
    name: "Premium Rehearsal Event",
    price: "$4,200",
    period: "/event",
    description: "Ultimate rehearsal experience with full dinner service",
    features: [
      "Up to 60 guests",
      "6-hour venue rental",
      "Complete ceremony rehearsal",
      "Full rehearsal dinner setup",
      "Premium bar service",
      "Multi-course dinner coordination",
      "Live music accommodation",
      "Professional lighting",
      "Full event management",
      "Welcome cocktail service"
    ],
    popular: false,
  }
];

export const partiesPricing: PricingPlan[] = [
  {
    name: "Birthday Bash",
    price: "$2,500",
    period: "/event",
    description: "Perfect for milestone birthday celebrations",
    features: [
      "Up to 50 guests",
      "4-hour venue rental",
      "Party lighting setup",
      "Sound system for music",
      "Mix of seating options",
      "Bar setup available",
      "Decoration coordination",
      "Event coordination"
    ],
    popular: false,
  },
  {
    name: "Celebration Party",
    price: "$3,800",
    period: "/event",
    description: "Our most popular party package for special occasions",
    features: [
      "Up to 75 guests",
      "5-hour venue rental",
      "Custom lighting design",
      "Professional sound system",
      "Full bar service",
      "Catering coordination",
      "Dance floor setup",
      "Photography space",
      "Dedicated party coordinator",
      "Welcome cocktail service"
    ],
    popular: true,
  },
  {
    name: "Grand Celebration",
    price: "$5,800",
    period: "/event",
    description: "Ultimate party experience for unforgettable celebrations",
    features: [
      "Up to 100 guests",
      "6-hour venue rental",
      "Premium lighting package",
      "DJ booth accommodation",
      "Full premium bar service",
      "Multi-course catering",
      "Live entertainment space",
      "VIP lounge area",
      "Professional event management",
      "Custom decoration support",
      "Late night service"
    ],
    popular: false,
  }
];

export const specialEventsPricing: PricingPlan[] = [
  {
    name: "Intimate Gathering",
    price: "$2,500",
    period: "/event",
    description: "Perfect for small celebrations and milestone moments",
    features: [
      "Up to 50 guests",
      "4-hour venue rental",
      "Basic lighting package",
      "Tables and chairs included",
      "Bridal suite access",
      "Event coordination"
    ],
    popular: false,
  },
  {
    name: "Celebration Package",
    price: "$4,200",
    period: "/event",
    description: "Our most popular package for special occasions",
    features: [
      "Up to 120 guests",
      "6-hour venue rental",
      "Premium lighting & sound",
      "All furniture included",
      "Full venue access",
      "Dedicated event coordinator",
      "Bar service available",
      "Vendor coordination"
    ],
    popular: true,
  },
  {
    name: "Grand Celebration",
    price: "$6,500",
    period: "/event",
    description: "Ultimate luxury for your most important celebrations",
    features: [
      "Up to 200 guests",
      "8-hour venue rental",
      "Complete A/V package",
      "Custom lighting design",
      "Premium bar service",
      "Full catering coordination",
      "Valet parking available",
      "Photography coordination",
      "Day-of event management"
    ],
    popular: false,
  }
];

export const happyHoursPricing: PricingPlan[] = [
  {
    name: "After-Work Social",
    price: "$2,200",
    period: "/event",
    description: "Perfect for casual networking and team gatherings",
    features: [
      "Up to 40 guests",
      "3-hour venue rental",
      "Bar setup included",
      "High-top cocktail tables",
      "Ambient lighting",
      "Sound system for background music",
      "Event coordination"
    ],
    popular: false,
  },
  {
    name: "Premium Happy Hour",
    price: "$3,800",
    period: "/event",
    description: "Our most popular package for memorable happy hour events",
    features: [
      "Up to 70 guests",
      "4-hour venue rental",
      "Full bar service",
      "Mix of seating options",
      "Premium lighting package",
      "Professional sound system",
      "Appetizer station setup",
      "Dedicated bartender",
      "Event management"
    ],
    popular: true,
  },
  {
    name: "Corporate Celebration",
    price: "$5,500",
    period: "/event",
    description: "Ultimate happy hour experience for special company events",
    features: [
      "Up to 100 guests",
      "5-hour venue rental",
      "Premium bar package",
      "Multiple bar stations",
      "Custom lighting design",
      "Live music accommodation",
      "Full catering coordination",
      "Multiple bartenders",
      "Professional event management",
      "Photography coordination"
    ],
    popular: false,
  }
];
