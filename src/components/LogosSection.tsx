import React from 'react';
import { LogoTicker } from '@/components/LogoTicker';
import { pressLogos } from '@/data/pressLogos';
import { clientLogos } from '@/data/clientLogos';

interface LogosSectionProps {
  type: 'press' | 'clients' | 'none';
  className?: string;
}

const LogosSection: React.FC<LogosSectionProps> = ({ type, className = "bg-black" }) => {
  if (type === 'none') {
    return null;
  }

  return (
    <LogoTicker 
      heading={type === 'press' ? '' : 'Trusted By'} 
      logos={type === 'press' ? pressLogos : clientLogos} 
      className={className} 
    />
  );
};

export { LogosSection }; 