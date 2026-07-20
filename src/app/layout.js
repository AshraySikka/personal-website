import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashray Sikka | Software Engineer",
  description: "Software Engineer building APIs, PWAs, and AI-integrated systems.",
  metadataBase: new URL("https://ashraysikka.com"),
  openGraph: {
    title: "Ashray Sikka | Software Engineer",
    description: "Software Engineer building APIs, PWAs, and AI-integrated systems.",
    url: "https://ashraysikka.com",
    siteName: "Ashray Sikka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashray Sikka | Software Engineer",
    description: "Software Engineer building APIs, PWAs, and AI-integrated systems.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}