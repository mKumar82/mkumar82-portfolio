import type { IconType } from "react-icons";

export interface PersonalData {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  profileImage: string;
}

export type SkillItem = {
  name: string;
  icon: IconType;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface AboutCard {
  title: string;
  tech: string;
  icon: IconType;
}

// export interface AboutStats {
//   label: string;
//   value: string;
// }

export interface AboutData {
  description: string[];
  cards: AboutCard[];
  // stats: AboutStats[];
}
