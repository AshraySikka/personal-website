import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto px-6 py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-zinc-400 mb-8"
      >
        Open to backend engineering roles and contract work. Reach out
        directly or find me on the links below.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center gap-6 text-sm"
      >
        <a href="mailto:ashray15.sikka@gmail.com" className="text-zinc-300 hover:text-sky-400 underline transition-colors">
          Email
        </a>
        <a href="https://github.com/AshraySikka" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 underline transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ashraysikka/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 underline transition-colors">
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}