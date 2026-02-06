import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Task Management System",
    description:
      "Full-stack task management system with authentication, dashboards, and CRUD features.",

    tech: ["React", "Node.js", "Express", "MongoDB"],

    githubUrl: "https://github.com/mKumar82/Task-Management-System",

    liveUrl: "https://task-management-system-sepia-five.vercel.app",

    image: "/projects/task.png",
  },
  {
    title: "School Canteen",
    description:
      "This project demonstrates managing snacks, students, and orders",

    tech: ["React", "Nextjs", "Redux", "Tailwind"],

    githubUrl: "https://github.com/mKumar82/school-canteen",

    liveUrl: "https://school-canteen-omega.vercel.app",

    image: "/projects/school-canteen.png",
  },
  {
    title: "E-Commerce Platform",

    description:
      "Full-stack e-commerce application with product listings, cart, secure authentication, order management, and payment workflow.",

    tech: [
      "React",
      "Redux",
      "SpringBoot",
      "PostgreSQL",
      "Microservices",
      "Kafka",
    ],

    githubUrl: "https://github.com/mKumar82/ecom",

    liveUrl:
      "https://drive.google.com/file/d/1EbeCnfKPMs5U0otnrmh_Ph2Qh47gRfEd/view",

    image: "/projects/ecomHLD.png",
  },
];
