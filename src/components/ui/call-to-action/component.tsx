import { CalendarCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
function CTA() {
  return <div className="w-full py-10 lg:py-16">
      <div className="container">
        <div className="flex flex-col text-center bg-gradient-to-br from-[#FDE1D3] to-[#FEC6A1] rounded-md p-4 lg:p-14 gap-8 items-center bg-orange-600">
          <div>
            <Badge className="font-body">Limited Dates Available</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-header">
              Create Your Perfect Event
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl font-body">
              Reserve your date at Cincinnati's most enchanting event space. 
              Our 3,080 sq ft industrial-chic venue in Over-the-Rhine is perfect 
              for weddings, showers, and corporate events.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4">
              Schedule a Tour <CalendarCheck className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="gap-4">
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>;
}
export { CTA };