"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Share, Bookmark, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ExploreGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  // Mock data for exploration with real image URLs
  const artworks = [
    {
      id: 1,
      title: "Cosmic Voyage",
      creator: "SpaceArtist",
      prompt: "A spaceship traveling through a colorful nebula",
      style: "Digital Art",
      image: "https://imgs.search.brave.com/6CSTecxldeGYE2t1ZDlkJ-6DxUwSJenXtVYoHZ9W2Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMx/MzY5OTA5L3Bob3Rv/L211bHRpdmVyc2Ut/dHJhdmVsLXRpbWUt/YmxhY2staG9sZS11/bml2ZXJzZS1kaW1l/bnNpb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTg5VkRL/RTJBN2xReVV4YnJO/ZUEyVWtVOE1waEFZ/T0xLOEFHT3VuV2xR/bDQ9",
      views: 1234,
      likes: 89,
      timestamp: "2024-01-15T10:30:00Z",
    },
    {
      id: 2,
      title: "Samurai Spirit",
      creator: "WarriorBot",
      prompt: "A traditional samurai in a bamboo forest",
      style: "Anime",
      image: "https://imgs.search.brave.com/otDwzWd52gws_z2L7eqOXPGjcxPBByc6uFspRqiZER8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jcmFpeW9uLmNv/bS8yMDI1LTA3LTEy/L1BtUzR6ckJaUUQt/NzduWk1ncTE0cXcu/d2VicA",
      views: 2156,
      likes: 156,
      timestamp: "2024-01-14T15:45:00Z",
    },
    {
      id: 3,
      title: "Urban Jungle",
      creator: "CityDreamer",
      prompt: "A cyberpunk cityscape with flying cars",
      style: "Cyberpunk",
      image: "https://imgs.search.brave.com/Jf9rKdHGnVGLZKlBPQYa_btli2h_m5tipal5t_Dwdno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/LXBlYXN5LmFpL2Nk/bi1jZ2kvaW1hZ2Uv/cXVhbGl0eT03MCxm/b3JtYXQ9YXV0byx3/aWR0aD01MDAvaHR0/cHM6Ly9tZWRpYS5l/YXN5LXBlYXN5LmFp/L2ZhNGFhOWE4LWE4/MTUtNDUxNi04YzI4/LWMyZWU1YzAxODhi/NC8yZGUyMzE1ZS0y/ZmE4LTQxNmEtOGI1/Yi04NGYzZTExZWY2/MWMucG5n",
      views: 892,
      likes: 67,
      timestamp: "2024-01-13T09:15:00Z",
    },
    {
      id: 4,
      title: "Enchanted Garden",
      creator: "NatureMage",
      prompt: "A magical garden with glowing flowers",
      style: "Fantasy",
      image: "https://imgs.search.brave.com/2M7MshzvwBLVsz92N3hVMV-qib4YlAzpAYVpAiYmtpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lbmNoYW50ZWQt/c2VjcmV0LWdhcmRl/bi13aXRoLWdsb3dp/bmctZmxvd2Vycy1i/dXR0ZXJmbGllcy1k/ZXNrdG9wLXdhbGxw/YXBlcl85ODA3MTYt/NjU4MzAuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA",
      views: 1567,
      likes: 123,
      timestamp: "2024-01-12T14:20:00Z",
    },
    {
      id: 5,
      title: "Liquid Dreams",
      creator: "FluidArt",
      prompt: "Abstract flowing liquid in vibrant colors",
      style: "Abstract",
      image: "https://imgs.search.brave.com/HIK5eZH41kGnveuLQLAnvTtnJGaii7pSrQ8y7XI37_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb2xv/cmZ1bC1hYnN0cmFj/dC1saXF1aWQtYXJ0/LWJ1YmJsZXMtc2hv/d2Nhc2luZy1keW5h/bWljLW1peC1jb2xv/cnMtdGV4dHVyZXMt/Y3JlYXRpbmctdmli/cmFudC1lbmVyZ2V0/aWMtdmlzdWFsLTMy/NTgyNzA1OC5qcGc",
      views: 734,
      likes: 45,
      timestamp: "2024-01-11T11:00:00Z",
    },
    {
      id: 6,
      title: "Mountain Serenity",
      creator: "PeacePainter",
      prompt: "A peaceful mountain landscape at sunrise",
      style: "Watercolor",
      image: "https://imgs.search.brave.com/aABhE8D85XR9SSEoVFekscgyF-TAXdTbK3Ey2lKN5cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzEyMjU4MDQyL3Iv/aWwvZjlmNTQyLzMx/OTYyMDM5MjYvaWxf/NjAweDYwMC4zMTk2/MjAzOTI2X2RzNjUu/anBn",
      views: 1890,
      likes: 234,
      timestamp: "2024-01-10T16:30:00Z",
    },
  ]

  const [likedArtworks, setLikedArtworks] = useState<number[]>([])
  const [bookmarkedArtworks, setBookmarkedArtworks] = useState<number[]>([])

  const toggleLike = (artworkId: number) => {
    setLikedArtworks((prev) =>
      prev.includes(artworkId) ? prev.filter((id) => id !== artworkId) : [...prev, artworkId],
    )
  }

  const toggleBookmark = (artworkId: number) => {
    setBookmarkedArtworks((prev) =>
      prev.includes(artworkId) ? prev.filter((id) => id !== artworkId) : [...prev, artworkId],
    )
  }

  const shareArtwork = async (artwork: any) => {
    const shareData = {
      title: artwork.title,
      text: `Check out this amazing artwork "${artwork.title}" by ${artwork.creator}`,
      url: `${window.location.origin}/artwork/${artwork.id}`,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(shareData.url)
        alert('Link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url)
        alert('Link copied to clipboard!')
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError)
        alert('Unable to share. Please copy the URL manually.')
      }
    }
  }

  const viewDetails = (artwork: any) => {
    // In a real app, this would navigate to the artwork detail page
    // For now, we'll show an alert with artwork details
    const details = `
Title: ${artwork.title}
Creator: ${artwork.creator}
Style: ${artwork.style}
Prompt: "${artwork.prompt}"
Views: ${artwork.views}
Likes: ${artwork.likes}
Created: ${new Date(artwork.timestamp).toLocaleDateString()}
    `
    alert(details)
    
    // In a real Next.js app, you would use:
    // router.push(`/artwork/${artwork.id}`)
    // or window.location.href = `/artwork/${artwork.id}`
  }

  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search artworks, creators, or styles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="md:w-48">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="liked">Most Liked</SelectItem>
              <SelectItem value="viewed">Most Viewed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <Card key={artwork.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img 
                src={artwork.image} 
                alt={artwork.title} 
                className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => viewDetails(artwork)}
                onError={(e) => {
                  // Fallback image if the main image fails to load
                  e.currentTarget.src = "https://via.placeholder.com/400x300/6366f1/ffffff?text=Artwork"
                }}
              />

              {/* Action Buttons */}
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  onClick={() => toggleLike(artwork.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${likedArtworks.includes(artwork.id) ? "fill-red-500 text-red-500" : ""}`}
                  />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  onClick={() => toggleBookmark(artwork.id)}
                >
                  <Bookmark
                    className={`h-4 w-4 ${bookmarkedArtworks.includes(artwork.id) ? "fill-blue-500 text-blue-500" : ""}`}
                  />
                </Button>
              </div>

              {/* Style Badge */}
              <div className="absolute bottom-2 left-2">
                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                  {artwork.style}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-1 truncate cursor-pointer hover:text-purple-600 transition-colors" 
                  onClick={() => viewDetails(artwork)}>
                {artwork.title}
              </h3>

              <p className="text-sm text-gray-600 mb-2">by {artwork.creator}</p>

              <p className="text-xs text-gray-500 mb-3 line-clamp-2 italic">"{artwork.prompt}"</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {artwork.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {artwork.likes}
                  </div>
                </div>
                <span className="text-xs">{new Date(artwork.timestamp).toLocaleDateString()}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent hover:bg-gray-50"
                  onClick={() => shareArtwork(artwork)}
                >
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  onClick={() => viewDetails(artwork)}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}