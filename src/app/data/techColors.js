const techColors = {
  Python: "sky", FastAPI: "sky", Django: "sky", "Django REST Framework": "sky",
  "SQLAlchemy 2.0": "sky", DRF: "sky", JWT: "sky",
  React: "violet", Vite: "violet", "Tailwind CSS": "violet",
  JavaScript: "violet", TypeScript: "violet",
  PostgreSQL: "emerald", "MS SQL": "emerald", MySQL: "emerald",
  Supabase: "emerald", Neon: "emerald", MongoDB: "emerald", Redis: "emerald",
  Docker: "amber", "GitHub Actions": "amber", Alembic: "amber",
  pytest: "amber", Pytest: "amber", Stripe: "amber", Nginx: "amber",
  "Claude API": "pink", "Gemini API": "pink", "OpenAI API": "pink",
  "Claude Vision API": "pink", Cloudinary: "pink", Lovable: "pink",
};

const classMap = {
  sky: "bg-sky-500/10 text-sky-400/90 border border-sky-500/20",
  violet: "bg-violet-500/10 text-violet-400/90 border border-violet-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-400/90 border border-amber-500/20",
  pink: "bg-pink-500/10 text-pink-400/90 border border-pink-500/20",
};

export function getTechClass(tech) {
  const color = techColors[tech] || "sky";
  return classMap[color];
}