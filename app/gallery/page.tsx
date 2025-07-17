import { GalleryGrid } from "@/components/gallery-grid"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingShapes } from "@/components/floating-shapes"

export default function GalleryPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingShapes />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">My Art Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            View and manage your AI-generated artworks. Mint your favorites as NFTs or share them with the community.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  )
}
