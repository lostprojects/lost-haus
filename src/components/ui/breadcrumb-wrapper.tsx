import React from 'react';
import BreadcrumbContainer from './breadcrumb-container';

interface BreadcrumbWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const BreadcrumbWrapper: React.FC<BreadcrumbWrapperProps> = ({ 
  children, 
  className 
}) => {
  return (
    <>
      {children}
      <BreadcrumbContainer afterHero={true} className={className} />
    </>
  );
};

export default BreadcrumbWrapper; 