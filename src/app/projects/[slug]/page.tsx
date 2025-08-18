import Image from "next/image";
import { projects, getProjectBySlug } from "../_data";
import { Tag } from "@/components/ui/tag";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return <main className="container py-12">Not found</main>;

  return (
    <main>
      <div className="relative h-64 w-full border-b">
        <Image src={p.image} alt={`${p.title} cover`} fill className="object-cover" />
      </div>
      <div className="container py-10">
        <h1 className="text-3xl font-semibold">{p.title}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{p.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>

        <article className="prose prose-zinc dark:prose-invert mt-8 max-w-none">
          {p.content.split("\n").map((line, i) => <p key={i}>{line}</p>)}
        </article>

        {p.gallery?.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {p.gallery.map((src, i) => (
              <div key={i} className="relative h-56 w-full overflow-hidden rounded-xl border">
                <Image src={src} alt={`${p.title} image ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}
