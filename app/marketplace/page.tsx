import { MarketplaceGrid } from "@/components/marketplace-grid"
import { MarketplaceFilters } from "@/components/marketplace-filters"
import { AnimatedBackground } from "@/components/animated-background"
import { GradientOrbs } from "@/components/gradient-orbs"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <GradientOrbs />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">NFT Marketplace</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and collect unique AI-generated art NFTs. Each piece comes with full provenance and generation
            metadata.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <MarketplaceFilters />
          </div>
          <div className="lg:w-3/4">
            <MarketplaceGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
