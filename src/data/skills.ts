import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Mobile",
    skills: [{ name: "React Native", icon: FaReact }],
  },
  {
    title: "Tools",
    skills: [{ name: "Git & GitHub", icon: FaGitAlt }],
  },
];
