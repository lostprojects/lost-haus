
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
interface ImageSource {
  src: string;
  alt: string;
}
interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
  topImageIndex?: 0 | 1;
  rotation?: number;
  translateX?: number;
  translateY?: number;
  url?: string;
}
function RevealImageListItem({
  text,
  images,
  topImageIndex = 0,
  rotation = 12,
  translateX = 6,
  translateY = 6,
  url
}: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect = "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";
  
  const bottomImage = images[topImageIndex === 0 ? 1 : 0];
  const topImage = images[topImageIndex];
  
  const content = (
    <div className="group relative h-fit w-fit overflow-visible py-8">
                  <h1 className="text-4xl font-black text-foreground transition-all duration-500 font-body md:text-5xl cursor-pointer" style={{'--hover-color': '#FFD764'} as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#FFD764'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={bottomImage.alt} src={bottomImage.src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div 
        className={cn(container, "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500")}
        style={{
          transform: `translate(${translateX * 0.25}rem, ${translateY * 0.25}rem) rotate(${rotation}deg)`
        }}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={topImage.alt} src={topImage.src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );

  return url ? (
    <Link 
      to={url} 
      onClick={() => {
        setTimeout(() => window.scrollTo(0, 0), 100);
      }}
    >
      {content}
    </Link>
  ) : content;
}
function RevealImageList() {
  const items: ShowImageListItemProps[] = [{
    text: "Weddings",
    images: [{
      src: "/photo/wedding-portrait3-cincinnati-wedding-venue-somerhaus.jpg",
      alt: "Wedding ceremony at Somerhaus"
    }, {
      src: "/photo/wedding-hero2-cincinnati-wedding-venue-somerhaus.jpeg",
      alt: "Wedding details and setup"
    }],
    topImageIndex: 0,
    rotation: 22,
    translateX: 9,
    translateY: 2,
    url: "/wedding"
  }, {
    text: "Meetings",
    images: [{
      src: "/photo/meeting-portrait1-arttalk-cincinnati-event-space-somerhaus.jpg",
      alt: "Corporate meeting at Somerhaus"
    }, {
      src: "/photo/space-portrait2-cincinnati-event-space-somerhaus.jpg",
      alt: "Professional event discussion"
    }],
    topImageIndex: 1,
    rotation: -18,
    translateX: 2,
    translateY: 11,
    url: "/meetings"
  }, {
    text: "Showers",
    images: [{
      src: "/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.jpg",
      alt: "Elegant shower celebration"
    }, {
      src: "/photo/wedding-portrait2-cincinnati-wedding-venue-somerhaus.png",
      alt: "Intimate shower gathering"
    }],
    topImageIndex: 0,
    rotation: 8,
    translateX: 12,
    translateY: 4,
    url: "/showers"
  }, {
    text: "Dinners",
    images: [{
      src: "/photo/party-dinner-hero1-cincinnati-event-space-somerhaus.jpg",
      alt: "Elegant dinner event"
    }, {
      src: "/photo/meeting-dinner-hero1-artworks-cincinnati-event-space-somerhaus.jpg",
      alt: "Dinner party at Somerhaus"
    }],
    topImageIndex: 1,
    rotation: -25,
    translateX: 5,
    translateY: 8,
    url: "/dinners"
  }, {
    text: "Parties",
    images: [{
      src: "/photo/space-portrait1-cincinnati-event-space-somerhaus.jpg",
      alt: "Party celebration"
    }, {
      src: "/photo/party-hero1-cincinnati-event-venue-somerhaus.jpeg",
      alt: "Party venue setup"
    }],
    topImageIndex: 0,
    rotation: 14,
    translateX: 7,
    translateY: 12,
    url: "/parties"
  }, {
    text: "Rehearsals",
    images: [{
      src: "/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png",
      alt: "Rehearsal dinner celebration"
    }, {
      src: "/photo/wedding-portrait1-cincinnati-wedding-venue-somerhaus.jpg",
      alt: "Rehearsal venue space"
    }],
    topImageIndex: 1,
    rotation: -10,
    translateX: 10,
    translateY: 6,
    url: "/rehearsals"
  }];
  return <div className="flex flex-col gap-8 rounded-sm bg-transparent px-4 md:px-8 py-4 max-w-7xl mx-auto">
      <div className="text-center">
                    <h3 className="text-5xl font-bold md:text-5xl font-header mb-4" style={{color: '#FFD764'}}>Event Types</h3>
                  <p className="text-lg font-body text-black max-w-4xl mx-auto leading-relaxed">
          From intimate celebrations to grand corporate gatherings, our 3,000+ sq ft venue transforms to match your vision. 
          Located in the heart of Cincinnati's historic Over-the-Rhine, we've mastered the art of creating unforgettable experiences 
          that leave lasting impressions. Whatever you're planning, we don't just host it—we elevate it.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {items.map((item, index) => <RevealImageListItem key={index} text={item.text} images={item.images} topImageIndex={item.topImageIndex} rotation={item.rotation} translateX={item.translateX} translateY={item.translateY} url={item.url} />)}
      </div>
    </div>;
}
export { RevealImageList };
