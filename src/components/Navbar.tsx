import { Link, useLocation } from "react-router-dom"; 
import {
  Menu, X, ChevronDown, Shield, LayoutGrid, Zap, Settings, Hash,
  Diamond, Activity, Monitor, Crown, Code, Users, Sparkles,
  MessageCircle, FileText, HelpCircle,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import YakuzaLogo from "@/assets/yakuza-logo.png";
import { useAuth } from "@/hooks/useAuth";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
  external?: boolean;
};

type NavCategory = {
  label: string;
  items: NavItem[];
};

const navMenus: NavCategory[] = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", path: "https://dashboard.yakuza.my", icon: LayoutGrid, external: true },
      { label: "Features", path: "/features", icon: Settings },
      { label: "Commands", path: "/commands", icon: Hash },
      { label: "Premium", path: "/premium", icon: Diamond },
    ],
  },
  {
    label: "Info & Status",
    items: [
      { label: "Status", path: "/status", icon: Activity },
      { label: "Statistics", path: "/stats", icon: Monitor },
      { label: "Uptime", path: "/uptime", icon: Activity },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "FanE", path: "/fane", icon: Crown },
      { label: "Easy-Code", path: "/easy", icon: Code },
      { label: "Partners", path: "/partners", icon: Users },
      { label: "Meet the Staff", path: "/devs", icon: Users },
      { label: "News", path: "/news", icon: Sparkles },
    ],
  },
  {
    label: "Support & Docs",
    items: [
      { label: "Support Server", path: "https://discord.gg/a9Kea3ymC7", icon: MessageCircle, external: true },
      { label: "Documentation", path: "/docs", icon: FileText },
      { label: "FAQ", path: "/faq", icon: HelpCircle },
    ],
  },
];

/* ── Desktop dropdown ── */
const DropdownMenu = ({ menu, isOpen, onToggle, onClose }: {
  menu: NavCategory;
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
            className="absolute top-full mt-2 left-0 min-w-[200px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl py-1 z-50"
          >
            {menu.items.map((item) => {
              const Icon = item.icon;
              const content = (
                <span className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  {item.label}
                </span>
              );
              return item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {content}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Mobile flat menu item ── */
const MobileMenuItem = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  const Icon = item.icon;
  const className = "flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors";

  return item.external ? (
    <a
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClose}
      className={className}
    >
      <Icon className="w-5 h-5" />
      {item.label}
    </a>
  ) : (
    <Link to={item.path} onClick={onClose} className={className}>
      <Icon className="w-5 h-5" />
      {item.label}
    </Link>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

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

      {/* Mobile menu — flat list with category headers + icons */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col max-h-[calc(100vh-4rem)]">
              {/* Scrollable menu items */}
              <div className="flex-1 overflow-y-auto py-2">
                <div className="rounded-xl border border-border/50 bg-card/30 mx-3 overflow-hidden">
                  {navMenus.map((category, idx) => (
                    <div key={category.label}>
                      {idx > 0 && <div className="border-t border-border/30" />}
                      <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {category.label}
                      </p>
                      {category.items.map((item) => (
                        <MobileMenuItem key={item.path} item={item} onClose={closeMobile} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky action buttons at bottom */}
              <div className="flex gap-2 p-3 border-t border-border/30">
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={closeMobile}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-noxx-red text-foreground text-sm font-medium"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </Link>
                )}
                <Link
                  to="/admin"
                  onClick={closeMobile}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-noxx-red text-foreground text-sm font-semibold"
                >
                  <Users className="w-4 h-4" />
                  {user ? "Staff Panel" : "Staff Login"}
                </Link>
                <a
                  href="https://dashboard.yakuza.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-noxx-red/80 text-foreground text-sm font-semibold"
                >
                  <Code className="w-4 h-4" />
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
