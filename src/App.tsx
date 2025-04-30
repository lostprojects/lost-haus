
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
