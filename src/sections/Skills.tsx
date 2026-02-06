import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
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
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <p className="text-gray-400 mt-3">
            Technologies I use to build scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 h-full flex flex-col"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>

              {/* AUTO-FIT GRID */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08 }}
                      className="bg-gray-950 border border-gray-800 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-lg"
                    >
                      <Icon className="text-4xl" />
                      <p className="text-gray-300 text-sm text-center">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
