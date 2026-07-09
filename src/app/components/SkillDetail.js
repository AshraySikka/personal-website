"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";

export default function SkillDetail({ skillName, detail, iconBg, iconColor, textColor, onClose }) {
  const Icon = detail.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-zinc-950/85 px-4 py-8 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}>
            <Icon className={iconColor} size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{skillName}</h3>
            <p className={`text-sm ${textColor}`}>{detail.level}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-zinc-300">
          {detail.description}
        </p>

        {detail.projects.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-2">
              Used in
            </p>
            <div className="flex flex-col gap-2">
              {detail.projects.map(({ slug, title }) => (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-200 hover:border-sky-400/50 transition-colors"
                >
                  {title}
                  <ExternalLink size={14} className="text-zinc-500" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {detail.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {detail.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sky-400 underline hover:text-sky-300 transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}

        {detail.projects.length === 0 && detail.links.length === 0 && (
          <p className="mt-6 text-xs italic text-zinc-500">
            Not tied to a project shown on this site.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}