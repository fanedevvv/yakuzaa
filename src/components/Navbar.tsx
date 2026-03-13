import { Link, useLocation } from "react-router-dom";
import { Users, Code, Menu, X, ChevronDown, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import YakuzaLogo from "@/assets/yakuza-logo.png";
import { useAuth } from "@/hooks/useAuth";

const navMenus = [
  {
    label: "Main",
    items: [
      { label: "Home", path: "/" },
      { label: "Commands", path: "/commands" },
      { label: "Features", path: "/features" },
      { label: "Premium", path: "/premium" },
    ],
  },
  {
    label: "Info & Status",
    items: [
      { label: "News & Updates", path: "/news" },
      { label: "Status", path: "/status" },
      { label: "Statistics", path: "/stats" },
      { label: "Uptime", path: "/uptime" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Partners", path: "/partners" },
      { label: "Meet the Devs", path: "/devs" },
      { label: "FanE", path: "/fane" },
      { label: "Easy-Code", path: "/easy" },
      { label: "Discord Server", path: "https://discord.gg/a9Kea3ymC7", external: true },
    ],
  },
  {
    label: "Support & Docs",
    items: [
      { label: "Documentation", path: "/docs" },
      { label: "FAQ", path: "/faq" },
    ],
  },
];

const DropdownMenu = ({ menu, isOpen, onToggle, onClose }: {
  menu: typeof navMenus[0];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 rounded-lg border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-border transition-colors"
      >
        {menu.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 min-w-[180px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl py-1 z-50">
          {menu.items.map((item) =>
            (item as any).external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <img src={YakuzaLogo} alt="Yakuza" className="w-7 h-7 rounded-full" />
          Yakuza Dev.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navMenus.map((menu) => (
            <DropdownMenu
              key={menu.label}
              menu={menu}
              isOpen={openMenu === menu.label}
              onToggle={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
              onClose={() => setOpenMenu(null)}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-noxx-red/10 text-noxx-red border border-noxx-red/30 text-sm font-medium hover:bg-noxx-red/20 transition-colors"
          >
            <Users className="w-4 h-4" />
            Staff Login
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted text-foreground border border-border text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <Code className="w-4 h-4" />
            Dashboard
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
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl p-4 space-y-3">
          {navMenus.map((menu) => (
            <div key={menu.label}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-2">{menu.label}</p>
              {menu.items.map((item) =>
                (item as any).external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
          <div className="flex gap-2 pt-2 border-t border-border/50">
            <a href="#" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-noxx-red/10 text-noxx-red border border-noxx-red/30 text-sm font-medium">
              <Users className="w-4 h-4" />
              Staff Login
            </a>
            <a href="#" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted text-foreground border border-border text-sm font-medium">
              <Code className="w-4 h-4" />
              Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
