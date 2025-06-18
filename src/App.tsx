import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Critical pages loaded immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load other pages
const Wedding = lazy(() => import("./pages/Wedding"));
const WeddingLGBTQ = lazy(() => import("./pages/WeddingLGBTQ"));
const MicroWeddings = lazy(() => import("./pages/MicroWeddings"));
const Elopements = lazy(() => import("./pages/Elopements"));
const FAQ = lazy(() => import("./pages/Faq"));
const Corporate = lazy(() => import("./pages/Corporate"));
const Contact = lazy(() => import("./pages/Contact"));
const Showers = lazy(() => import("./pages/Showers"));
const EventInquiry = lazy(() => import("./pages/EventInquiry"));
const About = lazy(() => import("./pages/About"));
const SpecialEvents = lazy(() => import("./pages/SpecialEvents"));
const Dinners = lazy(() => import("./pages/Dinners"));
const PhotoShoots = lazy(() => import("./pages/PhotoShoots"));
const HappyHours = lazy(() => import("./pages/HappyHours"));
const Rehearsals = lazy(() => import("./pages/Rehearsals"));
const Parties = lazy(() => import("./pages/Parties"));
const Meetings = lazy(() => import("./pages/Meetings"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BarPackages = lazy(() => import("./pages/BarPackages"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Vendors = lazy(() => import("./pages/Vendors"));
const VenueLayout = lazy(() => import("./pages/VenueLayout"));
const PressPage = lazy(() => import("./pages/Press"));
const Resources = lazy(() => import("./pages/Resources"));
const EmergencyKit = lazy(() => import("./pages/EmergencyKit"));
const BudgetChecklist = lazy(() => import("./pages/BudgetChecklist"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/lgbtq-weddings" element={<WeddingLGBTQ />} />
        <Route path="/micro-weddings" element={<MicroWeddings />} />
        <Route path="/elopements" element={<Elopements />} />
        <Route path="/showers" element={<Showers />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/event-inquiry" element={<EventInquiry />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/faq" element={<FAQ />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/about/press" element={<PressPage />} />
        <Route path="/about/venue-layout" element={<VenueLayout />} />
        <Route path="/about/bar-packages" element={<BarPackages />} />
        <Route path="/about/pricing" element={<Pricing />} />
        <Route path="/about/gallery" element={<Gallery />} />
        <Route path="/special-events" element={<SpecialEvents />} />
        <Route path="/dinners" element={<Dinners />} />
        <Route path="/photo-shoots" element={<PhotoShoots />} />
        <Route path="/happy-hours" element={<HappyHours />} />
        <Route path="/rehearsals" element={<Rehearsals />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/emergency-kit" element={<EmergencyKit />} />
        <Route path="/resources/budget-checklist" element={<BudgetChecklist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
