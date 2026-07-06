"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="relative mb-8 h-56 w-56 rounded-full ring-4 ring-sky-400/40 hover:ring-sky-400/80 transition-all duration-300"
        >
          <Image
            src="/profile.jpg"
            alt="Ashray Sikka"
            fill
            className="rounded-full object-cover"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold text-white sm:text-6xl"
        >
          Ashray Sikka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 max-w-xl text-lg text-zinc-400"
        >
          Backend Engineer building{" "}
          <span className="text-sky-400">APIs</span>,{" "}
          <span className="text-sky-400">PWAs</span>, and{" "}
          <span className="text-sky-400">AI-integrated systems</span>.
        </motion.p>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}