import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ── Desktop dropdown ── */
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
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" as const }}
            className="absolute top-full mt-2 left-0 min-w-[180px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl py-1 z-50"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Mobile accordion category ── */
const MobileAccordion = ({
  menu,
  isOpen,
  onToggle,
  onClose,
}: {
  menu: typeof navMenus[0];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  return (
    <div className="border-b border-border/30 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground"
      >
        {menu.label}
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-2">
              {menu.items.map((item) =>
                (item as any).external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const { user, isAdmin } = useAuth();

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

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
          {isAdmin && (
            <Link
              to="/admin"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-noxx-red text-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20"
            >
              <Shield className="w-4 h-4" />
              Admin
            </Link>
          )}
          <Link
            to="/admin"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-noxx-red/10 text-noxx-red border border-noxx-red/30 text-sm font-medium hover:bg-noxx-red/20 transition-colors"
          >
            
            {user ? "Staff Panel" : "Staff Login"}
          </Link>
          <a
            href="https://dashboard.yakuza.my"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted text-foreground border border-border text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            Dashboard
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="p-3">
              {/* Accordion categories */}
              <div className="rounded-xl border border-border/50 bg-card/30 overflow-hidden mb-3">
                {navMenus.map((menu) => (
                  <MobileAccordion
                    key={menu.label}
                    menu={menu}
                    isOpen={openMobileMenu === menu.label}
                    onToggle={() =>
                      setOpenMobileMenu(openMobileMenu === menu.label ? null : menu.label)
                    }
                    onClose={() => {
                      setMobileOpen(false);
                      setOpenMobileMenu(null);
                    }}
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-noxx-red text-foreground text-sm font-medium"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </Link>
                )}
                <Link
                  to="/admin"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-noxx-red/10 text-noxx-red border border-noxx-red/30 text-sm font-medium"
                >
                  <Users className="w-4 h-4" />
                  {user ? "Staff Panel" : "Staff Login"}
                </Link>
                <a
                  href="https://dashboard.yakuza.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-muted text-foreground border border-border text-sm font-medium"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
