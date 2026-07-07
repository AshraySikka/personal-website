"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import { getTechClass } from "../../data/techColors";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [current, setCurrent] = useState(0);
  const [dims, setDims] = useState(null);

  if (!project) return notFound();

  const next = () => {
    setDims(null);
    setCurrent((c) => (c + 1) % project.screenshots.length);
  };
  const prev = () => {
    setDims(null);
    setCurrent((c) => (c - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const isPortrait = dims && dims.height > dims.width;
  const containerClass = isPortrait
    ? "h-[520px] w-full max-w-sm"
    : "h-[420px] w-full max-w-2xl";

  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link href="/#projects" className="text-sm text-zinc-400 hover:text-sky-400 transition-colors">
          ← Back to Projects
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-white">{project.title}</h1>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-800 text-zinc-300 px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 max-w-2xl text-zinc-400">{project.longDescription}</p>

        <div className="mt-6 flex gap-4">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-sky-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-sky-300 transition-colors">
              Live Demo ↗
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white hover:border-sky-400 transition-colors">
            GitHub ↗
          </a>
        </div>

        <div className={`relative mt-10 rounded-xl overflow-hidden bg-zinc-900 group transition-all duration-300 max-w-full ${containerClass}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                  if (info.offset.x < -80) next();
                  else if (info.offset.x > 80) prev();
              }}
            >
              <Image
                src={project.screenshots[current]}
                alt={`${project.title} screenshot ${current + 1}`}
                fill
                className="object-contain"
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.target;
                  setDims({ width: naturalWidth, height: naturalHeight });
                }}
              />
            </motion.div>
          </AnimatePresence>

          {project.screenshots.length > 1 && (
            <>
              <button onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-zinc-950/70 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                ←
              </button>
              <button onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-zinc-950/70 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </button>
            </>
          )}
        </div>

        {project.screenshots.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.screenshots.map((src, i) => (
              <button key={src} onClick={() => { setDims(null); setCurrent(i); }}
                className={`relative h-16 w-16 rounded-md overflow-hidden border-2 bg-zinc-900 transition-colors ${
                  i === current ? "border-sky-400" : "border-transparent"
                }`}>
                <Image src={src} alt="" fill className="object-contain" />
              </button>
            ))}
          </div>
        )}

        <h2 className="mt-12 text-xl font-semibold text-white">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span key={t} className={`rounded-lg px-4 py-2 text-sm ${getTechClass(t)}`}>
              {t}
            </span>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-semibold text-white">Key Features</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.features.map((f) => (
            <div key={f} className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 text-center">
              {f}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}