import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Tag } from '@/components/ui/tag'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  slug: string
  summary: string
  image: string
  tags: string[]
  className?: string
}

export function ProjectCard({ 
  title, 
  slug, 
  summary, 
  image, 
  tags, 
  className 
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={cn("group block", className)}>
      <div className="overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-lg hover:border-brand-yellow/50">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Tag key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-yellow-600 transition-colors">
            {title}
          </h3>
          
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {summary}
          </p>
          
          <div className="mt-4 flex items-center text-sm font-medium text-brand-yellow-600 group-hover:text-brand-yellow-700">
            Read case study
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}