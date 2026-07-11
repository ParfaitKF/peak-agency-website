import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PEAK AGENCY | Creative Agency',
  description: 'Peak Agency is a Cameroon-based creative agency with global ambition. We help businesses strengthen their image through high-quality creative and digital solutions.',
  keywords: ['creative agency', 'brand identity', 'web design', 'UX/UI', 'Cameroon', 'Africa', 'digital design'],
  authors: [{ name: 'Peak Agency' }],
  openGraph: {
    title: 'PEAK AGENCY | Des supports qui élèvent votre image',
    description: 'We elevate brands that refuse to look average.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-peak-black text-peak-white">
        {children}
      </body>
    </html>
  )
}