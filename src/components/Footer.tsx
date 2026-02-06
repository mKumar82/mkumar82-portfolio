import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import socials from "../data/socials";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* LEFT */}
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Manish Kumar. All rights reserved.
        </p>

        {/* SOCIALS */}
        <div className="flex items-center gap-5 text-xl">
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

        {/* BACK TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
