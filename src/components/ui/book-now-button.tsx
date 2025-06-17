import * as React from 'react';
import { TiltCard } from '@/components/ui/tilt-card';
import { cn } from '@/lib/utils';

interface BookNowButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export function BookNowButton({ href = '/event-inquiry', className, ...props }: BookNowButtonProps) {
  return (
    <TiltCard
      href={href}
      className={cn(
        'group max-h-fit rounded-full bg-black p-2 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:bg-[#D9FF8A]',
        className
      )}
      {...props}
    >
      <span className="text-xl text-white group-hover:text-black font-body">Book now</span>
    </TiltCard>
  );
}
