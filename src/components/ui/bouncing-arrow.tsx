import React from 'react';
import { cn } from '@/lib/utils';

interface BouncingArrowProps {
  /**
   * Size of the arrow (width and height)
   * @default 24
   */
  size?: number;
  
  /**
   * Color of the arrow stroke
   * @default "white"
   */
  color?: string;
  
  /**
   * Animation duration in seconds
   * @default 3.5
   */
  duration?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Stroke width of the arrow
   * @default 2
   */
  strokeWidth?: number;
}

const BouncingArrow: React.FC<BouncingArrowProps> = ({
  size = 24,
  color = "white",
  duration = 3.5,
  className,
  strokeWidth = 2
}) => {
  return (
    <div 
      className={cn("animate-bounce", className)}
      style={{ 
        animationDuration: `${duration}s`,
        animationIterationCount: 'infinite'
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 4L12 20M12 20L18 14M12 20L6 14" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

export default BouncingArrow; 