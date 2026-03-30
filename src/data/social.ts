export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "bluesky" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/mattraykowski",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matt-raykowski-a6a7832/",
    icon: "linkedin",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/chew827.bsky.social",
    icon: "bluesky",
  },
  {
    name: "Email",
    url: "mailto:matt.raykowski@gmail.com",
    icon: "email",
  },
];
