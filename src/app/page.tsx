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
      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}/`}
              className="block border rounded-xl p-4 hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-yellow-600"
            >
              <div className="w-full h-44 relative mb-3 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-brand-yellow-50 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
