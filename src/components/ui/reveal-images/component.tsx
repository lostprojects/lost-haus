
import { cn } from "@/lib/utils";
interface ImageSource {
  src: string;
  alt: string;
}
interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}
function RevealImageListItem({
  text,
  images
}: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect = "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";
  return <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="text-4xl font-black text-foreground transition-all duration-500 group-hover:opacity-40 font-body md:text-5xl">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className={cn(container, "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12")}>
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>;
}
function RevealImageList() {
  const items: ShowImageListItemProps[] = [{
    text: "Weddings",
    images: [{
      src: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png",
      alt: "Wedding ceremony"
    }, {
      src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
      alt: "Wedding setup"
    }]
  }, {
    text: "Meetings",
    images: [{
      src: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png",
      alt: "Panel discussion"
    }, {
      src: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png",
      alt: "Event space"
    }]
  }, {
    text: "Showers",
    images: [{
      src: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png",
      alt: "Event space"
    }, {
      src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
      alt: "Event setup"
    }]
  }, {
    text: "Dinners",
    images: [{
      src: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png",
      alt: "Dinner setup"
    }, {
      src: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png",
      alt: "Event space"
    }]
  }, {
    text: "Parties",
    images: [{
      src: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png",
      alt: "Party space"
    }, {
      src: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png",
      alt: "Event setup"
    }]
  }, {
    text: "Receptions",
    images: [{
      src: "/lovable-uploads/9af23dea-0956-4cc4-a1c8-f2cee31084b2.png",
      alt: "Reception setup"
    }, {
      src: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png",
      alt: "Reception space"
    }]
  }];
  return <div className="flex flex-col gap-1 rounded-sm bg-background px-4 md:px-8 py-4 max-w-7xl mx-auto">
      <h3 className="text-5xl font-bold md:text-5xl text-orange-600 font-header text-center">Event Types</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {items.map((item, index) => <RevealImageListItem key={index} text={item.text} images={item.images} />)}
      </div>
    </div>;
}
export { RevealImageList };
