import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Calendar, Tag as TagIcon } from 'lucide-react'
import { Tag } from '@/components/ui/tag'
import { Button } from '@/components/ui/button'

const projectData = {
  '501s': {
    title: 'Button-fly 501 Pattern Recreation',
    summary: 'Drafting standard American jeans with historical research, button fly details, and sustainable laser cutting.',
    date: '2024-01-15',
    tags: ['Pattern Design', 'Sustainability', 'Research'],
    roles: ['Pattern Designer', 'Researcher', 'Fabricator'],
    tools: ['CAD Software', 'Laser Cutter', 'Historical Archives'],
    cover: '/images/projects/501s-cover.svg',
    gallery: [
      '/images/projects/501s-pattern.svg',
      '/images/projects/501s-laser.svg',
      '/images/projects/501s-finished.svg'
    ],
    links: [
      { title: 'Pattern Files', url: '#', type: 'download' },
      { title: 'Research Notes', url: '#', type: 'external' }
    ],
    content: `
# Button-fly 501s Pattern Recreation

## Overview

This project focused on recreating the classic Levi's 501 button-fly jeans pattern through historical research and modern CAD techniques. The goal was to understand the construction methods that made these jeans iconic while incorporating sustainable laser cutting practices.

## Historical Research

The 501 jeans were first introduced in the 1870s and became the template for modern denim. Key features include:

- **Button fly construction** - More durable than zipper alternatives
- **Riveted stress points** - Preventing pocket tears at stress locations  
- **Straight leg silhouette** - Timeless cut that works across body types
- **Heavy denim weight** - 14-16oz denim for durability

## Pattern Development

Working from historical examples and measurements, I recreated the pattern using modern CAD software. Special attention was paid to:

- **Accurate pocket bag construction** - Internal pocketing that maintains structure
- **Proper seam allowances** - Accounting for felled seams and chain stitching
- **Button fly mechanics** - Ensuring proper overlap and button placement
- **Grading for different sizes** - Maintaining proportions across the size range

## Sustainability Focus

Laser cutting reduces waste by nesting pattern pieces tightly. Natural fibers cut cleanly and handle well in class kits, allowing students to achieve professional results while minimizing fabric waste.

### Waste Reduction Strategies

- **Optimized nesting** - Algorithmic pattern layout reduces waste by 25-40%
- **Offcut utilization** - Small pieces become pocket bags and reinforcements
- **Clean cutting** - Laser edges require minimal finishing

## Next Steps

- Refine grading across a broader size range
- Develop a complete class kit with materials and instructions
- Create video tutorials for key construction techniques
- Publish pattern files for educational use

## Results

The recreated pattern successfully captures the essence of the original 501s while incorporating modern sustainable practices. Students can now learn historical construction techniques using contemporary tools and methods.
    `
  },
  'type3-jacket': {
    title: 'Type 3 Denim Jacket Pattern',
    summary: 'Armscye sizing, yoke details, and historical references for the iconic Type 3 silhouette.',
    date: '2024-02-20',
    tags: ['Pattern Design', 'Research', 'Fabrication'],
    roles: ['Pattern Designer', 'Historical Researcher'],
    tools: ['CAD Software', 'Denim Archives', 'Fit Testing'],
    cover: '/images/projects/type3-cover.svg',
    content: `
# Type 3 Denim Jacket Pattern

The Type 3 denim jacket represents the pinnacle of mid-century American workwear design. This project recreates the iconic silhouette with attention to historical accuracy and modern fit requirements.

## Historical Context

Introduced in the 1960s, the Type 3 jacket featured several innovations over earlier designs:
- Improved armscye construction for better mobility
- Refined proportions and pocket placement
- Enhanced durability through strategic seam placement

## Pattern Features

- **Precision armscye** - Allows full range of motion without binding
- **Classic yoke construction** - Traditional Western styling elements
- **Accurate proportions** - Based on vintage examples and measurements

## Next Steps

- Complete muslin testing across size range
- Finalize construction documentation
- Prepare for class instruction
    `
  }
}

interface Params {
  slug: string
}

interface PageProps {
  params: Promise<Params>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link 
          href="/projects"
          className="inline-flex items-center text-sm text-gray-600 hover:text-brand-yellow-600 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-serif">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {project.summary}
          </p>

          {/* Meta information */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(project.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            {project.roles && (
              <div>
                <strong>Roles:</strong> {project.roles.join(', ')}
              </div>
            )}
            {project.tools && (
              <div>
                <strong>Tools:</strong> {project.tools.join(', ')}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <Tag key={tag} variant="yellow">
                {tag}
              </Tag>
            ))}
          </div>

          {/* Links */}
          {'links' in project && project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <Button key={index} variant="outline" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {link.title}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Cover Image */}
        <div className="mb-12">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: project.content.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/# /g, '<h1>') 
            }} 
          />
        </div>

        {/* Gallery */}
        {'gallery' in project && project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }))
}