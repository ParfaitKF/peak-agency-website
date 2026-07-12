'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We start with your business, audience, and objectives. No assumptions. Only insight.',
    line: 'from-peak-accent to-peak-accent2',
  },
  {
    number: '02',
    title: 'Think',
    description: 'We define the right creative direction — one that aligns strategy with visual impact.',
    line: 'from-peak-accent2 to-peak-accent3',
  },
  {
    number: '03',
    title: 'Create',
    description: 'We transform strategy into powerful visual assets that communicate with precision.',
    line: 'from-peak-accent3 to-orange-500',
  },
  {
    number: '04',
    title: 'Elevate',
    description: 'We refine every detail until the result strengthens your image and exceeds expectations.',
    line: 'from-orange-500 to-peak-accent',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="number-glow font-display font-bold text-8xl text-peak-white leading-none mb-4">
        {step.number}
      </div>
      <div className={`w-12 h-1 bg-gradient-to-r ${step.line} rounded-full mb-6`} />
      <h3 className="font-display font-bold text-2xl text-peak-white mb-3">{step.title}</h3>
      <p className="text-peak-gray text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  )
}

export default function ApproachSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="approach" className="relative py-32 bg-peak-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-peak-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-peak-white">
            More than design.
            <br />
            <span className="gradient-text">We solve problems.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
