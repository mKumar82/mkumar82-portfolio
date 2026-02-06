import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import personalData from "../data/personal";
import socials from "../data/socials";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            Hello, I’m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {personalData.name}
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl text-gray-300 font-semibold"
          >
            {personalData.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-400 max-w-lg leading-relaxed"
          >
            {personalData.description}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <FaDownload /> Resume
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex gap-6 text-2xl pt-4"
          >
            <a
              href={socials.github}
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={personalData.profileImage}
            alt="profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
