
import React from "react";
import { motion } from "framer-motion";

export const ImageGallerySection = () => {
  const images = [
    "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png",
    "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png", 
    "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png",
    "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png"
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold md:text-5xl text-orange-600 font-header mb-4">
            Our Venue Gallery
          </h2>
          <p className="text-lg text-neutral-500 font-body max-w-2xl mx-auto">
            Explore the beautiful spaces and versatile layouts that make Somerhaus perfect for any occasion.
          </p>
        </div>
        
        <div className="relative flex flex-col items-center gap-10 h-full overflow-hidden py-16">
          <div className="flex flex-row -ml-20">
            {images.map((image, idx) => (
              <motion.div
                variants={imageVariants}
                key={"images-first" + idx}
                style={{
                  rotate: Math.random() * 20 - 10
                }}
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
            ))}
          </div>
          
          <div className="flex flex-row">
            {images.map((image, idx) => (
              <motion.div
                key={"images-second" + idx}
                style={{
                  rotate: Math.random() * 20 - 10
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
            ))}
          </div>

          <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
          <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
