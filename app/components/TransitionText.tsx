"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TEXTS = [
  "Software Engineer",
  "Fullstack Developer",
  ".NET Developer",
  "Blockchain Enthusiast",
  "Machine Learning Explorer",
  "Lifelong Learner",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prev) => (prev + 1) % TEXTS.length),
      2500
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-10 text-center text-yellow-500 text-lg sm:text-2xl lg:text-3xl font-semibold relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={TEXTS[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full"
        >
          {TEXTS[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
