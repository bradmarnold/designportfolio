"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "./_data";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { SectionHeader } from "@/components/ui/section-header";

const ALL = "All";
const TAGS = [ALL, "Pattern Design", "Fabrication", "Sensors", "Web Tools", "Research"];

export default function ProjectsPage() {
  const [active, setActive] = useState(ALL);
  const list = active === ALL ? projects : projects.filter(p => p.tags.includes(active));

  return (
    <main className="container py-12">
      <SectionHeader title="All projects" subtitle="Browse by focus" />
      <div className="mb-6 flex flex-wrap gap-2">
        {TAGS.map(t => (
          <button key={t}
            onClick={() => setActive(t)}
            className={`rounded-full px-3 py-1 text-sm ${active===t ? "bg-brand-yellow text-black" : "bg-brand-yellow-50"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}/`}>
            <Card className="overflow-hidden">
              <div className="relative h-44"><Image src={p.image} alt={`${p.title} cover`} fill className="object-cover" /></div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
