import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingShapes } from "@/components/floating-shapes"
import { GradientOrbs } from "@/components/gradient-orbs"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingShapes />
      <GradientOrbs />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
    </div>
  )
}
