import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  weddingItems: Array<{ name: string; href: string; bold?: boolean }>;
  workEventsItems: Array<{ name: string; href: string; bold?: boolean }>;
  otherEventsItems: Array<{ name: string; href: string; bold?: boolean }>;
  infoItems: Array<{ name: string; href: string }>;
}

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  weddingItems, 
  workEventsItems, 
  otherEventsItems, 
  infoItems 
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-black z-50 md:hidden transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <img 
            src="/haus-logo.webp" 
            alt="Somerhaus Logo" 
            className="h-8 w-auto"
          />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="text-white hover:text-[#ea580c] hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full overflow-y-auto pb-6">
          <div className="p-6 space-y-8">
            {/* Weddings Section */}
            <div>
              <h3 className="font-body font-semibold mb-4 text-white border-b border-[#ea580c] pb-2">
                Weddings
              </h3>
              <div className="space-y-3">
                {weddingItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block text-base font-body text-white/90 hover:text-[#ea580c] transition-colors ${item.bold ? 'font-semibold text-white' : ''}`}
                    onClick={onClose}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Work Events Section */}
            <div>
              <h3 className="font-body font-semibold mb-4 text-white border-b border-[#ea580c] pb-2">
                Work Events
              </h3>
              <div className="space-y-3">
                {workEventsItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block text-base font-body text-white/90 hover:text-[#ea580c] transition-colors ${item.bold ? 'font-semibold text-white' : ''}`}
                    onClick={onClose}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Other Events Section */}
            <div>
              <h3 className="font-body font-semibold mb-4 text-white border-b border-[#ea580c] pb-2">
                Other Events
              </h3>
              <div className="space-y-3">
                {otherEventsItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-base font-body text-white/90 hover:text-[#ea580c] transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div>
              <h3 className="font-body font-semibold mb-4 text-white border-b border-[#ea580c] pb-2">
                Info
              </h3>
              <div className="space-y-3">
                <a
                  href="/about"
                  className="block text-base font-body font-semibold text-white hover:text-[#ea580c] transition-colors"
                  onClick={onClose}
                >
                  About
                </a>
                {infoItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-base font-body text-white/90 hover:text-[#ea580c] transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Somerset */}
            <div>
              <a
                href="https://somersetotr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-body font-semibold text-white hover:text-[#ea580c] transition-colors border-b border-[#ea580c] pb-2"
                onClick={onClose}
              >
                Somerset
              </a>
            </div>
          </div>

          {/* Book Now Button - Fixed at bottom */}
          <div className="mt-auto p-6 border-t border-white/10">
            <a href="/event-inquiry" onClick={onClose}>
              <Button className="w-full font-body bg-[#ea580c] text-white hover:bg-[#ea580c]/90 py-3">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 