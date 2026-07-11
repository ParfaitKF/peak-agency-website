import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import ServicesSection from '@/components/ServicesSection'
import ApproachSection from '@/components/ApproachSection'
import AboutSection from '@/components/AboutSection'
import WhyPeakSection from '@/components/WhyPeakSection'
import CTASection from '@/components/CTASection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <ApproachSection />
      <AboutSection />
      <WhyPeakSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
