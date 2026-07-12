'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Star, Layers, Globe } from 'lucide-react'

const reasons = [
  {
    title: 'Strategic Thinking',
    description: "We don't design blindly. We understand the problem first, then craft solutions that serve your business goals.",
    icon: Lightbulb,
    gradient: 'from-peak-accent/20 to-peak-accent2/20',
    hoverGradient: 'from-peak-accent to-peak-accent2',
    iconColor: 'text-peak-accent',
  },
  {
    title: 'High Creative Standards',
    description: 'Every detail contributes to how your brand is perceived. We obsess over craft and never settle for good enough.',
    icon: Star,
    gradient: 'from-peak-accent2/20 to-peak-accent3/20',
    hoverGradient: 'from-peak-accent2 to-peak-accent3',
    iconColor: 'text-peak-accent2',
  },
  {
    title: 'Multidisciplinary Expertise',
    description: 'Branding, digital products, communication, and technology under one creative vision. One partner, endless possibilities.',
    icon: Layers,
    gradient: 'from-peak-accent3/20 to-cyan-500/20',
    hoverGradient: 'from-peak-accent3 to-cyan-500',
    iconColor: 'text-peak-accent3',
  },
  {
    title: 'Global Ambition',
    description: 'Built in Africa. Designed to compete globally. We bring world-class creative standards to every project we touch.',
    icon: Globe,
    gradient: 'from-orange-500/20 to-peak-accent/20',
    hoverGradient: 'from-orange-500 to-peak-accent',
    iconColor: 'text-orange-500',
  },
]

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = reason.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-8 rounded-2xl bg-peak-surface border border-peak-surface3 hover:border-peak-accent/30 transition-all duration-500"
    >
      <div className="flex items-start gap-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center flex-shrink-0 group-hover:${reason.hoverGradient} transition-all duration-500`}>
          <Icon className={`w-7 h-7 ${reason.iconColor} group-hover:text-white transition-colors duration-500`} />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-peak-white mb-2">{reason.title}</h3>
          <p className="text-peak-gray text-sm leading-relaxed">{reason.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyPeakSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="why" className="relative py-32 bg-peak-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-peak-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why Peak
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-peak-white">
            What sets us
            <br />
            <span className="gradient-text">apart</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
