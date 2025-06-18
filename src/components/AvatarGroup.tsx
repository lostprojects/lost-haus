import React from 'react';

const AvatarGroup = () => {
  return (
    <div className="flex items-center rounded-full bg-black/10 backdrop-blur-sm p-2 shadow shadow-black/5 relative bottom-[50px]">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/sara-hammer.webp"
          width={20}
          height={20}
          alt="Sara Hammer Review"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/emma-odell.webp"
          width={20}
          height={20}
          alt="Emma Odell Review"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/jocie-steinke.webp"
          width={20}
          height={20}
          alt="Jocie Steinke Review"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="/review-thumbnails/chad-nielson.webp"
          width={20}
          height={20}
          alt="Chad Nielson Review"
        />
      </div>
      <p className="px-2 text-xs text-white">
        200+ <strong className="font-medium">Successful events hosted</strong>
      </p>
    </div>
  );
};

export default AvatarGroup;
