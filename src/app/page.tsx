import { Hero } from '@/components/sections/hero'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { TeachingAndTools } from '@/components/sections/teaching-and-tools'
import { PullQuote } from '@/components/sections/pull-quote'
import { SustainabilityCallout } from '@/components/sections/sustainability-callout'
import { LogosSection } from '@/components/sections/logos-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <TeachingAndTools />
      <PullQuote />
      <SustainabilityCallout />
      <LogosSection />
    </div>
  )
}