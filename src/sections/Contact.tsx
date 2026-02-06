import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import personalData from "../data/personal";
import socials from "../data/socials";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 bg-linear-to-b from-black via-gray-900 to-black text-white px-6"
    >
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
      </motion.div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-gray-400 mt-3 max-w-md">
              I’m open to full-time opportunities. Feel free to reach out
              anytime.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl" />
              <span className="text-gray-300">{personalData.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-xl" />
              <span className="text-gray-300">{personalData.phone}</span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-6 text-2xl pt-4">
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
          </div>
        </motion.div>

        {/* FORM */}
        <ContactForm />
      </div>
    </section>
  );
}
