import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Image from "@/assets/images/research-connect-logo.png";

const Navbar = () => {
  // const isAuthenticated = () => {
  //     return localStorage.getItem("user") !== null;
  //   };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "Ideas", href: "/ideas", id: "ideas" },
    { name: "Equipments", href: "#", id: "equipments" },
    { name: "Products", href: "/products", id: "products" },
    { name: "Publications", href: "#", id: "publications" },
    { name: "Research Unit", href: "#", id: "research-units" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src={Image} alt="" className="w-32" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`ml-8 text-[16px] font-medium text-gray-700 hover:text-primary-300 relative ${
                  activeLink === link.id ? "text-primary-300" : ""
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.name}
                {activeLink === link.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-300 transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden sm:flex sm:items-center gap-2">
            <Button variant="outline">Log In</Button>
            <Button variant="default">Start a Campaign</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-8 w-8 font-bold" />
              ) : (
                <Menu className="block h-8 w-8 font-bold" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  activeLink === link.id
                    ? "text-primary-300 bg-blue-50 border-l-4 border-primary-300 "
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary-300 "
                }`}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div>
              <Button variant="outline" className="mx-2">Log In</Button>
              <Button>Start a Campaign</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
