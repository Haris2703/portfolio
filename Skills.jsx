"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Generative AI & LLMs", level: "95%", icon: "🤖" },
  { name: "Python / Data Science", level: "92%", icon: "🐍" },
  { name: "RAG / LangChain", level: "90%", icon: "🏗️" },
  { name: "Firebase Backend", level: "85%", icon: "🔥" },
  { name: "UI/UX (Figma)", level: "80%", icon: "🎨" },
  { name: "Flutter Development", level: "75%", icon: "📱" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-accent-red"></div>
          <h2 className="text-lg font-semibold text-accent-red tracking-widest uppercase">My Stack</h2>
        </div>
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-16">Skills <span className="text-accent-yellow italic font-serif">& Tools.</span></h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-accent-yellow/30 transition-all group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-accent-yellow font-mono text-sm">{skill.level}</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-accent-yellow transition-colors">{skill.name}</h4>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-accent-red"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;