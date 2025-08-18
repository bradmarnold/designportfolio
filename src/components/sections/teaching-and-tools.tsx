'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Target } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'

export function TeachingAndTools() {
  return (
    <section className="py-24 sm:py-32 bg-brand-yellow-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Teaching and Tools"
          description="Creating educational resources and interactive learning experiences for students."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow">
                    <Target className="h-6 w-6 text-black" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    Unit-based Analytics Testing Demo
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    An interactive Khan Academy-style testing interface with question navigation, 
                    progress tracking, and analytics. Built to help students practice and track 
                    their learning progress efficiently.
                  </p>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <Button
                      asChild
                      className="bg-brand-yellow hover:bg-brand-yellow-600 text-black"
                    >
                      <Link href="/teaching">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Try Demo
                      </Link>
                    </Button>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Live and interactive
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between rounded-lg bg-background/50 p-4">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Features:</span>
                    <span className="text-muted-foreground ml-2">
                      Arrow key navigation • Progress tracking • Timed sessions
                    </span>
                  </div>
                </div>
                
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}