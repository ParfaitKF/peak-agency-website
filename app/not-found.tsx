import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-peak-black">
      <div className="text-center px-6">
        <h1 className="font-display font-bold text-8xl gradient-text mb-4">404</h1>
        <h2 className="font-display font-bold text-2xl text-peak-white mb-4">Page Not Found</h2>
        <p className="text-peak-gray mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary inline-block px-8 py-3 rounded-full text-sm font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
