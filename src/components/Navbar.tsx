import { Link, useLocation } from "react-router-dom";
import { Bot, Star, Monitor, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Main", path: "/" },
  { label: "Commands", path: "/commands" },
  { label: "Partners", path: "/partners" },
  { label: "News", path: "/news" },
  { label: "Devs", path: "/devs" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <Bot className="w-6 h-6 text-noxx-purple" />
          Noxx
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-noxx-yellow/10 text-noxx-yellow border border-noxx-yellow/30 text-sm font-medium hover:bg-noxx-yellow/20 transition-colors"
          >
            <Star className="w-4 h-4" />
            Vote
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted text-foreground border border-border text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <Monitor className="w-4 h-4" />
            Source
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                location.pathname === link.path
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
