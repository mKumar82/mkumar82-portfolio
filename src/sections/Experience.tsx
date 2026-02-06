import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/experience";



export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 py-20 bg-linear-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & Internship
          </h2>
          <p className="text-gray-400 mt-3">My professional journey so far</p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              {/* ICON */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-white text-black rounded-full">
                <FaBriefcase size={14} />
              </span>

              {/* CARD */}
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold">{exp.role}</h3>

                <p className="text-gray-400 text-sm mt-1">
                  {exp.company} • {exp.duration}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
