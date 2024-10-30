import { Search, ChevronDown, X, Bookmark, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import bgImage from "@/assets/images/bg.png";


export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTiming, setSelectedTiming] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "tech", label: "Tech & Innovation", count: 42 },
    { id: "creative", label: "Creative Works", count: 28 },
    { id: "community", label: "Community Projects", count: 15 },
  ];

  const products = [
    {
      title: "RoboInfinity InsightDrive",
      price: 299,
      raised: 125000,
      funded: 85,
      category: "Tech & Innovation",
      status: "GOGOPICK",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "SWAY MIDI CONTROLLER",
      price: 199,
      raised: 75000,
      funded: 150,
      category: "Creative Works",
      status: "TRENDING",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Community Music Studio",
      price: 499,
      raised: 250000,
      funded: 65,
      category: "Community Projects",
      status: "NEW",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (
      selectedCategory !== "all" &&
      product.category !==
        categories.find((c) => c.id === selectedCategory)?.label
    ) {
      return false;
    }
    if (searchQuery) {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold uppercase mb-3">CATEGORY</h3>
        <div className="space-y-2">
          <button
            className={`w-full text-left ${
              selectedCategory === "all" ? "text-primary" : ""
            } font-medium`}
            onClick={() => setSelectedCategory("all")}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <Collapsible key={category.id}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left hover:text-foreground">
                <span
                  className={
                    selectedCategory === category.id ? "text-primary" : ""
                  }
                >
                  {category.label}
                </span>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">
                    {category.count}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 py-2">
                <div className="space-y-2">
                  <button
                    className="text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    All {category.label}
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground">
                    Popular in {category.label}
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground">
                    New in {category.label}
                  </button>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase mb-3">
          CAMPAIGN TIMING
        </h3>
        <div className="space-y-2">
          {["all", "launching", "ending"].map((timing) => (
            <label
              key={timing}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`h-4 w-4 rounded-full border ${
                  selectedTiming === timing
                    ? "border-4 border-primary"
                    : "border-input"
                }`}
                onClick={() => setSelectedTiming(timing)}
              />
              <span>
                {timing === "all"
                  ? "All"
                  : timing === "launching"
                  ? "Launching soon"
                  : "Ending soon"}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Explore it all</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-8 md:px-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
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
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar />
              </SheetContent>
            </Sheet>
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

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  title,
  price,
  raised,
  funded,
  category,
  status,
  image,
}) {
  const [isHovering, setIsHovering] = useState(false);

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
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="secondary"
              className={`transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
            >
              VIEW CAMPAIGN
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className={`absolute top-2 right-2 transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Badge className="absolute top-2 left-2 bg-background text-foreground">
          {status}
        </Badge>
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
          <span className="font-semibold">
            ${raised.toLocaleString()} raised
          </span>
          <span className="text-muted-foreground">{funded}% funded</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Badge variant="outline" className="w-full justify-center py-1">
          {category}
        </Badge>
      </CardFooter>
    </Card>
  );
}