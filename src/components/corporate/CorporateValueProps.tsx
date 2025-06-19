import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Building, Users, Lightbulb, MapPin } from 'lucide-react';

interface CorporateValuePropsProps {
  badgeText?: string;
}

const CorporateValueProps: React.FC<CorporateValuePropsProps> = ({ 
  badgeText = "Why Choose Us"
}) => {
  const valueProps = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Beyond Conventional Spaces",
      description: "Break away from sterile boardrooms with our converted warehouse offering industrial-chic sophistication."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Spark Innovation",
      description: "Our unique environment is proven to enhance creativity and productive collaboration."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Memorable Experiences",
      description: "Create lasting impressions with clients and strengthen team bonds in our distinctive space."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Prime Location",
      description: "Located in the heart of Over-the-Rhine, minutes from downtown Cincinnati businesses and hotels."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 font-body">{badgeText}</Badge>
          <h2 className="font-header mb-4">Where Business Meets Distinction</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Somerhaus creates a perfect balance between professional functionality and inspiring ambiance for your corporate events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">{prop.icon}</div>
                <h3 className="font-header mb-2">{prop.title}</h3>
                <p className="text-gray-600 font-body">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateValueProps;
