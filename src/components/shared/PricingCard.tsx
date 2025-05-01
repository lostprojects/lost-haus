import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from '@/lib/utils';

export interface PricingCardProps {
  name: string;
  price: string;
  priceSuffix?: string;
  popular?: boolean;
  popularText?: string;
  features: string[];
  description?: string;
  preFeaturesContent?: React.ReactNode; // For content like 'Seasons'
  buttonText: string;
  buttonIcon?: React.ReactNode;
  buttonProps?: Omit<ButtonProps, 'children'>; // Pass other button props like variant, onClick, etc.
  cardClassName?: string;
  badgeClassName?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  priceSuffix,
  popular = false,
  popularText = "Most Popular",
  features,
  description,
  preFeaturesContent,
  buttonText,
  buttonIcon,
  buttonProps = {},
  cardClassName,
  badgeClassName,
}) => {
  return (
    <div className={cn(
      'relative rounded-xl overflow-hidden border bg-white shadow-sm',
      popular ? 'border-primary shadow-lg' : 'border-gray-200',
      cardClassName
    )}>
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className={cn("m-4 py-1.5 px-3", badgeClassName)}>{popularText}</Badge>
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {priceSuffix && <span className="text-muted-foreground mb-1">{priceSuffix}</span>}
        </div>
        {description && <p className="text-muted-foreground mb-6">{description}</p>}

        {preFeaturesContent && <div className="mb-6">{preFeaturesContent}</div>}

        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full gap-2" {...buttonProps}>
          {buttonText} {buttonIcon}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;