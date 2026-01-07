"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="text-accent-yellow font-mono tracking-widest mb-2">
          HELLO, I'M
        </p>

        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-4">
          HARIS <span className="text-light-gray">TAHIR</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-accent-red mb-6">
          Full-Stack AI Developer & ML Engineer
        </h2>

        <p className="text-light-gray text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I integrate LLMs and Data Science into business workflows, specializing in Python, Streamlit, and Flutter development.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-accent-red hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 inline-block text-center"
          >
            View Projects
          </a>

          {/* Resume Download Link */}
          <a
            href="/resume.pdf"
            download="Haris_Tahir_Resume.pdf"
            className="border border-white/20 hover:border-accent-yellow text-white px-8 py-3 rounded-full font-bold transition-all hover:bg-white/5 inline-block text-center"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;