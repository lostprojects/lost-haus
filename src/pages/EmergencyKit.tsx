import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import UniversalHero from '@/components/shared/UniversalHero';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const EmergencyKit: React.FC = () => (
  <PageLayout footerLogoType="clients">
    <Seo
      title="Wedding Day Emergency Kit Checklist"
      description="Pack these essentials to solve any minor mishaps on your big day."
      schema={businessSchema}
    />
    <UniversalHero pageKey="emergencykit" />
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-header mb-4">
          Wedding Day Emergency Kit Checklist
        </h2>
        <p className="font-body text-muted-foreground">
          Be prepared on the big day with a kit of essentials for any minor mishaps. Assemble these items in a tote or case and keep it close at hand.
        </p>
        <ul className="list-disc list-inside space-y-2 font-mono">
          <li>Sewing kit with needles, thread, scissors and safety pins</li>
          <li>Plenty of safety pins and bobby pins</li>
          <li>Fashion tape for quick fixes</li>
          <li>Stain remover pen or wipes</li>
          <li>First aid basics and any personal medications</li>
          <li>Tissues or handkerchief</li>
          <li>Makeup for touch-ups and blotting papers</li>
          <li>Hairspray plus a comb or brush</li>
          <li>Deodorant and a small bottle of perfume</li>
          <li>Mints, dental floss and a travel toothbrush</li>
          <li>Hand sanitizer or wipes</li>
          <li>Snacks and water</li>
          <li>Straws to sip without smudging lipstick</li>
          <li>Phone chargers or portable batteries</li>
          <li>Flat shoes for dancing</li>
          <li>Umbrella for unexpected weather</li>
          <li>Static guard spray and a lighter</li>
          <li>Cash, IDs and vendor contact list</li>
          <li>Misc comforts like eye drops, tampons and super glue</li>
          <li>Emergency numbers for backup help</li>
        </ul>
        <p className="font-body text-muted-foreground">
          Designate a trusted friend or coordinator to manage the kit so any small issues can be solved quickly and stress stays low.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default EmergencyKit;
