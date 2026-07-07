"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto px-6 py-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-zinc-400 leading-relaxed"
      >
        I'm a <span className="text-sky-400">backend engineer</span> focused
        on building reliable APIs and full stack systems, currently
        completing a Python Backend Web Development certificate at the
        University of Alberta. My background spans project coordination and
        hands on engineering, and I bring the discipline of a lead to the
        focus of an individual contributor. I care about clean architecture,
        tested code, and shipping things that actually work in production,
        not just in a demo.
      </motion.p>
    </section>
  );
}