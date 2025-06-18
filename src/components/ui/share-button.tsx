import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonProps {
  title: string;
  text: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text, className = '' }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing or error occurred
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleShare} 
      className={`print:hidden hover:text-[#D65B2F] hover:bg-[#D65B2F]/10 ${className}`}
    >
      <Share2 className="w-4 h-4" />
    </Button>
  );
};

export default ShareButton; 