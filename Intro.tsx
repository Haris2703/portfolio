"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  onEnter: () => void;
}

const Intro = ({ onEnter }: IntroProps) => {
  const [phase, setPhase] = useState("landing"); // 'landing' or 'loading'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === "loading") {
      const duration = 2500;
      const intervalTime = 30;
      const increment = 100 / (duration / intervalTime);

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(onEnter, 500);
            return 100;
          }
          return prev + increment;
        });
      }, intervalTime);
      return () => clearInterval(timer);
    }
  }, [phase, onEnter]);

  return (
    <motion.div
      key="intro-container"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 1. Ambient Background (Dots) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            initial={{ x: `${Math.random() * 100}%`, y: "110%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 0.5, 0] }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {phase === "landing" ? (
          <motion.div
            key="landing-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }} // Shrinks slightly when switching
            transition={{ duration: 0.8 }}
            className="text-center px-6 z-10"
          >
            <p className="text-yellow-400 font-mono tracking-[0.6em] text-sm md:text-lg mb-8 uppercase italic">
              Haris Tahir // 2026
            </p>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-6">
              Building <br />
              The <span className="text-red-500">Future</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl font-medium tracking-[0.2em] uppercase mb-16">
              With Intelligence.
            </p>

            {/* Snappy Rounded Button */}
            <motion.button
              whileHover={{
                backgroundColor: "#ef4444",
                borderColor: "#ef4444",
                color: "#fff",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1, type: "tween" }} // Instant On/Off
              onClick={() => setPhase("loading")}
              className="px-16 py-5 border-2 border-white bg-transparent text-white font-bold tracking-[0.3em] uppercase text-xs rounded-full"
            >
              Explore Portfolio
            </motion.button>
          </motion.div>
        ) : (
          /* 2. Numerical Preloader (Appears exactly where button/content was) */
          <motion.div
            key="numerical-loading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center z-10"
          >
            {/* Big Numerical Progress */}
            <motion.div
              className="text-white font-mono text-8xl md:text-[12rem] font-black tracking-tighter leading-none"
            >
              {Math.round(progress)}
            </motion.div>

            <p className="text-red-500 font-mono tracking-[0.5em] uppercase text-sm mt-4">
              Initializing Experience
            </p>

            {/* Minimal Progress Line */}
            <div className="w-64 h-[1px] bg-white/10 mt-12 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-red-500 shadow-[0_0_15px_#ef4444]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Intro;