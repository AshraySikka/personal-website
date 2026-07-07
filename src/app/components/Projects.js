"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

const filters = ["All", "Backend", "AI/ML", "PWA", "Full Stack"];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardStyles = {
    center: { scale: 1, opacity: 1, x: 0, zIndex: 3, filter: "blur(0px)" },
    left: { scale: 0.85, opacity: isMobile ? 0.3 : 0.4, x: isMobile ? -90 : -260, zIndex: 1, filter: "blur(1px)" },
    right: { scale: 0.85, opacity: isMobile ? 0.3 : 0.4, x: isMobile ? 90 : 260, zIndex: 1, filter: "blur(1px)" },
    hidden: { scale: 0.7, opacity: 0, x: 0, zIndex: 0, filter: "blur(2px)" },
  };

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const next = () => setIndex((i) => (i + 1) % filtered.length);
  const prev = () => setIndex((i) => (i - 1 + filtered.length) % filtered.length);

  const getPosition = (i) => {
    const diff = (i - index + filtered.length) % filtered.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === filtered.length - 1) return "left";
    return "hidden";
  };

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-8">
      <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
        My Work
      </span>
      <h2 className="mt-2 text-3xl font-bold text-white">Projects</h2>
      <p className="mt-2 text-zinc-400">
        A collection of things I've built with passion and code.
      </p>

      <div className="relative z-10 mt-6 flex gap-2 rounded-lg bg-zinc-900 p-1 w-full sm:w-fit overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setActiveFilter(f);
              setIndex(0);
            }}
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

      <div className="relative mt-10 flex h-[300px] sm:h-[420px] items-center justify-center overflow-hidden">
        {filtered.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 z-10 rounded-full bg-zinc-900 border border-zinc-700 p-2 text-white hover:border-sky-400 transition-colors"
          >
            ←
          </button>
        )}

        {filtered.map((project, i) => {
        const pos = getPosition(i);
        if (pos === "hidden") return null;
        return (
            <motion.div
            key={project.slug}
            animate={cardStyles[pos]}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute w-64 sm:w-80"
            style={{ pointerEvents: pos === "center" ? "auto" : "none" }}
            drag={isMobile && pos === "center" ? "x" : false}
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(e, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
            }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-sky-400/50 transition-colors duration-300">
                  <div className="relative h-40 w-full bg-zinc-800">
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-sky-400/10 text-sky-400 px-2.5 py-0.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4 text-sm">
                      {project.demo && (
                        <span className="text-sky-400">Live Demo ↗</span>
                      )}
                      <span className="text-zinc-300">GitHub ↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}

        {filtered.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 z-10 rounded-full bg-zinc-900 border border-zinc-700 p-2 text-white hover:border-sky-400 transition-colors"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}