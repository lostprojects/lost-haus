import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.href && index < items.length - 1 ? (
            <Link 
              href={item.href} 
              className="hover:text-foreground transition-colors flex items-center"
            >
              {index === 0 && item.label === 'Home' ? (
                <>
                  <Home className="h-4 w-4 mr-1" />
                  <span className="sr-only">{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </Link>
          ) : (
            <span className={index === items.length - 1 ? "text-foreground font-medium flex items-center" : "flex items-center"}>
              {index === 0 && item.label === 'Home' ? (
                <>
                  <Home className="h-4 w-4 mr-1" />
                  <span className="sr-only">{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb; 