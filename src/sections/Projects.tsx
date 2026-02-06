import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 py-20 bg-linear-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-gray-400 mt-3">Some of my recent work</p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm border border-gray-700 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-xl hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
