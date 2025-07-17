"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Download, Share, Coins, MoreHorizontal, X, Check, Copy, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function GalleryGrid() {
  // Mock data - in a real app, this would come from your database
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Cyberpunk Cat in Tokyo",
      prompt: "A cyberpunk cat walking through neon-lit Tokyo streets at night",
      style: "cyberpunk",
      size: "1024x1024",
      seed: "123456",
      timestamp: "2024-01-15T10:30:00Z",
      image: "https://imgs.search.brave.com/n-PA-4rNGhe2TuXLTtKA4eFXnXmNDx-7fH0iIHvcFKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41Mjc1/NTEwMjQ3LjYzNTkv/ZnBvc3RlcixzbWFs/bCx3YWxsX3RleHR1/cmUsc3F1YXJlX3By/b2R1Y3QsNjAweDYw/MC5qcGc",
      isMinted: false,
      views: 245,
      nftDetails: null,
    },
    {
      id: 2,
      title: "Fantasy Dragon Castle",
      prompt: "A majestic dragon perched on a floating castle in the clouds",
      style: "fantasy",
      size: "1024x1792",
      seed: "789012",
      timestamp: "2024-01-14T15:45:00Z",
      image: "https://imgs.search.brave.com/KsAgUDhSNf2ht4nSSIXeXyw3T2MzA09D0eaELxnrQNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kcmFn/b24taXNsYW5kLTI1/NTI1NTM0LmpwZw",
      isMinted: true,
      views: 892,
      nftDetails: {
        tokenId: "0x1a2b3c4d5e6f",
        contractAddress: "0xabcdef123456789",
        blockchain: "Ethereum",
        mintPrice: "0.05 ETH",
        mintDate: "2024-01-14T15:45:00Z"
      },
    },
    {
      id: 3,
      title: "Abstract Ocean Waves",
      prompt: "Abstract representation of ocean waves in vibrant colors",
      style: "abstract",
      size: "1792x1024",
      seed: "345678",
      timestamp: "2024-01-13T09:15:00Z",
      image: "https://imgs.search.brave.com/5YF7ikja1gwyDJcvrTWJAjsHZ5GvzgIMikW8rX0tJFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTgv/MTMzLzUyMS9zbWFs/bC9hYnN0cmFjdC1j/b2xvcmZ1bC1vY2Vh/bi13YXZlcy12aWJy/YW50LXN1bnJpc2Ut/YmVhY2gtc2NlbmUt/Zm9yLWNyZWF0aXZl/LWRlc2lnbi1waG90/by5qcGc",
      isMinted: false,
      views: 156,
      nftDetails: null,
    },
    {
      id: 4,
      title: "Anime Space Explorer",
      prompt: "An anime-style space explorer discovering a new planet",
      style: "anime",
      size: "1024x1024",
      seed: "901234",
      timestamp: "2024-01-12T14:20:00Z",
      image: "https://imgs.search.brave.com/i4AHofRfqLIuvEnPEqfSOEI0epvk-VNslyleY5-uSos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci85MjQv/Nzk4L0hELXdhbGxw/YXBlci1naXJsLWZv/cm0tdmlldy1lYXJ0/aC1zcGFjZS1hbmlt/ZS10aHVtYm5haWwu/anBn",
      isMinted: true,
      views: 634,
      nftDetails: {
        tokenId: "0x2b3c4d5e6f7a",
        contractAddress: "0xabcdef123456789",
        blockchain: "Ethereum",
        mintPrice: "0.03 ETH",
        mintDate: "2024-01-12T14:20:00Z"
      },
    },
    {
      id: 5,
      title: "Oil Painting Landscape",
      prompt: "A serene mountain landscape in oil painting style",
      style: "oil-painting",
      size: "1792x1024",
      seed: "567890",
      timestamp: "2024-01-11T11:00:00Z",
      image: "https://imgs.search.brave.com/bngcd0oKNjd2pndOIpWX4gszgaTMZo2NO24DL3gsG5w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vaWwt/cGFpbnRpbmdzLWNh/bnZhcy1sYW5kc2Nh/cGVzLXNjZW5lLW15/LWFydC13b3JrLWkt/YXV0aG9yLWltYWdl/LTMyNjgyODkyLmpw/Zw",
      isMinted: false,
      views: 423,
      nftDetails: null,
    },
    {
      id: 6,
      title: "Digital Art Portrait",
      prompt: "A futuristic digital art portrait with glowing elements",
      style: "digital-art",
      size: "1024x1792",
      seed: "234567",
      timestamp: "2024-01-10T16:30:00Z",
      image: "https://imgs.search.brave.com/zfMXNyTS1OW_o8_--xPSluTooqXPtTGPEGzRdcqDjGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/Mjc3ODUzNjYvZmls/ZS9vcmlnaW5hbC05/MzY0YzI0NjkyNmZk/YmM4OTFjNGQ4ODEx/MGUwYTM5YS5qcGc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
      isMinted: true,
      views: 789,
      nftDetails: {
        tokenId: "0x3c4d5e6f7a8b",
        contractAddress: "0xabcdef123456789",
        blockchain: "Ethereum",
        mintPrice: "0.08 ETH",
        mintDate: "2024-01-10T16:30:00Z"
      },
    },
  ])

  const [mintingArtworks, setMintingArtworks] = useState<number[]>([])
  const [showMintPopup, setShowMintPopup] = useState<{artwork: any, nftDetails: any} | null>(null)
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null)

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const generateRandomNFTDetails = (artwork: any) => {
    const tokenId = `0x${Math.random().toString(16).substr(2, 12)}`
    const mintPrice = (Math.random() * 0.1 + 0.01).toFixed(3)
    
    return {
      tokenId,
      contractAddress: "0xabcdef123456789",
      blockchain: "Ethereum",
      mintPrice: `${mintPrice} ETH`,
      mintDate: new Date().toISOString(),
      gasUsed: Math.floor(Math.random() * 50000 + 21000),
      transactionHash: `0x${Math.random().toString(16).substr(2, 64)}`
    }
  }

  const mintAsNFT = (artworkId: number) => {
    setMintingArtworks(prev => [...prev, artworkId])
    
    // Simulate minting process
    setTimeout(() => {
      const artwork = artworks.find(a => a.id === artworkId)
      if (artwork) {
        const nftDetails = generateRandomNFTDetails(artwork)
        
        setArtworks(prev => prev.map(a => 
          a.id === artworkId 
            ? { ...a, isMinted: true, nftDetails }
            : a
        ))
        
        setMintingArtworks(prev => prev.filter(id => id !== artworkId))
        setShowMintPopup({ artwork, nftDetails })
      }
    }, 3000)
  }

  const downloadArtwork = (artwork: any) => {
    showNotification(`Downloading "${artwork.title}"...`, 'success')
    // Simulate download
    setTimeout(() => {
      showNotification(`"${artwork.title}" downloaded successfully!`, 'success')
    }, 1500)
  }

  const shareArtwork = (artwork: any) => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: artwork.prompt,
        url: window.location.href
      })
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
      showNotification('Share link copied to clipboard!', 'success')
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    showNotification('Copied to clipboard!', 'success')
  }

  const incrementViews = (artworkId: number) => {
    setArtworks(prev => prev.map(a => 
      a.id === artworkId ? { ...a, views: a.views + 1 } : a
    ))
  }

  return (
    <div className="relative">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <Check className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
            {notification.message}
          </div>
        </div>
      )}

      {/* NFT Minting Success Popup */}
      {showMintPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 transform transition-all duration-300 scale-100 animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-green-600 flex items-center gap-2">
                <Check className="h-6 w-6" />
                NFT Minted Successfully!
              </h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowMintPopup(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={showMintPopup.artwork.image} 
                  alt={showMintPopup.artwork.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">{showMintPopup.artwork.title}</h4>
                  <p className="text-sm text-gray-600">{showMintPopup.artwork.style}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Token ID:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs">{showMintPopup.nftDetails.tokenId}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => copyToClipboard(showMintPopup.nftDetails.tokenId)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Blockchain:</span>
                  <span className="font-semibold">{showMintPopup.nftDetails.blockchain}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Mint Price:</span>
                  <span className="font-semibold text-green-600">{showMintPopup.nftDetails.mintPrice}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Gas Used:</span>
                  <span className="font-mono text-xs">{showMintPopup.nftDetails.gasUsed.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transaction:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs">{showMintPopup.nftDetails.transactionHash.slice(0, 10)}...</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard(showMintPopup.nftDetails.transactionHash)}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    showNotification('Opening marketplace...', 'success')
                    setShowMintPopup(null)
                  }}
                >
                  View on Marketplace
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowMintPopup(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <Card 
            key={artwork.id} 
            className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => incrementViews(artwork.id)}
          >
            <div className="relative group">
              <img 
                src={artwork.image} 
                alt={artwork.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              
              {/* Dropdown Menu */}
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2">
                    <DropdownMenuItem onClick={() => downloadArtwork(artwork)}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => shareArtwork(artwork)}>
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    {!artwork.isMinted && (
                      <DropdownMenuItem onClick={() => mintAsNFT(artwork.id)}>
                        <Coins className="h-4 w-4 mr-2" />
                        Mint as NFT
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-2 left-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {artwork.isMinted ? (
                  <Badge className="bg-green-600 shadow-lg">
                    <Check className="h-3 w-3 mr-1" />
                    Minted
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                    Not Minted
                  </Badge>
                )}
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 truncate hover:text-purple-600 transition-colors duration-200">
                {artwork.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {artwork.prompt}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                <Badge variant="outline" className="text-xs hover:bg-purple-50 transition-colors duration-200">
                  {artwork.style}
                </Badge>
                <Badge variant="outline" className="text-xs hover:bg-blue-50 transition-colors duration-200">
                  {artwork.size}
                </Badge>
                <Badge variant="outline" className="text-xs hover:bg-green-50 transition-colors duration-200">
                  Seed: {artwork.seed}
                </Badge>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-200">
                  <Eye className="h-4 w-4" />
                  <span className="transition-all duration-200">{artwork.views} views</span>
                </div>
                <span className="hover:text-gray-700 transition-colors duration-200">
                  {new Date(artwork.timestamp).toLocaleDateString()}
                </span>
              </div>

              {!artwork.isMinted && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    mintAsNFT(artwork.id)
                  }}
                  disabled={mintingArtworks.includes(artwork.id)}
                  className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200 disabled:opacity-50"
                  size="sm"
                >
                  {mintingArtworks.includes(artwork.id) ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Minting...
                    </>
                  ) : (
                    <>
                      <Coins className="h-4 w-4 mr-2" />
                      Mint as NFT
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