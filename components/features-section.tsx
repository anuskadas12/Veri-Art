import { Palette, Shield, Zap, Globe, Lock, Coins } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "AI Art Generation",
      description:
        "Create stunning artwork using advanced AI models with simple text prompts. Support for multiple art styles and customization options.",
    },
    {
      icon: Shield,
      title: "Provable Uniqueness",
      description:
        "Every artwork is verifiably unique with generation metadata stored on-chain, ensuring authenticity and preventing duplicates.",
    },
    {
      icon: Zap,
      title: "Instant Minting",
      description:
        "Mint your AI-generated art as NFTs instantly with just a few clicks. Gas-optimized smart contracts for efficient transactions.",
    },
    {
      icon: Globe,
      title: "IPFS Storage",
      description:
        "Decentralized storage ensures your artwork and metadata are permanently accessible and censorship-resistant.",
    },
    {
      icon: Lock,
      title: "Full Ownership",
      description:
        "Complete ownership rights with transparent licensing. Your NFTs, your rules, your profits from secondary sales.",
    },
    {
      icon: Coins,
      title: "Marketplace Ready",
      description:
        "Seamlessly list your NFTs on major marketplaces like OpenSea, or trade directly on our integrated marketplace.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features for Digital Artists</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, mint, and trade AI-generated art NFTs with complete transparency and
            ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
