import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaChartLine, FaTools, FaCloud } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-[var(--accent)] text-2xl" />,
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Web Development",
      icon: <FaCode className="text-[var(--accent)] text-2xl" />,
      skills: ["React", "Node.js", "Express", "HTML", "CSS", "MongoDB"],
    },
    {
      title: "Data Science & Analytics",
      icon: <FaChartLine className="text-[var(--accent)] text-2xl" />,
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Data Preprocessing",
        "Regression Models",
        "Power BI",
        "Generative AI"
      ],
    },
    // {
    //   title: "Database & Cloud",
    //   icon: <FaDatabase className="text-[var(--accent)] text-2xl" />,
    //   skills: ["MySQL", "MongoDB"],
    // },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-[var(--accent)] text-2xl" />,
      skills: ["Git", "GitHub", "Excel", "API Integration"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="content-card"
        >
          <div className="flex items-center gap-3 mb-2">
            {category.icon}
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full bg-accent text-white"

              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
