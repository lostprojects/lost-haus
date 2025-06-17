import React from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react'; // Remove type import
// import { type EmblaOptionsType } from 'embla-carousel'; // Previous attempt
import Autoplay from 'embla-carousel-autoplay';
import { type AutoplayOptionsType } from 'embla-carousel-autoplay'; // Keep this one
import { cn } from '@/lib/utils';

interface BackgroundSource {
  src: string;
  alt: string;
}

// Define a type for anchor props we want to allow passing through HeroButtonProps
// Removed 'type' to avoid conflict with ButtonHTMLAttributes['type']
type AnchorProps = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'rel' | 'download' | 'hrefLang'
>;

// Combine ButtonProps (excluding 'href') and our selected AnchorProps
interface HeroButtonProps extends Omit<ButtonProps, 'href'>, AnchorProps {
  text: string;
  icon?: React.ReactNode;
  href?: string; // Optional link for the button
}

interface HeroSectionProps {
  backgroundType: 'carousel' | 'static';
  backgroundSources: BackgroundSource[];
  overlayClassName?: string;
  title: string;
  subtitle?: string;
  buttons?: HeroButtonProps[];
  sectionClassName?: string;
  contentContainerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  carouselOptions?: Parameters<typeof useEmblaCarousel>[0]; // Infer type from hook parameters
  autoplayOptions?: Partial<AutoplayOptionsType>; // Use specific type
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundType,
  backgroundSources,
  overlayClassName = "absolute inset-0 z-10 bg-black/30",
  title,
  subtitle,
  buttons = [],
  sectionClassName = "relative w-full h-[90vh] min-h-[600px] overflow-hidden",
  contentContainerClassName = "absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4",
  // Standardized hero heading size to match homepage
  titleClassName = "text-5xl md:text-6xl font-header tracking-tight mb-4 text-white",
  subtitleClassName = "text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-body",
  carouselOptions = { loop: true },
  autoplayOptions = { delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false }
}) => {
  const plugins = autoplayOptions ? [Autoplay(autoplayOptions)] : [];
  const [emblaRef] = useEmblaCarousel(carouselOptions, plugins);

  const renderBackground = () => {
    if (backgroundType === 'carousel' && backgroundSources.length > 0) {
      return (
        <Carousel className="w-full h-full" ref={emblaRef}>
          <CarouselContent className="h-full">
            {backgroundSources.map((image, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  aria-label={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    } else if (backgroundType === 'static' && backgroundSources.length > 0) {
      const image = backgroundSources[0];
      return (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image.src})` }}
          aria-label={image.alt}
        />
      );
    }
    return null;
  };

  const renderButtons = () => {
    return buttons.map((button, index) => {
      // Separate anchor-specific props from button props
      // Note: 'type' is now only inherited from ButtonProps
      const { text, icon, href, className, variant, size, target, rel, download, hrefLang, ...buttonRest } = button;
      const anchorProps = { href, target, rel, download, hrefLang }; // Group anchor props (without 'type')

      const buttonClasses = cn(
        buttonVariants({ variant, size, className: cn("font-body gap-2", className) })
      );

      if (href) {
        // Render as an anchor tag
        return (
          <a
            key={index}
            className={buttonClasses}
            {...anchorProps} // Spread only anchor-compatible props
          >
            {text} {icon}
          </a>
        );
      } else {
        // Render as a Button component
        return (
          <Button
            key={index}
            variant={variant}
            size={size}
            className={cn("font-body gap-2", className)}
            {...buttonRest} // Spread remaining ButtonHTMLAttributes (including 'type' if provided)
          >
            {text} {icon}
          </Button>
        );
      }
    });
  };


  return (
    <section className={cn("hero", sectionClassName)}>
      {overlayClassName && <div className={overlayClassName} />}
      {renderBackground()}
      <div className={contentContainerClassName}>
        {/* <div className="animate-fade-in"> */}
        <div>
          <h1 className={titleClassName}>{title}</h1>
          {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {renderButtons()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;