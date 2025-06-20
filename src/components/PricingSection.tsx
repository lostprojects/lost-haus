'use client';

import React from 'react';
import PricingCard, { PricingCardProps } from './PricingCard'; // Import the card component and its props type
import { cn } from '@/lib/utils';

interface PricingSectionProps {
  title: string;
  description?: string;
  packages: PricingCardProps[]; // Array of data for the PricingCard component
  preTitleContent?: React.ReactNode; // Optional content before the title
  footerContent?: React.ReactNode; // Optional content below the grid
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  gridClassName?: string; // Class for the grid container
  footerClassName?: string; // Class for the footer container
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  description,
  packages,
  preTitleContent, // Destructure new prop
  footerContent,
  sectionClassName = "py-16 md:py-24 bg-gradient-to-b from-white to-gray-50",
  containerClassName = "container mx-auto px-4",
  titleClassName = "text-3xl md:text-4xl font-header tracking-tight mb-4",
  descriptionClassName = "text-lg text-muted-foreground max-w-2xl mx-auto font-body",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto", // Default grid layout
  footerClassName = "text-center mt-10 text-muted-foreground", // Default footer style
}) => {
  return (
    <section className={cn(sectionClassName)}>
      <div className={cn(containerClassName)}>
        <div className="text-center mb-12">
          {preTitleContent} {/* Render pre-title content */}
          <h2 className={cn(titleClassName)}>{title}</h2>
          {description && (
            <p className={cn(descriptionClassName)}>
              {description}
            </p>
          )}
        </div>

        <div className={cn(gridClassName)}>
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} /> // Spread package data into PricingCard
          ))}
        </div>

        {footerContent && (
          <div className={cn(footerClassName)}>
            {footerContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;