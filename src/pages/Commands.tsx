import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Shield, DollarSign, Gamepad2, Gift, Image, Info, Wrench, Music, Settings, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

const categories = [
  { icon: Shield, name: "Automod", desc: "Automatic moderation tools to keep your server safe", color: "text-noxx-yellow" },
  { icon: DollarSign, name: "Economy", desc: "Server economy and currency system", color: "text-noxx-green" },
  { icon: Gamepad2, name: "Fun", desc: "Entertainment and interactive commands", color: "text-noxx-purple" },
  { icon: Gift, name: "Giveaway", desc: "Host and manage server giveaways", color: "text-noxx-pink" },
  { icon: Image, name: "Image", desc: "Image manipulation and generation", color: "text-noxx-purple" },
  { icon: Info, name: "Information", desc: "Bot and server information commands", color: "text-noxx-yellow" },
  { icon: Shield, name: "Moderation", desc: "Server moderation and management", color: "text-noxx-pink" },
  { icon: Music, name: "Music", desc: "Music playback and control", color: "text-noxx-green" },
  { icon: Settings, name: "Setup", desc: "Server configuration and setup", color: "text-noxx-yellow" },
  { icon: Wrench, name: "Tools", desc: "Utility tools and features", color: "text-noxx-purple" },
  { icon: Sparkles, name: "Utility", desc: "General utility and helper commands", color: "text-noxx-green" },
];

const Commands = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Search */}
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-noxx-purple/50 text-sm"
            />
          </div>

          {/* Categories */}
          <div className="space-y-3">
            {filtered.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover overflow-hidden"
              >
                <button
                  onClick={() => setExpanded(expanded === cat.name ? null : cat.name)}
                  className="w-full flex items-center justify-between p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-muted/50 ${cat.color}`}>
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-semibold text-foreground">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground">{cat.desc}</p>
                    </div>
                  </div>
                  {expanded === cat.name ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {expanded === cat.name && (
                  <div className="px-5 pb-5 border-t border-border/30 pt-4">
                    <p className="text-sm text-muted-foreground">Commands for this category are available via <code className="text-noxx-purple">/</code> slash commands in Discord.</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commands;
