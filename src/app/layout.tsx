import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Bradford Arnold — Portfolio",
  description: "Pattern design, fabrication, and teaching",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <header className="border-b border-zinc-200/60 dark:border-zinc-800/80">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Bradford Arnold
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/projects/" className="hover:underline underline-offset-4">Projects</Link>
              <Link href="/teaching/" className="hover:underline underline-offset-4">Teaching</Link>
              <Link href="/about/" className="hover:underline underline-offset-4">About</Link>
              <a
                href="mailto:bradfordm.arnold@gmail.com"
                className="rounded-xl bg-brand-yellow px-4 py-2 font-medium text-black hover:bg-brand-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow-600"
              >
                Hire for tutoring
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-zinc-200/60 dark:border-zinc-800/80">
          <div className="container py-8 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Bradford Arnold</p>
              <p>
                Contact:{" "}
                <a className="underline underline-offset-4" href="mailto:bradfordm.arnold@gmail.com">
                  bradfordm.arnold@gmail.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}