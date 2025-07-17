import { ArtGenerator } from "@/components/art-generator"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingShapes } from "@/components/floating-shapes"

export default function GeneratePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingShapes />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Art Generator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into stunning digital art using advanced AI models. Each piece is unique and ready to
            mint as an NFT.
          </p>
        </div>
        <ArtGenerator />
      </div>
    </div>
  )
}
