import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export const ImageGallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const firstRowImages = [
    "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.jpg",
    "/photo/wedding-portrait1-cincinnati-wedding-venue-somerhaus.jpg", 
    "/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png",
    "/photo/party-hero1-cincinnati-event-venue-somerhaus.jpeg",
    "/photo/space-portrait1-cincinnati-event-space-somerhaus.jpg"
  ];

  const secondRowImages = [
    "/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.jpg",
    "/photo/space-portrait2-cincinnati-event-space-somerhaus.jpg",
    "/photo/wedding-portrait2-cincinnati-wedding-venue-somerhaus.png",
    "/photo/wedding-portrait3-cincinnati-wedding-venue-somerhaus.jpg",
    "/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.jpg"
  ];

  // Subtle parallax transforms
  const firstRowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const secondRowY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
      transition: { duration: 0.3 }
    },
    whileTap: {
      scale: 1.05,
      transition: { duration: 0.1 }
    }
  };

  return <section ref={containerRef} className="bg-transparent py-[40px]">
      <div className="max-w-none mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold md:text-5xl text-brand font-header mb-4 my-[26px] py-0">
            Gallery
          </h2>
          <p className="text-lg text-black font-body max-w-2xl mx-auto">
            Explore the beautiful spaces and versatile layouts that make Somerhaus perfect for any occasion.
          </p>
        </motion.div>
        
        <div className="relative flex flex-col items-center gap-10 h-full overflow-hidden py-[60px]">
          <motion.div 
            style={{ y: firstRowY }}
            className="flex flex-row -ml-20"
          >
            {firstRowImages.map((image, idx) => {
              const randomRotation = Math.random() * 20 - 10;
              return (
                <motion.div 
                  key={"images-first" + idx} 
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  style={{
                    rotate: randomRotation
                  }} 
                  variants={imageVariants}
                  whileHover="whileHover" 
                  whileTap="whileTap" 
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <img 
                    src={image} 
                    alt="Somerhaus venue" 
                    className="rounded-lg h-32 w-32 md:h-60 md:w-60 object-cover flex-shrink-0" 
                  />
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            style={{ y: secondRowY }}
            className="flex flex-row"
          >
            {secondRowImages.map((image, idx) => {
              const randomRotation = Math.random() * 20 - 10;
              return (
                <motion.div 
                  key={"images-second" + idx} 
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  style={{
                    rotate: randomRotation
                  }} 
                  variants={imageVariants} 
                  whileHover="whileHover" 
                  whileTap="whileTap" 
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <img 
                    src={image} 
                    alt="Somerhaus venue" 
                    className="rounded-lg h-32 w-32 md:h-60 md:w-60 object-cover flex-shrink-0" 
                  />
                </motion.div>
              );
                        })}
          </motion.div>

 
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-brand hover:text-brand/80 transition-colors font-body text-base"
          >
            See More <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>;
};