import * as React from 'react';
import { cn } from '@/lib/utils';

interface BookNowButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export function BookNowButton({ href = '/event-inquiry', className, ...props }: BookNowButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group max-h-fit rounded-full bg-black p-2 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:bg-[#D9FF8A] inline-block transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] active:scale-95 transform-gpu',
        className
      )}
      {...props}
    >
      <span className="text-xl text-white group-hover:text-black font-body">Book now</span>
    </a>
  );
}
