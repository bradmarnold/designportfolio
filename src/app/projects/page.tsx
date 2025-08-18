import Link from "next/link";
import Image from "next/image";
import { projects } from "./_data";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { SectionHeader } from "@/components/ui/section-header";

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <SectionHeader title="All projects" subtitle="Filterable list coming later" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}/`}>
            <Card className="overflow-hidden hover:-translate-y-0.5 transition-transform">
              <div className="relative h-44">
                <Image src={p.image} alt={`${p.title} cover`} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
