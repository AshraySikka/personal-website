import Image from "next/image";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Ashray Sikka - Digital Card",
  description: "Contact card for Ashray Sikka, Software Engineer",
};

const rows = [
  {
    label: "Phone",
    value: "(647) 836-0764",
    href: "tel:+16478360764",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "ashray15.sikka@gmail.com",
    href: "mailto:ashray15.sikka@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ashraysikka",
    href: "https://linkedin.com/in/ashraysikka/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/AshraySikka",
    href: "https://github.com/AshraySikka",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "Portfolio",
    value: "ashraysikka.com",
    href: "https://ashraysikka.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Resume",
    value: "[↓] Download Resume",
    href: "/resume.pdf",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CardPage() {
  return (
    <main
    className="min-h-dvh flex items-center justify-center px-4 py-6 sm:py-16 overflow-y-auto"
    style={{ background: "#0B0D0F" }}
    >
      <div
        className={`${mono.className} relative w-full max-w-sm rounded-[28px] p-6 pt-10`}
        style={{
          background: "#1D2125",
          boxShadow: "0 0 100px 20px rgba(232,163,61,0.15), 0 20px 60px -20px rgba(0,0,0,0.7)",
        }}
      >
        {/* Photo */}
        <div className="flex flex-col items-center">
          <div
            className="w-28 h-28 rounded-full overflow-hidden border-2"
            style={{ borderColor: "#E8A33D" }}
          >
            <Image
              src="/card-photo.jpg"
              alt="Ashray Sikka"
              width={112}
              height={112}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <h1
            className={`${display.className} text-3xl font-bold mt-4`}
            style={{ color: "#F2F1EA" }}
          >
            Ashray Sikka
          </h1>
          <p
            className="text-sm mt-1"
            style={{ color: "#E8A33D" }}
          >
            Software Engineer · Healthcare Tech
          </p>

          {/* Save Contact */}
          <a
            href="/ashray-sikka.vcf"
            download
            className="mt-5 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #4F7CFF, #9B5CFF)",
              color: "#fff",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="7" r="4" />
              <path d="M19 8v6M22 11h-6" strokeLinecap="round" />
            </svg>
            Save Contact
          </a>
        </div>

        {/* divider */}
        <div
          className="my-6 border-t"
          style={{ borderColor: "#2A2F34" }}
        />

        {/* Data rows */}
        <div className="space-y-1">
          {rows.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 py-3 border-b transition hover:opacity-80"
              style={{ borderColor: "#22262A" }}
            >
              <span style={{ color: "#8B9198" }}>{r.icon}</span>
              <span className="text-sm" style={{ color: "#8B9198" }}>
                {r.label}
              </span>
              <span
                className="text-xs ml-auto truncate"
                style={{ color: "#F2F1EA" }}
              >
                {r.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}