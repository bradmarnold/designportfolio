import Link from "next/link";
import Image from "next/image";
import { projects } from "./_data";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}/`}
            className="block border rounded-xl p-4 hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-yellow-600"
          >
            <div className="w-full h-44 relative mb-3 overflow-hidden rounded-md">
              <Image
                src={p.image}
                alt={`${p.title} cover`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-medium">{p.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{p.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs bg-brand-yellow-50 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
