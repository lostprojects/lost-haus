import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const AvatarGroup = () => {
  return (
    <div className="relative bottom-[50px]">
      <div
        className="relative inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-2 py-2 transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
      >
      <div className="flex -space-x-1.5">
        <OptimizedImage
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/sara-hammer.webp"
          width={20}
          height={20}
          alt="Sara Hammer Review"
        />
        <OptimizedImage
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/emma-odell.webp"
          width={20}
          height={20}
          alt="Emma Odell Review"
        />
        <OptimizedImage
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/jocie-steinke.webp"
          width={20}
          height={20}
          alt="Jocie Steinke Review"
        />
        <OptimizedImage
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/chad-nielson.webp"
          width={20}
          height={20}
          alt="Chad Nielson Review"
        />
      </div>
      <p className="px-2 text-xs text-white">
        200+ <strong className="font-medium">Successful events hosted</strong>
      </p>
      </div>
    </div>
  );
};

export default AvatarGroup;
