import React from 'react';
import PageLayout, { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';
import { CTA } from '@/components/CTASection';

const VenueLayout = () => {
  return (
    <PageLayout footerLogoType="clients">
      <Seo
        title="Venue Layouts | Somerhaus Cincinnati"
        description="An adaptable, loft-style canvas spanning just over 3,000 sq ft in the heart of OTR with natural light and flexible configurations."
        schema={businessSchema}
      />
      
      <section className="pt-4 pb-8 md:pt-12 md:pb-16">
        <div className={`${STANDARD_CONTAINER_CLASSES} space-y-8`}>
          <div>
            <h1 className="font-header mb-4">
              Venue Layout(s)
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              An adaptable, loft-style canvas spanning just over 3,000 sq ft in the heart of OTR. The space is open-plan with a central skylight that floods the room in natural light and leaves plenty of headroom for installations or tall décor.
            </p>
          </div>
        </div>
            </section>
      
      <section className="py-8 md:py-4">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <Card>
            <CardHeader>
              <CardTitle>Room Specs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                  <span className="font-mono text-sm font-medium">Total area</span>
                  <span className="font-mono text-sm">3,000+ sq ft open floor plan</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                  <span className="font-mono text-sm font-medium">Guest capacity</span>
                  <span className="font-mono text-sm">130 cocktail-style / 80 seated at dining tables</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                  <span className="font-mono text-sm font-medium">Restrooms</span>
                  <span className="font-mono text-sm">Two ADA-compliant full restrooms</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                  <span className="font-mono text-sm font-medium">Back of house</span>
                  <span className="font-mono text-sm">Private room for getting changed or storage</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                  <span className="font-mono text-sm font-medium">Prep kitchen</span>
                  <span className="font-mono text-sm">Non-commercial setup with fridge-freezer, microwave, induction burner, and plenty of stainless worksurfaces (ideal for caterer finishing)</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                  <span className="font-mono text-sm font-medium">Built-in bar</span>
                  <span className="font-mono text-sm">Commercial ice machine, dishwasher, two stations, and loads of refrigeration</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <h2 className="font-header mb-8 text-center">Furniture Configurations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="/venuelayouts/HausDanceFloorOneTemplate.png" 
                  alt="Dance Floor Layout"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-header mb-2">Dance floor</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Seats: 70-80</div>
                <div>Tables: 8</div>
                <div>Lounge Vignettes: 4</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="/venuelayouts/HausCommunityLayout.png" 
                  alt="Community Layout"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-header mb-2">Community</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Seats: 48</div>
                <div>Tables: 8</div>
                <div>Lounge Vignettes: 4</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="/venuelayouts/HausCaliforniaLayout.png" 
                  alt="California Layout"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-header mb-2">California</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Seats: 52-68</div>
                <div>Tables: 8</div>
                <div>Lounge Vignettes: 4</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="/venuelayouts/HausCommunalLayout.png" 
                  alt="Communal Layout"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-header mb-2">Communal</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Seats: 28-36</div>
                <div>Tables: 8</div>
                <div>Lounge Vignettes: 4</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-4">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Flexible Configurations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="font-mono text-sm">
                    Tell us the vibe and we'll share drag-and-drop digital floor plans or pre-built templates for ceremonies, dinners, meetings and standing receptions. Chairs and lounges can be rearranged or removed, and cocktail rounds roll in for a more social flow.
                  </p>
                  <div>
                    <h4 className="font-mono text-sm font-medium mb-2">Non-standard configurations</h4>
                    <p className="font-mono text-sm mb-2">
                      For events where a more open floor plan is needed, we can remove most chairs and provide six high-top cocktail-style tables which are stored on-site.
                    </p>
                    <p className="font-mono text-sm text-muted-foreground italic">
                      Non-standard table configuration options incur an additional fee. The large dining tables must remain on-site at all times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Furnishings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm">
                  <div>Seating for 80 at the venue's dining tables (tables stay in place).</div>
                  <div>6 lounge vignettes - sofas, armchairs, coffee tables & lamps (extra seating for 15-20).</div>
                  <div>70 folding chairs stored onsite for ceremonies or meetings.</div>
                  <div>6 high-top cocktail tables plus a greeter/check-in table and 5-ft welcome easel.</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tech & AV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm">
                  <div>Gig-speed Wi-Fi.</div>
                  <div>House sound system with Bluetooth input & two wireless microphones.</div>
                  <div>Four 65″ Smart TVs — two art-frame wall mounts and two on mobile stands, all AirPlay/Chromecast enabled.</div>
                  <div>Spotify / Apple Music control tablet on request.</div>
                  <div>Projector and screen available on request.</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Food & Beverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-sm font-medium mb-2">Bar Service</h4>
                    <p className="font-mono text-sm mb-2">
                      We offer three curated bar packages. For more info see our <a href="/bar-packages" className="text-blue-600 underline cursor-pointer">Bar Service</a> page.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-medium mb-2">Food Service</h4>
                    <p className="font-mono text-sm mb-2">
                      We do not have any food service available at this location but do have several preferred vendors.
                    </p>
                    <p className="font-mono text-sm mb-2">
                      View them on the <a href="/preferred-vendors" className="text-blue-600 underline cursor-pointer">vendors page</a>.
                    </p>
                    <p className="font-mono text-sm text-muted-foreground italic">
                      Your caterer can finish prep food & non-alcoholic or hot beverages in our kitchen. We require the caterer toschedule a tour of the space if they have not catered at Somerhaus before.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-4 md:py-8">
        <div className={STANDARD_CONTAINER_CLASSES}>
          <div className="text-center">
            <p className="text-lg font-mono">
              Still have questions? Try our extensive <a href="/faq" className="text-blue-600 underline cursor-pointer">FAQ's</a> or <a href="/contact" className="text-blue-600 underline cursor-pointer">get in touch</a> and we'll be happy to help!
            </p>
          </div>
        </div>
      </section>
      
      <CTA badgeText="Venue Tour" />
    </PageLayout>
  );
};

export default VenueLayout; 