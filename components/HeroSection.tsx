'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '12+', label: 'Countries Served' },
  { value: '6', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mountain Background */}
      <div className="absolute inset-0 bg-peak-black">
        <img
          src="/peak.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-peak-black via-peak-black/70 to-peak-black/30" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,transparent_70%)] blur-[80px] animate-float" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(10,150,250,0.12)_0%,transparent_70%)] blur-[80px] animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.08)_0%,transparent_70%)] blur-[80px] animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-peak-accent rounded-full opacity-40 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-peak-accent2 rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 bg-peak-accent3 rounded-full opacity-50 animate-float" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peak-surface border border-peak-surface3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-peak-gray text-sm font-medium">Available for new projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
        >
          We elevate brands
          <br />
          <span className="gradient-text">that refuse to look</span>
          <br />
          average.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-peak-gray text-lg md:text-xl leading-relaxed mb-12"
        >
          Peak Agency helps ambitious businesses turn ideas into powerful visual experiences, digital products, and communication assets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary px-8 py-4 rounded-full text-base font-semibold text-white w-full sm:w-auto text-center">
            Start a Project
          </a>
          <a href="#work" className="btn-secondary px-8 py-4 rounded-full text-base font-semibold text-peak-white w-full sm:w-auto text-center">
            Explore Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text">{stat.value}</div>
              <div className="text-peak-gray2 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-peak-gray2 animate-bounce" />
      </motion.div>
    </section>
  )
}
