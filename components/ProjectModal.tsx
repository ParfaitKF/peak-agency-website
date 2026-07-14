'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { WorkItem } from '@/lib/work'

export default function ProjectModal({
  work,
  tagColor,
  onClose,
}: {
  work: WorkItem
  tagColor: string
  onClose: () => void
}) {
  const media = work.gallery && work.gallery.length ? work.gallery : [work.image]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const next = () => setIndex((i) => (i + 1) % media.length)
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-peak-surface border border-peak-surface3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-peak-black/60 hover:bg-peak-black flex items-center justify-center text-peak-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video bg-peak-black">
          {work.video ? (
            <video src={work.video} controls className="w-full h-full object-contain" />
          ) : (
            <img src={media[index]} alt={work.title} className="w-full h-full object-cover" />
          )}

          {!work.video && media.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-peak-black/60 hover:bg-peak-black flex items-center justify-center text-peak-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-peak-black/60 hover:bg-peak-black flex items-center justify-center text-peak-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {media.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === index ? 'bg-peak-white' : 'bg-peak-white/40'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-3">
            <span className={`${tagColor} text-xs font-semibold tracking-widest uppercase`}>
              {work.client}
            </span>
            <span className="text-peak-gray text-xs font-medium">{work.year}</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-peak-white mb-3">{work.title}</h3>
          <p className="text-peak-gray text-sm leading-relaxed mb-5">{work.description}</p>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium text-peak-gray bg-peak-surface3/60 border border-peak-surface3"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
