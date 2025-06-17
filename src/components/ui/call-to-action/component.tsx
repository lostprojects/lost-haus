import { Badge } from "@/components/ui/badge";
import { BookNowButton } from "@/components/ui/book-now-button";

function CTA() {
  return <div className="w-full py-10 lg:py-[40px]">
      <div className="container">
        <div className="flex flex-col text-center p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge className="font-body">Limited Dates Available</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl md:text-5xl tracking-tighter max-w-xl font-header" style={{ color: '#FFD764' }}>
              Create Your Perfect Event
            </h3>
            <p className="text-lg leading-relaxed tracking-tight max-w-xl font-body text-black">
              Reserve your date at Cincinnati's most enchanting event space. 
              Our 3,080 sq ft industrial-chic venue in Over-the-Rhine is perfect 
              for weddings, showers, and corporate events.
            </p>
          </div>
          <div>
            <BookNowButton />
          </div>
        </div>
      </div>
    </div>;
}
export { CTA };