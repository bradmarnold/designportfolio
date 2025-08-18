// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects/_data";

export default function Home() {
  const featured = projects.slice(0, 6);

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="py-10">
        <p className="text-sm tracking-wide uppercase text-gray-500">designportfolio</p>
        <h1 className="text-4xl md:text-5xl font-semibold mt-2">
          Bradford Arnold Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Pattern design, fabrication, and teaching. Sustainable laser workflows,
          a Seamly2D web tool for students, an aquaponics sensor suite with an AI coach,
          and a cloud chamber with a wood base for better insulation.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/projects/"
            className="inline-block rounded-xl bg-brand-yellow px-4 py-2 font-medium hover:bg-brand-yellow-600 focus:outline-none focus:ring-2 focus:ring-brand-yellow-600"
          >
            View projects
          </Link>
          <a
            href="mailto:bradfordm.arnold@gmail.com"
            className="inline-block rounded-xl border px-4 py-2 font-medium hover:bg-brand-yellow-50 focus:outline-none focus:ring-2 focus:ring-brand-yellow-600"
          >
            Hire for tutoring
          </a>
        </div>
      </section>

      {/* Featured projects */}
      <section classN
