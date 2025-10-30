import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  const sections = [
    "About Me",
    "Experience",
    "Projects",
    "Education",
    "Skills",
    "Certifications",
    "Contact",
  ];

  const [active, setActive] = useState("About Me");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-[var(--bg)] text-[var(--text)]">
      {/* Header */}
      <motion.div
  className="text-center mb-10"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 1 }}
    className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] mb-2"
  >
    Ooha Bhargavi Yamasani
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 1 }}
    className="text-lg sm:text-xl font-medium text-[var(--muted)]"
  >
    Full Stack Developer | Data Science Enthusiast
  </motion.p>
</motion.div>

      {/* Button Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {sections.map((name) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`section-btn ${
              active === name
                ? "bg-[var(--accent)] text-white shadow-md"
                : "bg-[var(--card)] text-[var(--text)] border border-gray-200"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="content-card"
          >
            <h2 className="text-2xl font-semibold mb-4">{active}</h2>
            {active === "About Me" && <AboutMe />}
            {active === "Internships" && <Internships />}
            {active === "Projects" && <Projects />}
            {active === "Education" && <Education />}
            {active === "Skills" && <Skills />}
            {active === "Certifications" && <Certificates />}
            {active === "Contact" && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
