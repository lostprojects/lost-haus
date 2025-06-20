'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

interface WeddingPlanningProps {
  badgeText?: string;
}

const WeddingPlanning: React.FC<WeddingPlanningProps> = ({ 
  badgeText = "Planning Process"
}) => {
  const steps = [
    {
      image: "/placeholder.svg",
      title: "1. Vision",
      description: "Start by sharing your vision with us. We'll tour our enchanting venue and discuss your dreams, helping you imagine the perfect celebration in our unique space."
    },
    {
      image: "/placeholder.svg",
      title: "2. Plan",
      description: "Work with our experienced team to bring your vision to life. From layout and vendors to timeline and details, we'll guide you through every step of the planning process."
    },
    {
      image: "/placeholder.svg",
      title: "3. Celebrate",
      description: "Arrive and celebrate your special day in our magical space. We'll handle all the logistics behind the scenes so you can focus on making unforgettable memories."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 font-body">{badgeText}</Badge>
          <h2 className="font-header font-bold tracking-tight mb-6 text-brand-orange">Your Event Starts Here</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            From your first vision to your final celebration, we make the journey seamless and magical.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center group ${index === 0 ? 'animate-fade-in-up-stagger-1' : index === 1 ? 'animate-fade-in-up-stagger-2' : 'animate-fade-in-up-stagger-3'}`}
              >
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 min-h-64 md:min-h-72 flex items-center justify-center">
                  {/* Fallback content */}
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">{index === 0 ? '👁️' : index === 1 ? '📋' : '🎉'}</div>
                    <span className="text-lg font-medium text-gray-600">{step.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-header font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up-delay-2">
          <Button size="lg" className="gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-body px-8 py-3" asChild>
            <a href="/event-inquiry">
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlanning;
