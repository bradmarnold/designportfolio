'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      {/* Yellow accent line */}
      <div className="absolute top-24 left-1/4 w-32 h-0.5 bg-brand-yellow rotate-12" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
          >
            Design, fabrication, and teaching,{' '}
            <span className="text-brand-yellow">with a love for useful things</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto"
          >
            From pattern design and sustainable laser workflows to aquaponics sensors, 
            cloud chambers, and student tools—I create practical solutions that bridge 
            traditional craftsmanship with modern automation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button
              asChild
              className="bg-brand-yellow hover:bg-brand-yellow-600 text-black font-semibold"
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-brand-yellow text-brand-yellow-600 hover:bg-brand-yellow hover:text-black"
            >
              <Link href="/contact">
                <BookOpen className="mr-2 h-4 w-4" />
                Book Tutoring
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}