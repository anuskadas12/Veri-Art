"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([0, 10])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])

  const styles = ["Realistic", "Anime", "Digital Art", "Oil Painting", "Watercolor", "Cyberpunk", "Fantasy", "Abstract"]

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) => (prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Price Range (ETH)</label>
            <Slider value={priceRange} onValueChange={setPriceRange} max={10} step={0.1} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRange[0]} ETH</span>
              <span>{priceRange[1]} ETH</span>
            </div>
          </div>

          {/* Art Styles */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Art Styles</label>
            <div className="space-y-2">
              {styles.map((style) => (
                <div key={style} className="flex items-center space-x-2">
                  <Checkbox
                    id={style}
                    checked={selectedStyles.includes(style)}
                    onCheckedChange={() => toggleStyle(style)}
                  />
                  <label htmlFor={style} className="text-sm text-gray-700">
                    {style}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <Select defaultValue="recent">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="for-sale" />
                <label htmlFor="for-sale" className="text-sm text-gray-700">
                  For Sale
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="auction" />
                <label htmlFor="auction" className="text-sm text-gray-700">
                  On Auction
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sold" />
                <label htmlFor="sold" className="text-sm text-gray-700">
                  Recently Sold
                </label>
              </div>
            </div>
          </div>

          <Button className="w-full bg-transparent" variant="outline">
            Clear Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
