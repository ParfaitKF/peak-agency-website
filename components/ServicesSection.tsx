'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Megaphone, Globe, Smartphone, FileText, Video } from 'lucide-react'

const services = [
  {
    title: 'Brand Identity',
    description: 'Logos, visual identities, and brand systems built to create recognition and trust across every touchpoint.',
    icon: Palette,
    gradient: 'from-peak-accent to-peak-accent2',
    glow: 'from-peak-accent/10',
  },
  {
    title: 'Creative Communication',
    description: 'Flyers, campaigns, social media visuals, brochures, and communication assets that speak with clarity.',
    icon: Megaphone,
    gradient: 'from-peak-accent2 to-peak-accent3',
    glow: 'from-peak-accent2/10',
  },
  {
    title: 'Web Experiences',
    description: 'Modern websites and landing pages focused on clarity, credibility, and conversion.',
    icon: Globe,
    gradient: 'from-peak-accent3 to-cyan-500',
    glow: 'from-peak-accent3/10',
  },
  {
    title: 'UX/UI Design',
    description: 'User-centered interfaces and digital product experiences that delight and convert.',
    icon: Smartphone,
    gradient: 'from-purple-500 to-peak-accent2',
    glow: 'from-purple-500/10',
  },
  {
    title: 'Presentations',
    description: 'Professional pitch decks, corporate presentations, and strategic documents that close deals.',
    icon: FileText,
    gradient: 'from-pink-500 to-peak-accent',
    glow: 'from-pink-500/10',
  },
  {
    title: 'Video & Motion',
    description: 'Video editing, motion design, and visual storytelling that captures attention and drives emotion.',
    icon: Video,
    gradient: 'from-cyan-500 to-peak-accent3',
    glow: 'from-cyan-500/10',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card group p-8 rounded-2xl bg-peak-surface border border-peak-surface3 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.glow} to-transparent rounded-full -translate-y-1/2 translate-x-1/2`} />
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-display font-bold text-xl text-peak-white mb-3">{service.title}</h3>
      <p className="text-peak-gray text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default function ServicesSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 bg-peak-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-peak-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-peak-white">
            Capabilities that
            <br />
            <span className="gradient-text">drive results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
