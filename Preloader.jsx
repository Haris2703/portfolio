"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3 seconds baad loading screen khatam ho jayegi
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center">
        {/* Animated Dots */}
        <div className="flex space-x-3">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="h-4 w-4 rounded-full bg-yellow-400"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
            className="h-4 w-4 rounded-full bg-red-500"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
            className="h-4 w-4 rounded-full bg-yellow-400"
          ></motion.div>
        </div>
        <p className="mt-6 font-mono text-xs tracking-[0.3em] text-gray-500 uppercase">
          Loading Experience
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;