import { Heart, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const products = [
  {
    title: 'Product 1',
    description: "This is a description for product 1. It's amazing and you should definitely check it out.",
    image: 'https://via.placeholder.com/300x200',
    time: '10 mins',
  },
  {
    title: 'Product 2',
    description: "Product 2 is even better than product 1. You won't believe what it can do!",
    image: 'https://via.placeholder.com/300x200',
    time: '15 mins',
  },
  {
    title: 'Product 3',
    description: "Product 3 is the culmination of all our hard work. It's simply the best.",
    image: 'https://via.placeholder.com/300x200',
    time: '20 mins',
  },
  {
    title: 'Product 4',
    description: "Introducing Product 4, our latest innovation. It's designed to exceed all your expectations.",
    image: 'https://via.placeholder.com/300x200',
    time: '25 mins',
  },
];

export function ProductSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-12">
        <div className="flex flex-col items-center space-y-4 text-center">
        <p className="uppercase text-primary font-semibold">Products</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our range of amazing products designed to make your life easier and more enjoyable.
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 bg-white p-1 rounded-full">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{product.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2 mt-2">{product.title}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}