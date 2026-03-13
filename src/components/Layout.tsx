import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KanjiBackground from "./KanjiBackground";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KanjiBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
