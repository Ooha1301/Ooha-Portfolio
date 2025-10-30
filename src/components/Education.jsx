import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electrical and Electronics Engineering",
      college: "G. Pulla Reddy Engineering College",
      year: "2021 – 2025",
      grade: "CGPA: 8.11 / 10",
      icon: <FaUniversity className="text-[var(--accent)] text-2xl" />,
      details:
        "Focused on core electrical and electronics systems, power circuits, and programming foundations. Applied technical knowledge in practical projects and research-driven learning.",
    },
    {
      degree: "Intermediate (MPC)",
      college: "Narayana Junior College",
      year: "2019 – 2021",
      grade: "Score: 935 / 1000",
      icon: <FaSchool className="text-[var(--accent)] text-2xl" />,
      details:
        "Built strong fundamentals in mathematics, physics, and chemistry with consistent academic performance.",
    },
    {
      degree: "Secondary School (SSC)",
      college: "Montessori High School",
      year: "2018 – 2019",
      grade: "CGPA: 9.8 / 10",
      icon: <FaGraduationCap className="text-[var(--accent)] text-2xl" />,
      details:
        "Developed leadership qualities, communication skills, and curiosity toward scientific learning.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {education.map((edu, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="content-card"
        >
          <div className="flex items-center gap-3 mb-2">
            {edu.icon}
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-[var(--muted)]">
                {edu.college} • {edu.year}
              </p>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-2">{edu.details}</p>
          <p className="text-sm font-medium text-[var(--accent)]">{edu.grade}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
