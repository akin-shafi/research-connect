import { useState, useEffect } from 'react'
import Image from '@/assets/images/hero-image.png'
import { Button } from '@/components/ui/button'

const content = [
  {
    heading: "Showcase, Connect, Innovate.",
    description: "Display your breakthrough products, gain visibility, and connect with the partners you need to bring innovations to market. Research Connect is your gateway to turning ideas into impact."
  },
  {
    heading: "Refine Your Research with Expert Insights.",
    description: "Receive valuable feedback from industry leaders to enhance product development and boost market readiness. Accelerate your journey with guidance from experienced professionals."
  },
  {
    heading: "Connect with Investors & Collaborators.",
    description: "Discover funding and partnership opportunities that bring ideas to life. Build the connections you need to fuel your research and achieve real-world impact."
  }
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)
        setIsVisible(true)
      }, 500) // Wait for fade-out before changing content
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-24 bg-background w-full">
      <div className="flex justify-between items-center px-4 md:px-12 w-full">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 
              className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              aria-live="polite"
            >
              {content[currentIndex].heading}
            </h1>
            <p 
              className={`max-w-[600px] text-muted-foreground md:text-xl transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              aria-live="polite"
            >
              {content[currentIndex].description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <img
            src={Image}
            alt="Hero Image"
            className="aspect-square overflow-hidden rounded-xl object-cover object-center w-[350px] md:w-[450px]"
          />
        </div>
      </div>
    </section>
  )
}