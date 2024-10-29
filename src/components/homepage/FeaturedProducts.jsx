import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

// eslint-disable-next-line react/prop-types
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
            <Button size="icon" variant="secondary" className={`absolute top-2 right-2 transition-opacity duration-300 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}>
          <Bookmark className="h-4 w-4"  />
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
          <div className="bg-primary h-2 rounded-full" style={{ width: `${Math.min(funded, 100)}%` }}></div>
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

export default function ProductSection() {
  const products = [
    {
      title: "BYEEE Multiverse Collection",
      price: 300,
      raised: 761124,
      funded: 1341,
      category: "ART",
      status: "CLOSED",
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: "EcoTech Smart Home Kit",
      price: 199,
      raised: 452680,
      funded: 226,
      category: "TECH",
      status: "ACTIVE",
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: "Gourmet Meal Subscription",
      price: 50,
      raised: 98750,
      funded: 79,
      category: "FOOD",
      status: "ACTIVE",
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: "Indie Film Production",
      price: 5000,
      raised: 1250000,
      funded: 125,
      category: "FILM",
      status: "FUNDED",
      image: 'https://via.placeholder.com/300x200',
    }
  ]

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
    <div className="flex items-center gap-4 flex-col px-4 md:px-12">
      <div className="flex flex-col items-center space-y-2 text-center">
        <p className="uppercase text-primary font-semibold">Campaigns</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Campaigns</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our range of amazing products designed to make your life easier and more enjoyable.
          </p>
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
    </section>
  )
}