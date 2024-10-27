import Image from '@/assets/images/hero-image.png'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Unleashing Innovation for a Better Tomorrow
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              At Research Connect Marketplace, we are dedicated to transforming groundbreaking research into real-world solutions. Our pioneering platform serves as a dynamic hub that bridges the gap between innovative research initiatives and market accessibility.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Image}
              alt="Hero Image"
              className="aspect-square overflow-hidden rounded-xl object-cover object-center w-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}