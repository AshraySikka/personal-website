import Image from "next/image";
import Link from "next/link";

const EMAIL = "ashray@ashraysikka.com";
const SUBJECT = "Weekly report cleanup: my sample file";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

const TITLE = "Your weekly report in minutes, not hours";
const DESCRIPTION =
  "Send one real weekly report file and get a clean version back within 48 hours. Free, no strings.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ashraysikka.com/reports",
    siteName: "Ashray Sikka",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ReportsPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-400">
      <header className="w-full border-b border-sky-400/20">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <Link href="/" className="font-semibold text-white transition-colors hover:text-sky-400">Ashray Sikka</Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-10 sm:py-16">
        <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
          Free weekly report cleanup
        </span>

        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Your weekly report in <span className="text-sky-400">minutes</span>,
          not hours.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-zinc-300">
          If you spend hours each week pulling numbers from messy spreadsheets
          into one report, I can fix that. Send me one real weekly file with
          anything sensitive blanked out, and I will send back a clean version
          within 48 hours. It is free, with no strings attached.
        </p>

        <div className="mt-8">
          <a
            href={MAILTO}
            className="inline-block rounded-lg bg-sky-400 px-6 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-sky-300"
          >
            Email me your file
          </a>
          <p className="mt-3 text-sm text-zinc-500">
            Blank out names, account numbers or anything else you would rather
            not share first.
          </p>
        </div>

        <figure className="mt-12 sm:mt-16">
          <a
            href="/reports/before-after.png"
            target="_blank"
            rel="noopener"
            aria-label="Open the sample before and after image full size"
            className="block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
          >
            <Image
              src="/reports/before-after.png"
              alt="Sample data. Before: two timesheets with different column names and layouts. After: one clean combined report with totals and flagged problems."
              width={760}
              height={842}
              sizes="(min-width: 768px) 672px, calc(100vw - 48px)"
              priority
              className="h-auto w-full"
            />
          </a>
          <figcaption className="mt-3 text-sm text-zinc-500">
            Sample data, not a real business. Tap the image to enlarge.
          </figcaption>
        </figure>
      </main>

      <footer className="mx-auto w-full max-w-3xl border-t border-zinc-800 px-6 py-12 text-center">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Ashray Sikka · Toronto
        </p>
      </footer>
    </div>
  );
}
