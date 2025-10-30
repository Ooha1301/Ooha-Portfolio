import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaHotel, FaCloudSun } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Analysis using AI",
      icon: <FaBrain className="text-[var(--accent)] text-2xl" />,
      description:
        "Developed an end-to-end machine learning pipeline to predict the likelihood of heart disease using medical data. Performed EDA, feature engineering, and model training (Logistic Regression, Random Forest) to identify high-risk patients.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/Ooha1301/Heart-Disease-Analysis-using-AI", // replace with your actual link later
    },
    {
      title: "Wanderlust Destination – Airbnb Clone",
      icon: <FaHotel className="text-[var(--accent)] text-2xl" />,
      description:
        "Built a responsive full-stack web application that allows users to explore, list, and manage rental properties. Implemented authentication, property listings, and maps API integration following the MVC pattern.",
      tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Ooha1301/Airbnb_clone",
      live: "https://airbnb-clone-6es2.onrender.com/listings",
    },
    {
      title: "Weather Now App",
      icon: <FaCloudSun className="text-[var(--accent)] text-2xl" />,
      description:
        "Created a React-based weather app for real-time temperature and humidity data using the Open-Meteo API. Designed for fast city-based searches with clean UI and smooth transitions.",
      tech: ["React", "Open-Meteo API", "Tailwind CSS"],
      github: "https://github.com/Ooha1301/Weather-now-react",
      live: "https://gktncl-5173.csb.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="content-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              {project.icon}
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
            <p className="text-[var(--muted)] mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-full bg-[var(--accent)] text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
