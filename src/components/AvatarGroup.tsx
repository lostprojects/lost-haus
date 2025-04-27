import React from 'react';

const AvatarGroup = () => {
  return (
    <div className="flex items-center rounded-full bg-black/40 backdrop-blur-sm p-1 shadow shadow-black/5 relative bottom-[20px]">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?fit=crop&w=80&h=80"
          width={20}
          height={20}
          alt="Event Organizer 1"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?fit=crop&w=80&h=80"
          width={20}
          height={20}
          alt="Event Organizer 2"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=80&h=80"
          width={20}
          height={20}
          alt="Event Organizer 3"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?fit=crop&w=80&h=80"
          width={20}
          height={20}
          alt="Event Organizer 4"
        />
      </div>
      <p className="px-2 text-xs text-white">
        200+ <strong className="font-medium">Successful events hosted</strong>
      </p>
    </div>
  );
};

export default AvatarGroup;
