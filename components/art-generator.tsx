"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Wand2, Download, Share, Coins, Sparkles, Zap } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ArtGenerator() {
  const [prompt, setPrompt] = useState("")
  const [style, setStyle] = useState("realistic")
  const [size, setSize] = useState("1024x1024")
  const [seed, setSeed] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [generationData, setGenerationData] = useState<any>(null)
  const [generationProgress, setGenerationProgress] = useState(0)

  const styles = [
    { value: "realistic", label: "Realistic", description: "Photorealistic, detailed imagery" },
    { value: "anime", label: "Anime", description: "Japanese animation style" },
    { value: "digital-art", label: "Digital Art", description: "Modern digital artwork" },
    { value: "oil-painting", label: "Oil Painting", description: "Classical oil painting texture" },
    { value: "watercolor", label: "Watercolor", description: "Soft watercolor aesthetics" },
    { value: "cyberpunk", label: "Cyberpunk", description: "Futuristic neon-lit scenes" },
    { value: "fantasy", label: "Fantasy", description: "Magical and mystical themes" },
    { value: "abstract", label: "Abstract", description: "Non-representational art" },
    { value: "impressionist", label: "Impressionist", description: "Impressionist painting style" },
    { value: "surreal", label: "Surreal", description: "Dreamlike and surreal imagery" },
  ]

  const sizes = [
    { value: "512x512", label: "512×512", description: "Square format" },
    { value: "1024x1024", label: "1024×1024", description: "High-res square" },
    { value: "1024x1792", label: "1024×1792", description: "Portrait format" },
    { value: "1792x1024", label: "1792×1024", description: "Landscape format" },
  ]

  // Mock high-quality sample images for different styles
  const sampleImages = {
    realistic: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
    anime: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
    "digital-art": "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=800&fit=crop",
    "oil-painting": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
    watercolor: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
    cyberpunk: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop",
    fantasy: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
    abstract: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
    impressionist: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
    surreal: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=800&fit=crop",
  }

  const generateArt = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setGenerationProgress(0)
    
    // Simulate realistic generation progress
    const progressInterval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + Math.random() * 15
      })
    }, 200)

    try {
      const stylePrompt = style !== "realistic" ? `, ${style} style` : ""
      const fullPrompt = `${prompt}${stylePrompt}, high quality, detailed, masterpiece, 8k resolution`

      // Simulate generation time (2-4 seconds for realism)
      await new Promise(resolve => setTimeout(resolve, 3000 + Math.random() * 2000))

      // Use appropriate sample image based on style
      const imageUrl = sampleImages[style as keyof typeof sampleImages]
      
      setGeneratedImage(imageUrl)
      setGenerationData({
        prompt: fullPrompt,
        style,
        size,
        seed: seed || Math.floor(Math.random() * 1000000).toString(),
        timestamp: new Date().toISOString(),
        model: "DALL-E 3 Enhanced",
        quality: "HD",
        steps: 50,
      })
      
      setGenerationProgress(100)
    } catch (error) {
      console.error("Error generating image:", error)
    } finally {
      setTimeout(() => {
        setIsGenerating(false)
        setGenerationProgress(0)
      }, 500)
    }
  }

  const downloadImage = () => {
    if (!generatedImage) return

    const link = document.createElement("a")
    link.href = generatedImage
    link.download = `ai-art-${Date.now()}.png`
    link.target = "_blank"
    link.click()
  }

  const shareImage = () => {
    if (!generatedImage) return
    
    if (navigator.share) {
      navigator.share({
        title: 'AI Generated Art',
        text: generationData?.prompt || 'Check out this AI-generated artwork!',
        url: generatedImage
      })
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(generatedImage)
      alert('Image URL copied to clipboard!')
    }
  }

  const mintAsNFT = () => {
    console.log("Minting NFT with data:", generationData)
    alert("NFT minting functionality would be implemented here!")
  }

  const selectedStyle = styles.find(s => s.value === style)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Generation Controls */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            AI Art Generation Studio
          </CardTitle>
          <p className="text-purple-100 text-sm">Create stunning, photorealistic artwork with AI</p>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Sparkles className="inline h-4 w-4 mr-1" />
              Artwork Description
            </label>
            <Textarea
              placeholder="Describe your artwork in detail... (e.g., 'A majestic snow-covered mountain peak at golden hour with dramatic clouds, photorealistic, cinematic lighting')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="resize-none transition-all duration-200 focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Tip: Be specific about lighting, colors, and composition for best results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Art Style</label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((s) => (
                    <SelectItem key={s.value} value={s.value} className="py-3">
                      <div>
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-gray-500">{s.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedStyle && (
                <p className="text-xs text-gray-500 mt-1">{selectedStyle.description}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image Resolution</label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((s) => (
                    <SelectItem key={s.value} value={s.value} className="py-3">
                      <div>
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-gray-500">{s.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Seed (Optional)
            </label>
            <Input
              placeholder="Enter a number for reproducible results"
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              type="number"
              className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use the same seed with identical prompts to recreate similar results
            </p>
          </div>

          <div className="space-y-2">
            <Button
              onClick={generateArt}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 text-lg font-medium transition-all duration-200 hover:scale-105"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Artwork...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-5 w-5" />
                  Generate Art
                </>
              )}
            </Button>
            
            {isGenerating && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Generating...</span>
                  <span>{Math.round(generationProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${generationProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Generated Art Display */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle>Generated Artwork</CardTitle>
          <p className="text-blue-100 text-sm">Your AI-created masterpiece</p>
        </CardHeader>
        <CardContent className="p-6">
          {generatedImage ? (
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={generatedImage}
                  alt="Generated artwork"
                  className="w-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
              </div>

              {/* Generation Metadata */}
              {generationData && (
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg space-y-4 border">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Generation Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          {generationData.style}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resolution:</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {generationData.size}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Seed:</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {generationData.seed}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quality:</span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                          {generationData.quality}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-gray-600 text-sm font-medium">Prompt:</span>
                    <p className="text-sm text-gray-800 mt-1 italic bg-white p-3 rounded border-l-4 border-purple-500">
                      "{generationData.prompt}"
                    </p>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Model: {generationData.model}</span>
                    <span>Generated: {new Date(generationData.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <Button 
                  onClick={downloadImage} 
                  variant="outline" 
                  className="h-12 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button 
                  onClick={shareImage}
                  variant="outline" 
                  className="h-12 hover:bg-green-50 hover:border-green-300 transition-all duration-200"
                >
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button 
                  onClick={mintAsNFT} 
                  className="h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                >
                  <Coins className="mr-2 h-4 w-4" />
                  Mint NFT
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="relative">
                  <Wand2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <Sparkles className="h-6 w-6 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <p className="text-gray-500 text-lg mb-2">Your AI artwork will appear here</p>
                <p className="text-gray-400 text-sm">Enter a prompt and click Generate Art to begin</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}