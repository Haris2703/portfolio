"use client";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "Expected 2027",
    degree: "Bachelor of Science in Computer Science",
    institute: "University of Engineering and Technology (UET), Taxila",
    description: "Focusing on AI/ML, Large Language Models (LLMs), and Software Engineering. Actively involved in technical societies and research.",
  },
  {
    year: "2021 - 2023",
    degree: "Intermediate (Pre-Engineering)",
    institute: "HITEC College",
    description: "Completed with a strong focus on Mathematics and Physics, providing a solid foundation for computer science.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-accent-red"></div>
          <h2 className="text-lg font-semibold text-accent-red tracking-widest uppercase">Academic Background</h2>
        </div>
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-16">My <span className="text-accent-yellow italic font-serif">Journey.</span></h3>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-white/10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-accent-red rounded-full -left-[6.5px] top-2 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#ff0000]" />

              <span className="text-accent-yellow font-mono text-sm mb-2 block">{edu.year}</span>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{edu.degree}</h4>
              <p className="text-accent-red font-medium mb-4">{edu.institute}</p>
              <p className="text-light-gray max-w-2xl leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
