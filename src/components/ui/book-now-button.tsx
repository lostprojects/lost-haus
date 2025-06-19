import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarDays } from 'lucide-react';

interface BookNowButtonProps {
  href: string;
  mobile?: boolean;
  variant?: 'ghost' | 'black' | 'white';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const BookNowButton = ({ 
  href, 
  mobile = false, 
  variant = 'ghost',
  size = 'medium',
  className,
  children,
  onClick 
}: BookNowButtonProps) => {
  // Set default text based on size if children not provided
  const defaultText = children || (size === 'large' ? "Find Your Date" : "Book Now");
  const getVariantStyles = () => {
    switch (variant) {
      case 'black':
        return "bg-black text-white hover:bg-[#5CA87E] hover:text-black";
      case 'white':
        return "bg-white text-black hover:bg-[#5CA87E] hover:text-black";
      case 'ghost':
      default:
        return "bg-white/20 text-white hover:bg-[#5CA87E] hover:text-black";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return "px-4 py-2 text-sm";
      case 'large':
        return "px-8 py-5 text-xl min-w-[200px] font-normal";
      case 'medium':
      default:
        return "px-6 py-3 text-base";
    }
  };

  const buttonClasses = cn(
    "font-body rounded-md",
    getVariantStyles(),
    getSizeStyles(),
    !mobile && "transition-all duration-300 hover:scale-110 hover:-rotate-[1.3deg] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] active:scale-95 transform-gpu",
    className
  );

  // Check if this is the "Plan Your Event" button to show calendar icon
  const showCalendarIcon = children === "Plan Your Event" || defaultText === "Plan Your Event";

  const content = (
    <Button className={buttonClasses} onClick={onClick}>
      {showCalendarIcon && <CalendarDays className="mr-2 h-5 w-5" />}
      {defaultText}
    </Button>
  );

  if (onClick) {
    return content;
  }

  return (
    <a 
      href={href}
      className={cn(
        "inline-block",
        !mobile && "transition-all duration-300 hover:scale-110 hover:-rotate-[1.3deg] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] active:scale-95 transform-gpu"
      )}
    >
      {content}
    </a>
  );
};

export default BookNowButton;
