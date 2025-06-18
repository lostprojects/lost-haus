import React from 'react';
import Header from '@/components/ui/header';
import { Footer } from '@/components/ui/footer-section';

interface PageLayoutProps {
  children: React.ReactNode;
  footerLogoType?: 'press' | 'clients' | 'none';
  noFooterBorder?: boolean;
  mainClassName?: string;
  hasHero?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  footerLogoType = 'none',
  noFooterBorder = false,
  mainClassName = '',
  hasHero = true,
}) => (
  <div className="flex flex-col min-h-screen bg-background">
    <Header hasHero={hasHero} />
    <main className={`flex-grow ${mainClassName}`}>{children}</main>
    <Footer logoType={footerLogoType} noBorder={noFooterBorder} />
  </div>
);

export default PageLayout;
