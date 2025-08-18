'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function PullQuote() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 h-8 w-8 text-brand-yellow/30" />
            <blockquote className="text-2xl sm:text-3xl font-serif italic text-foreground leading-relaxed">
              "I would love to use your resources to help teach more students to design denim 
              with historical drafting techniques while embracing the efficiency of modern automation."
            </blockquote>
            <Quote className="absolute -bottom-4 -right-4 h-8 w-8 text-brand-yellow/30 rotate-180" />
          </div>
          
          <div className="mt-8">
            <div className="w-24 h-0.5 bg-brand-yellow mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}