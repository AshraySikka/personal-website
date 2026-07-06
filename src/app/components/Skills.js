"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { category: "Backend", skills: ["Python", "FastAPI", "Django", "Django REST Framework", "SQLAlchemy 2.0"] },
  { category: "Frontend", skills: ["React", "Vite", "Tailwind CSS"] },
  { category: "Databases", skills: ["PostgreSQL", "MS SQL", "MySQL", "Supabase", "Neon"] },
  { category: "DevOps & Tools", skills: ["Docker", "GitHub Actions", "Alembic", "pytest"] },
  { category: "AI Integration", skills: ["Claude API", "Gemini API", "OpenAI API"] },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Skills
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-2 items-start">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-400 mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-800 hover:bg-sky-400/10 hover:text-sky-400 px-3 py-1 text-sm text-zinc-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}