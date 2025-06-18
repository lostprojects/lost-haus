import React from 'react';
import Header from '@/components/ui/header';
import UniversalHero from '@/components/shared/UniversalHero';
import { Footer } from "@/components/ui/footer-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, MapPin, Phone, Mail } from 'lucide-react';
import { LogoTicker } from '@/components/blocks/LogoTicker';
import { clientLogos } from '@/data/clientLogos';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const Vendors: React.FC = () => {
  const vendorCategories = [
    {
      category: "Photography & Videography",
      vendors: [
        {
          name: "Aperture Studios",
          description: "Award-winning wedding and event photography",
          specialty: "Wedding Photography",
          location: "Cincinnati, OH",
          contact: "aperturestudios@example.com"
        },
        {
          name: "Motion Pictures Co.",
          description: "Cinematic wedding and event videography",
          specialty: "Event Videography",
          location: "Cincinnati, OH", 
          contact: "info@motionpictures.com"
        }
      ]
    },
    {
      category: "Catering & Food Service",
      vendors: [
        {
          name: "Culinary Creations",
          description: "Gourmet catering with local ingredients",
          specialty: "Wedding Catering",
          location: "Cincinnati, OH",
          contact: "hello@culinarycreations.com"
        },
        {
          name: "Sweet Endings",
          description: "Custom wedding cakes and desserts",
          specialty: "Wedding Cakes",
          location: "Cincinnati, OH",
          contact: "orders@sweetendings.com"
        }
      ]
    },
    {
      category: "Floral & Decor",
      vendors: [
        {
          name: "Bloom & Co.",
          description: "Modern floral design and event styling",
          specialty: "Wedding Florals",
          location: "Cincinnati, OH",
          contact: "hello@bloomandco.com"
        },
        {
          name: "Event Elements",
          description: "Full-service event design and rental",
          specialty: "Event Design",
          location: "Cincinnati, OH",
          contact: "info@eventelements.com"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Preferred Vendors | Somerhaus Cincinnati"
        description="Our curated network of Cincinnati's finest event professionals for your perfect celebration."
        schema={businessSchema}
      />
      <Header />
      
      <UniversalHero pageKey="vendors" />

      <main className="flex-grow">
        {/* Vendor Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">
                Our Trusted Partner Network
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                We've carefully selected Cincinnati's finest vendors to ensure your event is flawless from start to finish.
              </p>
            </div>

            <div className="space-y-12">
              {vendorCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-header mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.vendors.map((vendor, vendorIndex) => (
                      <Card key={vendorIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{vendor.name}</CardTitle>
                              <Badge variant="secondary" className="mt-2">
                                {vendor.specialty}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <CardDescription className="font-body">
                            {vendor.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {vendor.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="h-4 w-4 mr-2" />
                              {vendor.contact}
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-4">
                            View Portfolio <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">
                Why Use Our Preferred Vendors
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">Quality Assured</h3>
                <p className="text-gray-600 font-body">
                  Every vendor has been personally vetted for quality, professionalism, and excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">Venue Familiar</h3>
                <p className="text-gray-600 font-body">
                  Our partners know Somerhaus inside and out, ensuring seamless coordination.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">Direct Support</h3>
                <p className="text-gray-600 font-body">
                  We facilitate introductions and coordinate logistics between all parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">
              Need Vendor Recommendations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body max-w-2xl mx-auto">
              Our event team will connect you with the perfect vendors for your specific needs and budget.
            </p>
            <Button size="lg">
              <a href="/event-inquiry">Get Vendor Recommendations</a>
            </Button>
          </div>
        </section>

        <LogoTicker heading="Trusted By" logos={clientLogos} className="bg-black" />
      </main>
      
      <Footer logoType="clients" />
    </div>
  );
};

export default Vendors;
