
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WeddingPlanning = () => {
  const steps = [
    {
      image: "/illustration/vision.jpeg",
      title: "1. Vision",
      description: "Start by sharing your vision with us. We'll tour our enchanting venue and discuss your dreams, helping you imagine the perfect celebration in our unique space."
    },
    {
      image: "/illustration/Somerhaus-wedding-plan.png",
      title: "2. Plan",
      description: "Work with our experienced team to bring your vision to life. From layout and vendors to timeline and details, we'll guide you through every step of the planning process."
    },
    {
      image: "/illustration/Somerhaus-wedding-celebrate.png",
      title: "3. Celebrate",
      description: "Arrive and celebrate your special day in our magical space. We'll handle all the logistics behind the scenes so you can focus on making unforgettable memories."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-header font-bold tracking-tight mb-6 text-brand-orange">Your Event Starts Here</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            From your first vision to your final celebration, we make the journey seamless and magical.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group"
              >
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 min-h-64 md:min-h-72 flex items-center justify-center">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110 absolute inset-0"
                    onError={(e) => {
                      console.log('Image failed to load:', step.image);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded successfully:', step.image)}
                  />
                  {/* Fallback content */}
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">{index === 0 ? '👁️' : index === 1 ? '📋' : '🎉'}</div>
                    <span className="text-lg font-medium text-gray-600">{step.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-header font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-body px-8 py-3" asChild>
            <a href="/event-inquiry">
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingPlanning;
