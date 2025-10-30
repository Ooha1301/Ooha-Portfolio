import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="text-[#0A66C2] text-3xl" />,
      link: "https://www.linkedin.com/in/yamasanioohabhargavi/",
    },
    {
      platform: "GitHub",
      icon: <FaGithub className="text-black text-3xl" />,
      link: "https://github.com/Ooha1301",
    },
    {
      platform: "Email",
      icon: <FaEnvelope className="text-[#EA4335] text-3xl" />,
      link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBncKsLDpcFnjZzKkbHjvLMZQSCHdwDCWhVbbMptjcqwQPqLHbdxhLGtTWBPgjpCcnvFBrP",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-6"
    >
      <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
        Let's Connect 🌐
      </h2>
      <div className="flex gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            {contact.icon}
            <span className="text-sm text-[var(--muted)]">{contact.platform}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
