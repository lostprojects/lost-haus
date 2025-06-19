import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const Resources: React.FC = () => (
  <PageLayout footerLogoType="none" hasHero={false}>
    <Seo
      title="Event Planning Resources | Somerhaus Cincinnati"
      description="Helpful checklists and guides for planning your event at Somerhaus."
      schema={businessSchema}
    />
    <section className="pt-8 pb-12 md:pt-12 md:pb-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <div>
          <h1 className="font-header mb-4">Event Planning Resources</h1>
          <p className="font-body text-muted-foreground">
            Explore our growing library of checklists and planning tools.
          </p>
        </div>
        <ul className="space-y-4 font-mono">
          <li>
            <Link
              to="/resources/emergency-kit"
              className="flex items-center text-primary hover:underline"
            >
              Wedding Day Emergency Kit Checklist
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              to="/resources/budget-checklist"
              className="flex items-center text-primary hover:underline"
            >
              Budget Category Checklist
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </PageLayout>
);

export default Resources;
