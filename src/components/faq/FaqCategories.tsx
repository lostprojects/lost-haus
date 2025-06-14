
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
  category: string;
  tags?: string[];
};

export const faqItems: FaqItem[] = [
    // Venue & Space
    {
      question: "What makes Somerhaus unique compared to other Cincinnati venues?",
      answer: "Somerhaus offers a distinctive blend of industrial-chic aesthetics in a converted warehouse with modern amenities. Our 3,080 sq ft dedicated events space features unique architectural elements, interesting furnishings and art from around the world, and plenty of greenery, creating an atmosphere that's both sophisticated and warm—perfect for events that stand out from the ordinary.",
      category: "venue",
      tags: ["unique", "features", "space"]
    },
    {
      question: "What's the history of the Somerhaus building?",
      answer: "Somerhaus is housed in a beautifully converted warehouse building on Republic Street in Cincinnati's historic Over-the-Rhine neighborhood. The building retains many of its original industrial features while being thoughtfully renovated to create a versatile, modern event space that honors its architectural heritage.",
      category: "venue",
      tags: ["history", "building", "warehouse", "OTR"]
    },
    {
      question: "How would you describe the aesthetic and atmosphere?",
      answer: "Somerhaus features an industrial-chic aesthetic with a warm, inviting atmosphere. The space combines exposed brick, original hardwood floors, and large windows with contemporary furnishings, lush greenery, and curated art pieces. This creates a sophisticated yet comfortable environment that can be easily personalized for any event style.",
      category: "venue",
      tags: ["style", "design", "atmosphere"]
    },
    {
      question: "Is the full venue the only rental option, or can parts be rented separately?",
      answer: "Somerhaus is typically rented as a complete venue to ensure exclusive use and privacy for your event. This gives you access to all amenities and spaces, including the main hall, kitchen facilities, and any breakout areas. For smaller corporate functions, we may be able to accommodate partial venue rentals during weekdays—please contact us to discuss your specific needs.",
      category: "venue",
      tags: ["rental", "options", "space"]
    },
    {
      question: "What's the maximum capacity?",
      answer: "Somerhaus can accommodate up to 130 guests for a cocktail-style reception where most guests are standing. For seated events with tables and chairs provided by us, we can comfortably accommodate up to 80 guests. For a ceremony-style seating arrangement, we can fit up to 100 guests. These capacities ensure comfortable movement throughout the space while maintaining safety standards.",
      category: "venue",
      tags: ["capacity", "guests", "maximum"]
    },
    {
      question: "Can you share floor plans and dimensions?",
      answer: "Yes, we provide detailed floor plans with exact dimensions to all booked clients, and we're happy to share basic layout options with prospective clients during tours. Our main space is approximately 3,080 square feet with an open concept design that can be configured in multiple ways. We can provide digital CAD files of the space for your planner or designer to work with for custom layouts.",
      category: "venue",
      tags: ["floor plan", "dimensions", "layout"]
    },
    {
      question: "What furniture is included and how can it be arranged?",
      answer: (
        <div>
          <p>Our venue includes the following furniture at no additional cost:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>80 wooden cross-back chairs</li>
            <li>10 round tables (60" diameter, seat 8 each)</li>
            <li>6 rectangular tables (6' length)</li>
            <li>4 high-top cocktail tables</li>
            <li>Lounge furniture set (2 sofas, 4 armchairs, coffee table)</li>
            <li>Additional 70 folding chairs available for ceremonies and meetings</li>
          </ul>
          <p className="mt-2">These can be arranged in various configurations—banquet, theater, classroom, cocktail, etc.—based on your event needs. Additional furniture can be rented through our preferred vendors if needed.</p>
        </div>
      ),
      category: "venue",
      tags: ["furniture", "tables", "chairs", "setup"]
    },
    {
      question: "What types of events can be hosted at Somerhaus?",
      answer: (
        <div>
          <p>Somerhaus accommodates a wide variety of events, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Weddings and receptions</li>
            <li>Corporate meetings and team days</li>
            <li>Art and fashion shows</li>
            <li>Brunch parties and large dinner gatherings (up to 80 people seated)</li>
            <li>Cocktail parties and social events</li>
            <li>Community events and fundraisers</li>
            <li>Photoshoots and media production</li>
            <li>Baby and bridal showers</li>
            <li>Non-profit meetings and events</li>
          </ul>
          <p className="mt-2">Our versatile space can be customized to suit almost any event type with proper planning.</p>
        </div>
      ),
      category: "venue",
      tags: ["events", "types", "versatility"]
    },
    
    // Location & Logistics
    {
      question: "Where exactly is Somerhaus located in OTR?",
      answer: "Somerhaus is located on Republic Street in the heart of Cincinnati's historic Over-the-Rhine neighborhood, just steps away from Washington Park and a short walk from Findlay Market. Our central location offers easy access to downtown Cincinnati while being surrounded by the vibrant culture and distinctive architecture of OTR.",
      category: "location",
      tags: ["address", "directions", "OTR"]
    },
    {
      question: "What parking options are available?",
      answer: "While Somerhaus doesn't have a dedicated parking lot, there are several convenient options nearby. The Washington Park underground parking garage is just one block away, and several other public parking lots and street parking options are within a short walking distance. We can provide a detailed parking map for your guests upon request.",
      category: "location",
      tags: ["parking", "transportation"]
    },
    {
      question: "Is Somerhaus wheelchair accessible?",
      answer: "Yes, all our facilities are wheelchair accessible. The venue features a street-level entrance without steps, accessible restrooms, and navigable pathways throughout the space. If you or your guests require any specific accommodations, please let us know when booking so we can ensure everyone has a comfortable experience.",
      category: "location",
      tags: ["accessibility", "wheelchair", "ADA"]
    },
    {
      question: "What are the best hotels for out-of-town guests?",
      answer: (
        <div>
          <p>We recommend several excellent accommodations within a short distance of Somerhaus:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>21c Museum Hotel (downtown, 5-minute drive)</li>
            <li>The Lytle Park Hotel (downtown, 7-minute drive)</li>
            <li>Symphony Hotel (OTR, walking distance)</li>
            <li>Kinley Cincinnati (downtown, 6-minute drive)</li>
          </ul>
          <p className="mt-2">Many of these hotels offer special rates for event blocks—ask us for our preferred hotel contact list.</p>
        </div>
      ),
      category: "location",
      tags: ["hotels", "accommodations", "guests"]
    },
    
    // Planning & Booking
    {
      question: "What are your standard pricing packages?",
      answer: (
        <div>
          <p>Our base venue rental rates are:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Sunday-Thursday Evening Events:</strong> $1,500 with a $500 beverage minimum</li>
            <li><strong>Friday-Saturday Evening Events:</strong> $3,000 with a $1,000 beverage minimum</li>
            <li><strong>Corporate Half-Day Rental (Mon-Fri):</strong> $750</li>
            <li><strong>Corporate Full-Day Rental (Mon-Fri):</strong> $1,200</li>
            <li><strong>Non-Profit Events:</strong> Custom pricing available - please inquire</li>
          </ul>
          <p className="mt-2">All packages include basic setup and teardown assistance, tables and chairs for up to 80 guests, basic lighting, and use of our sound system. Custom packages are available for unique event needs.</p>
        </div>
      ),
      category: "planning",
      tags: ["pricing", "costs", "packages"]
    },
    {
      question: "What's included in the venue rental?",
      answer: (
        <div>
          <p>Our standard venue rental includes:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Exclusive use of the entire venue for your event duration</li>
            <li>Tables and chairs for up to 80 seated guests</li>
            <li>Basic ambient lighting package</li>
            <li>Sound system with wireless microphones</li>
            <li>Setup and tear-down assistance</li>
            <li>Access to non-commercial kitchen facilities</li>
            <li>On-site event manager during your event</li>
            <li>Access to getting-ready spaces</li>
            <li>Cleaning fee (standard cleaning, not excessive)</li>
            <li>WiFi access throughout the venue</li>
          </ul>
        </div>
      ),
      category: "planning",
      tags: ["included", "amenities", "services"]
    },
    {
      question: "How far in advance should I book?",
      answer: "For peak season dates (April-October and December), we recommend booking 12-18 months in advance, especially for weekend events. Off-peak dates can sometimes be booked with 3-6 months' notice. Corporate events typically require 1-3 months' advance booking, depending on the size and complexity. We do occasionally have last-minute availability, so don't hesitate to inquire about your preferred date even if it's approaching soon.",
      category: "planning",
      tags: ["timeline", "reservation", "availability"]
    },
    {
      question: "What's your cancellation/postponement policy?",
      answer: "Our standard policy includes a non-refundable booking deposit to secure your date. For cancellations more than 6 months before the event, you forfeit only the initial deposit. Cancellations 3-6 months prior result in 50% of the total fee due. Cancellations less than 3 months prior require full payment. For postponements due to unforeseen circumstances, we work with you to find a new date within 12 months with no additional fees when possible. All policies are detailed in our contract for your review before booking.",
      category: "planning",
      tags: ["cancellation", "refund", "postponement"]
    },
    {
      question: "Do you provide event coordination?",
      answer: "We provide day-of venue coordination that focuses on facility operations, vendor arrivals, and general timeline execution as it relates to the venue. This is not full-service event planning or design. For comprehensive planning services, we recommend hiring a professional event planner, and we're happy to provide recommendations. For corporate events, our team can provide more extensive coordination services upon request.",
      category: "planning",
      tags: ["coordination", "planning", "day-of"]
    },
    {
      question: "How much time is included for setup and teardown?",
      answer: "Our standard rental includes 2 hours of setup time before your event and 1 hour for teardown afterward. These times are built into your rental period. Additional setup or teardown time can be purchased at an hourly rate if needed and if the schedule permits. All vendors and personal items must be removed by the end of your contracted teardown period unless special arrangements have been made in advance.",
      category: "planning",
      tags: ["setup", "teardown", "timing"]
    },
    {
      question: "When can vendors arrive for setup?",
      answer: "Vendors typically have access 2-3 hours before the event start time for standard setup needs. For more elaborate setups requiring additional time, we offer early access packages at an hourly rate. All setup timing must be confirmed at least two weeks before your event. For multi-day installations, special arrangements can be made at additional cost, subject to venue availability.",
      category: "planning",
      tags: ["setup", "vendors", "access"]
    },
    {
      question: "Do you have a list of preferred vendors?",
      answer: "Yes, we maintain a curated list of trusted professionals who are familiar with our space and consistently deliver excellent service. While we highly recommend these partners, you're welcome to work with any licensed and insured vendors of your choice. Our preferred vendors include caterers, photographers, DJs, florists, rental companies, and more. Using our preferred vendors often results in smoother planning and execution as they already know our policies and space characteristics.",
      category: "planning",
      tags: ["preferred vendors", "recommendations"]
    },
    
    // Amenities & Services
    {
      question: "What AV equipment is available?",
      answer: (
        <div>
          <p>Our venue is equipped with the following AV capabilities:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Premium sound system throughout the venue</li>
            <li>Two wireless microphones</li>
            <li>Multiple display options with HDMI connectivity</li>
            <li>Projector and screen available for rental</li>
            <li>Adjustable lighting system with preset scenes</li>
            <li>High-speed WiFi throughout</li>
          </ul>
          <p className="mt-2">For advanced technical needs, we can connect you with our AV partners who are familiar with our space.</p>
        </div>
      ),
      category: "amenities",
      tags: ["AV", "equipment", "technology", "sound"]
    },
    {
      question: "What kitchen facilities are available?",
      answer: "We offer a non-commercial prep kitchen with refrigerator/freezer space, microwave, prep counters, and handwashing sinks. While not designed for full meal preparation, it provides ample space for caterers to finish and plate prepared foods. The kitchen includes a separate service entrance for vendors. For events requiring more extensive kitchen facilities, we can recommend caterers who specialize in off-site preparation.",
      category: "amenities",
      tags: ["kitchen", "catering", "facilities"]
    },
    {
      question: "Is Wi-Fi available and what's the speed/reliability?",
      answer: "Yes, we offer complimentary high-speed WiFi throughout the venue, with speeds suitable for video calls, presentations, and streaming. Our business-grade internet service includes redundant systems to ensure reliability even with multiple users. For corporate events with special bandwidth requirements, we can arrange for dedicated connections with guaranteed speeds—please inquire for details and any associated costs.",
      category: "amenities",
      tags: ["wifi", "internet", "connection"]
    },
    {
      question: "Is there a bridal suite or changing area?",
      answer: "Yes, we offer a private suite perfect for wedding preparations or as a green room for presenters. The space includes full-length mirrors, comfortable seating, excellent lighting for makeup application, clothing racks, and a private restroom. For larger wedding parties, we can create an additional changing area upon request. The suite can be accessed up to 2 hours before your event start time at no additional charge.",
      category: "amenities",
      tags: ["bridal suite", "changing room", "preparations"]
    },
    
    // Food & Bar
    {
      question: "Do you provide catering or do we need to hire a caterer?",
      answer: "Somerhaus does not provide in-house catering services. You are welcome to work with any licensed and insured caterer of your choice, though we do maintain a list of preferred caterers who are familiar with our space and policies. All caterers must review our facilities and guidelines prior to the event. For more casual events, we also accommodate food truck options, with convenient setup locations near our entrance.",
      category: "food",
      tags: ["catering", "food", "meals"]
    },
    {
      question: "What bar packages do you offer?",
      answer: (
        <div>
          <p>We offer several tiered bar packages to meet different needs and budgets:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Premium Open Bar:</strong> Full selection of top-shelf spirits, craft beers, and selected wines ($45-55/person)</li>
            <li><strong>Standard Open Bar:</strong> Quality spirits, domestic and imported beers, and house wines ($35-45/person)</li>
            <li><strong>Beer & Wine:</strong> Selection of craft and domestic beers with house wines ($25-35/person)</li>
            <li><strong>Consumption Bar:</strong> Pay only for what's consumed, with minimum requirements</li>
            <li><strong>Cash Bar:</strong> Guests purchase their own drinks (setup fees apply)</li>
          </ul>
          <p className="mt-2">All bar packages include professional bartenders, standard mixers, and non-alcoholic options. Custom packages and signature cocktails are available upon request.</p>
        </div>
      ),
      category: "food",
      tags: ["bar", "drinks", "alcohol"]
    },
    {
      question: "Can we bring our own alcohol?",
      answer: "We offer BYOB options starting at $10/guest, which covers our licensed bartending staff, mixers, ice, glassware, and liability insurance. You must purchase and deliver all alcohol according to our guidelines, and only our staff may serve. All alcohol must be delivered during your rental period and any remaining must be taken at the conclusion of your event. State liquor laws and responsible service policies apply to all alcohol service regardless of source.",
      category: "food",
      tags: ["alcohol", "byob", "drinks"]
    },
    
    // Amenities & Services
    {
      question: "What decorations are permitted/not permitted?",
      answer: (
        <div>
          <p>We allow considerable flexibility with decorations, with a few important restrictions:</p>
          <p className="font-semibold mt-2">Permitted:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Freestanding decor elements</li>
            <li>Low-tack tape or removable hooks for wall hangings</li>
            <li>Battery-operated or LED lighting</li>
            <li>Greenery and floral arrangements</li>
            <li>Drapery installed by professional vendors</li>
          </ul>
          <p className="font-semibold mt-2">Not Permitted:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Nails, screws, staples, or anything causing permanent damage</li>
            <li>Glitter, confetti, or difficult-to-clean decorative elements</li>
            <li>Open flames (except enclosed candles approved in advance)</li>
            <li>Smoke machines or fog effects</li>
            <li>Releasing balloons, rice, or similar items</li>
          </ul>
        </div>
      ),
      category: "amenities",
      tags: ["decorations", "restrictions", "setup"]
    },
    
    {
      question: "Will a venue representative be on-site during the event?",
      answer: "Yes, a dedicated venue manager will be on-site throughout your entire event, from setup through conclusion. This staff member handles facility operations, assists with basic needs, coordinates with your vendors, and ensures venue policies are followed. They are not a replacement for an event planner but work alongside your team to ensure the venue aspects of your event run smoothly.",
      category: "planning",
      tags: ["staff", "management", "support"]
    },
    
    // Location & Logistics
    {
      question: "What are your event hours?",
      answer: (
        <div>
          <p>Our standard rental periods are:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Evening Events:</strong> 5-hour rental between 4:00 PM and 12:00 AM</li>
            <li><strong>Daytime Events:</strong> 4-hour rental between 9:00 AM and 4:00 PM</li>
            <li><strong>Corporate Events:</strong> Flexible blocks within 8:00 AM to 5:00 PM</li>
          </ul>
          <p className="mt-2">Additional hours can be added for an hourly fee. All music must end by 11:00 PM per city ordinances, and all events must conclude by midnight. Setup and teardown time is included in these windows.</p>
        </div>
      ),
      category: "location",
      tags: ["hours", "timing", "schedule"]
    },
    {
      question: "Is there a noise curfew?",
      answer: "Yes, in compliance with Cincinnati noise ordinances, all amplified music must end by 11:00 PM. After this time, background music at a conversational level is permitted until the end of your event. Our sound system includes limiters to help keep volume at appropriate levels. For daytime events, we still maintain reasonable volume restrictions to respect neighboring businesses.",
      category: "location",
      tags: ["noise", "music", "restrictions"]
    },
    {
      question: "What's your policy on children at events?",
      answer: "Children are welcome at Somerhaus events when supervised by adults. For safety, children under 18 must remain under parent or guardian supervision at all times. We recommend providing age-appropriate activities or entertainment for younger guests. For weddings and formal events with many children, we suggest hiring dedicated childcare professionals to oversee a kids' area.",
      category: "location",
      tags: ["children", "kids", "family"]
    },
    {
      question: "Is Somerhaus suitable for all seasons?",
      answer: "Yes, our venue is fully climate-controlled with efficient heating and cooling systems that keep the space comfortable year-round. Our large windows provide beautiful natural light while maintaining temperature control. We have appropriate coverings for entrances during inclement weather and can adjust our ambient lighting to create warm, inviting atmospheres during darker winter months or cooler effects during summer.",
      category: "location",
      tags: ["seasons", "climate", "year-round"]
    },
    {
      question: "What happens if there's inclement weather on the day?",
      answer: "As an indoor venue, Somerhaus events proceed regardless of weather conditions. Our climate-controlled environment ensures guest comfort year-round. We do have protocols for severe weather that might affect travel, including flexible start time adjustments when possible and coordination with vendors for delivery modifications. For any concerns about extreme weather conditions, we recommend obtaining event insurance that covers weather-related disruptions.",
      category: "location",
      tags: ["weather", "rain", "snow", "contingency"]
    }
  ];

export const FaqCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: "venue", label: "Venue & Space" },
    { id: "planning", label: "Planning & Booking" },
    { id: "amenities", label: "Amenities & Services" },
    { id: "food", label: "Food & Bar" },
    { id: "location", label: "Location & Logistics" }
  ];

  const filteredItems = searchQuery
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : faqItems;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for answers..."
              className="pl-10 pr-4 py-2"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </Button>
            )}
          </div>
        </div>

        {searchQuery ? (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Search Results</h3>
            {filteredItems.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredItems.map((item, index) => (
                  <AccordionItem key={index} value={`search-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No results found. Please try a different search term.</p>
              </div>
            )}
          </div>
        ) : (
          <Tabs defaultValue="venue" className="max-w-4xl mx-auto">
            <div className="mb-8">
              <TabsList className="h-auto flex flex-wrap justify-center gap-2 p-2 w-full">
                {categories.map(category => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-5 py-3 text-sm md:text-base flex-1 max-w-[200px]"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => {
              const categoryItems = faqItems.filter(item => item.category === category.id);
              
              return (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <Accordion type="single" collapsible className="w-full">
                    {categoryItems.map((item, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              );
            })}
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default FaqCategories;
