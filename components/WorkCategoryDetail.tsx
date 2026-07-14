'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Eye } from 'lucide-react'
import type { WorkCategory, WorkItem } from '@/lib/work'
import ProjectModal from './ProjectModal'

function WorkCard({
  work,
  index,
  tagColor,
  onView,
}: {
  work: WorkItem
  index: number
  tagColor: string
  onView: (work: WorkItem) => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className="portfolio-card group rounded-2xl overflow-hidden bg-peak-surface border border-peak-surface3"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="portfolio-img w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-3">
          <span className={`${tagColor} text-xs font-semibold tracking-widest uppercase`}>
            {work.client}
          </span>
          <span className="text-peak-gray text-xs font-medium">{work.year}</span>
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl text-peak-white mb-3">
          {work.title}
        </h3>
        <p className="text-peak-gray text-sm leading-relaxed mb-5">{work.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium text-peak-gray bg-peak-surface3/60 border border-peak-surface3"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onView(work)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-peak-white bg-peak-surface3/60 border border-peak-surface3 hover:border-peak-accent hover:text-peak-accent transition-colors"
        >
          <Eye className="w-4 h-4" />
          See Project
        </button>
      </div>
    </motion.div>
  )
}

function ServiceItem({
  service,
  index,
  gradient,
}: {
  service: WorkCategory['services'][0]
  index: number
  gradient: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="service-card flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-peak-surface border border-peak-surface3"
    >
      <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <Check className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-display font-bold text-lg md:text-xl text-peak-white mb-2">
          {service.title}
        </h3>
        <p className="text-peak-gray text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  )
}

export default function WorkCategoryDetail({ category }: { category: WorkCategory }) {
  const hasWorks = !!category.works?.length
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  return (
    <>
      <section className="relative pt-32 pb-16 bg-peak-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-peak-black/60 via-peak-black/80 to-peak-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-peak-gray hover:text-peak-white transition-colors text-sm font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all services
            </Link>
            <span className={`${category.tagColor} text-sm font-semibold tracking-widest uppercase mb-4 block`}>
              {hasWorks ? 'Selected Work' : 'Our Services'}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-peak-white mb-6">
              {category.title}
            </h1>
            <p className="text-peak-gray text-lg max-w-2xl">
              {hasWorks
                ? `A selection of ${category.title.toLowerCase()} projects we have realized for our clients.`
                : category.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-peak-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {hasWorks ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {category.works!.map((work, index) => (
                <WorkCard
                  key={work.title}
                  work={work}
                  index={index}
                  tagColor={category.tagColor}
                  onView={setSelectedWork}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, index) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  index={index}
                  gradient={category.gradient}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-peak-gray mb-6">
              {hasWorks
                ? 'Want results like these for your brand?'
                : "Need something from this category? Let's talk about your project."}
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedWork && (
          <ProjectModal
            work={selectedWork}
            tagColor={category.tagColor}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
