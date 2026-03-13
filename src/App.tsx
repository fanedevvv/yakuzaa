import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Commands from "./pages/Commands.tsx";
import Partners from "./pages/Partners.tsx";
import News from "./pages/News.tsx";
import Devs from "./pages/Devs.tsx";
import Features from "./pages/Features.tsx";
import Status from "./pages/Status.tsx";
import Docs from "./pages/Docs.tsx";
import Fane from "./pages/Fane.tsx";
import Easy from "./pages/Easy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/devs" element={<Devs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/status" element={<Status />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/fane" element={<Fane />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
