export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="h-1 w-12 bg-brand-yellow rounded-full mb-3" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="text-zinc-600 dark:text-zinc-400 mt-1">{subtitle}</p>}
    </div>
  );
}