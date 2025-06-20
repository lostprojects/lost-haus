'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Breadcrumb from './breadcrumb';
import { generateBreadcrumbs } from '@/lib/breadcrumbUtils';

interface BreadcrumbContainerProps {
  /** Whether this page has a hero section that pushes breadcrumbs down */
  afterHero?: boolean;
  /** Custom className override */
  className?: string;
}

export const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = ({ 
  afterHero = false,
  className
}) => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null;
  }

  // Separate positioning from content padding for consistent appearance
  const topSpacing = afterHero ? "" : "pt-20 md:pt-24"; // Header offset only when needed
  const contentPadding = "py-4"; // Identical content padding everywhere
  
  return (
    <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${topSpacing} ${contentPadding}`}>
      <Breadcrumb items={breadcrumbs} />
    </div>
  );
};

export default BreadcrumbContainer; 