'use client'

import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative py-16 bg-peak-black border-t border-peak-surface3">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-peak-accent to-peak-accent2 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-peak-white">
                PEAK<span className="gradient-text"> AGENCY</span>
              </span>
            </div>
            <p className="text-peak-gray text-sm italic">"Des supports qui élèvent votre image."</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-peak-gray hover:text-peak-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-peak-surface3 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-peak-gray2 text-sm">
            &copy; {new Date().getFullYear()} Peak Agency. All rights reserved.
          </p>
          <p className="text-peak-gray2 text-sm">
            Built in Cameroon. Designed for the world.
          </p>
        </div>
      </div>
    </footer>
  )
}
