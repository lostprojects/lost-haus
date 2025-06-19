import BookNowButton from "@/components/ui/book-now-button";
import UrgencyFlagBanner from "@/components/ui/UrgencyFlag";
import { Badge } from "@/components/ui/badge";

interface CTAProps {
  badgeText?: string;
}

export function CTA({ badgeText = "Get Started" }: CTAProps) {
  return <div className="w-full py-10 lg:py-[40px]">
      <div className="container">
        <div className="bg-white rounded-md p-4 lg:p-14 gap-8 items-center flex flex-col text-center">
          <div className="flex flex-col gap-2">
            <Badge className="mb-4 font-body mx-auto">{badgeText}</Badge>
            <h2 className="tracking-tighter max-w-xl font-header" style={{ color: '#FFD764' }}>
              Create Your Perfect Event
            </h2>
            <p className="text-lg leading-relaxed tracking-tight max-w-xl font-body text-black">
              Reserve your date at Cincinnati's most enchanting event space. 
              Our 3,080 sq ft industrial-chic venue in Over-the-Rhine is perfect 
              for weddings, showers, and corporate events.
            </p>
          </div>
          <div>
            <UrgencyFlagBanner />
          </div>
          <div>
            <BookNowButton href="/event-inquiry" variant="black" />
          </div>
        </div>
      </div>
    </div>;
} 