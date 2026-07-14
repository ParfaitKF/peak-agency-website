'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { workCategories, type WorkCategory } from '@/lib/work'

function CategoryCard({ category, index }: { category: WorkCategory; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/work/${category.slug}`}
        className="portfolio-card group relative block rounded-2xl overflow-hidden bg-peak-surface border border-peak-surface3 cursor-pointer"
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="portfolio-img w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-peak-black via-peak-black/60 to-transparent flex flex-col justify-end p-6">
          <span className={`${category.tagColor} text-xs font-semibold tracking-widest uppercase mb-2`}>
            {category.works?.length ? `${category.works.length} projects` : 'Portfolio'}
          </span>
          <h3 className="font-display font-bold text-xl text-peak-white mb-2 flex items-center gap-2">
            {category.title}
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </h3>
          <p className="text-peak-gray text-sm">{category.tagline}</p>
        </div>
      </Link>
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
              What We Do
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-peak-white">
              Explore Our Work
            </h2>
          </div>
          <p className="text-peak-gray max-w-md mt-4 md:mt-0">
            Pick a service to explore the client projects we have realized in that area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCategories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
