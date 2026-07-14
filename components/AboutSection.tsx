'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 bg-peak-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-peak-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-peak-white mb-8">
              Built to raise
              <br />
              <span className="gradient-text">the standard.</span>
            </h2>
            <div className="space-y-6 text-peak-gray leading-relaxed">
              <p>
                Peak Agency is a creative agency founded in Cameroon with a global vision. We work with ambitious businesses and organizations that understand one thing: how you present your ideas matters.
              </p>
              <p>
                Our mission is simple — create visual and digital experiences that elevate brands, strengthen credibility, and help businesses communicate at a higher level.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {['Cameroon', 'Global Reach', 'Since 2019'].map((tag) => (
                <div
                  key={tag}
                  className="px-5 py-3 rounded-full bg-peak-surface border border-peak-surface3 text-peak-white text-sm font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-peak-surface to-peak-surface2 border border-peak-surface3 p-8 flex items-center justify-center">
              <div className="text-center">
                <img src="/favicon.png" alt="Peak Agency" className="w-40 h-40 mx-auto mb-6 object-contain" />
                <h3 className="font-display font-bold text-3xl text-peak-white mb-2">PEAK AGENCY</h3>
                <p className="text-peak-accent text-sm font-medium tracking-widest uppercase">Creative Studio</p>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-peak-accent" />
                  <div className="w-3 h-3 rounded-full bg-peak-accent2" />
                  <div className="w-3 h-3 rounded-full bg-peak-accent3" />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-peak-surface3 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-peak-surface3 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
