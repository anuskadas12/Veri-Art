import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Generate Art",
      description:
        "Enter a text prompt and let our AI create unique artwork for you. Customize style, colors, and composition.",
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "02",
      title: "Preview & Edit",
      description:
        "Review your generated art, make adjustments, and regenerate until you're satisfied with the result.",
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "03",
      title: "Mint as NFT",
      description: "Mint your artwork as an NFT with all generation metadata stored on-chain for full provenance.",
      color: "from-green-500 to-green-600",
    },
    {
      step: "04",
      title: "Trade & Earn",
      description: "List your NFTs on marketplaces, trade with collectors, and earn royalties from secondary sales.",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From idea to NFT in four simple steps. Create, mint, and trade your AI-generated art with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
