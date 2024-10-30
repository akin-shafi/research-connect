import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className=" px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Research Connect is a dedicated marketplace designed to empower
              researchers, innovators, and industry professionals in their
              journey from product development to market access.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-muted-foreground hover:text-primary"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/publish"
                  className="text-muted-foreground hover:text-primary"
                >
                  Publish
                </Link>
              </li>
              <li>
                <Link
                  to="/discovery"
                  className="text-muted-foreground hover:text-primary"
                >
                  Discovery
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              Abuja Nigeria Office <br />
              10, Lord Lugard street, <br />
              Asokoro Abuja,
              <br />
              Nigeria
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 ResearchConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
