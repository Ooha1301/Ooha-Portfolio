import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaBrain, FaDatabase } from "react-icons/fa";

const Certificates = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const certificates = [
    {
      title: "MERN Stack Development",
      platform: "Apna College",
      img: "/certificates/mern.jpg",
      icon: <FaReact className="text-blue-500 text-3xl mb-2" />,
    },
    {
      title: "Data Science with Generative AI",
      platform: "Udemy",
      img: "/certificates/genai.jpg",
      icon: <FaBrain className="text-purple-500 text-3xl mb-2" />,
    },
    {
      title: "Basic SQL (HackerRank)",
      platform: "HackerRank",
      img: "/certificates/sql.jpg",
      icon: <FaDatabase className="text-green-500 text-3xl mb-2" />,
    },
  ];

  const toggleImage = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
    >
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-gray-200 shadow-sm hover:shadow-lg rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300"
        >
          {cert.icon}
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{cert.platform}</p>

          <button
            onClick={() => toggleImage(index)}
            className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg shadow hover:shadow-md hover:bg-indigo-600 transition-all duration-300"
          >
            {openIndex === index ? "Hide Certificate" : "View Certificate"}
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.img
                key={index}
                src={cert.img}
                alt={cert.title}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full mt-4 rounded-lg shadow-md border border-gray-200"
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Certificates;
