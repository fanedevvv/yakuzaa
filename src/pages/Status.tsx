import { motion } from "framer-motion";
import { Activity, Server, Clock, Wifi, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const Status = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-4">Bot Status</h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            Real-time status and performance metrics for Yakuza.
          </p>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 mb-6 flex items-center gap-4"
            >
              <div className="w-4 h-4 rounded-full bg-noxx-green animate-pulse" />
              <div>
                <h2 className="font-display font-bold text-foreground text-lg">All Systems Operational</h2>
                <p className="text-sm text-muted-foreground">Yakuza is running normally.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Server, label: "Servers", value: "8+" },
                { icon: Activity, label: "Uptime", value: "99.9%" },
                { icon: Wifi, label: "Ping", value: "88ms" },
                { icon: Clock, label: "Response", value: "<100ms" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 text-center"
                >
                  <stat.icon className="w-5 h-5 text-noxx-red mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Service Status</h3>
              <div className="space-y-3">
                {["Bot Core", "Music System", "Dashboard", "API", "Database"].map((service) => (
                  <div key={service} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                    <span className="text-sm text-foreground">{service}</span>
                    <span className="flex items-center gap-1.5 text-xs text-noxx-green">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Operational
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Status;
