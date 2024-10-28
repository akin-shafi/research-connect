import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className=" px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We are dedicated to providing the best platform for creators and innovators to share their ideas with the world.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              123 Innovation Street<br />
              Tech City, TC 12345<br />
              contact@example.com<br />
              (123) 456-7890
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 ResearchConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}