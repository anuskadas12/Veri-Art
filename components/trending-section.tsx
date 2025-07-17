import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Eye, Heart } from "lucide-react"

export function TrendingSection() {
  const trendingArt = [
    {
      id: 1,
      title: "Neon Dreams",
      creator: "ArtistX",
      image: "https://imgs.search.brave.com/wpq0G9MNqPeyAW5_ZyCsft96bZGOU4JR70UT_AdOF-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDQz/OTk4MS5qcGc",
      style: "Cyberpunk",
      views: 5420,
      likes: 892,
    },
    {
      id: 2,
      title: "Mystic Forest",
      creator: "NatureBot",
      image: "https://imgs.search.brave.com/J_mZfg0GBkEf57jAS38_b5qSZwSgyaoaS-H2zkXV9ao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/YW50YXN5LWFuaW1l/LXN0eWxlLXNjZW5l/XzIzLTIxNTExMzUx/MDYuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA",
      style: "Fantasy",
      views: 4156,
      likes: 734,
    },
    {
      id: 3,
      title: "Abstract Emotions",
      creator: "MindAI",
      image: "https://imgs.search.brave.com/ptV-tyq0PUpRzImREQoj_BF0hLHUVg63sx_6A-C9SPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmx5/LWFic3RyYWN0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wOC9JTUdfNzAw/Ny0xLmpwZw",
      style: "Abstract",
      views: 3892,
      likes: 623,
    },
  ]

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-orange-600" />
        <h2 className="text-2xl font-bold text-gray-300">Trending Now</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingArt.map((art, index) => (
          <Card key={art.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img src={art.image || "/placeholder.svg"} alt={art.title} className="w-full h-48 object-cover" />
              <div className="absolute top-2 left-2">
                <Badge className="bg-orange-600">#{index + 1} Trending</Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                  {art.style}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{art.title}</h3>
              <p className="text-sm text-gray-600 mb-3">by {art.creator}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {art.views.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {art.likes.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
