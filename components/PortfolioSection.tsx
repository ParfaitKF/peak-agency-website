'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Share2, Globe, FileText, Smartphone, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Nova Tech Rebrand',
    category: 'Brand Identity',
    description: 'Complete visual identity overhaul for a leading tech startup in West Africa.',
    icon: Palette,
    gradient: 'from-peak-accent to-peak-accent2',
    bgGradient: 'from-peak-accent/20 to-peak-accent2/20',
    tagColor: 'text-peak-accent',
  },
  {
    title: 'AfriConnect Launch',
    category: 'Social Media Campaign',
    description: 'Viral social media campaign generating 2M+ impressions across platforms.',
    icon: Share2,
    gradient: 'from-peak-accent2 to-peak-accent3',
    bgGradient: 'from-peak-accent2/20 to-peak-accent3/20',
    tagColor: 'text-peak-accent2',
  },
  {
    title: 'Kora Finance Platform',
    category: 'Website Design',
    description: 'Premium fintech platform with seamless UX and conversion-focused design.',
    icon: Globe,
    gradient: 'from-peak-accent3 to-peak-accent',
    bgGradient: 'from-peak-accent3/20 to-peak-accent/20',
    tagColor: 'text-peak-accent3',
  },
  {
    title: 'Summit Africa Deck',
    category: 'Presentation Design',
    description: 'Investor pitch deck that helped secure $4.2M in Series A funding.',
    icon: FileText,
    gradient: 'from-peak-accent to-pink-500',
    bgGradient: 'from-peak-accent/20 to-pink-500/20',
    tagColor: 'text-pink-400',
  },
  {
    title: 'MediHealth App',
    category: 'UX/UI Design',
    description: 'Healthcare app interface with 200K+ active users across Africa.',
    icon: Smartphone,
    gradient: 'from-peak-accent2 to-orange-500',
    bgGradient: 'from-peak-accent2/20 to-orange-500/20',
    tagColor: 'text-orange-400',
  },
  {
    title: 'EcoFuture Initiative',
    category: 'Creative Campaign',
    description: 'Award-winning environmental campaign with integrated digital experience.',
    icon: Sparkles,
    gradient: 'from-peak-accent3 to-cyan-500',
    bgGradient: 'from-peak-accent3/20 to-cyan-500/20',
    tagColor: 'text-cyan-400',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="portfolio-card group relative rounded-2xl overflow-hidden bg-peak-surface border border-peak-surface3 cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <div className={`portfolio-img w-full h-full bg-gradient-to-br ${project.bgGradient} flex items-center justify-center`}>
          <div className="text-center p-8">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-peak-gray text-sm font-medium">{project.category}</span>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-peak-black via-peak-black/80 to-transparent flex flex-col justify-end p-6">
        <span className={`${project.tagColor} text-xs font-semibold tracking-widest uppercase mb-2`}>
          {project.category}
        </span>
        <h3 className="font-display font-bold text-xl text-peak-white mb-2">{project.title}</h3>
        <p className="text-peak-gray text-sm">{project.description}</p>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="work" className="relative py-32 bg-peak-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-peak-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-peak-white">
              Selected Work
            </h2>
          </div>
          <p className="text-peak-gray max-w-md mt-4 md:mt-0">
            Projects that define our creative vision and demonstrate our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
