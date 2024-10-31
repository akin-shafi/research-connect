import { Search, ChevronDown, X, Bookmark, Filter, Check } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
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
  const [selectedFilters, setSelectedFilters] = useState({
    type: "all",
    brand: "all",
    category: "all",
  });
  const [sortOption, setSortOption] = useState("priceAsc");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [equipmentItems, setEquipmentItems] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});

  // Fetch equipment items and filter options
  useEffect(() => {
    axios
      .get("https://research-connect-be.onrender.com/api/equipment")
      .then((response) => {
        setEquipmentItems(response.data);
      })
      .catch((error) => console.error("Error fetching equipment:", error));

    axios
      .get("https://research-connect-be.onrender.com/api/taxonomy")
      .then((response) => {
        const organizedFilters = response.data.reduce((acc, item) => {
          if (!acc[item.parameter]) acc[item.parameter] = [];
          acc[item.parameter].push({ id: item.id, label: item.value });
          return acc;
        }, {});
        setFilterOptions(organizedFilters);
      })
      .catch((error) => console.error("Error fetching filter options:", error));
  }, []);

  // Filter and sort equipment items based on selected options
  const filteredEquipment = equipmentItems
    .filter((item) => {
      if (
        selectedFilters.type !== "all" &&
        item.type !== selectedFilters.type
      ) {
        return false;
      }
      if (
        selectedFilters.brand !== "all" &&
        item.brand !== selectedFilters.brand
      ) {
        return false;
      }
      if (
        selectedFilters.category !== "all" &&
        item.category !== selectedFilters.category
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
      return 0;
    });

  const handleFilterChange = (filterKey, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      {["Type", "Brand", "Category"].map((filterKey) => (
        <div key={filterKey}>
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center font-semibold uppercase mb-2">
              {filterKey}
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pl-4">
              <button
                onClick={() => handleFilterChange(filterKey.toLowerCase(), "all")}
                className={`w-full text-left ${
                  selectedFilters[filterKey.toLowerCase()] === "all" ? "text-primary font-medium" : ""
                }`}
              >
                All {filterKey}s
              </button>
              {filterOptions[filterKey]?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleFilterChange(filterKey.toLowerCase(), option.label)}
                  className={`w-full text-left ${
                    selectedFilters[filterKey.toLowerCase()] === option.label ? "text-primary font-medium" : ""
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
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
              defaultValue="priceAsc"
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
  taxonomy,
  institutionName,
  contactEmail,
  availability,
  verificationStatus,
  image,
  location,
}) {
  return (
    <Card className="overflow-hidden rounded-lg bg-white">
      <div className="relative h-48 w-full md:h-60">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <CardContent className="p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <Bookmark className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">{taxonomy}</Badge>
            <Badge variant="outline">{location}</Badge>
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <div>
            <p className="text-sm font-medium">{institutionName}</p>
            <p className="text-xs text-muted-foreground">{contactEmail}</p>
          </div>
          <div className="flex items-center gap-2">
            {availability ? (
              <Badge variant="success" className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Available
              </Badge>
            ) : (
              <Badge variant="destructive" className="flex items-center gap-1">
                <X className="h-3 w-3" /> Unavailable
              </Badge>
            )}
            {verificationStatus && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Verified
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}