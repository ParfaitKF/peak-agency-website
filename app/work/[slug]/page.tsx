import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkCategoryDetail from '@/components/WorkCategoryDetail'
import { getWorkCategory, workCategories } from '@/lib/work'

export function generateStaticParams() {
  return workCategories.map((category) => ({ slug: category.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getWorkCategory(params.slug)
  if (!category) return {}
  return {
    title: `${category.title} — Peak Agency`,
    description: category.description,
  }
}

export default function WorkCategoryPage({ params }: { params: { slug: string } }) {
  const category = getWorkCategory(params.slug)
  if (!category) notFound()

  return (
    <main className="relative">
      <Navbar />
      <WorkCategoryDetail category={category} />
      <Footer />
    </main>
  )
}
