"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Server, Layout, Database, Wrench, Sparkles, TestTube2, Code2, LineChart } from "lucide-react";
import { skillDetails } from "../data/skillDetails";
import SkillDetail from "./SkillDetail";

const skillGroups = [
  { category: "Languages", icon: Code2, color: "sky", skills: ["Python", "JavaScript", "C++"] },
  { category: "Backend", icon: Server, color: "indigo", skills: ["FastAPI", "Django", "Django REST Framework", "SQLAlchemy 2.0", "Pydantic", "JWT Authentication"] },
  { category: "Frontend", icon: Layout, color: "violet", skills: ["React", "Vite", "Tailwind CSS"] },
  { category: "Databases", icon: Database, color: "emerald", skills: ["PostgreSQL", "MS SQL", "MySQL", "Supabase", "Neon"] },
  { category: "Data & ETL", icon: LineChart, color: "teal", skills: ["Pandas", "NumPy", "ETL Pipelines"] },
  { category: "DevOps & Tools", icon: Wrench, color: "amber", skills: ["Docker", "GitHub Actions", "Alembic", "SendGrid", "Stripe"] },
  { category: "Testing & Quality", icon: TestTube2, color: "rose", skills: ["pytest"] },
  { category: "AI Integration", icon: Sparkles, color: "pink", skills: ["Claude API", "Claude Vision API", "Gemini API", "OpenAI API"] },
];

const bgColors = {
  sky: "bg-sky-500/5 border-sky-500/20 hover:border-sky-500/50",
  indigo: "bg-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/50",
  violet: "bg-violet-500/5 border-violet-500/20 hover:border-violet-500/50",
  emerald: "bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/50",
  teal: "bg-teal-500/5 border-teal-500/20 hover:border-teal-500/50",
  amber: "bg-amber-500/5 border-amber-500/20 hover:border-amber-500/50",
  rose: "bg-rose-500/5 border-rose-500/20 hover:border-rose-500/50",
  pink: "bg-pink-500/5 border-pink-500/20 hover:border-pink-500/50",
};

const iconColors = {
  sky: "text-sky-400/80", indigo: "text-indigo-400/80", violet: "text-violet-400/80",
  emerald: "text-emerald-400/80", teal: "text-teal-400/80", amber: "text-amber-400/80",
  rose: "text-rose-400/80", pink: "text-pink-400/80",
};

const iconBgColors = {
  sky: "bg-sky-500/10", indigo: "bg-indigo-500/10", violet: "bg-violet-500/10",
  emerald: "bg-emerald-500/10", teal: "bg-teal-500/10", amber: "bg-amber-500/10",
  rose: "bg-rose-500/10", pink: "bg-pink-500/10",
};

const barFillColors = {
  sky: "bg-sky-400", indigo: "bg-indigo-400", violet: "bg-violet-400",
  emerald: "bg-emerald-400", teal: "bg-teal-400", amber: "bg-amber-400",
  rose: "bg-rose-400", pink: "bg-pink-400",
};

function ProficiencyBar({ familiarity, color }) {
  return (
    <div className="flex gap-0.5 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => {
        const segmentStart = i * 20;
        const fillPercent = Math.max(0, Math.min(100, ((familiarity - segmentStart) / 20) * 100));
        return (
          <span key={i} className="relative h-1.5 w-3 rounded-full bg-zinc-700 overflow-hidden">
            <span
              className={`absolute inset-y-0 left-0 rounded-full ${barFillColors[color]}`}
              style={{ width: `${fillPercent}%` }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-6 py-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <p className="text-zinc-400">Tap any skill to see where it's actually used.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>div]:mb-6 [&>div]:break-inside-avoid">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <div key={group.category}>
              <div className="flex items-center gap-2 mb-3">
                <GroupIcon size={18} className={iconColors[group.color]} />
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-col gap-2">
                {group.skills.map((skill) => {
                  const detail = skillDetails[skill];
                  if (!detail) return null;
                  const SkillIcon = detail.icon;
                  return (
                    <button
                      key={skill}
                      onClick={() => setSelected({ name: skill, detail, color: group.color })}
                      className={`flex items-center justify-between gap-2 text-left rounded-lg border px-3 py-2 text-sm text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 ${bgColors[group.color]}`}
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <SkillIcon size={16} className={iconColors[group.color]} />
                        <span className="truncate">{skill}</span>
                      </span>
                      <ProficiencyBar familiarity={detail.familiarity} color={group.color} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <SkillDetail
            skillName={selected.name}
            detail={selected.detail}
            iconBg={iconBgColors[selected.color]}
            iconColor={iconColors[selected.color]}
            textColor={iconColors[selected.color]}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}