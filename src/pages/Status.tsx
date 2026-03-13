import { motion } from "framer-motion";
import { Search, RefreshCw, Server, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Status = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-noxx-green/30 bg-noxx-green/5 text-sm text-noxx-green">
              <span className="w-2 h-2 rounded-full bg-noxx-green animate-pulse" />
              All Systems Operational
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4" style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}>
            Bot Clusters
          </h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-8">
            Monitor your bot's clusters and shards in real time. Data is pulled live from the backend.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Server className="w-4 h-4" /> 1 Clusters
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Wifi className="w-4 h-4" /> 1 Shards
            </span>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Search + Refresh */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search clusters..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card/60 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-noxx-red/50 transition-colors text-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm text-foreground font-medium hover:bg-muted/80 transition-colors">
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
            </div>

            {/* Table */}
            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground">Cluster ID</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground">Shards</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground">Latency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 text-sm text-foreground">#0</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 text-sm text-noxx-green">
                        <span className="w-2 h-2 rounded-full bg-noxx-green" />
                        Online
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">1</td>
                    <td className="px-6 py-4 text-sm text-foreground">77ms</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
                ← Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Status;
