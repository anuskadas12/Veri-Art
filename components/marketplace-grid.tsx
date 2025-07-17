"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Clock, Zap, Check, X } from "lucide-react"

export function MarketplaceGrid() {
  // Mock NFT data
  const [nfts, setNfts] = useState([
    {
      id: 1,
      title: "Cyberpunk Samurai",
      creator: "0x1234...5678",
      price: "2.5",
      currency: "ETH",
      image: "https://imgs.search.brave.com/OSh4C2fetUQEIcI70B8z5nQbDWpyU3Rl2CiPg18JH5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y2RuLXBpY3RvcmVt/LmNvbS91cGxvYWRz/L3BpY3R1cmVmcmFt/ZS8xLzk3NzI1MS5q/cGc",
      style: "Cyberpunk",
      likes: 234,
      views: 1250,
      timeLeft: "2d 14h",
      isAuction: true,
      prompt: "A cyberpunk samurai warrior in neon-lit Tokyo streets",
      sold: false,
    },
    {
      id: 2,
      title: "Ethereal Forest Spirit",
      creator: "0x9876...5432",
      price: "1.8",
      currency: "ETH",
      image: "https://imgs.search.brave.com/0htxLlQjKS4CQ-eKC95GdnmfKjFydB_sqf74IHadUhc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hczIu/ZnRjZG4ubmV0L3Yy/L2pwZy8xMC8xNi81/NS81NS8xMDAwX0Zf/MTAxNjU1NTU0N194/ZXNsWURhMGlkVDBE/TTVYVHBFSmlGRjFj/djQ0Y3BJUi5qcGc",
      style: "Fantasy",
      likes: 189,
      views: 892,
      timeLeft: null,
      isAuction: false,
      prompt: "A mystical forest spirit surrounded by glowing fireflies",
      sold: false,
    },
    {
      id: 3,
      title: "Abstract Consciousness",
      creator: "0x5555...7777",
      price: "3.2",
      currency: "ETH",
      image: "https://imgs.search.brave.com/f51CUoR4AhTe43rPuACpDFS40wyzBcbyD0Dq88XURY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/LXBlYXN5LmFpL2Nk/bi1jZ2kvaW1hZ2Uv/cXVhbGl0eT03MCxm/b3JtYXQ9YXV0byx3/aWR0aD0zMDAvaHR0/cHM6Ly9mZGN6dnht/d3dqd3B3YmVlcWN0/aC5zdXBhYmFzZS5j/by9zdG9yYWdlL3Yx/L29iamVjdC9wdWJs/aWMvaW1hZ2VzLzg1/MzRiZDlkLTYzNjUt/NDE2Yi05OWVkLWFl/ZWRhMWYzNDUzYy80/ZTZhNjJiMi00NTdk/LTQwOGItOTA1OS1l/ZTJlMDlhM2EzYmYu/cG5n",
      style: "Abstract",
      likes: 156,
      views: 634,
      timeLeft: "5d 8h",
      isAuction: true,
      prompt: "Abstract representation of human consciousness and thoughts",
      sold: false,
    },
    {
      id: 4,
      title: "Anime Space Explorer",
      creator: "0x3333...9999",
      price: "0.9",
      currency: "ETH",
      image: "https://imgs.search.brave.com/jWT4p8N5z7zI09rpLlLCsZysZpNCSu_w0Q3M4XA6T8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDQv/bWFjcm9zcy1mcm9u/dGllci1wb3N0ZXIu/anBn",
      style: "Anime",
      likes: 298,
      views: 1456,
      timeLeft: null,
      isAuction: false,
      prompt: "An anime-style space explorer discovering alien worlds",
      sold: false,
    },
    {
      id: 5,
      title: "Digital Renaissance",
      creator: "0x7777...1111",
      price: "4.1",
      currency: "ETH",
      image: "https://imgs.search.brave.com/4OTXoVu3uNpV5w9gTq4ONTAG0GoCsNR_YIlzXv-qU5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/MXN0LWFydC1nYWxs/ZXJ5LmNvbS9jZG4t/Y2dpL2ltYWdlL2Zv/cm1hdD13ZWJwLHF1/YWxpdHk9ODUsd2lk/dGg9ODQwL21lZGlh/L21hZ2VmYW5fYmxv/Zy9EYW5jZV9DbGFz/c19hdF90aGVfT3Bl/cmFfcnVlX0xlX1Bl/bGV0aWVyX2J5X0Vk/Z2FyX0RlZ2FzLmpw/Zw",
      style: "Digital Art",
      likes: 445,
      views: 2134,
      timeLeft: "1d 3h",
      isAuction: true,
      prompt: "Renaissance art style reimagined in digital format",
      sold: false,
    },
    {
      id: 6,
      title: "Watercolor Dreams",
      creator: "0x2222...8888",
      price: "1.3",
      currency: "ETH",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      style: "Watercolor",
      likes: 167,
      views: 723,
      timeLeft: null,
      isAuction: false,
      prompt: "Dreamy watercolor landscape with flowing colors",
      sold: false,
    },
  ])

  const [likedNfts, setLikedNfts] = useState<number[]>([])
  const [purchasingNfts, setPurchasingNfts] = useState<number[]>([])
  const [showNotification, setShowNotification] = useState<{id: number, message: string, type: 'success' | 'error'} | null>(null)

  const toggleLike = (nftId: number) => {
    setLikedNfts((prev) => {
      const newLiked = prev.includes(nftId) ? prev.filter((id) => id !== nftId) : [...prev, nftId]
      
      // Update likes count in NFT data
      setNfts(prevNfts => prevNfts.map(nft => 
        nft.id === nftId 
          ? { ...nft, likes: newLiked.includes(nftId) ? nft.likes + 1 : nft.likes - 1 }
          : nft
      ))
      
      return newLiked
    })
  }

  const showNotificationMessage = (id: number, message: string, type: 'success' | 'error') => {
    setShowNotification({ id, message, type })
    setTimeout(() => setShowNotification(null), 3000)
  }

  const buyNow = (nft: any) => {
    setPurchasingNfts(prev => [...prev, nft.id])
    
    // Simulate purchase process
    setTimeout(() => {
      setNfts(prevNfts => prevNfts.map(n => 
        n.id === nft.id ? { ...n, sold: true } : n
      ))
      setPurchasingNfts(prev => prev.filter(id => id !== nft.id))
      showNotificationMessage(nft.id, `Successfully purchased "${nft.title}"!`, 'success')
    }, 2000)
  }

  const placeBid = (nft: any) => {
    setPurchasingNfts(prev => [...prev, nft.id])
    
    // Simulate bidding process
    setTimeout(() => {
      const newPrice = (parseFloat(nft.price) + 0.1).toFixed(1)
      setNfts(prevNfts => prevNfts.map(n => 
        n.id === nft.id ? { ...n, price: newPrice } : n
      ))
      setPurchasingNfts(prev => prev.filter(id => id !== nft.id))
      showNotificationMessage(nft.id, `Bid placed on "${nft.title}"!`, 'success')
    }, 2000)
  }

  const incrementViews = (nftId: number) => {
    setNfts(prevNfts => prevNfts.map(nft => 
      nft.id === nftId ? { ...nft, views: nft.views + 1 } : nft
    ))
  }

  return (
    <div className="relative">
      {/* Notification */}
      {showNotification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
          showNotification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-2">
            {showNotification.type === 'success' ? (
              <Check className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
            {showNotification.message}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <Card 
            key={nft.id} 
            className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer ${
              nft.sold ? 'opacity-75' : ''
            }`}
            onClick={() => incrementViews(nft.id)}
          >
            <div className="relative group">
              <img 
                src={nft.image} 
                alt={nft.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

              {/* Auction Timer */}
              {nft.isAuction && nft.timeLeft && (
                <div className="absolute top-2 left-2 animate-pulse">
                  <Badge className="bg-red-600 text-white shadow-lg">
                    <Clock className="h-3 w-3 mr-1" />
                    {nft.timeLeft}
                  </Badge>
                </div>
              )}

              {/* Sold Badge */}
              {nft.sold && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-gray-800 text-white shadow-lg">
                    <Check className="h-3 w-3 mr-1" />
                    SOLD
                  </Badge>
                </div>
              )}

              {/* Like Button */}
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleLike(nft.id)
                }}
              >
                <Heart className={`h-4 w-4 transition-all duration-200 ${
                  likedNfts.includes(nft.id) 
                    ? "fill-red-500 text-red-500 scale-110" 
                    : "hover:text-red-500"
                }`} />
              </Button>

              {/* Style Badge */}
              <div className="absolute bottom-2 left-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                  {nft.style}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-1 truncate hover:text-purple-600 transition-colors duration-200">
                {nft.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3 hover:text-gray-800 transition-colors duration-200">
                by {nft.creator}
              </p>

              <p className="text-xs text-gray-500 mb-3 line-clamp-2 italic">
                "{nft.prompt}"
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 hover:text-red-500 transition-colors duration-200">
                    <Heart className="h-4 w-4" />
                    <span className="transition-all duration-200">{nft.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-200">
                    <Eye className="h-4 w-4" />
                    <span className="transition-all duration-200">{nft.views}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">
                    {nft.isAuction ? "Current Bid" : "Price"}
                  </p>
                  <p className="text-xl font-bold text-gray-900 transition-colors duration-200">
                    {nft.price} {nft.currency}
                  </p>
                </div>
              </div>

              {nft.sold ? (
                <Button 
                  disabled 
                  className="w-full bg-gray-400 cursor-not-allowed" 
                  size="sm"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Sold Out
                </Button>
              ) : nft.isAuction ? (
                <Button 
                  onClick={(e) => {
                    e.stopPropagation()
                    placeBid(nft)
                  }}
                  disabled={purchasingNfts.includes(nft.id)}
                  className="w-full bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-200 disabled:opacity-50" 
                  size="sm"
                >
                  {purchasingNfts.includes(nft.id) ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Place Bid
                    </>
                  )}
                </Button>
              ) : (
                <Button 
                  onClick={(e) => {
                    e.stopPropagation()
                    buyNow(nft)
                  }}
                  disabled={purchasingNfts.includes(nft.id)}
                  className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200 disabled:opacity-50" 
                  size="sm"
                >
                  {purchasingNfts.includes(nft.id) ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Buy Now
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}