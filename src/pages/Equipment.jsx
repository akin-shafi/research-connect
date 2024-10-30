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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import bgImage from "@/assets/images/bg.png";

export default function EquipmentExplore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFacility, setSelectedFacility] = useState("all");
  const [sortOption, setSortOption] = useState("priceAsc"); // New state for sorting
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "research", label: "Research Equipment", count: 20 },
    { id: "lab", label: "Laboratories", count: 15 },
  ];

  const equipmentItems = [
    {
      name: "Spectrometer XT-3000",
      description: "Advanced spectrometer for chemical analysis.",
      category: "Research Equipment",
      facility: "Lab A",
      efficiency: "85%",
      progress: 70,
      price: 12000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "High-Speed Centrifuge",
      description: "Essential for molecular biology labs.",
      category: "Laboratories",
      facility: "BioLab",
      efficiency: "95%",
      progress: 90,
      price: 8500,
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const filteredEquipment = equipmentItems
    .filter((item) => {
      if (
        selectedCategory !== "all" &&
        item.category !==
          categories.find((c) => c.id === selectedCategory)?.label
      ) {
        return false;
      }
      if (searchQuery) {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      if (sortOption === "efficiency")
        return parseFloat(b.efficiency) - parseFloat(a.efficiency);
      if (sortOption === "progress") return b.progress - a.progress;
      return 0;
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
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase mb-3">FACILITY</h3>
        <div className="space-y-2">
          {["all", "Lab A", "BioLab"].map((facility) => (
            <label
              key={facility}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`h-4 w-4 rounded-full border ${
                  selectedFacility === facility
                    ? "border-4 border-primary"
                    : "border-input"
                }`}
                onClick={() => setSelectedFacility(facility)}
              />
              <span>{facility === "all" ? "All" : facility}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Explore Equipment
          </h1>
        </div>
      </div>

      <div className="mx-auto px-4 py-8 md:px-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search for equipment"
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
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              defaultValue="trending"
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                <SelectItem value="efficiency">Efficiency</SelectItem>
                <SelectItem value="progress">Progress Acquired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((equipment, index) => (
                <EquipmentCard key={index} {...equipment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquipmentCard({
  name,
  description,
  category,
  facility,
  efficiency,
  progress,
  price,
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
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            variant="secondary"
            className={`${isHovering ? "opacity-100" : "opacity-0"}`}
          >
            VIEW DETAILS
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className={`absolute top-2 right-2 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <Badge className="absolute top-2 left-2 bg-background text-foreground">
          {facility}
        </Badge>
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-lg font-bold mb-4">${price}</p>
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">{efficiency} Efficient</span>
          <span className="text-muted-foreground">{progress}% Acquired</span>
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
