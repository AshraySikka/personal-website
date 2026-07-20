"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

const filters = ["All", "Backend", "AI/ML", "PWA", "Full Stack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const [featured, second, ...rest] = filtered;

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-8">
      <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
        My Work
      </span>
      <h2 className="mt-2 text-3xl font-bold text-white">Projects</h2>
      <p className="mt-2 text-zinc-400">
        A collection of things I've built with passion and code.
      </p>

      <div className="mt-6 flex gap-2 rounded-lg bg-zinc-900 p-1 w-full sm:w-fit overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === f
                ? "bg-sky-400 text-zinc-950"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {featured && (
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2"
          >
            <Link href={`/projects/${featured.slug}`}>
              <div className="group relative rounded-xl border border-sky-400/30 bg-zinc-900 overflow-hidden hover:border-sky-400/60 hover:-translate-y-1 transition-all duration-300 h-72 sm:h-80">
                <Image
                  src={featured.screenshots[0]}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 via-55% to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="w-fit rounded-full bg-sky-400/10 text-sky-400 px-3 py-1 text-xs font-semibold mb-3 inline-block">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-white">{featured.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300 line-clamp-2">{featured.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {featured.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-sky-400/10 text-sky-400 px-2.5 py-0.5 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-4 text-sm">
                    {featured.demo && <span className="text-sky-400">Live Demo ↗</span>}
                    <span className="text-zinc-300">GitHub ↗</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {second && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href={`/projects/${second.slug}`}>
                <div className="group relative rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300 h-72 sm:h-80">
                  <Image
                    src={second.screenshots[0]}
                    alt={second.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 via-55% to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-semibold text-white">{second.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300 line-clamp-2">{second.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {second.tech.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full bg-sky-400/10 text-sky-400 px-2.5 py-0.5 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex gap-4 text-sm">
                      {second.demo && <span className="text-sky-400">Live Demo ↗</span>}
                      <span className="text-zinc-300">GitHub ↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      )}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="group relative rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300 h-64">
                <Image
                  src={project.screenshots[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 via-55% to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300 line-clamp-2">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-sky-400/10 text-sky-400 px-2.5 py-0.5 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-4 text-sm">
                    {project.demo && <span className="text-sky-400">Live Demo ↗</span>}
                    <span className="text-zinc-300">GitHub ↗</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/AshraySikka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
        >
          More projects on GitHub →
        </a>
      </div>
    </section>
  );
}