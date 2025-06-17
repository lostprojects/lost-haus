"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown } from "lucide-react";
import { BookNowButton } from "@/components/ui/book-now-button";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image?: string;
  icon?: LucideIcon;
}
interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  subtitle?: string | React.ReactNode;
  autoPlayInterval?: number;
  imageHeight?: string;
}
export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  subtitle,
  autoPlayInterval = 6750,
  imageHeight = "h-[400px]"
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature(prev => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return <div className={cn("py-0 relative", className)}>
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

      {/* Arrow between body text and section 1 */}
      <div className="flex justify-center mb-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="w-6 h-6 text-brand/60" />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="space-y-12">
          {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center" 
                initial={{
                  opacity: 0.3,
                  y: 20
                }} 
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  y: index === currentFeature ? 0 : 20
                }} 
                transition={{
                  duration: 0.75
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 mb-4",
                      index === currentFeature 
                        ? "bg-primary border-primary text-primary-foreground scale-110" 
                        : "bg-muted border-muted-foreground"
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className="text-lg font-bold">✓</span>
                    ) : (
                      <span className="text-lg font-semibold">{index + 1}</span>
                    )}
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-header mb-3">
                    {feature.title || feature.step}
                  </h3>

                  <p className="text-sm text-black font-body md:text-base max-w-lg">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Arrow between section 3 and CTA */}
      <div className="flex justify-center mt-12 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="w-6 h-6 text-brand/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Button - exact same as hero */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -2.88, 0], scale: [1, 1.0144, 1] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1.0 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          viewport={{ once: true }}
        >
          <BookNowButton className="shadow-[0_10px_25px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </div>
    </div>;
}