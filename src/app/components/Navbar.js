export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-sky-400/20 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-white hover:text-sky-400 transition-colors">
          Ashray Sikka
        </a>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 underline transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}