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
        I enjoy taking ideas from whiteboard sketches to <span className="text-sky-400">software people can
        actually use</span>. Whether I'm designing REST APIs, integrating AI, or building
        full-stack applications, my focus stays the same: write code that's
        easy to understand, easy to extend, and reliable in production. My background
        in leading technical implementations taught me that good engineering
        isn't about writing the most clever code. It's about building systems that
        other developers can trust and users never have to think about.
      </motion.p>
    </section>
  );
}