"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Certification() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-8 flex items-center gap-4 rounded-xl border border-sky-400/30 bg-sky-400/5 px-5 py-4"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white p-1">
      <Image
          src="/university-of-alberta-logo.png"
          alt="University of Alberta"
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white">UNIVERSITY OF ALBERTA</p>
        <p className="text-sm text-zinc-400">
          Certified: Python Backend Web Developer
        </p>
      </div>
    </motion.div>
  );
}