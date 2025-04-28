import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Link } from "react-router-dom"
import { Send } from "lucide-react"

const socialIcons = [
  {
    name: "LinkedIn",
    image: "/lovable-uploads/31c22bc4-b41f-4ea7-84ca-97efc98eaef1.png",
    link: "https://linkedin.com",
    tooltip: "Connect with us on LinkedIn"
  },
  {
    name: "Instagram",
    image: "/lovable-uploads/c7a03617-c05f-49b7-8f75-c54010643961.png",
    link: "https://instagram.com",
    tooltip: "Follow us on Instagram"
  },
  {
    name: "X (Twitter)",
    image: "/lovable-uploads/8eb7ab37-08dc-43b9-9f7a-fa74ac9b112d.png",
    link: "https://twitter.com",
    tooltip: "Follow us on X (Twitter)"
  },
  {
    name: "Facebook",
    image: "/lovable-uploads/db22bf39-d1f0-4405-9204-bff18b3eb5b1.png",
    link: "https://facebook.com",
    tooltip: "Follow us on Facebook"
  }
];

function Footerdemo() {
  return (
    <footer className="relative border-t bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-header font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-gray-300 font-body">
              Join our newsletter for exclusive updates and offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white transition-all duration-300 hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#9b87f5]/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-header font-semibold">Event Spaces</h3>
            <nav className="space-y-2 text-sm font-body">
              <Link to="/wedding" className="block transition-colors hover:text-[#9b87f5]">
                Weddings
              </Link>
              <Link to="/showers" className="block transition-colors hover:text-[#9b87f5]">
                Showers
              </Link>
              <Link to="/corporate" className="block transition-colors hover:text-[#9b87f5]">
                Corporate Events
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-header font-semibold">Contact & Support</h3>
            <nav className="space-y-2 text-sm font-body">
              <Link to="/contact" className="block transition-colors hover:text-[#9b87f5]">
                Contact Us
              </Link>
              <Link to="/faq" className="block transition-colors hover:text-[#9b87f5]">
                FAQ
              </Link>
              <address className="mt-4 not-italic text-gray-300">
                <p>123 Innovation Street</p>
                <p>Tech City, TC 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: hello@example.com</p>
              </address>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-header font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {socialIcons.map((social) => (
                <TooltipProvider key={social.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-110"
                      >
                        <img 
                          src={social.image} 
                          alt={social.name}
                          className="h-10 w-10"
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-300 font-body">
            © 2024 Somerhaus. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm font-body">
            <Link to="/" className="transition-colors hover:text-[#9b87f5] text-gray-300">
              Privacy Policy
            </Link>
            <Link to="/" className="transition-colors hover:text-[#9b87f5] text-gray-300">
              Terms of Service
            </Link>
            <Link to="/" className="transition-colors hover:text-[#9b87f5] text-gray-300">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo }
