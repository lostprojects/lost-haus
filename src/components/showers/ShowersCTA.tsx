
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ShowersCTA() {
  return (
    <div className="w-full py-10 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-gradient-to-br from-[#FDE1D3] to-[#FEC6A1] rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge className="font-body">Limited Dates Available</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-header text-foreground">
              Create Cherished Memories
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl font-body">
              Don't miss out on securing your preferred date for your special celebration. 
              Our calendar is filling up quickly for the upcoming season.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4">
              Reserve Your Date <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="gap-4">
              Schedule a Tour <CalendarCheck className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ShowersCTA };
