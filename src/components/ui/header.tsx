import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, X } from 'lucide-react';

const Header = () => {
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
    { name: 'Corporate Events', href: '/corporate' },
    { name: 'Somerset', href: 'https://somersetotr.com', external: true },
  ];

  const weddingItems = [
    { name: 'Weddings Home', href: '/wedding', bold: true },
    { name: 'Elopements', href: '/elopements' },
    { name: 'LGBTQ Weddings', href: '/lgbtq-weddings' },
    { name: 'Micro Weddings', href: '/micro-weddings' },
    { name: 'Rehearsals', href: '/rehearsals' },
  ];

  const otherEventsItems = [
    { name: 'Special Events', href: '/special-events' },
    { name: 'Showers', href: '/showers' },
    { name: 'Dinners', href: '/dinners' },
    { name: 'Photo Shoots', href: '/photo-shoots' },
    { name: 'Happy Hours', href: '/happy-hours' },
    { name: 'Parties', href: '/parties' },
    { name: 'Meetings', href: '/meetings' },
  ];

  const infoItems = [
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Bar Packages', href: '/bar-packages' },
    { name: 'Vendors', href: '/vendors' },
    { name: 'Venue Layout', href: '/venue-layout' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/haus-logo.webp" 
              alt="Somerhaus Logo" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Custom Weddings Dropdown Menu */}
            <div className="relative group">
              <a
                href="/wedding"
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#D65B2F]' : 'text-white hover:text-[#D65B2F]'}`}
              >
                Weddings
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </a>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  {weddingItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#D65B2F] ${item.bold ? 'font-bold' : ''}`}
                    >
                      {item.name}
                    </a>
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
                className="text-sm font-body transition-colors text-white hover:text-[#D65B2F]"
              >
                {item.name}
              </a>
            ))}
            {/* Custom Other Events Dropdown Menu */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#D65B2F]' : 'text-white hover:text-[#D65B2F]'}`}
              >
                Other Events
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  {otherEventsItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#D65B2F]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Info Dropdown Menu */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#D65B2F]' : 'text-white hover:text-[#D65B2F]'}`}
              >
                Info
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 bg-black/90 backdrop-blur-sm rounded-md">
                  {infoItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#D65B2F]"
                    >
                      {item.name}
                    </a>
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
              className="text-sm font-body transition-colors text-white hover:text-[#D65B2F]"
            >
              Somerset
            </a>

            <a 
              href="/event-inquiry"
              className="inline-block transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] active:scale-95 transform-gpu"
            >
              <Button
                className={`font-body ${isScrolled ? 'bg-white text-black hover:bg-[#5CA87E] hover:text-white' : 'bg-white/10 text-white hover:bg-[#5CA87E] hover:text-white'}`}
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="icon" 
              className={`${isScrolled ? 'border-white/20 text-white' : 'border-white/10 text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 top-[80px] bg-black/95 backdrop-blur-sm z-40">
                <div className="container mx-auto px-4 py-8">
                  <div className="flex flex-col gap-6">
                    {/* Weddings Section */}
                    <div>
                      <h3 className="text-xl font-body font-medium mb-4 text-white">Weddings</h3>
                      <div className="pl-4 border-l-2 border-[#D65B2F]">
                        {weddingItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={`block text-lg font-body py-2 text-white hover:text-[#D65B2F] transition-colors ${item.bold ? 'font-bold' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Corporate Events */}
                    {menuItems.filter(item => item.name !== 'Somerset').map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-xl font-body py-2 text-white hover:text-[#D65B2F] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}

                    {/* Other Events Section */}
                    <div>
                      <h3 className="text-xl font-body font-medium mb-4 text-white">Other Events</h3>
                      <div className="pl-4 border-l-2 border-[#D65B2F]">
                        {otherEventsItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block text-lg font-body py-2 text-white hover:text-[#D65B2F] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Info Section */}
                    <div>
                      <h3 className="text-xl font-body font-medium mb-4 text-white">Info</h3>
                      <div className="pl-4 border-l-2 border-[#D65B2F]">
                        {infoItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block text-lg font-body py-2 text-white hover:text-[#D65B2F] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Somerset */}
                    <a
                      href="https://somersetotr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-body py-2 text-white hover:text-[#D65B2F] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Somerset
                    </a>
                    
                    {/* Book Now Button */}
                    <a 
                      href="/event-inquiry" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-block transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] active:scale-95 transform-gpu"
                    >
                      <Button className="mt-4 w-full font-body bg-white text-black hover:bg-[#5CA87E] hover:text-white">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
