"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench, Sparkles } from "lucide-react";

const skillGroups = [
  {
    category: "Backend",
    icon: Server,
    color: "sky",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 85 },
      { name: "Django REST Framework", level: 80 },
      { name: "SQLAlchemy 2.0", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: Layout,
    color: "violet",
    skills: [
      { name: "React", level: 75 },
      { name: "Vite", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    color: "emerald",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MS SQL", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "Supabase", level: 70 },
      { name: "Neon", level: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    color: "amber",
    skills: [
      { name: "Docker", level: 75 },
      { name: "GitHub Actions", level: 80 },
      { name: "Alembic", level: 70 },
      { name: "pytest", level: 80 },
    ],
  },
  {
    category: "AI Integration",
    icon: Sparkles,
    color: "pink",
    skills: [
      { name: "Claude API", level: 85 },
      { name: "Gemini API", level: 70 },
      { name: "OpenAI API", level: 70 },
    ],
  },
];

const barColors = {
  sky: "bg-sky-500/50",
  violet: "bg-violet-500/50",
  emerald: "bg-emerald-500/50",
  amber: "bg-amber-500/50",
  pink: "bg-pink-500/50",
};

const iconColors = {
  sky: "text-sky-400/80",
  violet: "text-violet-400/80",
  emerald: "text-emerald-400/80",
  amber: "text-amber-400/80",
  pink: "text-pink-400/80",
};

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <p className="text-zinc-400">Technologies and tools I work with</p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon size={18} className={iconColors[group.color]} />
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs text-zinc-400 mb-1">
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`h-full rounded-full ${barColors[group.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}