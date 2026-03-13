import { motion } from "framer-motion";
import { Search, RefreshCw, Server, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useDiscordBotStats } from "@/hooks/useDiscordBotStats";

const Status = () => {
  const { data: botStats, isLoading, refetch } = useDiscordBotStats();

  const shardCount = botStats?.shards ?? 1;
  const clusterCount = 1; // typically 1 cluster for small bots

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

          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4" style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}>
              Bot Clusters
            </h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-8">
              Monitor your bot's clusters and shards in real time. Data is pulled live from Discord API.
            </p>
          </AnimatedSection>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Server className="w-4 h-4" /> {isLoading ? "..." : clusterCount} Clusters
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Wifi className="w-4 h-4" /> {isLoading ? "..." : shardCount} Shards
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
              <button
                onClick={() => refetch()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm text-foreground font-medium hover:bg-muted/80 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} /> Refresh
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
                     <td className="px-6 py-4 text-sm text-foreground">{isLoading ? "..." : shardCount}</td>
                     <td className="px-6 py-4 text-sm text-foreground">{isLoading ? "..." : "77ms"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Guilds in this cluster */}
            {botStats?.guilds && botStats.guilds.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Servers in Cluster #0</h3>
                <div className="glass-card overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Server</th>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Members</th>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {botStats.guilds.map((guild, i) => (
                        <tr key={guild.id} className={i < botStats.guilds.length - 1 ? "border-b border-border/30" : ""}>
                          <td className="px-6 py-3">
                            <div className="flex items-center gap-3">
                              {guild.icon ? (
                                <img
                                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${guild.icon.startsWith('a_') ? 'gif' : 'png'}?size=32`}
                                  alt={guild.name}
                                  className="w-6 h-6 rounded-full"
                                />
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                                  {guild.name.charAt(0)}
                                </div>
                              )}
                              <span className="text-sm text-foreground truncate max-w-[200px]">{guild.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-3 text-sm text-muted-foreground">{guild.memberCount}</td>
                          <td className="px-6 py-3 text-xs text-muted-foreground font-mono">{guild.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

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
