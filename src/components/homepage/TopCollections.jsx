import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const campaigns = [
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "LIVALL PikaBoost 2: Electrify Your Rides with Ease",
    price: 379,
    originalPrice: 399,
    discount: "5% OFF",
    raised: "1,103,156",
    funded: "21687%",
    badge: "GOGOPICK"
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "Mirror Villas",
    price: 1049,
    originalPrice: 1399,
    discount: "25% OFF",
    raised: "497,513",
    funded: "1990%"
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "BYEEE Multiverse Collection",
    price: 300,
    raised: "761,124",
    funded: "1341%"
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "HOVERAir - World's First 8K Flying Action Camera",
    price: 499,
    originalPrice: 500,
    discount: "0% OFF",
    raised: "4,735,741",
    funded: "8891%",
    badge: "GOGOPICK",
    extraBadges: ["SHIPPING SOON"],
    button: "VIEW CAMPAIGN"
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "Viltrox AF 28mm F4.5 FE Chips-Size Ultra-Thin Lens",
    raised: "348,230",
    funded: "10999%",
    badge: "VILTROX | INDIEGOGO"
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "GPD DUO 13.3-inch Dual-OLED Screen Laptop",
    price: 1866,
    originalPrice: 1978,
    discount: "5% OFF",
    raised: "2,260,723",
    funded: "11304%",
    badge: "GOGOPICK"
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "Kineon: HEAL Your Gut, CALM Your Mind",
    price: 599,
    originalPrice: 998,
    discount: "39% OFF",
    raised: "595,724",
    funded: "5798%",
    badge: "GOGOPICK",
    extraText: "FULLY FUNDED IN 30 MINUTES"
  }
]

export default function TopCollections() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={campaign.image}
                alt={campaign.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              {campaign.badge && (
                <Badge className="absolute top-2 left-2 bg-white text-black">
                  {campaign.badge}
                </Badge>
              )}
              {campaign.extraBadges && campaign.extraBadges.map((badge, i) => (
                <Badge key={i} className="absolute top-2 right-2 bg-white text-black">
                  {badge}
                </Badge>
              ))}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{campaign.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-2xl font-bold">${campaign.price}</span>
                  {campaign.originalPrice && (
                    <span className="text-sm line-through ml-2">${campaign.originalPrice}</span>
                  )}
                </div>
                {campaign.discount && (
                  <Badge className="bg-green-500">{campaign.discount}</Badge>
                )}
              </div>
              <div className="text-sm text-gray-600">
                <span>${campaign.raised} raised</span>
                <span className="mx-2">|</span>
                <span>{campaign.funded} funded</span>
              </div>
              {campaign.button && (
                <Button className="w-full mt-4">{campaign.button}</Button>
              )}
              {campaign.extraText && (
                <p className="text-sm text-gray-600 mt-2">{campaign.extraText}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">VIEW ENTIRE COLLECTION</Button>
      </div>
    </div>
  )
}