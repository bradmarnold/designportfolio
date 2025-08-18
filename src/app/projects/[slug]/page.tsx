import Image from "next/image";
import { getProjectBySlug } from "../_data";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return <main className="container mx-auto p-6">Not found</main>;
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.summary}</p>

      {project.gallery?.length ? (
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          {project.gallery.map((src, i) => (
            <div key={i} className="relative w-full h-64">
              <Image
                src={src}
                alt={`${project.title} image ${i + 1}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-72 mb-8">
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill
            sizes="100vw"
            className="object-cover rounded-md"
          />
        </div>
      )}

      <article className="prose prose-neutral max-w-none">
        {project.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </article>
    </main>
  );
}
