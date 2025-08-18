import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="w-12 h-0.5 bg-brand-yellow mx-auto mb-6" />
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}