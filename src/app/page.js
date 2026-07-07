"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function useTypewriter(text, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

export default function Home() {
  const { displayed: typed, done } = useTypewriter("From APIs to AI, I build software that solves real-world problems.");
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <div className="flex py-8 sm:py-24 items-center px-6 max-w-6xl mx-auto">
        <div className="grid gap-12 sm:grid-cols-2 items-center w-full">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-semibold uppercase tracking-wide text-sky-400"
            >
              Backend Engineer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-4xl font-bold text-white sm:text-5xl"
            >
              Building APIs, PWAs, and{" "}
              <span className="text-sky-400">AI-integrated</span> systems.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-zinc-400 min-h-[3.5rem]"
            >
              {typed}
              {!done && <span className="animate-pulse">|</span>}
            </motion.p>
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-sky-300 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:border-sky-400 transition-colors">
                Get In Touch
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm">
              {[
                { label: "Real Clinical Pilot", value: "1" },
                { label: "Tests Written", value: "400+" },
                { label: "Full Stack Systems", value: "5" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-sky-400">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80"
          >
            <div className="absolute inset-0 rounded-full bg-sky-400/30 blur-3xl" />
            <Image
              src="/profile.jpg"
              alt="Ashray Sikka"
              fill
              className="relative rounded-full object-cover ring-4 ring-sky-400/40"
              priority
            />
          </motion.div>
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}