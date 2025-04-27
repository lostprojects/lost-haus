
import React from 'react';

const AvatarGroup = () => {
  return (
    <div className="flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="/lovable-uploads/54dee81d-d7ea-49c7-8588-03e5db9ec8bd.png"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-white">
        200+ <strong className="font-medium">Successful events hosted</strong>
      </p>
    </div>
  );
};

export default AvatarGroup;
