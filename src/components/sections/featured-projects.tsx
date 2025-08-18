'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { ProjectCard } from '@/components/ui/project-card'

const featuredProjects = [
  {
    title: 'Button-fly 501 Pattern Recreation',
    slug: '501s',
    summary: 'Drafting standard American jeans with historical research, button fly details, and sustainable laser cutting.',
    image: '/images/projects/501s-cover.svg',
    tags: ['Pattern Design', 'Sustainability', 'Research'],
  },
  {
    title: 'Type 3 Denim Jacket Pattern',
    slug: 'type3-jacket',
    summary: 'Armscye sizing, yoke details, and historical references for the iconic Type 3 silhouette.',
    image: '/images/projects/type3-cover.svg',
    tags: ['Pattern Design', 'Research', 'Fabrication'],
  },
  {
    title: 'Seamly2D Web App',
    slug: 'seamly-web',
    summary: 'Web-based pattern drafting tool for students without laptops, built for quick classroom access.',
    image: '/images/projects/seamly-cover.svg',
    tags: ['Web Tools', 'Education', 'Volunteer Teaching'],
  },
  {
    title: 'Aquaponics Sensor Suite with AI Coach',
    slug: 'aquaponics-sensors',
    summary: 'pH, TDS, and temperature monitoring with AI feeding recommendations for optimal fish and plant health.',
    image: '/images/projects/aquaponics-cover.svg',
    tags: ['Sensors', 'Fabrication', 'Research'],
  },
  {
    title: 'Cloud Chamber with Wood Base',
    slug: 'cloud-chamber',
    summary: 'Particle physics demonstration tool with wooden base for improved thermal insulation.',
    image: '/images/projects/cloud-chamber-cover.svg',
    tags: ['Fabrication', 'Research', 'Education'],
  },
  {
    title: 'CNC Spatulas and Burger Press',
    slug: 'cnc-spatula-press',
    summary: 'CAD-designed kitchen tools machined with CNC precision, finished by hand for local DFW sales.',
    image: '/images/projects/cnc-tools-cover.svg',
    tags: ['Fabrication', 'CNC', 'Product Design'],
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of recent work spanning pattern design, fabrication, teaching tools, and research projects."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md border border-brand-yellow bg-background px-6 py-3 text-sm font-medium text-brand-yellow-600 transition-colors hover:bg-brand-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}