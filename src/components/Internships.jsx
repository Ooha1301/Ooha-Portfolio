import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode } from "react-icons/fa";

const Internships = () => {
  const experiences = [
    {
      title: "ISRO – Project Trainee",
      duration: "Jul 2024 – Aug 2024",
      icon: <FaRocket className="text-[var(--accent)] text-2xl" />,
      description:
        "Worked on a Frequency Response Characterization System for pressure monitoring in launch vehicles. Developed a Python-based automation system integrating a function generator and oscilloscope to analyze signal responses, reducing testing time and improving measurement accuracy.",
      tools: ["Python", "PyQt5", "SCPI", "Signal Analysis"],
    },
    {
      title: "Web Blinders – Data Science Intern",
      duration: "Jan 2025 – Apr 2025",
      icon: <FaLaptopCode className="text-[var(--accent)] text-2xl" />,
      description:
        "Performed data cleaning, transformation, and forecasting using Pandas, NumPy, and regression models. Built modular Python scripts to derive insights and collaborated on applying analytical results for business optimization.",
      tools: ["Python", "Pandas", "NumPy", "Regression Models"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="content-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-2">
            {exp.icon}
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-[var(--muted)]">{exp.duration}</p>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {exp.tools.map((tool, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full bg-[var(--accent)] text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Internships;
