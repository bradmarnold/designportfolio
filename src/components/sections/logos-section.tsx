'use client'

import { motion } from 'framer-motion'

const logos = [
  {
    name: 'Cone Denim',
    description: 'Sponsorship Partner',
    logo: '/images/logos/cone-denim.svg',
  },
  {
    name: 'UTA FabLab',
    description: 'Teaching Partner',
    logo: '/images/logos/uta-fablab.svg',
  },
  {
    name: 'Tutoring Services',
    description: 'Educational Services',
    logo: '/images/logos/tutoring.svg',
  },
]

export function LogosSection() {
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
          <h3 className="text-lg font-semibold text-muted-foreground mb-12">
            Partnerships and Affiliations
          </h3>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {logos.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="h-16 w-32 bg-muted rounded-lg flex items-center justify-center">
                  {/* Placeholder for logos - will be replaced with actual SVGs */}
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}