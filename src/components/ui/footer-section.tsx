'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { ArrowUpRight, Send, Instagram, Facebook } from "lucide-react";
import { LogoTicker } from "@/components/LogoTicker";

// Updated social icons array - using lucide-react icons
const socialIcons = [{
  name: "Instagram",
  icon: Instagram,
  link: "https://www.instagram.com/somerhaus.space/?hl=en",
  title: "Follow us on Instagram"
}, {
  name: "Facebook",
  icon: Facebook,
  link: "https://www.facebook.com/Somerhaus.otr/",
  title: "Follow us on Facebook"
}];
interface FooterProps {
  logoType?: 'press' | 'clients' | 'none';
}

function Footer({ logoType = 'none' }: FooterProps = {}) {
  return (
    <>
      {/* Logos section on top of footer with black background */}
      {logoType && logoType !== 'none' && (
        <LogoTicker 
          type={logoType} 
          className="bg-black" 
        />
      )}
      <footer className="relative bg-[#1A1F2C] text-white font-mono">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h3 className="mb-4 font-header font-semibold">Say Hello</h3>
            <Link href="/about/contact" className="mb-6 flex items-center text-white hover:text-[#D65B2F] transition-colors text-sm">
              Contact Us <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            
            
            <address className="mt-6 not-italic text-sm text-gray-300">
              <p>Somerhaus Event Space</p>
              <p>1415 Republic St</p>
              <p>Cincinnati, OH 45202</p>
            </address>
            <div className="mt-6 flex space-x-4">
              {socialIcons.map(social => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={social.title}
                    className="block transition-transform hover:scale-110 text-white hover:text-[#D65B2F]"
                  >
                    <IconComponent className="h-10 w-10" />
                  </a>
                );
              })}
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#9b87f5]/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 font-header font-semibold">Event Types</h3>
            <nav className="space-y-2 text-sm font-mono">
              <Link href="/wedding" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Weddings <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/showers" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Showers <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/corporate" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Corporate Events <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-header font-semibold">Tools & Info</h3>
            <nav className="space-y-2 text-sm font-mono">
              <Link href="/event-inquiry" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Event Inquiry <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Guest Login <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/about/faq" className="flex items-center transition-colors hover:text-[#D65B2F]">
                FAQ <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/resources" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Resources <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/blog" className="flex items-center transition-colors hover:text-[#D65B2F]">
                Blog <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 font-header font-semibold">Newsletter</h3>
            <p className="mb-6 text-sm text-gray-300 font-mono">
              Join our newsletter for exclusive updates and offers.
            </p>
            <form className="relative">
              <Input type="email" placeholder="Enter your email" className="pr-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
              <Button type="submit" size="icon" className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#5CA87E] hover:bg-[#4A8B66] text-white transition-all duration-300 hover:scale-105">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm font-mono md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-gray-300">
              © 2024 Somerhaus. All rights reserved.
            </p>
            <div className="flex gap-2 text-gray-300">
              <Link href="/privacy" className="transition-colors hover:text-[#D65B2F]">Privacy</Link>
              <span>|</span>
              <Link href="/terms" className="transition-colors hover:text-[#D65B2F]">Terms</Link>
              <span>|</span>
              <Link href="/cookies" className="transition-colors hover:text-[#D65B2F]">Cookies</Link>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:justify-end">
            <a href="#" className="transition-colors hover:text-[#D65B2F] text-gray-300">Somerset</a>
            <a href="#" className="transition-colors hover:text-[#D65B2F] text-gray-300">Alice</a>
            <a href="#" className="transition-colors hover:text-[#D65B2F] text-gray-300">Somerhaus</a>
            <a href="#" className="transition-colors hover:text-[#D65B2F] text-gray-300">Second Story</a>
            <a href="#" className="transition-colors hover:text-[#D65B2F] text-gray-300">The Muse</a>
          </nav>
        </div>
      </div>
      </footer>
    </>
  );
}
export { Footer };