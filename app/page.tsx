export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <div className="w-full max-w-3xl p-12">
        <h1 className="text-4xl font-bold text-black dark:text-white">Sagar — Portfolio</h1>
        <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
          Hi — I&apos;m Sagar. This is a minimal portfolio page. I build things and
          work on interesting projects.
        </p>

        <div className="mt-6 space-y-3">
          <a
            href="#work"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            • View work
          </a>
          <a
            href="#about"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            • About me
          </a>
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            • Contact
          </a>
        </div>

        <footer className="mt-12 text-sm text-zinc-600 dark:text-zinc-400">
          Built with Next.js — replace this with your details.
        </footer>
      </div>
    </main>
  );
}
