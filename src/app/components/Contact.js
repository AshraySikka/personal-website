"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:ashray15.sikka@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="grid gap-10 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Let's build something <span className="text-sky-400">awesome</span> together.
          </h2>
          <p className="mt-4 text-zinc-400">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Mail size={16} className="text-sky-400" />
              ashray15.sikka@gmail.com
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <MapPin size={16} className="text-sky-400" />
              Toronto, Canada
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://github.com/AshraySikka" target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 p-2 text-zinc-300 hover:border-sky-400 hover:text-sky-400 transition-colors">
              <GithubIcon width={18} height={18} />
            </a>
            <a href="https://linkedin.com/in/ashraysikka" target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 p-2 text-zinc-300 hover:border-sky-400 hover:text-sky-400 transition-colors">
              <LinkedinIcon width={18} height={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
          />
          <textarea
            placeholder="Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-sky-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-sky-300 transition-colors"
          >
            Send Message ↗
          </button>
        </motion.form>
      </div>
    </section>
  );
}