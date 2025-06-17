import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FeaturedQuote = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Quote className="w-16 h-16 text-brand/20 mx-auto mb-8" />
            
            <motion.blockquote 
              className="text-3xl md:text-4xl lg:text-5xl font-header text-brand leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              "We wanted a venue that felt discovered, not decorated."
            </motion.blockquote>
            
            <motion.div
              className="text-xl md:text-2xl font-body text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <cite className="not-italic">-Big Tony & Little Tony</cite>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FeaturedQuote }; 