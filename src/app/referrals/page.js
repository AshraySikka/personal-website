import Image from "next/image";
import Ledger from "./Ledger";
import Link from "next/link";

const EMAIL = "ashray@ashraysikka.com";
const SUBJECT = "ReferralSort trial";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;
const REPO = "https://github.com/AshraySikka/ReferralSort";

const TITLE = "Faxed referrals, filed by name";
const DESCRIPTION =
  "ReferralSort reads faxed referral PDFs, renames and files each one, and sends anything doubtful to a person. It can run entirely on your own computer.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // like /reports, this page is for people I contact directly, not for search
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ashraysikka.com/referrals",
    siteName: "Ashray Sikka",
    type: "website",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

const FOLDERS = [
  {
    tab: "Filed",
    tone: "text-emerald-300 border-emerald-400/30",
    title: "Renamed and filed",
    text: "Patient, date of birth, referring physician, exam and request date all found and trusted.",
    items: ["Saved as last_first-exam-date.pdf", "Sorted by exam type and year"],
  },
  {
    tab: "Needs review",
    tone: "text-amber-300 border-amber-400/30",
    title: "Held for a person",
    text: "Something is missing, unclear or risky. Urgent requests go to the top.",
    items: [
      "A date that could be read two ways",
      "A missing referring physician",
      "Scanned pages, by default",
      "A possible duplicate",
    ],
  },
  {
    tab: "Set aside",
    tone: "text-rose-300 border-rose-400/30",
    title: "Not a referral",
    text: "Blank pages, junk, cover sheets on their own, lab results, exact duplicates.",
    items: ["Kept, never deleted", "Restore any of them in one click"],
  },
];

const MODES = [
  {
    name: "Local",
    main: true,
    text: "Everything is read on the computer it runs on. No internet connection is needed for reading. This is the default.",
    best: "Best for: most clinics.",
  },
  {
    name: "Hybrid",
    text: "Local reading first. Only faxes it cannot read confidently are sent to an AI service for a second opinion.",
    best: "Best for: messy handwriting, if your policy allows it.",
  },
  {
    name: "AI service",
    text: "Every fax is read by an AI service. Answers are checked against strict rules before they are trusted.",
    best: "Best for: offices with a signed agreement for it.",
  },
];

const READS = [
  "Requisition forms in different layouts, and plain letters",
  "Text PDFs, and scanned pages through OCR",
  "Patient name, date of birth, referring physician, exam, body part, side, request date",
  "Urgent flags and clinical history, shown for the reviewer",
  "Files dropped into a folder, as they arrive",
];

const NOT = [
  "It does not make clinical decisions or book anything",
  "It does not delete files",
  "It does not connect to your records system today",
  "It does not read handwriting reliably in local mode",
  "It does not replace a person checking the uncertain ones",
];

const STEPS = [
  {
    title: "Write to me first",
    text: "Please do not email patient documents yet. We agree on how they are handled, then you send 10 to 20 faxes, or copies with names blanked out.",
  },
  {
    title: "I run them",
    text: "You get the sorted results and an honest list of what it got wrong.",
  },
  {
    title: "Work out where faxes land",
    text: "A shared folder, an email inbox or a fax service. That decides how it is set up.",
  },
  {
    title: "Run it beside your process",
    text: "Your team keeps filing the old way until you trust the new one.",
  },
];

const FAQ = [
  [
    "Does it need to run all the time?",
    "Yes, as a small program on one computer in your office, usually the one that receives the faxes. You open it in a web browser like any other page. If the computer is off, faxes wait in the folder and get processed when it comes back on.",
  ],
  [
    "Is it a website we upload files to?",
    "No. It is installed on your own computer. This page is a description, not the product.",
  ],
  [
    "What if it files something wrong?",
    "Every fax it files on its own has passed strict checks, and every decision is logged. A wrongly filed fax can be moved or fixed by hand. In my test it did not happen, but I expect real faxes to be harder, and the trial exists to find that out.",
  ],
  [
    "Can it read handwriting?",
    "Not well on its own. In hybrid or AI service mode it does better, and it still sends anything unsure to a person.",
  ],
  [
    "Will it connect to our records system?",
    "Not today. It produces a clean folder of named files and a spreadsheet export. Connecting to a specific system is something to discuss after the trial.",
  ],
  [
    "What does it cost?",
    "Depends on your volume and where faxes arrive. The trial comes first, so you can see it work before we talk about price.",
  ],
  [
    "Is it compliant with health privacy rules?",
    "Whether it fits your obligations depends on how it is set up and your own policies. Local mode keeps data on your computer, which makes that conversation simpler. You should still have your own privacy officer or lawyer review it.",
  ],
];

function Shot({ src, alt, w, h, priority }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

function H2({ children }) {
  return (
    <h2 className="text-2xl font-bold text-white sm:text-3xl">{children}</h2>
  );
}

export default function ReferralsPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-400">
      <header className="w-full border-b border-sky-400/20">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-semibold text-white transition-colors hover:text-sky-400">Ashray Sikka</Link>
          <a
            href={MAILTO}
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-sky-400"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6">
        {/* hero */}
        <section className="grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
              ReferralSort
            </span>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Faxed referrals, <span className="text-sky-400">filed by name</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Referrals arrive as PDFs called{" "}
              <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-base text-zinc-200">
                Doc268.pdf
              </code>{" "}
              and{" "}
              <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-base text-zinc-200">
                scan0610.pdf
              </code>
              . ReferralSort reads each one, renames it with the patient, exam
              and date, puts it in the right folder, and hands anything
              doubtful to a person.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAILTO}
                className="inline-block rounded-lg bg-sky-400 px-6 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-sky-300"
              >
                Try it on 15 of your faxes
              </a>
              <a
                href="#how"
                className="inline-block rounded-lg border border-zinc-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-sky-400"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Built for imaging clinics and other offices that take referrals by
              fax. Runs on a computer in your office. Please do not email
              patient documents before we have agreed how to handle them.
            </p>
          </div>
          <Ledger />
        </section>

        {/* three outcomes */}
        <section id="how" className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <H2>Every fax ends up in one of three folders.</H2>
            <p className="mt-4 text-lg text-zinc-400">
              It only files a fax by itself when it found all five things it
              needs and is sure about each one. Otherwise a person decides, and
              the fax is never lost.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {FOLDERS.map((f) => (
              <div
                key={f.tab}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <span
                  className={`inline-block rounded-md border px-2.5 py-0.5 text-sm font-semibold ${f.tone}`}
                >
                  {f.tab}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{f.text}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {f.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* the app */}
        <section className="space-y-16 py-12 sm:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <H2>Watch the desk fill up.</H2>
              <p className="mt-4">
                New faxes appear as they arrive and drop into a folder. The
                counters show how much was handled without anyone touching it,
                and how many are waiting for a person.
              </p>
              <p className="mt-3">
                This is recorded from the real app, running on made-up faxes.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/referrals/live-poster.webp"
                aria-label="Screen recording of faxes arriving and being sorted"
                className="h-auto w-full"
              >
                <source src="/referrals/live.webm" type="video/webm" />
              </video>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <Shot
                src="/referrals/review.webp"
                alt="Review screen: a fax on the left, the extracted fields on the right with the date of birth flagged for checking"
                w={1812}
                h={1350}
              />
            </div>
            <div className="order-1 lg:order-2">
              <H2>When it is unsure, it shows you why.</H2>
              <p className="mt-4">
                The fax sits next to the form. The unsure field is highlighted
                and says <em>Please check</em>. You fix it, see the new file
                name before you save, and press Ctrl+Enter.
              </p>
              <p className="mt-3">A reviewer can clear a queue from the keyboard.</p>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <H2>A tidy library and a record of everything.</H2>
              <p className="mt-4">
                Filed faxes can be searched and exported to a spreadsheet. Every
                decision, by the app or by a person, goes into an activity log
                with a time.
              </p>
            </div>
            <Shot
              src="/referrals/filed.webp"
              alt="List of filed referrals with clean names, exam type and confidence"
              w={1812}
              h={930}
            />
          </div>
        </section>

        {/* numbers */}
        <section id="numbers" className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <H2>What it got right, and what I didn&apos;t test.</H2>
            <p className="mt-4 text-lg">
              I generated 500 fake faxes in several layouts, some clean, some
              scanned and crooked, some deliberately broken, with an answer
              key. Then I checked the results against the key.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["285 / 285", "auto-filed faxes had every field right"],
              ["0", "wrongly filed"],
              ["165", "sent to a person (33%)"],
              ["0.2 s", "to read one fax, on a laptop"],
            ].map(([n, label]) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <p className="text-3xl font-bold text-sky-400">{n}</p>
                <p className="mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-6 flex h-3 overflow-hidden rounded-full bg-zinc-800"
            role="img"
            aria-label="285 filed, 165 needs review, 50 set aside"
          >
            <i className="block bg-emerald-400" style={{ width: "57%" }} />
            <i className="block bg-amber-400" style={{ width: "33%" }} />
            <i className="block bg-rose-400" style={{ width: "10%" }} />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-500">
            <span><i className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-emerald-400" />Filed 285</span>
            <span><i className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-amber-400" />Needs review 165</span>
            <span><i className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-rose-400" />Set aside 50</span>
          </div>
          <div className="mt-8 rounded-r-xl border-l-4 border-amber-400 bg-amber-400/10 px-5 py-4 text-zinc-200">
            <p>
              <b className="text-white">Read this part.</b> These are invented
              faxes in layouts I wrote myself. Real ones are messier, and real
              accuracy will be lower. That is why the first step is a trial on
              your own faxes, not a promise. The design goal is that when it is
              unsure it asks, so a wrong guess lands in front of a person
              instead of in a patient folder.
            </p>
          </div>
        </section>

        {/* privacy */}
        <section id="privacy" className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <H2>Where the data goes.</H2>
            <p className="mt-4 text-lg">
              By default, nowhere. Pick how much you are comfortable with.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {MODES.map((m) => (
              <div
                key={m.name}
                className={`rounded-xl bg-zinc-900 p-6 ${
                  m.main
                    ? "border-2 border-sky-400"
                    : "border border-zinc-800"
                }`}
              >
                <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed">{m.text}</p>
                <p className="mt-3 text-xs text-zinc-500">{m.best}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            The app listens only on the computer it runs on unless you change
            that, can be password protected, and keeps a log of every action.
            Before I touch anything real, we agree on how data is handled and
            put it in writing.
          </p>
        </section>

        {/* reads / does not */}
        <section className="grid gap-10 py-12 sm:py-16 md:grid-cols-2">
          <div>
            <H2>What it reads</H2>
            <ul className="mt-5 space-y-3">
              {READS.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <H2>What it doesn&apos;t do</H2>
            <ul className="mt-5 space-y-3">
              {NOT.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 text-rose-400" aria-hidden="true">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* pilot */}
        <section id="pilot" className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <H2>How we would start.</H2>
            <p className="mt-4 text-lg">
              Small, cheap to try, easy to walk away from.
            </p>
          </div>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-400 text-sm font-bold text-zinc-950">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* faq */}
        <section className="py-12 sm:py-16">
          <H2>Questions</H2>
          <div className="mt-6 max-w-3xl divide-y divide-zinc-800 border-y border-zinc-800">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="text-xl text-zinc-500 group-open:hidden" aria-hidden="true">+</span>
                  <span className="hidden text-xl text-zinc-500 group-open:inline" aria-hidden="true">−</span>
                </summary>
                <p className="mt-3 text-zinc-400">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* close */}
        <section className="pb-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Curious how it does on your faxes?
            </h2>
            <p className="mx-auto mt-3 max-w-md">
              Send a short note. I will reply with what I would need and how the
              trial works.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={MAILTO}
                className="inline-block rounded-lg bg-sky-400 px-6 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-sky-300"
              >
                {EMAIL}
              </a>
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-zinc-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-sky-400"
              >
                See the code
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl border-t border-zinc-800 px-6 py-12 text-center">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Ashray Sikka · Toronto
        </p>
      </footer>
    </div>
  );
}
