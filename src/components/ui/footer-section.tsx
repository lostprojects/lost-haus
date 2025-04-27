
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
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-[#9b87f5]/20 hover:border-[#9b87f5]">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-[#9b87f5]/20 hover:border-[#9b87f5]">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-[#9b87f5]/20 hover:border-[#9b87f5]">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-[#9b87f5]/20 hover:border-[#9b87f5]">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
