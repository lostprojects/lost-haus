
import React from 'react';
import { Wifi, Monitor, Headphones, Video, Presentation, Server } from 'lucide-react';

const CorporateAmenities = () => {
  const amenities = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "High-Speed WiFi",
      description: "Blazing fast, secure internet access capable of supporting large groups with multiple devices."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Display Options",
      description: "Multiple high-definition displays with wireless connection capabilities for presentations."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Advanced Audio",
      description: "Premium sound system with wireless microphones for crystal clear communication."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Conferencing",
      description: "Built-in equipment for professional hybrid meetings with remote participants."
    },
    {
      icon: <Presentation className="h-8 w-8" />,
      title: "Presentation Tools",
      description: "Interactive whiteboard capabilities and presentation clickers available."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Technical Support",
      description: "On-call support staff to ensure your technology needs are seamlessly met."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-header mb-4">Professional-Grade Amenities</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Equipped with cutting-edge technology to power your most important business gatherings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-start p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                {amenity.icon}
              </div>
              <div>
                <h3 className="text-xl font-header mb-2">{amenity.title}</h3>
                <p className="text-gray-600 font-body">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateAmenities;
