
import React from 'react';
import Header from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Heart, Share2 } from 'lucide-react';

const Gallery = () => {

  const galleryCategories = [
    {
      title: "Weddings",
      images: [
        { src: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png", alt: "Wedding ceremony setup with elegant decorations", category: "Ceremony" },
        { src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png", alt: "Wedding reception with beautiful lighting", category: "Reception" },
        { src: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png", alt: "Bridal party photo session", category: "Portraits" },
        { src: "https://images.squarespace-cdn.com/content/v1/64b6eccd5bb791630eca7b41/1709307334279-RZ62O6FVFT1QQLIKFU4I/Amy%26Joe1.jpg", alt: "Couple posing at Somerhaus", category: "Real Wedding" }
      ]
    },
    {
      title: "Corporate Events",
      images: [
        { src: "/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png", alt: "Corporate meeting setup with professional lighting", category: "Meetings" },
        { src: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png", alt: "Corporate event networking space", category: "Networking" },
        { src: "/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png", alt: "Corporate presentation setup", category: "Presentations" },
        { src: "https://images.squarespace-cdn.com/content/v1/64b6eccd5bb791630eca7b41/1709310404105-M64OVDTJ6NZCIDL2QCTC/HausMeetingPhoto.png", alt: "Team meeting at Somerhaus", category: "Meetings" },
        { src: "https://images.squarespace-cdn.com/content/v1/64b6eccd5bb791630eca7b41/1709310517186-KB8ZL1PWD2LSDB2LS3YJ/em0zWjz2.jpg", alt: "Networking event", category: "Networking" }
      ]
    },
    {
      title: "Special Events",
      images: [
        { src: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png", alt: "Birthday party celebration", category: "Parties" },
        { src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png", alt: "Baby shower decorations", category: "Showers" },
        { src: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png", alt: "Anniversary celebration", category: "Celebrations" },
        { src: "https://images.squarespace-cdn.com/content/v1/64b6eccd5bb791630eca7b41/1709310064431-T2UOZHJ7I9S776NL4X5I/YC98St8o.jpg", alt: "Special gathering at Somerhaus", category: "Gatherings" }
      ]
    }
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const allImages = galleryCategories.flatMap(category => 
    category.images.map(img => ({ ...img, categoryTitle: category.title }))
  );

  const filteredImages = selectedCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.categoryTitle === selectedCategory);

  const categories = ["All", ...galleryCategories.map(cat => cat.title)];

  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#F5F3F1' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-r from-black/70 to-black/50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png)`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 font-body">Photo Gallery</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-header tracking-tight mb-4">
            Somerhaus Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-body">
            Explore the magic of past events at Cincinnati's premier venue. From intimate gatherings to grand celebrations, see how Somerhaus transforms for every occasion.
          </p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-body"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage(image.src)}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm font-medium">{image.category}</p>
                      <p className="text-xs opacity-80">{image.categoryTitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="opacity-80 hover:opacity-100">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-80 hover:opacity-100">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F5F3F1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-header tracking-tight mb-4">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
            Let us help you plan the perfect event at Somerhaus. Contact us today to discuss your vision and see how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-body" asChild>
              <a href="/event-inquiry">Book Your Event</a>
            </Button>
            <Button size="lg" variant="outline" className="font-body" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              size="sm"
              variant="secondary"
              className="absolute top-4 right-4"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </Button>
          </div>
        </div>
      )}

      <Footerdemo />
    </main>
  );
};

export default Gallery;
