
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CorporateLayouts = () => {
  const layouts = [
    {
      id: "boardroom",
      name: "Boardroom",
      capacity: "Up to 18 people",
      description: "Perfect for executive meetings and important client presentations with a formal seating arrangement.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "classroom",
      name: "Classroom",
      capacity: "Up to 40 people",
      description: "Ideal for training sessions, workshops, and educational presentations with note-taking surfaces.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "theater",
      name: "Theater",
      capacity: "Up to 80 people",
      description: "Best for large presentations, keynote speeches, and company announcements requiring maximum seating.",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "cocktail",
      name: "Reception",
      capacity: "Up to 150 people",
      description: "Perfect for networking events, cocktail receptions, and social gatherings before or after meetings.",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-header mb-4">Versatile Meeting Configurations</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Our flexible space adapts to your specific business needs with multiple setup options.
          </p>
        </div>
        
        <Tabs defaultValue="boardroom" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {layouts.map(layout => (
              <TabsTrigger key={layout.id} value={layout.id} className="font-body">
                {layout.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {layouts.map(layout => (
            <TabsContent key={layout.id} value={layout.id}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={layout.image} 
                    alt={`${layout.name} layout`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-header mb-2">{layout.name} Setup</h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full mb-4 font-body">
                    {layout.capacity}
                  </div>
                  <p className="text-gray-700 mb-6 font-body">{layout.description}</p>
                  <div className="space-y-3 font-body">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>Full A/V integration available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>Custom lighting configurations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>Catering service compatible</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CorporateLayouts;
