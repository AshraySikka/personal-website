"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-sky-400/20 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-white hover:text-sky-400 transition-colors">
        Ashray Sikka
        </Link>

        <div className="hidden sm:flex gap-6 text-sm text-zinc-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-400 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 underline transition-colors">
            Resume
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="sm:hidden text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-6 text-sm text-zinc-300 bg-zinc-950">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="hover:text-sky-400 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="text-sky-400 underline">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}