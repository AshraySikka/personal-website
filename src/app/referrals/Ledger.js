"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// The four example faxes that get renamed in the hero. All names are invented.
const ROWS = [
  {
    was: "9654293.pdf",
    now: "ct/2026/whitfield_dana-ct_head-20261018.pdf",
    kind: "filed",
    note: "Read in 0.2 seconds. Every field found.",
  },
  {
    was: "scan0610.pdf",
    now: "mri/2026/dhillon_dmitri-mri_knee_left-20261020.pdf",
    kind: "filed",
    note: "A crooked, grainy scan. Read with OCR, then checked.",
  },
  {
    was: "FAX-20261020-090800.pdf",
    now: "Kim, Mei. Date of birth reads 12/04/1972.",
    kind: "review",
    note: "Could be April 12 or December 4. A person decides.",
  },
  {
    was: "Doc268.pdf",
    now: "Same patient, exam and date as an earlier fax.",
    kind: "rejected",
    note: "Set aside, not deleted. One click brings it back.",
  },
];

const TAGS = {
  filed: { label: "Filed", cls: "bg-emerald-400/10 text-emerald-300" },
  review: { label: "Needs review", cls: "bg-amber-400/10 text-amber-300" },
  rejected: { label: "Set aside", cls: "bg-rose-400/10 text-rose-300" },
};

export default function Ledger() {
  const [typed, setTyped] = useState(ROWS.map(() => 0));
  const [done, setDone] = useState(ROWS.map(() => false));
  const [active, setActive] = useState(-1);
  const box = useRef(null);
  const timers = useRef([]);
  const started = useRef(false);

  const stop = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    stop();
    const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // people who asked for less motion just get the finished state
    if (reduce) {
      setTyped(ROWS.map((r) => r.now.length));
      setDone(ROWS.map(() => true));
      setActive(-1);
      return;
    }

    setTyped(ROWS.map(() => 0));
    setDone(ROWS.map(() => false));
    setActive(-1);

    ROWS.forEach((row, i) => {
      const start = 500 + i * 2300;
      // type it quickly, the long names would drag otherwise
      const step = Math.max(10, Math.round(1100 / row.now.length));
      later(() => setActive(i), start);
      for (let c = 1; c <= row.now.length; c++) {
        later(
          () => setTyped((t) => t.map((v, k) => (k === i ? c : v))),
          start + 200 + c * step
        );
      }
      later(() => {
        setDone((d) => d.map((v, k) => (k === i ? true : v)));
        setActive((a) => (a === i ? -1 : a));
      }, start + 400 + row.now.length * step);
    });
  }, []);

  // wait until it is on screen so the first run is not wasted
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          play();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [play]);

  return (
    <div
      ref={box}
      className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
      role="group"
      aria-label="Example: four incoming files being renamed and sorted"
    >
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 text-sm text-zinc-500">
        <span>Inbox, four new faxes</span>
        <button
          type="button"
          onClick={play}
          className="rounded-md border border-zinc-700 px-3 py-1 text-xs text-zinc-300 transition-colors hover:border-sky-400 hover:text-white"
        >
          Replay
        </button>
      </div>

      {ROWS.map((row, i) => {
        const tag = TAGS[row.kind];
        const isDone = done[i];
        return (
          <div
            key={row.was}
            className="grid min-h-[104px] content-start gap-1.5 border-b border-zinc-800 px-4 py-4 last:border-b-0"
          >
            <div
              className={`break-all font-mono text-sm text-zinc-500 transition-opacity ${
                isDone ? "line-through opacity-70" : ""
              }`}
            >
              {row.was}
            </div>
            <div className="min-h-[1.4em] break-all font-mono text-sm font-semibold text-white">
              {row.now.slice(0, typed[i])}
              {active === i && (
                <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-sky-400" />
              )}
            </div>
            <span
              className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold transition-opacity duration-300 ${tag.cls} ${
                isDone ? "opacity-100" : "opacity-0"
              }`}
            >
              {tag.label}
            </span>
            <div
              className={`text-sm text-zinc-400 transition-opacity duration-300 ${
                isDone ? "opacity-100" : "opacity-0"
              }`}
            >
              {row.note}
            </div>
          </div>
        );
      })}
    </div>
  );
}
