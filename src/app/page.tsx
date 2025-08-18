import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects/_data";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { SectionHeader } from "@/components/ui/section-header";

export default function Home() {
  const featured = projects.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative border-b border-zinc-200/60 dark:border-zinc-800/80 hero-bg">
        <div className="container py-16">
          <p className="text-sm tracking-wide uppercase text-zinc-500">Portfolio</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
            Design, fabrication, and teaching
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Classic American pattern work (501s, Type 3), sustainable laser workflows, a Seamly2D web helper,
            an aquaponics sensor coach, and a wood-base cloud chamber for better insulation.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects/" className="rounded-xl bg-brand-yellow px-4 py-2 font-medium text-black hover:bg-brand-yellow-600">
              View projects
            </Link>
            <a href="mailto:bradfordm.arnold@gmail.com" className="rounded-xl border px-4 py-2 font-medium hover:bg-brand-yellow-50">
              Hire for tutoring
            </a>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container py-12">
        <SectionHeader title="Featured projects" subtitle="A few current favorites" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}/`} className="focus:outline-none">
              <Card className="overflow-hidden transition-transform hover:-translate-y-0.5">
                <div className="relative h-44 w-full">
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
        <div className="mt-6">
          <Link href="/projects/" className="underline underline-offset-4">See all projects</Link>
        </div>
      </section>

      {/* Sustainability callout */}
      <section className="bg-brand-yellow-50 border-y border-zinc-200/60 dark:border-zinc-800/80">
        <div className="container py-10">
          <SectionHeader title="Sustainability through lasers" />
          <p className="max-w-3xl text-zinc-700 dark:text-zinc-300">
            Laser cutting reduces waste with tight nesting on natural fibers. Offcuts are predictable and useful in class kits.
          </p>
        </div>
      </section>

      {/* Teaching CTA */}
      <section className="container py-12">
        <SectionHeader title="Teaching and practice" subtitle="A simple practice flow with per unit analytics" />
        <div className="rounded-2xl border p-6">
          <p className="text-zinc-600 dark:text-zinc-400">Try the demo test runner with arrow navigation and saved progress.</p>
          <Link href="/teaching/" className="mt-4 inline-block rounded-xl bg-brand-yellow px-4 py-2 font-medium text-black hover:bg-brand-yellow-600">Open test demo</Link>
        </div>
      </section>
    </div>
  );
}
