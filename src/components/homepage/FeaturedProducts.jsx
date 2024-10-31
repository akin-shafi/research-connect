import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, Heart } from "lucide-react"

// eslint-disable-next-line react/prop-types
function ProductCard({ title, price, category, status, image, description, likes }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card 
      className="max-w-sm mx-auto flex flex-col h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="relative p-0">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
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
              VIEW DETAILS
            </Button>
            <Button size="icon" variant="secondary" className={`absolute top-2 right-2 transition-opacity duration-300 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}>
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Badge className="absolute top-2 left-2 bg-background text-foreground">{status}</Badge>
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-3xl font-bold mb-4">${price}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
            <span>{likes} Likes</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Badge variant="outline" className="w-full justify-center py-1">
          {category}
        </Badge>
      </CardFooter>
    </Card>
  )
}

export default function ProductSection() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://research-connect-be.onrender.com/api/products')
      .then(response => {
        const formattedProducts = response.data.map(product => ({
          title: product.title,
          price: product.price,
          category: product.categoryId === 1 ? "TECH" : "Other",
          status: product.stockQuantity > 0 ? "IN STOCK" : "OUT OF STOCK",
          image: product.image,
          description: product.description,
          likes: product.likes
        }))
        setProducts(formattedProducts)
      })
      .catch(error => console.error("Error fetching products:", error))
  }, [])

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="flex items-center gap-4 flex-col px-4 md:px-12">
        <div className="flex flex-col items-center space-y-2 text-center">
          <p className="uppercase text-primary font-semibold">Products</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our exclusive range of high-quality products designed to enhance your experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <Button size="lg" variant="outline" className="mt-5">Explore All Products</Button>
      </div>
    </section>
  )
}
