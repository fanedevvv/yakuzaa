import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, Crown, Shield, Coins, Gavel, Music, Gamepad2, Wrench, TrendingUp, Gift, MessageSquare, Heart, ScrollText } from "lucide-react";
import Layout from "@/components/Layout";

const categories = [
  { icon: Crown, title: "Premium", desc: "Exclusive premium commands and features", color: "bg-yellow-500/20 text-yellow-400" },
  { icon: Shield, title: "Automod", desc: "Automatic moderation tools to keep your server safe", color: "bg-blue-500/20 text-blue-400" },
  { icon: Coins, title: "Economy", desc: "Server economy and currency system", color: "bg-amber-500/20 text-amber-400" },
  { icon: Gavel, title: "Moderation", desc: "Server moderation and management", color: "bg-red-500/20 text-red-400" },
  { icon: Music, title: "Music", desc: "Music playback and control", color: "bg-green-500/20 text-green-400" },
  { icon: Gamepad2, title: "Fun", desc: "Entertainment and interactive commands", color: "bg-pink-500/20 text-pink-400" },
  { icon: Wrench, title: "Utility", desc: "General utility and helper commands", color: "bg-orange-500/20 text-orange-400" },
  { icon: TrendingUp, title: "Leveling", desc: "XP and level system commands", color: "bg-cyan-500/20 text-cyan-400" },
  { icon: Gift, title: "Giveaways", desc: "Host and manage server giveaways", color: "bg-purple-500/20 text-purple-400" },
  { icon: MessageSquare, title: "Tickets", desc: "Support ticket system", color: "bg-indigo-500/20 text-indigo-400" },
  { icon: Heart, title: "Welcome", desc: "Welcome and goodbye messages", color: "bg-rose-500/20 text-rose-400" },
  { icon: ScrollText, title: "Logging", desc: "Server logging and audit system", color: "bg-teal-500/20 text-teal-400" },
];

const Commands = () => {
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const filtered = categories.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/60 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-noxx-red/50 transition-colors"
            />
          </div>

          <div className="space-y-3">
            {filtered.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenCategory(openCategory === cat.title ? null : cat.title)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/50 hover:border-noxx-red/30 transition-colors text-left"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color}`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openCategory === cat.title ? "rotate-180" : ""}`} />
                </button>
                {openCategory === cat.title && (
                  <div className="mt-1 p-4 rounded-xl bg-card/40 border border-border/30 ml-14">
                    <p className="text-sm text-muted-foreground italic">Commands will be listed here when available.</p>
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
