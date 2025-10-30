import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 text-[var(--muted)]"
    >
      <p>
        A passionate Full Stack Developer and Data Science Enthusiast, skilled in React, Node.js, and Python. I love creating scalable web apps and AI-driven solutions that deliver real-world impact. With experience in both data pipelines and software systems, I bring analytical thinking and creativity together to solve complex problems.
      </p>

      <div className="flex flex-wrap gap-3 text-sm mt-4">
        <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white shadow-halo-sm">
          MERN Stack
        </span>
        <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white shadow-halo-sm">
          Python
        </span>
        <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white shadow-halo-sm">
          SQL
        </span>
        <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white shadow-halo-sm">
          Data Science with GEN AI
        </span>
      </div>
    </motion.div>
  );
};

export default AboutMe;
