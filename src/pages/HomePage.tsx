import { ParticleCanvas } from '@/components/home/ParticleCanvas'
import { HeroSection } from '@/components/home/HeroSection'
import { TechStrip } from '@/components/home/TechStrip'
import { DomainSection } from '@/components/home/DomainSection'
import { FeaturedDeepDives } from '@/components/home/FeaturedDeepDives'
import { AboutSection } from '@/components/home/AboutSection'

export default function HomePage() {
  return (
    <>
      {/* Fixed particle background */}
      <ParticleCanvas />

      {/* Hero */}
      <HeroSection />

      {/* Main content */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '0 48px',
        }}
      >
        <TechStrip />

        <div id="categories">
          <DomainSection />
        </div>

        <div id="featured">
          <FeaturedDeepDives />
        </div>

        <div id="about">
          <AboutSection />
        </div>
      </main>
    </>
  )
}
