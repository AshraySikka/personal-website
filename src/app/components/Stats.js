"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Real Clinical Pilot", value: "1" },
  { label: "Tests Written", value: "400+" },
  { label: "Full Stack Systems", value: "6" },
];

export default function Stats() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-12">
      <div className="grid grid-cols-3 gap-6 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <p className="text-3xl font-bold text-sky-400 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500 sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}