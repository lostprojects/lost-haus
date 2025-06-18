import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { BookNowButton } from "@/components/ui/book-now-button";
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
}

export function ThreeStepProcess({
  steps,
  className,
  title = "How to get Started",
  subtitle,
}: ThreeStepProcessProps) {
  return (
    <div className={cn("py-0 relative", className)}>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold md:text-5xl text-brand font-header mb-6">
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
        <BouncingArrow color="#5CA87E" />
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
                {/* Step circle with checkmark or number */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-brand bg-brand text-white mb-6 shadow-lg">
                  <Check className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-header mb-3 text-brand">
                  {step.title || step.step}
                </h3>

                <p className="text-sm text-black font-body md:text-base max-w-lg leading-relaxed">
                  {step.content}
                </p>
              </div>

              {/* Connecting line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-gradient-to-b from-brand/30 to-brand/60"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final decorative arrow */}
      <div className="flex justify-center mt-12 mb-8">
        <BouncingArrow color="#5CA87E" />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <div className="animate-fade-in-up-delay-2 hover:scale-105 transition-transform duration-300">
          <BookNowButton className="shadow-[0_10px_25px_rgba(0,0,0,0.4)]" />
        </div>
      </div>
    </div>
  );
} 