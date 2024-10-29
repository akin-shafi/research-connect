'use client'

import { Search, ChevronDown, X, Bookmark } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTiming, setSelectedTiming] = useState("all")

  const categories = [
    { id: 'tech', label: 'Tech & Innovation', count: 42 },
    { id: 'creative', label: 'Creative Works', count: 28 },
    { id: 'community', label: 'Community Projects', count: 15 }
  ]

  const products = [
    {
      title: "RoboInfinity InsightDrive",
      price: 299,
      raised: 125000,
      funded: 85,
      category: "Tech & Innovation",
      status: "GOGOPICK",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "SWAY MIDI CONTROLLER",
      price: 199,
      raised: 75000,
      funded: 150,
      category: "Creative Works",
      status: "TRENDING",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Community Music Studio",
      price: 499,
      raised: 250000,
      funded: 65,
      category: "Community Projects",
      status: "NEW",
      image: "https://via.placeholder.com/300x200"
    }
  ]

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "all" && product.category !== categories.find(c => c.id === selectedCategory)?.label) {
      return false
    }
    if (searchQuery) {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return true
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600">
          <div className="absolute inset-0 bg-[url('/src/assets/images/bg.png')] opacity-50 mix-blend-overlay"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Explore it all</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:px-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-6">Filter results</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase mb-3">CATEGORY</h3>
                <div className="space-y-2">
                  <button 
                    className={`w-full text-left ${selectedCategory === "all" ? "text-pink-600" : ""} font-medium`}
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <Collapsible key={category.id}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-left hover:text-gray-900">
                        <span className={selectedCategory === category.id ? "text-pink-600" : ""}>
                          {category.label}
                        </span>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">{category.count}</span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 py-2">
                        <div className="space-y-2">
                          <button 
                            className="text-sm text-gray-600 hover:text-gray-900"
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            All {category.label}
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-900">
                            Popular in {category.label}
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-900">
                            New in {category.label}
                          </button>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase mb-3">CAMPAIGN TIMING</h3>
                <div className="space-y-2">
                  {["all", "launching", "ending"].map((timing) => (
                    <label key={timing} className="flex items-center gap-2 cursor-pointer">
                      <div 
                        className={`h-4 w-4 rounded-full border ${
                          selectedTiming === timing ? 'border-4 border-purple-600' : 'border-gray-300'
                        }`} 
                        onClick={() => setSelectedTiming(timing)}
                      />
                      <span>{timing === "all" ? "All" : timing === "launching" ? "Launching soon" : "Ending soon"}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for campaigns"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border rounded-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-sm font-medium">Sort by</span>
                <Select defaultValue="trending">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="funded">Most Funded</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ title, price, raised, funded, category, status, image }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card 
      className="max-w-sm mx-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="relative p-0">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div 
            className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Button 
              variant="secondary" 
              className={`transition-opacity duration-300 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}
            >
              VIEW CAMPAIGN
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className={`absolute top-2 right-2 transition-opacity duration-300 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Badge className="absolute top-2 left-2 bg-background text-foreground">{status}</Badge>
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-2">STARTING AT</p>
        <p className="text-3xl font-bold mb-4">${price}</p>
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div 
            className="bg-primary h-2 rounded-full" 
            style={{ width: `${Math.min(funded, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">${raised.toLocaleString()} raised</span>
          <span className="text-muted-foreground">{funded}% funded</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Badge variant="outline" className="w-full justify-center py-1">
          {category}
        </Badge>
      </CardFooter>
    </Card>
  )
}