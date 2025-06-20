import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from '@/components/ui/footer-section';
import BreadcrumbContainer from '@/components/ui/breadcrumb-container';
import UniversalHero from '@/components/UniversalHero';

// Standard container classes for consistent page width across the site
export const STANDARD_CONTAINER_CLASSES = "container mx-auto px-4 md:px-6 lg:px-8";

interface PageLayoutProps {
  children: React.ReactNode;
  heroKey?: string;
  blogHero?: React.ReactNode;
  footerLogoType?: 'press' | 'clients' | 'none';
  mainClassName?: string;
  showBreadcrumbs?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  heroKey,
  blogHero,
  footerLogoType = 'none',
  mainClassName = '',
  showBreadcrumbs = true,
}) => {
  const hasHero = !!heroKey || !!blogHero;
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header hasHero={hasHero} />
      {/* Render hero if heroKey is provided */}
      {heroKey && <UniversalHero pageKey={heroKey} />}
      {/* Render blog hero if provided */}
      {blogHero}
      {/* Always show breadcrumbs - positioned based on hero presence */}
      {showBreadcrumbs && (
        <BreadcrumbContainer afterHero={hasHero} />
      )}
      <main className={`flex-grow ${mainClassName}`}>{children}</main>
      <Footer logoType={footerLogoType} />
    </div>
  );
};

export default PageLayout;
