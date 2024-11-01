import { Hero } from "@/components/homepage/Hero"
import { LogoMarquee } from "@/components/homepage/LogoMarquee"
import ProductSection from "@/components/homepage/FeaturedProducts"
import { PublishSection } from "@/components/homepage/Publish"
import { Banner } from "@/components/homepage/Banner"
import { FAQs } from "@/components/homepage/FAQs"
import TopCollections from "@/components/homepage/TopCollections"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee /> 
      <ProductSection />
      <TopCollections />
      <PublishSection />
      <Banner />
      <FAQs />
    </div>
  )
}

export default HomePage
