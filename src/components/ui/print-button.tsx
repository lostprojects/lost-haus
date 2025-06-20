'use client';

import React, { useEffect } from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PrintButtonProps {
  className?: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({ className = '' }) => {
  useEffect(() => {
    // Add print styles to hide header and footer
    const printStyles = document.createElement('style');
    printStyles.innerHTML = `
      @media print {
        header {
          display: none !important;
        }
        footer {
          display: none !important;
        }
        nav {
          display: none !important;
        }
        .print\\:hidden {
          display: none !important;
        }
        body {
          margin: 0 !important;
          padding: 20px !important;
        }
        main {
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    `;
    
    if (!document.getElementById('print-styles')) {
      printStyles.id = 'print-styles';
      document.head.appendChild(printStyles);
    }

    return () => {
      // Cleanup is handled by checking if styles already exist
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handlePrint} 
      className={`print:hidden hover:text-[#D65B2F] hover:bg-[#D65B2F]/10 ${className}`}
    >
      <Printer className="w-4 h-4" />
      Print
    </Button>
  );
};

export default PrintButton; 