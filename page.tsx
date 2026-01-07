"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Hydration errors se bachne ke liye mount check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="bg-black min-h-screen selection:bg-accent-red selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <Intro key="intro-screen" onEnter={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="main-portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Navbar />
            <div className="relative z-10">
              <Hero />
              <Education />
              <Projects />
              <Skills />
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}