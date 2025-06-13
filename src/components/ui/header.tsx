import { TiltCard } from '@/components/ui/tilt-card';

import { useEffect, useState, useRef } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Weddings', href: '/wedding' },
    { name: 'Corporate Events', href: '/corporate' },
    { name: 'Somerset', href: 'https://somersetotr.com', external: true },
  ];

  const otherEventsItems = [
    { name: 'Special Events', href: '/special-events' },
    { name: 'Showers', href: '/showers' },
    { name: 'Dinners', href: '/dinners' },
    { name: 'Brunches', href: '/brunches' },
    { name: 'Happy Hours', href: '/happy-hours' },
    { name: 'Rehearsals', href: '/rehearsals' },
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
    { name: 'Layout', href: '/layout' },
    { name: 'Press', href: '/press' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png" 
              alt="Somerhaus Logo" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.filter(item => item.name !== 'Somerset').map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-body transition-colors text-white hover:text-[#9b87f5]"
              >
                {item.name}
              </a>
            ))}
            {/* Custom Other Events Dropdown Menu */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#9b87f5]' : 'text-white hover:text-[#9b87f5]'}`}
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
                      className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#9b87f5]"
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
                className={`flex items-center text-sm font-body transition-colors ${isScrolled ? 'text-white hover:text-[#9b87f5]' : 'text-white hover:text-[#9b87f5]'}`}
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
                      className="block px-4 py-2 text-sm font-body text-white transition-colors hover:text-[#9b87f5]"
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
              className="text-sm font-body transition-colors text-white hover:text-[#9b87f5]"
            >
              Somerset
            </a>

            <TiltCard href="/event-inquiry">
              <Button
                className={`font-body group-hover:text-black ${isScrolled ? 'bg-white text-black hover:bg-[#C1FF41]' : 'bg-white/10 text-white hover:bg-[#C1FF41]'}`}
              >
                Book Now
              </Button>
            </TiltCard>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={`${isScrolled ? 'border-white/20 text-white' : 'border-white/10 text-white'}`}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <img 
                      src="/lovable-uploads/41b903d4-d950-4e6e-839a-07c706d701b0.png" 
                      alt="Somerhaus Logo" 
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-body py-2 hover:text-gray-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  {/* Other Events Section in Mobile Menu */}
                  <div className="mt-2 mb-2">
                    <h3 className="text-lg font-body font-medium mb-2">Other Events</h3>
                    <div className="pl-2 border-l-2 border-gray-700">
                      {otherEventsItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-lg font-body py-2 hover:text-[#9b87f5] transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Info Section in Mobile Menu */}
                  <div className="mt-2 mb-2">
                    <h3 className="text-lg font-body font-medium mb-2">Info</h3>
                    <div className="pl-2 border-l-2 border-gray-700">
                      {infoItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-lg font-body py-2 hover:text-[#9b87f5] transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <TiltCard href="/event-inquiry">
                    <Button className="mt-4 w-full font-body hover:bg-[#C1FF41] group-hover:text-black">Book Now</Button>
                  </TiltCard>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
