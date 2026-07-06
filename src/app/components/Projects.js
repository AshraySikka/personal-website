"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CareTrack API",
    description:
      "REST API for patient care coordination. FastAPI, async SQLAlchemy 2.0, JWT auth, 26 passing tests.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "pytest"],
    github: "https://github.com/AshraySikka/caretrack-api",
    demo: "https://caretrack-api.onrender.com/docs",
  },
  {
    title: "Sleep Diary",
    description:
      "Clinical sleep tracking PWA using the CSD-M instrument, piloted by a real sleep clinic. Full TST/TIB/SE math engine and PDF export.",
    tech: ["Django DRF", "React", "Vite", "PostgreSQL"],
    github: "https://github.com/AshraySikka/sleep-diary",
    demo: "https://sleep-diary-psi.vercel.app/login",
  },
  {
    title: "PCOS Tracker",
    description:
      "Health tracking app generating personalized meal and exercise plans using the Claude API.",
    tech: ["Django DRF", "React", "Supabase", "Claude API"],
    github: "https://github.com/AshraySikka/PCOS-Tracker",
    demo: "https://pcos-tracker-ten.vercel.app/login",
  },
  {
    title: "MedScan AI",
    description:
      "Radiology platform using Claude Vision API to generate structured diagnostic reports from medical images.",
    tech: ["Django", "Claude Vision API", "PostgreSQL", "Cloudinary"],
    github: "https://github.com/AshraySikka/medscan-ai",
    demo: "https://medscan-ai-production-249d.up.railway.app/",
  },
  {
    title: "Urban Spark",
    description:
      "Full restaurant management system with 7 user roles, reservations, kitchen queue, and Stripe payments. Team project, 370+ passing tests.",
    tech: ["Django", "Stripe", "GitHub Actions"],
    github: "https://github.com/AshraySikka/restaurant-webapp",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-sky-400/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-sky-400/10 text-sky-400 px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 underline hover:text-sky-400"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 underline hover:text-sky-400"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}