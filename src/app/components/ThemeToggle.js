"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "theme";

function apply(theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
  // Starts as "dark" on server and first client render so markup matches.
  // The icon itself is driven by the data-theme attribute set before paint.
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");

    // Keep other open tabs in sync
    const onStorage = (e) => {
      if (e.key === KEY && (e.newValue === "light" || e.newValue === "dark")) {
        apply(e.newValue);
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    root.classList.add("theme-fade");
    apply(next);
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    window.setTimeout(() => root.classList.remove("theme-fade"), 400);
  };

  const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative h-9 w-9 shrink-0 rounded-full text-zinc-400 transition-colors hover:bg-sky-400/10 hover:text-sky-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
    >
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <Moon size={18} strokeWidth={1.75} />
      </span>
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        <Sun size={18} strokeWidth={1.75} />
      </span>
    </button>
  );
}
