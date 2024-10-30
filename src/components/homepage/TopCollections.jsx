"use client";

import { Search, Star, Ghost, Gamepad2, Palette } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function TopCollections() {
  const [activeCategory, setActiveCategory] = useState("TEAM FAVORITES");

  const categories = [
    { icon: Search, text: "10 COOL & CLEVER FINDS" },
    { icon: Star, text: "TEAM FAVORITES" },
    { icon: Ghost, text: "SPOOKY PICKS" },
    { icon: Gamepad2, text: "FUN & GAMES" },
    { icon: Palette, text: "CREATIVE SPOTLIGHT" },
  ];

  const products = [
    {
      image: "https://via.placeholder.com/600x300",
      title: 'Odin2 Portal: The Ultimate 7" OLED Gaming Handheld',
      description:
        'Experience gaming like never before with the Odin2 Portal. This powerful handheld features a stunning 7" OLED display for immersive gameplay on the go.',
      price: 334,
      originalPrice: 360,
      discount: 7,
      raised: 4290470,
      funded: 8581,
      large: true,
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "LIVALL PikaBoost 2: Electrify Your Rides with Ease",
      description:
        "Transform any bicycle into an e-bike with the LIVALL PikaBoost 2. This innovative device offers effortless electrification for a smoother, faster ride.",
      price: 379,
      originalPrice: 399,
      discount: 5,
      raised: 1105914,
      funded: 21648,
      badge: "GOGOPICK",
      trustBadge: true,
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Mirror Villas",
      description:
        "Experience luxury and nature in perfect harmony with Mirror Villas. These stunning accommodations blend seamlessly into their surroundings, offering a unique stay.",
      price: 1049,
      originalPrice: 1399,
      discount: 25,
      raised: 501299,
      funded: 2005,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "RAir X1 PRO|PRO MAX",
      description:
        "Capture breathtaking aerial footage with the RAir X1 PRO|PRO MAX. This advanced drone offers unparalleled stability and image quality for professional results.",
      badge: "GOGOPICK",
      dark: true,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "AF 28mm F4.5 FE",
      description:
        "Elevate your photography with the AF 28mm F4.5 FE lens. This compact wide-angle lens delivers sharp, distortion-free images in various lighting conditions.",
      badge: "VILTROX",
      dark: true,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "HUAWEI MateBook X Pro",
      description:
        "Experience premium performance and sleek design with the HUAWEI MateBook X Pro. This ultrabook combines power and portability for the modern professional.",
      badge: "GOGOPICK",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "CALM+",
      description:
        "Achieve balance and tranquility in your daily life with CALM+. This innovative wellness device helps you manage stress and improve overall well-being.",
      badge: "GOGOPICK",
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-12 py-12 md:py-24">
      <div className="flex flex-col items-center space-y-2 text-center mb-10">
        <p className="uppercase text-primary font-semibold">collections</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore our Top Collections</h2>
        </div>

      <nav className="flex justify-between mb-8 overflow-x-auto">
        {categories.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className={`flex flex-col items-center mx-2 min-w-max cursor-pointer ${
              activeCategory === text ? "text-primary-200" : ""
            }`}
            onClick={() => setActiveCategory(text)}
          >
            <Icon className="mb-2" />
            <span className="text-xs font-semibold">{text}</span>
            {activeCategory === text && (
              <div className="h-0.5 w-full bg-primary-200 mt-2"></div>
            )}
          </div>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  image,
  title,
  description,
  price,
  originalPrice,
  discount,
  raised,
  funded,
  badge,
  trustBadge,
  large,
  dark,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${
        large ? "col-span-full md:col-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-0"
        style={{ paddingBottom: large ? "50%" : "75%" }}
      >
        <img
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent text-white ${
            dark ? "bg-black/50" : ""
          }`}
        >
          <div>
            {badge && (
              <span className="inline-block bg-white text-black text-xs font-bold px-2 py-1 rounded mb-2">
                {badge}
              </span>
            )}
            {trustBadge && (
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-2 ml-2">
                <Star className="w-4 h-4 inline mr-1" fill="currentColor" />{" "}
                TRUST PROVEN
              </span>
            )}
            <h3 className="font-bold mb-2 text-lg">{title}</h3>
            <p className="text-sm mb-2 line-clamp-2">{description}</p>
          </div>
          <div>
            {price && (
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-bold">${price}</span>
                {originalPrice && (
                  <>
                    <span className="ml-2 text-sm line-through text-gray-300">
                      ${originalPrice} USD
                    </span>
                    <span className="ml-2 text-sm text-green-400">
                      ({discount}% OFF)
                    </span>
                  </>
                )}
              </div>
            )}
            {raised && funded && (
              <div className="text-sm text-gray-300">
                <span>${raised.toLocaleString()} raised</span>
                <span className="mx-2">•</span>
                <span>{funded}% funded</span>
              </div>
            )}
            {isHovered && (
              <Button variant="secondary">
VIEW CAMPAIGN              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
