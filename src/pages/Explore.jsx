import { Search, ChevronDown, X, Bookmark, Filter, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bgImage from "@/assets/images/bg.png";

export default function Explore() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch products and categories
  useEffect(() => {
    axios
      .get("https://research-connect-be.onrender.com/api/products")
      .then((response) => {
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
        setFilteredProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://research-connect-be.onrender.com/api/taxonomy")
      .then((response) => {
        // Organize categories by parameter
        const categoryMap = response.data.reduce((acc, item) => {
          if (!acc[item.parameter]) acc[item.parameter] = [];
          acc[item.parameter].push({ id: item.id, label: item.value });
          return acc;
        }, {});
        setCategories(categoryMap);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Filter products based on selected filters and search query
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());

      // Check if product matches all selected filters
      const matchesFilters = Object.keys(selectedFilters).every((param) => {
        const selectedValues = selectedFilters[param];
        return !selectedValues.length || selectedValues.includes(product[param.toLowerCase()]);
      });

      return matchesQuery && matchesFilters;
    });
    setFilteredProducts(filtered);
  }, [products, selectedFilters, searchQuery]);

  // Update filters
  const handleFilterChange = (parameter, value) => {
    setSelectedFilters((prevFilters) => {
      const currentValues = prevFilters[parameter] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prevFilters, [parameter]: newValues };
    });
  };

  const FilterSidebar = () => (
    <div className="space-y-4">
      {Object.keys(categories).map((parameter) => (
        <Collapsible key={parameter}>
          <CollapsibleTrigger className="flex justify-between items-center font-semibold uppercase mb-2">
            {parameter}
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 pl-4">
            {categories[parameter].map((item) => (
              <button
                key={item.id}
                onClick={() => handleFilterChange(parameter, item.label)}
                className={`w-full text-left ${
                  selectedFilters[parameter]?.includes(item.label) ? "text-primary font-medium" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
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
          <div className="flex gap-2">
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
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>
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
