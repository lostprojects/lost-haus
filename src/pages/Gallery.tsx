import React, { useMemo } from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Breadcrumb from '@/components/ui/breadcrumb';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Heart, Share2 } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const Gallery = () => {

  const galleryCategories = useMemo(
    () => [
    {
      title: "Weddings",
      images: [
        { src: "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.webp", alt: "Wedding ceremony setup with elegant decorations", category: "Ceremony" },
        { src: "/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.webp", alt: "Wedding reception with beautiful lighting", category: "Reception" },
        { src: "/photo/wedding-portrait1-cincinnati-wedding-venue-somerhaus.webp", alt: "Bride and groom portrait", category: "Portrait" },
        { src: "/photo/wedding-portrait2-cincinnati-wedding-venue-somerhaus.webp", alt: "Bridal details", category: "Details" },
        { src: "/photo/wedding-portrait3-cincinnati-wedding-venue-somerhaus.webp", alt: "Emotional first look", category: "Moments" },
        { src: "/photo/wedding-hero3-cincinnati-wedding-venue-somerhaus.webp", alt: "Grand send-off", category: "Exit" },
        { src: "/photo/wedding-hero4-cincinnati-wedding-venue-somerhaus.webp", alt: "Reception speeches", category: "Reception" },
        { src: "/photo/wedding-hero5-cincinnati-wedding-venue-somerhaus.webp", alt: "Dance floor moment", category: "Dancing" },
        { src: "/photo/wedding-portrait4-cincinnati-wedding-venue-somerhaus.webp", alt: "Bridal party", category: "Portrait" },
        { src: "/photo/wedding-portrait-somerhaus-wedding-venue-cincinnati.webp", alt: "Couple portrait", category: "Portrait" }
      ]
    },
    {
      title: "Corporate Events",
      images: [
        { src: "/photo/meeting-hero1-cincinnati-event-venue-somerhaus.webp", alt: "Conference style meeting", category: "Meetings" },
        { src: "/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.webp", alt: "Team dinner in the atrium", category: "Dinners" },
        { src: "/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.webp", alt: "Panel discussion portrait", category: "Panels" },
        { src: "/photo/photoshoot-hero-1-somerset-somerhaus-event space.webp", alt: "Brand shoot setup", category: "Photoshoot" },
        { src: "/photo/dinner-hero-cincinnati-wedding-venue-somerhaus.webp", alt: "Corporate dinner hero", category: "Dinners" },
        { src: "/photo/dinner-portrait-somerhaus-event-space-cincinnati.webp", alt: "Chef plating dinner", category: "Food" },
        { src: "/photo/food-portrait-somerhaus-cincinnati-events.webp", alt: "Gourmet canapé", category: "Food" },
        { src: "/photo/food-portrait2-somerhaus-cincinnati-events.webp", alt: "Signature cocktail", category: "Beverage" },
        { src: "/photo/bar-package-hero-somerhaus-cincinnati-events.webp", alt: "Bar package hero", category: "Bar" }
      ]
    },
    {
      title: "Parties",
      images: [
        { src: "/photo/party-hero1-cincinnati-event-venue-somerhaus.webp", alt: "Lively dance floor", category: "Dancing" },
        { src: "/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.webp", alt: "Elegant dinner party", category: "Dinner" }
      ]
    },
    {
      title: "Showers & Brunches",
      images: [
        { src: "/photo/space-portrait1-cincinnati-event-space-somerhaus.webp", alt: "Baby shower decor", category: "Showers" },
        { src: "/photo/space-portrait2-cincinnati-event-space-somerhaus.webp", alt: "Brunch place setting", category: "Brunch" }
      ]
    },
    {
      title: "Space",
      images: [
        { src: "/photo/space-portrait1-cincinnati-event-space-somerhaus.webp", alt: "Atrium space portrait", category: "Space" },
        { src: "/photo/space-portrait2-cincinnati-event-space-somerhaus.webp", alt: "Loft space portrait", category: "Space" }
      ]
    }
    ],
    []
  );
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Flatten categories then deduplicate images by src so no duplicates render
  const allImages = useMemo(() => {
    const allImagesWithCat = galleryCategories.flatMap(category =>
      category.images.map(img => ({ ...img, categoryTitle: category.title }))
    );
    return Array.from(new Map(allImagesWithCat.map(img => [img.src, img])).values());
  }, [galleryCategories]);

  const filteredImages = useMemo(() => {
    return selectedCategory === "All"
      ? allImages
      : allImages.filter(img => img.categoryTitle === selectedCategory);
  }, [allImages, selectedCategory]);

  const categories = useMemo(
    () => ["All", ...galleryCategories.map(cat => cat.title)],
    [galleryCategories]
  );

  return (
    <PageLayout footerLogoType="clients" hasHero={false}>
      <Seo
        title="Event Gallery | Somerhaus Cincinnati"
        description="View photos of weddings, corporate gatherings, and celebrations hosted at Somerhaus."
        schema={businessSchema}
      />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Breadcrumb items={[
            { label: 'About', href: '/about' },
            { label: 'Gallery' }
          ]} />
          
          <div>
            <h1 className="text-3xl md:text-4xl font-header mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Explore the magic of past events at Cincinnati's premier venue. From intimate gatherings to grand celebrations, see how Somerhaus transforms for every occasion.
            </p>
          </div>
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
              <a href="/about/contact">Contact Us</a>
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
    </PageLayout>
  );
};

export default Gallery;
