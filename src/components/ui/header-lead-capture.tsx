import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const HeaderLeadCapture = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <OptimizedImage 
              src="/haus-logo.webp" 
              alt="Somerhaus Logo" 
              className="h-12 w-auto" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLeadCapture; 