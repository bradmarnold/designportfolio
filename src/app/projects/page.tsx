'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { ProjectCard } from '@/components/ui/project-card'
import { Tag } from '@/components/ui/tag'

const allProjects = [
  {
    title: 'Button-fly 501 Pattern Recreation',
    slug: '501s',
    summary: 'Drafting standard American jeans with historical research, button fly details, and sustainable laser cutting.',
    image: '/images/projects/501s-cover.svg',
    tags: ['Pattern Design', 'Sustainability', 'Research'],
    date: '2024-01-15',
  },
  {
    title: 'Type 3 Denim Jacket Pattern',
    slug: 'type3-jacket',
    summary: 'Armscye sizing, yoke details, and historical references for the iconic Type 3 silhouette.',
    image: '/images/projects/type3-cover.svg',
    tags: ['Pattern Design', 'Research', 'Fabrication'],
    date: '2024-02-20',
  },
  {
    title: 'Seamly2D Web App',
    slug: 'seamly-web',
    summary: 'Web-based pattern drafting tool for students without laptops, built for quick classroom access.',
    image: '/images/projects/seamly-cover.svg',
    tags: ['Web Tools', 'Education', 'Volunteer Teaching'],
    date: '2024-03-10',
  },
  {
    title: 'Aquaponics Sensor Suite with AI Coach',
    slug: 'aquaponics-sensors',
    summary: 'pH, TDS, and temperature monitoring with AI feeding recommendations for optimal fish and plant health.',
    image: '/images/projects/aquaponics-cover.svg',
    tags: ['Sensors', 'Fabrication', 'Research'],
    date: '2024-04-05',
  },
  {
    title: 'Cloud Chamber with Wood Base',
    slug: 'cloud-chamber',
    summary: 'Particle physics demonstration tool with wooden base for improved thermal insulation.',
    image: '/images/projects/cloud-chamber-cover.svg',
    tags: ['Fabrication', 'Research', 'Education'],
    date: '2024-05-12',
  },
  {
    title: 'CNC Spatulas and Burger Press',
    slug: 'cnc-spatula-press',
    summary: 'CAD-designed kitchen tools machined with CNC precision, finished by hand for local DFW sales.',
    image: '/images/projects/cnc-tools-cover.svg',
    tags: ['Fabrication', 'CNC', 'Product Design'],
    date: '2024-06-01',
  },
]

const allTags = [
  'Pattern Design',
  'Volunteer Teaching', 
  'Fabrication',
  'Sensors',
  'Research',
  'Web Tools',
  'Education',
  'Sustainability',
  'CNC',
  'Product Design'
]

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date')

  const filteredProjects = allProjects
    .filter(project => 
      selectedTags.length === 0 || 
      selectedTags.some(tag => project.tags.includes(tag))
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return a.title.localeCompare(b.title)
    })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="All Projects"
          description="A complete collection of my work in pattern design, fabrication, teaching tools, and research."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 space-y-6"
        >
          {/* Filter Tags */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Filter by topic:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="transition-all"
                >
                  <Tag 
                    variant={selectedTags.includes(tag) ? 'yellow' : 'outline'}
                    className="cursor-pointer hover:scale-105"
                  >
                    {tag}
                  </Tag>
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">Sort by:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('date')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  sortBy === 'date' 
                    ? 'bg-brand-yellow text-black' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Date
              </button>
              <button
                onClick={() => setSortBy('title')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  sortBy === 'title' 
                    ? 'bg-brand-yellow text-black' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Title
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-600">
            Showing {filteredProjects.length} of {allProjects.length} projects
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="ml-2 text-brand-yellow-600 hover:text-brand-yellow-700 underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center py-12"
          >
            <p className="text-gray-600">No projects match the selected filters.</p>
            <button
              onClick={() => setSelectedTags([])}
              className="mt-2 text-brand-yellow-600 hover:text-brand-yellow-700 underline"
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}