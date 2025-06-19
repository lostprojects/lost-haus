import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import BookNowButton from "@/components/ui/book-now-button";
import BouncingArrow from "@/components/ui/bouncing-arrow";

interface Step {
  step: string;
  title?: string;
  content: string;
}

interface ThreeStepProcessProps {
  steps: Step[];
  className?: string;
  title?: string;
  subtitle?: string | React.ReactNode;
  badgeText?: string;
}

export function ThreeStepProcess({
  steps,
  className,
  title = "How to get Started",
  subtitle,
  badgeText = "Simple Steps",
}: ThreeStepProcessProps) {
  return (
    <div className={cn("py-0 relative", className)}>
      <div className="text-center mb-16">
        <Badge className="mb-4 font-body">{badgeText}</Badge>
        <h2 className="font-bold text-brand font-header mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-black font-body max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative arrow */}
      <div className="flex justify-center mb-8 -mt-8">
        <BouncingArrow color="black" />
      </div>

      <div className="max-w-xl mx-auto">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center animate-fade-in-up ${
                index === 1 ? 'animate-fade-in-up-delay-1' : 
                index === 2 ? 'animate-fade-in-up-delay-2' : ''
              }`}
            >
              <div className="flex flex-col items-center">
                {/* Step circle with number */}
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-black bg-black text-white mb-6 shadow-lg">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                
                <h3 className="font-header mb-3 text-brand">
                  {step.title || step.step}
                </h3>

                <p className="text-sm text-black font-body md:text-base max-w-lg leading-relaxed">
                  {step.content}
                </p>
              </div>

              {/* Bouncing arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <BouncingArrow color="black" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final decorative arrow */}
      <div className="flex justify-center mt-12 mb-8">
        <BouncingArrow color="black" />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <div className="animate-fade-in-up-delay-2 hover:scale-105 transition-transform duration-300">
          <BookNowButton href="/event-inquiry" variant="black" className="shadow-[0_10px_25px_rgba(0,0,0,0.4)]" />
        </div>
      </div>
    </div>
  );
} 