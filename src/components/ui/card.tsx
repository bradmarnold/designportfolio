export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white dark:bg-zinc-900
                     shadow-soft transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,.12)]
                     focus-within:ring-2 focus-within:ring-brand-yellow-600 ${className}`}>
      {children}
    </div>
  );
}