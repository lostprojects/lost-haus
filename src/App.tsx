
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Wedding from "./pages/Wedding";
import FAQ from "./pages/Faq";
import NotFound from "./pages/NotFound";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import Showers from "./pages/Showers";
import EventInquiry from "./pages/EventInquiry";
import About from "./pages/About";
import SpecialEvents from "./pages/SpecialEvents";
import Dinners from "./pages/Dinners";
import Brunches from "./pages/Brunches";
import HappyHours from "./pages/HappyHours";
import Rehearsals from "./pages/Rehearsals";
import Parties from "./pages/Parties";
import Meetings from "./pages/Meetings";
import Gallery from "./pages/Gallery";
import BarPackages from "./pages/BarPackages";
import Vendors from "./pages/Vendors";
import LayoutPage from "./pages/Layout";
import PressPage from "./pages/Press";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/showers" element={<Showers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event-inquiry" element={<EventInquiry />} />
          <Route path="/about" element={<About />} />
          <Route path="/special-events" element={<SpecialEvents />} />
          <Route path="/dinners" element={<Dinners />} />
          <Route path="/brunches" element={<Brunches />} />
          <Route path="/happy-hours" element={<HappyHours />} />
          <Route path="/rehearsals" element={<Rehearsals />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bar-packages" element={<BarPackages />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/layout" element={<LayoutPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
