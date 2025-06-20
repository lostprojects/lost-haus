"use client";

import Image, { ImageProps } from 'next/image';
import React from 'react';

export interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'width' | 'height'> {
  /**
   * Path to an image in the public folder or a remote URL allowed by next.config.
   */
  src: string;
  /**
   * Width of the image. If omitted, <Image> will be rendered with `fill` layout – make sure parent is `relative` and has fixed dimensions.
   */
  width?: number | string;
  /**
   * Height of the image. Required if `width` is provided.
   */
  height?: number | string;
  /**
   * CSS class names.
   */
  className?: string;
}

/**
 * OptimizedImage is a drop-in replacement for the native <OptimizedImage /> tag.
 * It wraps Next.js <Image>, applying lazy-loading, responsive srcset generation,
 * and WebP/AVIF fallbacks automatically.
 */
const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, width, height, className, ...rest }, ref) => {
    const fill = width == null || height == null;

    return (
      <Image
        ref={ref}
        src={src}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        fill={fill}
        className={className}
        sizes={fill ? '100vw' : undefined}
        {...rest}
      />
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 