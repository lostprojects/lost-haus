
import { Badge } from "@/components/ui/badge";
import BookNowButton from "@/components/ui/book-now-button";

function WeddingCTA() {
  return (
    <div className="w-full py-10 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-gradient-to-br from-[#FDE1D3] to-[#FEC6A1] rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge className="font-body">Limited Dates Available</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="tracking-tighter max-w-xl font-header text-foreground">
              Create Unforgettable Moments
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl font-body">
              Don't miss out on securing your preferred date for your special event. 
              Our calendar is filling up quickly for the upcoming season.
            </p>
          </div>
          <div>
                            <BookNowButton href="/event-inquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { WeddingCTA };
