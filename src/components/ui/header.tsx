'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from '@/components/ui/mobile-menu';
import BookNowButton from '@/components/ui/book-now-button';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface HeaderProps {
  hasHero?: boolean;
}

const Header = ({ hasHero = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Somerset', href: 'https://somersetotr.com', external: true },
  ];

  const weddingItems = [
    { name: 'Weddings Home', href: '/wedding', bold: true },
    { name: 'Elopements', href: '/wedding/elopements' },
    { name: 'Micro Weddings', href: '/wedding/micro-weddings' },
    { name: 'Rehearsals', href: '/wedding/rehearsals' },
  ];

  const workEventsItems = [
    { name: 'Corporate Events', href: '/corporate', bold: true },
    { name: 'Meetings', href: '/meetings' },
    { name: 'Happy Hours', href: '/happy-hours' },
  ];

  const otherEventsItems = [
    { name: 'Special Events', href: '/special-events' },
    { name: 'Showers', href: '/showers' },
    { name: 'Dinners', href: '/dinners' },
    { name: 'Photo Shoots', href: '/photo-shoots' },
    { name: 'Parties', href: '/parties' },
  ];

  const infoItems = [
    { name: 'Gallery', href: '/about/gallery' },
    { name: 'FAQ', href: '/about/faq' },
    { name: 'Contact', href: '/about/contact' },
    { name: 'Bar Packages', href: '/about/bar-packages' },
    { name: 'Pricing', href: '/about/pricing' },
    { name: 'Venue Layout', href: '/about/venue-layout' },
    { name: 'Press', href: '/about/press' },
    { name: 'Vendors', href: '/vendors' },
    { name: 'Blog', href: '/blog' },
  ];

  // Determine background based on hasHero prop and scroll state
  const getHeaderBackground = () => {
    if (!hasHero) {
      return 'bg-black'; // Always black when no hero
    }
    return isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${getHeaderBackground()}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <OptimizedImage
              src="/haus-logo.webp"
              alt="Somerhaus Logo"
              className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Custom Weddings Dropdown Menu */}
            <div className="relative group">
              <Link
                href="/wedding"
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#ea580c]' : 'text-white hover:text-[#ea580c]'}`}
              >
                Weddings
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  {weddingItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#ea580c] ${item.bold ? 'font-bold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Work Events Dropdown Menu */}
            <div className="relative group">
              <Link
                href="/corporate"
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#ea580c]' : 'text-white hover:text-[#ea580c]'}`}
              >
                Work Events
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  {workEventsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#ea580c] ${item.bold ? 'font-bold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {menuItems.filter(item => item.name !== 'Somerset').map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-body transition-colors text-white hover:text-[#ea580c]"
              >
                {item.name}
              </a>
            ))}
            {/* Custom Other Events Dropdown Menu */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#ea580c]' : 'text-white hover:text-[#ea580c]'}`}
              >
                Other Events
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  {otherEventsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#ea580c]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Info Dropdown Menu */}
            <div className="relative group">
              <Link
                href="/about"
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#ea580c]' : 'text-white hover:text-[#ea580c]'}`}
              >
                Info
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#ea580c] font-bold"
                  >
                    About
                  </Link>
                  {infoItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#ea580c]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Somerset Link */}
            <a
              key="Somerset"
              href="https://somersetotr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body transition-colors text-white hover:text-[#ea580c]"
            >
              Somerset
            </a>

            <BookNowButton href="/event-inquiry" size="small" />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-[#ea580c] hover:bg-white/10"
              onClick={useCallback(() => setIsMobileMenuOpen(!isMobileMenuOpen), [])}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        weddingItems={weddingItems}
        workEventsItems={workEventsItems}
        otherEventsItems={otherEventsItems}
        infoItems={infoItems}
      />
    </header>
  );
};

export default Header;
