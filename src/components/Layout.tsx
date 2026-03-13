import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KanjiBackground from "./KanjiBackground";
import ScrollToTop from "./ScrollToTop";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KanjiBackground />
      <Navbar />
      <motion.main
        key={pathname}
        className="relative z-10"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
