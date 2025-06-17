import React from 'react';

const VendorsHero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden hero">
      {/* Rotated background image */}
      <img
        src="/photo/food-hero.jpeg"
        alt="Catering display at Somerhaus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Use the homepage hero heading size */}
        <h1 className="text-5xl md:text-6xl font-header tracking-tight mb-4">Preferred Vendors</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-body text-white/90">
          From photographers to catering, we've curated a trusted list of partners to make your planning effortless.
        </p>
      </div>
    </section>
  );
};

export default VendorsHero; 