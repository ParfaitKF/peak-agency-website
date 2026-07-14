'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Brand Identity',
    description: 'Logos, visual identities, and brand systems built to create recognition and trust across every touchpoint.',
    image: '/images/brand-identity.jpg',
    glow: 'from-peak-accent/10',
  },
  {
    title: 'Creative Communication',
    description: 'Flyers, campaigns, social media visuals, brochures, and communication assets that speak with clarity.',
    image: '/images/creative-communication.jpg',
    glow: 'from-peak-accent2/10',
  },
  {
    title: 'Web Experiences',
    description: 'Modern websites and landing pages focused on clarity, credibility, and conversion.',
    image: '/images/web-experiences.jpg',
    glow: 'from-peak-accent3/10',
  },
  {
    title: 'UX/UI Design',
    description: 'User-centered interfaces and digital product experiences that delight and convert.',
    image: '/images/ux-ui-design.jpg',
    glow: 'from-orange-500/10',
  },
  {
    title: 'Presentations',
    description: 'Professional pitch decks, corporate presentations, and strategic documents that close deals.',
    image: '/images/presentations.jpg',
    glow: 'from-pink-500/10',
  },
  {
    title: 'Video & Motion',
    description: 'Video editing, motion design, and visual storytelling that captures attention and drives emotion.',
    image: '/images/video-motion.jpg',
    glow: 'from-cyan-500/10',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card group rounded-2xl bg-peak-surface border border-peak-surface3 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.glow} to-transparent rounded-full -translate-y-1/2 translate-x-1/2 z-10`} />
      <div className="aspect-video overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="font-display font-bold text-xl text-peak-white mb-3">{service.title}</h3>
        <p className="text-peak-gray text-sm leading-relaxed">{service.description}</p>
      </div>
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
