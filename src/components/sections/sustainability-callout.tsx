'use client'

import { motion } from 'framer-motion'
import { Leaf, Zap, Recycle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

export function SustainabilityCallout() {
  return (
    <section className="py-24 sm:py-32 bg-brand-yellow-50/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Sustainability through Lasers"
          subtitle="Reducing waste in natural fiber garment workflows through precision cutting and smart pattern nesting."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Precision Cutting</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Laser cutting provides clean edges on natural fibers, reducing fraying and waste from traditional cutting methods.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow">
                  <Recycle className="h-8 w-8 text-black" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Smart Nesting</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Algorithmic pattern nesting maximizes fabric utilization, fitting more pieces per yard and minimizing offcuts.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow">
                  <Leaf className="h-8 w-8 text-black" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Offcut Reuse</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Remnants become pocket bags, reinforcements, or small accessories, achieving near-zero waste in student projects.
                </p>
              </div>
            </div>
            
            <div className="mt-12 rounded-lg border-l-4 border-brand-yellow bg-brand-yellow-50/50 p-6">
              <p className="text-foreground">
                Laser cutting reduces waste by nesting pattern pieces tightly. Natural fibers cut cleanly 
                and handle well in class kits, making it easier for students to achieve professional results 
                while learning sustainable design practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}