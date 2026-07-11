'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 bg-peak-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-peak-accent/10 to-peak-accent2/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-peak-white mb-6 leading-tight">
          Your brand shouldn't
          <br />
          look <span className="gradient-text">smaller</span> than
          <br />
          your ambition.
        </h2>
        <p className="text-peak-gray text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Let's build something that reflects where you're going, not where you've been.
        </p>
        <a href="#contact" className="btn-primary inline-block px-10 py-5 rounded-full text-lg font-semibold text-white">
          Start a Project
        </a>
      </motion.div>
    </section>
  )
}
