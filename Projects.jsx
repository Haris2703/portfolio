"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "🛡️ GuardRail",
    shortDesc: "Cybersecurity tool for fake job detection.",
    details: "A specialized tool designed to protect job seekers from online recruitment scams. It scans descriptions for 'Red Flags' like unrealistic salary-to-work ratios.",
    tech: ["Python", "ML", "Streamlit"],
    className: "md:col-span-2",
  },
  {
    title: "🏛️ UET Policy",
    shortDesc: "AI-powered policy advisor.",
    details: "Production-grade RAG system using Gemini 3 Flash and LangChain to provide instant guidance on complex university academic policies.",
    tech: ["LangChain", "Gemini AI", "FAISS"],
    className: "md:col-span-1",
  },
  {
    title: "⚛️ Nexus AI",
    shortDesc: "Smart Priority Engine.",
    details: "Intelligent task ecosystem that automates workflow prioritization using LLMs to assign urgency levels based on task context.",
    tech: ["Python", "Gemini API", "SQLite3"],
    className: "md:col-span-1",
  },
  {
    title: "🎬 CineMatch",
    shortDesc: "AI Movie Suggestor.",
    details: "Built a personalized content recommendation engine that provides movie suggestions based on user sentiment and mood analysis.",
    tech: ["Python", "NLP", "Streamlit"],
    className: "md:col-span-2",
  },
  {
    title: "📱 Mobile Portfolio",
    shortDesc: "Flutter production apps.",
    details: "Built multiple production-ready mobile applications featuring authentication systems, real-time databases, and custom animations.",
    tech: ["Flutter", "Firebase", "Dart"],
    className: "md:col-span-3",
  },
];

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative h-[400px] cursor-pointer perspective-1000 ${project.className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden rounded-3xl bg-[#0f0f0f] border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 via-transparent to-transparent opacity-50" />
          <div className="z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-light-gray border border-white/10 px-2 py-1 rounded-full bg-white/5">{t}</span>
                ))}
              </div>
              {/* Arrow Icon - Indicating clickability */}
              <div className="text-accent-yellow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
            <p className="text-light-gray text-lg">{project.shortDesc}</p>
          </div>
          <p className="text-accent-red text-xs font-mono uppercase z-10">Click to flip for details</p>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 backface-hidden rounded-3xl bg-[#1a1a1a] border border-accent-yellow/30 p-8 flex flex-col justify-center items-center text-center rotate-y-180 shadow-[0_0_30px_rgba(255,215,0,0.1)]"
        >
          <h3 className="text-2xl font-bold text-accent-yellow mb-4 underline decoration-accent-red">Project Overview</h3>
          <p className="text-white text-base leading-relaxed mb-6">
            {project.details}
          </p>
          <button className="text-xs font-mono text-accent-red border border-accent-red/30 px-4 py-2 rounded-full">
            Click to go back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 text-left">
            <div className="w-12 h-[2px] bg-accent-red"></div>
            <h2 className="text-lg font-semibold text-accent-red tracking-widest uppercase">Work & Projects</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight text-left">
            Selected <span className="text-accent-yellow italic font-serif">Cases.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;