import { motion } from "framer-motion";
import personalData from "../data/personal";
import aboutData from "../data/about";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 bg-linear-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={personalData.profileImage}
            alt="aboutProfileImge"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border border-gray-700 shadow-xl"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            {aboutData.description[0]}
          </p>

          <p className="text-gray-400 leading-relaxed">
            {aboutData.description[1]}
          </p>

          {/* CARDS */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {aboutData?.cards?.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  whileHover={{ scale: 1.06 }}
                  className="bg-gray-900 border border-gray-800 p-5 rounded-2xl text-center shadow-lg"
                >
                  <Icon className="text-3xl mx-auto mb-3" />
                  <h4 className="font-semibold">{card.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">{card.tech}</p>
                </motion.div>
              );
            })}
          </div>

          {/* STATS */}
          {/* <div className="flex flex-wrap gap-6 pt-6">
            <div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-gray-500 text-sm">Projects Built</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">1+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-gray-500 text-sm">Technologies</p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
