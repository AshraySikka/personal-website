export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-12 text-center border-t border-zinc-800">
      <p className="text-sm text-zinc-500">
        Also on{" "}
        <a
          href="https://www.upwork.com/freelancers/~01c9226fe482f64a25"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-300"
        >
          Upwork
        </a>
      </p>
      <p className="mt-2 text-xs text-zinc-600">
        © {new Date().getFullYear()} Ashray Sikka
      </p>
    </footer>
  );
}