'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-peak-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-peak-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-peak-white mb-6">
              Let's start
              <br />
              <span className="gradient-text">something great.</span>
            </h2>
            <p className="text-peak-gray leading-relaxed mb-10">
              Tell us about your project. We'll get back to you within 24 hours with next steps.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-peak-surface border border-peak-surface3 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-peak-accent" />
                </div>
                <div>
                  <div className="text-peak-gray text-sm">Email</div>
                  <a
                    href="mailto:contact@peakagency.site"
                    className="text-peak-white font-medium hover:text-peak-accent transition-colors"
                  >
                    contact@peakagency.site
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-peak-surface border border-peak-surface3 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-peak-accent3" />
                </div>
                <div>
                  <div className="text-peak-gray text-sm">Location</div>
                  <div className="text-peak-white font-medium">Douala, Cameroon · Global</div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-peak-gray text-sm mb-4">Follow us</div>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/94159942/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/peakagencyio/', label: 'Instagram' },
                  { icon: Facebook, href: 'https://web.facebook.com/peakagencycm/', label: 'Facebook' },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-peak-surface border border-peak-surface3 flex items-center justify-center text-peak-gray hover:text-peak-white hover:border-peak-accent transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-peak-gray text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-focus w-full px-4 py-3.5 rounded-xl bg-peak-surface border border-peak-surface3 text-peak-white placeholder-peak-gray2 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-peak-gray text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="input-focus w-full px-4 py-3.5 rounded-xl bg-peak-surface border border-peak-surface3 text-peak-white placeholder-peak-gray2 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-peak-gray text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="input-focus w-full px-4 py-3.5 rounded-xl bg-peak-surface border border-peak-surface3 text-peak-white placeholder-peak-gray2 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-peak-gray text-sm font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-focus w-full px-4 py-3.5 rounded-xl bg-peak-surface border border-peak-surface3 text-peak-white text-sm transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-peak-surface">Select a service</option>
                    <option value="brand" className="bg-peak-surface">Brand Identity</option>
                    <option value="web" className="bg-peak-surface">Web Design</option>
                    <option value="uxui" className="bg-peak-surface">UX/UI Design</option>
                    <option value="communication" className="bg-peak-surface">Creative Communication</option>
                    <option value="presentation" className="bg-peak-surface">Presentations</option>
                    <option value="video" className="bg-peak-surface">Video & Motion</option>
                    <option value="other" className="bg-peak-surface">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-peak-gray text-sm font-medium mb-2">Project Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="input-focus w-full px-4 py-3.5 rounded-xl bg-peak-surface border border-peak-surface3 text-peak-white text-sm transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-peak-surface">Select budget range</option>
                  <option value="1k-5k" className="bg-peak-surface">$1,000 - $5,000</option>
                  <option value="5k-15k" className="bg-peak-surface">$5,000 - $15,000</option>
                  <option value="15k-50k" className="bg-peak-surface">$15,000 - $50,000</option>
                  <option value="50k+" className="bg-peak-surface">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-peak-gray text-sm font-medium mb-2">Project Description</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="input-focus w-full px-4 py-3.5 rounded-xl bg-peak-surface border border-peak-surface3 text-peak-white placeholder-peak-gray2 text-sm transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full px-8 py-4 rounded-full text-base font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : 'Send Project Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
