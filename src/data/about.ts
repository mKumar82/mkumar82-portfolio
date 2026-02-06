import { FaMobileAlt, FaCode, FaServer } from "react-icons/fa";
import type { AboutData } from "../types/index.js";

const aboutData: AboutData = {
  description: [
    "I’m a passionate React Native and MERN Stack Developer with experience building scalable mobile and web applications.",
    "I enjoy converting ideas into real-world products with clean UI, efficient backend systems, and smooth user experiences.",
  ],

  cards: [
    {
      icon: FaMobileAlt,
      title: "Mobile Apps",
      tech: "React Native",
    },
    {
      icon: FaCode,
      title: "Frontend",
      tech: "React • Tailwind • Vite",
    },
    {
      icon: FaServer,
      title: "Backend",
      tech: "Node • Express • Spring Boot",
    },
  ],

  // stats: [
  //   {
  //     label: "Projects Built",
  //     value: "10+",
  //   },
  //   {
  //     label: "Years Experience",
  //     value: "1+",
  //   },
  //   {
  //     label: "Technologies",
  //     value: "8+",
  //   },
  // ],
};

export default aboutData;
