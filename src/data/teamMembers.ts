export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Beth Smiley",
    role: "General Manager",
    image: "/team/beth-smiley.png",
    bio: "Beth brings over 15 years of hospitality and event management experience to Somerhaus. With her keen eye for detail and passion for creating memorable experiences, she ensures every event runs flawlessly."
  },
  {
    name: "Sara Hutslar",
    role: "Events Director",
    image: "/team/sara-hutslar.png",
    bio: "As our creative force, Sara transforms client visions into reality. Her background in design and event planning helps create unique, personalized experiences for every occasion at Somerhaus."
  }
];
