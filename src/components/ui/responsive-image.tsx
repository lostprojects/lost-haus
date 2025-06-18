import React from 'react';

interface ResponsiveImageProps {
  /**
   * Base image path (without responsive suffixes)
   * e.g., "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus"
   */
  baseSrc: string;
  /**
   * Image extension (should be webp for all optimized images)
   */
  extension?: string;
  /**
   * Alt text for accessibility
   */
  alt: string;
  /**
   * CSS classes to apply to the image
   */
  className?: string;
  /**
   * Custom breakpoints - defaults to mobile: 480px, tablet: 768px, desktop: 1200px
   */
  breakpoints?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  /**
   * Loading strategy
   */
  loading?: 'lazy' | 'eager';
  /**
   * Whether to use as background image (for hero sections)
   */
  asBackground?: boolean;
  /**
   * Background styles when used as background image
   */
  backgroundStyles?: React.CSSProperties;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  baseSrc,
  extension = 'webp',
  alt,
  className = '',
  breakpoints = { mobile: 480, tablet: 768, desktop: 1200 },
  loading = 'lazy',
  asBackground = false,
  backgroundStyles = {},
  ...props
}) => {
  const mobileSrc = `${baseSrc}-mobile.${extension}`;
  const tabletSrc = `${baseSrc}-tablet.${extension}`;
  const desktopSrc = `${baseSrc}-desktop.${extension}`;
  const fallbackSrc = `${baseSrc}.${extension}`;

  // Always call hooks at top level
  const [currentSrc, setCurrentSrc] = React.useState(mobileSrc);

  React.useEffect(() => {
    if (!asBackground) return;

    const updateImageSrc = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.desktop) {
        setCurrentSrc(desktopSrc);
      } else if (width >= breakpoints.tablet) {
        setCurrentSrc(tabletSrc);
      } else {
        setCurrentSrc(mobileSrc);
      }
    };

    // Set initial image
    updateImageSrc();

    // Listen for resize events
    window.addEventListener('resize', updateImageSrc);
    return () => window.removeEventListener('resize', updateImageSrc);
  }, [asBackground, mobileSrc, tabletSrc, desktopSrc, breakpoints]);

  if (asBackground) {
    const backgroundImageStyles: React.CSSProperties = {
      backgroundImage: `url(${currentSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      ...backgroundStyles,
    };

    return (
      <div 
        className={className}
        style={backgroundImageStyles}
        aria-label={alt}
        {...props}
      />
    );
  }

  // For regular img elements
  const srcSet = [
    `${mobileSrc} ${breakpoints.mobile}w`,
    `${tabletSrc} ${breakpoints.tablet}w`, 
    `${desktopSrc} ${breakpoints.desktop}w`
  ].join(', ');

  const sizes = [
    `(max-width: ${breakpoints.tablet - 1}px) ${breakpoints.mobile}px`,
    `(max-width: ${breakpoints.desktop - 1}px) ${breakpoints.tablet}px`,
    `${breakpoints.desktop}px`
  ].join(', ');

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      {...props}
    />
  );
};

export default ResponsiveImage; 